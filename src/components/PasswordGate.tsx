import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  Box,
  Button,
  Dialog,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";

// ─── PasswordGate ─────────────────────────────────────────────────────────────
// Wraps the entire app in a simple shared-secret password wall. The check is
// purely client-side — this is a prototype, not a security boundary.
//
// We store only the SHA-256 of the password in the bundle (not the plaintext)
// so a reviewer who opens DevTools and text-searches the source can't find the
// password by string match. Determined attackers can still bypass by setting
// the cookie directly or running a dictionary attack against the hash; that's
// inherent to client-only auth and not something we can fix here.
//
// Persistence: a successful unlock is stored as a 1-day cookie so reviewers
// don't have to re-enter on every tab/visit within the day. If cookies are
// disabled (Safari ITP, private mode, locked-down profiles), we fall back to
// sessionStorage so the unlock at least survives an in-tab refresh.
//
// Visuals: the Atlas Dialog sits above the live app; its backdrop applies a
// blur so the app reads as "frosted" behind the modal (matches the reference).

// SHA-256 of the shared password. To rotate: run
//   printf '%s' 'NewPassword' | shasum -a 256
// and replace this constant.
const PASSWORD_SHA256 =
  "ab38eadaeb746599f2c1ee90f8267f31f467347462764a24d71ac1843ee77fe3";
const UNLOCK_KEY = "smart-assist-director-unlocked";
const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24; // 1 day

async function sha256Hex(input: string): Promise<string> {
  const bytes = new TextEncoder().encode(input);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

// ── Cookie helpers ──
// Writing a cookie can silently fail (browser blocks it, or document.cookie
// throws in some sandboxed contexts). We verify by reading it back so we can
// decide whether to fall back to sessionStorage.
function writeUnlockCookie(): boolean {
  try {
    const secure = window.location.protocol === "https:" ? "; Secure" : "";
    document.cookie =
      `${UNLOCK_KEY}=1; Max-Age=${COOKIE_MAX_AGE_SECONDS}; Path=/; SameSite=Lax${secure}`;
    return readUnlockCookie();
  } catch {
    return false;
  }
}

function readUnlockCookie(): boolean {
  try {
    return document.cookie
      .split(";")
      .some((c) => c.trim().startsWith(`${UNLOCK_KEY}=1`));
  } catch {
    return false;
  }
}

function readUnlockSessionStorage(): boolean {
  try {
    return sessionStorage.getItem(UNLOCK_KEY) === "1";
  } catch {
    return false;
  }
}

function persistUnlock(): void {
  if (writeUnlockCookie()) return;
  // Cookie path failed — fall back to sessionStorage (per-tab only).
  try {
    sessionStorage.setItem(UNLOCK_KEY, "1");
  } catch {
    /* nothing more we can do; the tab itself stays unlocked via React state */
  }
}

interface PasswordGateProps {
  children: ReactNode;
}

export default function PasswordGate({ children }: PasswordGateProps) {
  const {
    tokens: {
      semantic: { color, radius, font, fontWeight },
    },
  } = useTheme();

  const [unlocked, setUnlocked] = useState<boolean>(
    () => readUnlockCookie() || readUnlockSessionStorage(),
  );
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Autofocus the password field after the Dialog mounts.
  useEffect(() => {
    if (unlocked) return;
    const id = window.setTimeout(() => inputRef.current?.focus(), 50);
    return () => window.clearTimeout(id);
  }, [unlocked]);

  const [checking, setChecking] = useState(false);

  const submit = async () => {
    if (checking) return;
    setChecking(true);
    try {
      const hash = await sha256Hex(value);
      if (hash === PASSWORD_SHA256) {
        persistUnlock();
        setUnlocked(true);
        return;
      }
      setError(true);
    } finally {
      setChecking(false);
    }
  };

  return (
    <>
      {children}
      <Dialog
        open={!unlocked}
        // Modal — no escape, no backdrop dismiss.
        disableEscapeKeyDown
        onClose={(_e, reason) => {
          if (reason === "backdropClick" || reason === "escapeKeyDown") return;
        }}
        slotProps={{
          backdrop: {
            sx: {
              backgroundColor: "rgba(0, 0, 0, 0.32)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
            },
          },
          paper: {
            sx: {
              width: 400,
              maxWidth: "calc(100% - 32px)",
              borderRadius: radius.lg.value,
              p: "24px",
              backgroundColor: color.surface.default.value,
            },
          },
        }}
      >
        <Stack gap="16px">
          <Stack gap="4px">
            <Typography
              sx={{
                fontFamily: font.title.h5Sm.fontFamily.value,
                fontSize: font.title.h5Sm.fontSize.value,
                fontWeight: fontWeight.emphasis.value,
                lineHeight: font.title.h5Sm.lineHeight.value,
                letterSpacing: font.title.h5Sm.letterSpacing.value,
                color: color.type.default.value,
              }}
            >
              Enter password
            </Typography>
            <Typography
              sx={{
                mt: "4px",
                fontFamily: font.text.md.fontFamily.value,
                fontSize: font.text.md.fontSize.value,
                fontWeight: font.text.md.fontWeight.value,
                lineHeight: font.text.md.lineHeight.value,
                letterSpacing: font.text.md.letterSpacing.value,
                color: color.type.muted.value,
              }}
            >
              This prototype is protected. Enter the password to continue.
            </Typography>
          </Stack>

          <Box
            component="form"
            onSubmit={(e) => {
              e.preventDefault();
              void submit();
            }}
          >
            <Stack gap="16px">
              <TextField
                inputRef={inputRef}
                type="password"
                label="Password"
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                  if (error) setError(false);
                }}
                error={error}
                helperText={error ? "Incorrect password. Try again." : undefined}
                fullWidth
                size="small"
                autoComplete="current-password"
                InputLabelProps={{ shrink: true }}
                disabled={checking}
              />
              <Button type="submit" variant="contained" fullWidth disabled={checking}>
                Continue
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Dialog>
    </>
  );
}
