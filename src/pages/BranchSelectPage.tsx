import { useNavigate } from "react-router";
import { Box, Stack, Typography, useTheme } from "@mui/material";

// ---------------------------------------------------------------------------
// Branch select — prototype landing gate
//
// Two branches, two prototypes:
//   • MVP          → the planned first release (currently identical to
//                    Explorations; will diverge into its own prototype later)
//   • Explorations → the current prototype (the existing app)
//
// Both branches currently open the same entry (/admin/books). The chosen
// branch is persisted to localStorage["prototypeBranch"] so the two can be
// told apart and diverged without reworking this screen.
//
// Atlas note: the design system has no teal/mint family, so the MVP chip uses
// the nearest Atlas core family (green); Explorations uses indigo (lavender).
// Accent colors are referenced as Atlas CSS variables with token-derived
// fallbacks so they survive the older locally-installed bundle.
// ---------------------------------------------------------------------------

type Branch = {
  id: "mvp" | "explorations";
  label: string;
  chipBg: string;
  chipText: string;
  body: React.ReactNode;
};

function BranchCard({ branch, onSelect }: { branch: Branch; onSelect: () => void }) {
  const {
    tokens: {
      core: { spacing },
      semantic: { color, radius },
    },
  } = useTheme();

  return (
    <Box
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect();
        }
      }}
      sx={{
        width: 320,
        backgroundColor: color.surface.default.value,
        border: `1px solid ${color.ui.divider.default.value}`,
        borderRadius: radius.xl.value,
        p: spacing["4"].value,
        display: "flex",
        flexDirection: "column",
        gap: spacing["2_5"].value,
        cursor: "pointer",
        boxShadow: "var(--lens-core-shadow-low, 0px 0px 2px 0px #0000001a, 0px 8px 16px 0px #0000001a)",
        transition: "transform 120ms ease, box-shadow 120ms ease",
        outline: "none",
        "&:hover, &:focus-visible": {
          transform: "translateY(-2px)",
          boxShadow:
            "var(--lens-core-shadow-medium, 0px 6px 20px 0px #161b2b1f, 0px 0px 2px 0px #0000001a)",
        },
      }}
    >
      <Box
        sx={{
          alignSelf: "flex-start",
          backgroundColor: branch.chipBg,
          color: branch.chipText,
          borderRadius: radius.full.value,
          px: spacing["1_5"].value,
          py: spacing["0_5"].value,
          fontWeight: 600,
          fontSize: "0.9375rem",
          lineHeight: 1.2,
        }}
      >
        {branch.label}
      </Box>

      <Typography variant="body1" sx={{ lineHeight: 1.5 }}>
        {branch.body}
      </Typography>
    </Box>
  );
}

export default function BranchSelectPage() {
  const navigate = useNavigate();
  const {
    tokens: {
      core: { spacing },
      semantic: { color },
    },
  } = useTheme();

  const selectBranch = (id: Branch["id"]) => {
    try {
      localStorage.setItem("prototypeBranch", id);
    } catch {
      /* localStorage unavailable — branch choice just isn't persisted */
    }
    // Both branches open the same prototype for now; the ?branch= param keeps
    // the active branch visible in the URL (AppShell maintains it from here).
    navigate(`/admin/books?branch=${id}`);
  };

  const branches: Branch[] = [
    {
      id: "mvp",
      label: "MVP",
      chipBg: "var(--lens-core-color-green-95, #d2ff9c)",
      chipText: "var(--lens-core-color-green-30, #2e4f00)",
      body: (
        <>
          Everything from the{" "}
          <Box
            component="a"
            href="https://diligentbrands.atlassian.net/wiki/spaces/BPROG/pages/6741623369/PRD+Smart+Assist+Chat-Style+Search+on+Boards+Cloud"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e: React.MouseEvent) => {
              // open the PRD without also triggering the card's branch select
              e.stopPropagation();
            }}
            sx={{
              color: color.action.link.default.value,
              textDecoration: "underline",
              textUnderlineOffset: "2px",
              cursor: "pointer",
            }}
          >
            PRD
          </Box>
          , planned first release.
        </>
      ),
    },
    {
      id: "explorations",
      label: "Explorations",
      chipBg: "var(--lens-core-color-indigo-95, #efefff)",
      chipText: "var(--lens-core-color-indigo-40, #1c4ee4)",
      body: <>Concepts, follow-ups, the realm of the uncertain.</>,
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: spacing["5"].value,
        px: spacing["4"].value,
        backgroundColor: color.surface.variant.value,
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 700, textAlign: "center" }}>
        Select a branch
      </Typography>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        gap={spacing["3"].value}
        alignItems="stretch"
        justifyContent="center"
      >
        {branches.map((branch) => (
          <BranchCard key={branch.id} branch={branch} onSelect={() => selectBranch(branch.id)} />
        ))}
      </Stack>
    </Box>
  );
}
