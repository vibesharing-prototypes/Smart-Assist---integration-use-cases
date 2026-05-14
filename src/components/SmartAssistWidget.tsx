import { useState } from "react";
import { Box, Button, InputBase, Stack, Typography, useTheme } from "@mui/material";

import ExpandDownIcon from "@diligentcorp/atlas-react-bundle/icons/ExpandDown";
import ExpandRightIcon from "@diligentcorp/atlas-react-bundle/icons/ExpandRight";

import { useSmartAssist } from "../context/SmartAssistContext.js";

// ─── Chip → prompt map (Figma node 4350:339768) ──────────────────────────────
// Chip labels come from the Figma design; prompts mirror the director's
// suggestion cards in tone and intent.

const TEMPLATE_CHIPS: { label: string; prompt: string }[] = [
  {
    label: "Prepare for my meeting",
    prompt:
      '"What should I review before [committee] based on last meeting\'s follow-ups?"',
  },
  {
    label: "Synthesize reports",
    prompt:
      '"Synthesize the latest [topic] reports into key insights and action items."',
  },
  {
    label: "Track a topic",
    prompt:
      '"How has [risk / metric / topic] changed across the last [X] board cycles?"',
  },
  {
    label: "Summarize decisions",
    prompt:
      '"Summarize key board decisions and highlights from the past year."',
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function SmartAssistWidget() {
  const {
    tokens: {
      core: { spacing },
      semantic: { color, radius, font, fontWeight },
    },
  } = useTheme();

  const { prompt, setPrompt, handleSend, openSmartAssist } = useSmartAssist();
  const [collapsed, setCollapsed] = useState(false);

  const aiGradient = `linear-gradient(90deg, ${color.ai.default.gradientStart.value} 0%, ${color.ai.default.gradientMiddle.value} 50%, ${color.ai.default.gradientEnd.value} 100%)`;
  const trimmed = prompt.trim();
  const canSubmit = trimmed.length > 0;

  const submit = () => {
    if (!canSubmit) return;
    // The widget is always a fresh entry point — start a new session so we
    // never append onto a conversation the user left open earlier.
    handleSend(prompt, { newSession: true });
    openSmartAssist();
  };

  return (
    <Box sx={{ position: "relative" }}>
      {/* ── Header (matches CompetitorUpdatesCard pattern) ── */}
      <Box sx={{ pt: "12px" }}>
        <Box
          component="button"
          type="button"
          aria-expanded={!collapsed}
          aria-controls="smart-assist-widget-body"
          onClick={() => setCollapsed((v) => !v)}
          sx={{
            all: "unset",
            boxSizing: "border-box",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: spacing["1_5"].value,
            width: "100%",
            pl: "4px",
            pr: "8px",
            py: "4px",
            pb: spacing["1"].value,
            borderRadius: "8px",
            position: "relative",
            transition: "background-color 0.15s ease",
            "&:hover": {
              backgroundColor: color.action.secondary.hoverFill.value,
            },
            "&:focus-visible": {
              outline: "2px solid #1C4EE4",
              outlineOffset: "2px",
            },
            "&::after": {
              content: '""',
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              height: "1px",
              background: aiGradient,
            },
          }}
        >
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 32,
              height: 32,
              color: color.type.default.value,
            }}
          >
            {collapsed ? <ExpandRightIcon size="lg" /> : <ExpandDownIcon size="lg" />}
          </Box>
          <Stack sx={{ flex: 1, gap: 0, textAlign: "left" }}>
            <Typography
              sx={{
                fontFamily: font.text.body.fontFamily.value,
                fontSize: font.text.body.fontSize.value,
                fontWeight: fontWeight.emphasis.value,
                lineHeight: font.text.body.lineHeight.value,
                letterSpacing: font.text.body.letterSpacing.value,
                color: color.type.default.value,
              }}
            >
              Smart Assist
            </Typography>
            <Typography
              sx={{
                fontFamily: font.label.xs.fontFamily.value,
                fontSize: font.label.xs.fontSize.value,
                fontWeight: font.label.xs.fontWeight.value,
                lineHeight: font.label.xs.lineHeight.value,
                letterSpacing: font.label.xs.letterSpacing.value,
                color: color.type.muted.value,
              }}
            >
              Your AI board companion
            </Typography>
          </Stack>
        </Box>
      </Box>

      {/* ── Body ── */}
      <Stack
        id="smart-assist-widget-body"
        hidden={collapsed}
        sx={{
          pt: spacing["2"].value /* 16px */,
          gap: spacing["2"].value /* 16px */,
          display: collapsed ? "none" : "flex",
        }}
      >
        {/* Announcement */}
        <Stack sx={{ gap: "8px" }}>
          <Typography
            sx={{
              fontFamily: font.title.h6Xs.fontFamily.value,
              fontSize: font.title.h6Xs.fontSize.value,
              fontWeight: fontWeight.emphasis.value,
              lineHeight: font.title.h6Xs.lineHeight.value,
              letterSpacing: font.title.h6Xs.letterSpacing.value,
              color: color.type.default.value,
            }}
          >
            Get answers from your board materials
          </Typography>
          <Typography
            sx={{
              fontFamily: font.text.md.fontFamily.value,
              fontSize: font.text.md.fontSize.value,
              fontWeight: font.text.md.fontWeight.value,
              lineHeight: font.text.md.lineHeight.value,
              letterSpacing: font.text.md.letterSpacing.value,
              color: color.type.muted.value,
            }}
          >
            Ask a question across your books, reports, and meeting history. Smart
            Assist finds the answer and cites every source.
          </Typography>
        </Stack>

        {/* Chatbox */}
        <Box
          sx={{
            backgroundColor: color.surface.default.value,
            border: `1px solid ${color.outline.active.value}`,
            borderRadius: radius.md.value,
            display: "flex",
            flexDirection: "column",
            transition: "box-shadow 0.15s ease",
            "&:focus-within": {
              boxShadow: `0 0 0 2px ${color.action.primary.default.value}`,
            },
          }}
        >
          <InputBase
            multiline
            fullWidth
            minRows={2}
            maxRows={6}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey && canSubmit) {
                e.preventDefault();
                submit();
              }
            }}
            placeholder="Ask me anything about your board materials"
            sx={{
              fontFamily: font.text.body.fontFamily.value,
              letterSpacing: font.text.body.letterSpacing.value,
              color: color.type.default.value,
              alignItems: "flex-start",
              "& .MuiInputBase-input": {
                padding: "12px 12px 0 12px",
                fontSize: "14px !important",
                lineHeight: "20px !important",
              },
              "& .MuiInputBase-input::placeholder": {
                color: color.type.muted.value,
                opacity: 1,
              },
            }}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              p: "12px",
            }}
          >
            <Box
              component="button"
              type="button"
              onClick={submit}
              disabled={!canSubmit}
              sx={{
                all: "unset",
                boxSizing: "border-box",
                cursor: canSubmit ? "pointer" : "not-allowed",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                height: "24px",
                px: "8px",
                borderRadius: "8px",
                border: `1px solid ${color.action.secondary.outline.value}`,
                backgroundColor: "transparent",
                color: color.action.secondary.onSecondary.value,
                fontFamily: font.label.sm.fontFamily.value,
                fontSize: font.label.sm.fontSize.value,
                fontWeight: fontWeight.emphasis.value,
                lineHeight: font.label.sm.lineHeight.value,
                letterSpacing: font.label.sm.letterSpacing.value,
                opacity: canSubmit ? 1 : 0.4,
                transition: "background-color 0.15s ease",
                "&:hover": canSubmit
                  ? { backgroundColor: color.selection.secondary.default.value }
                  : undefined,
                "&:focus-visible": {
                  outline: "2px solid #1C4EE4",
                  outlineOffset: "2px",
                },
              }}
            >
              Start chat
            </Box>
          </Box>
        </Box>

        {/* Templates */}
        <Stack sx={{ gap: "8px" }}>
          <Typography
            sx={{
              fontFamily: font.text.md.fontFamily.value,
              fontSize: font.text.md.fontSize.value,
              fontWeight: font.text.md.fontWeight.value,
              lineHeight: "20px",
              letterSpacing: font.text.md.letterSpacing.value,
              color: color.type.muted.value,
            }}
          >
            Or start with a template
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
            }}
          >
            {TEMPLATE_CHIPS.map((chip) => (
              <Box
                key={chip.label}
                component="button"
                type="button"
                onClick={() => setPrompt(chip.prompt.replace(/["“”]/g, ""))}
                sx={{
                  all: "unset",
                  boxSizing: "border-box",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  height: "24px",
                  px: "8px",
                  borderRadius: "9999px",
                  border: `1px solid ${color.outline.default.value}`,
                  color: color.action.secondary.onSecondary.value,
                  fontFamily: font.label.sm.fontFamily.value,
                  fontSize: font.label.sm.fontSize.value,
                  fontWeight: font.label.sm.fontWeight.value,
                  lineHeight: font.label.sm.lineHeight.value,
                  letterSpacing: font.label.sm.letterSpacing.value,
                  whiteSpace: "nowrap",
                  transition: "background-color 0.15s ease",
                  "&:hover": {
                    backgroundColor: color.selection.secondary.default.value,
                  },
                  "&:focus-visible": {
                    outline: "2px solid #1C4EE4",
                    outlineOffset: "2px",
                  },
                }}
              >
                {chip.label}
              </Box>
            ))}
          </Box>
        </Stack>

        {/* Open Smart Assist — matches the "Read more updates" button in
            CompetitorUpdatesCard (text variant, body/emphasis font, centered).
            The 16px gap above comes from the body Stack's spacing/2 gap. */}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="text"
            onClick={openSmartAssist}
            sx={{
              fontFamily: font.text.body.fontFamily.value,
              fontSize: font.text.body.fontSize.value,
              fontWeight: fontWeight.emphasis.value,
              lineHeight: font.text.body.lineHeight.value,
              letterSpacing: font.text.body.letterSpacing.value,
              color: color.type.default.value,
              textTransform: "none",
            }}
          >
            Open Smart Assist
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}
