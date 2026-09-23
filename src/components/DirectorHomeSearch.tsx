import { useRef, useState } from "react";
import { Box, Button, InputBase, Stack, Typography, useTheme } from "@mui/material";

import ArrowUpIcon from "@diligentcorp/atlas-react-bundle/icons/ArrowUp";

import SourcesFilterButton from "./SourcesFilterButton.js";
import SuggestionChips from "./SuggestionChips.js";
import { useSmartAssist } from "../context/SmartAssistContext.js";

// ─── Component ────────────────────────────────────────────────────────────────
// Centered home hero: the Smart Assist composer lifted out of the right rail
// and dropped into the main content area, above the Overview/Explore tabs.
// Not sticky — it scrolls with the page. Composer caps at 700px, width 100%.

export default function DirectorHomeSearch() {
  const {
    tokens: {
      semantic: { color, font, fontWeight, borderWidth },
      component: { aiChatBox },
    },
  } = useTheme();
  // The AI gradient border is reconstructed from the exact same theme tokens the
  // Atlas <AIChatBox> uses in the full-screen Smart Assist view, so the treatment
  // is identical. We rebuild it here (rather than render an <AIChatBox>) because
  // that component is driven by the shared AIChatContext, and this home composer
  // must keep its own independent draft.
  const innerRadius = `calc(${aiChatBox.container.borderRadius.value} - ${aiChatBox.container.padding.value})`;

  const { handleSend, openSmartAssist, sources, handleToggleSource } = useSmartAssist();

  // The home hero composer is its OWN entry point, independent from the Smart
  // Assist panel/overlay. It keeps a local draft so selecting a prompt template
  // in the panel (which writes the shared composer state) never leaks into this
  // widget, and vice versa.
  const [prompt, setPrompt] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);
  // The composer wrapper element, used to anchor the suggestion dropdown above
  // it. Stored in state (callback ref) so the dropdown re-renders once mounted.
  const [composerAnchor, setComposerAnchor] = useState<HTMLDivElement | null>(null);

  // Drop a starter prompt in and focus the composer so the cursor blinks and
  // the user can immediately edit the pasted template.
  const fillAndFocus = (text: string) => {
    setPrompt(text);
    requestAnimationFrame(() => {
      const el = inputRef.current;
      if (!el) return;
      el.focus();
      // Caret at the end so the user can keep typing from where the template ends.
      el.setSelectionRange(text.length, text.length);
    });
  };

  // Focus the composer without changing its draft — used when a chip opens its
  // suggestion dropdown (nothing is pasted until the user picks a prompt).
  const focusComposer = () => {
    requestAnimationFrame(() => {
      const el = inputRef.current;
      if (!el) return;
      el.focus();
      el.setSelectionRange(el.value.length, el.value.length);
    });
  };

  const canSubmit = prompt.trim().length > 0;

  const submit = () => {
    if (!canSubmit) return;
    // Always a fresh entry point — start a new session regardless of what was
    // open before.
    handleSend(prompt, { newSession: true });
    setPrompt("");
    openSmartAssist();
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        // Section caps at 800px and centers within the Overview left column.
        alignItems: "center",
      }}
    >
      {/* Base gap is 12px (the spacing the chips sit below the composer). The
          heading→composer and chips→Open-Smart-Assist gaps are bumped back to
          16px with a compensating +4px top margin on those two items. */}
      <Stack sx={{ width: "100%", maxWidth: "800px", gap: "12px" }}>
        {/* Heading + subtitle */}
        <Stack sx={{ gap: "4px", textAlign: "center" }}>
          <Typography
            component="h2"
            sx={{
              // Atlas H4 (title.h4Md = 18px / 28px), weight 600. fontSize pinned
              // to 18px so a deploy-time token shift can't resize it.
              fontFamily: font.title.h4Md.fontFamily.value,
              fontSize: "18px",
              fontWeight: fontWeight.emphasis.value,
              lineHeight: font.title.h4Md.lineHeight.value,
              letterSpacing: font.title.h4Md.letterSpacing.value,
              color: color.type.default.value,
            }}
          >
            What would you like to know?
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
            Select a prompt to get started, or ask your own question.
          </Typography>
        </Stack>

        {/* Composer — reconstructs the Atlas AIChatBox container from the
            full-screen view: a 1px border-color frame whose top half carries
            the AI gradient border. The border animates down to the bottom on
            focus/hover, exactly like the full-screen composer. */}
        <Box
          ref={setComposerAnchor}
          sx={{
            position: "relative",
            width: "100%",
            // +4px so heading→composer stays 16px against the 12px Stack gap.
            mt: "4px",
            // Container caps at 88px tall — the input area scrolls inside.
            maxHeight: "88px",
            display: "flex",
            flexDirection: "column",
            p: aiChatBox.container.padding.value,
            borderRadius: aiChatBox.container.borderRadius.value,
            backgroundColor: aiChatBox.container.default.borderColor.value,
            transition: "background-color 0.3s ease-in-out",
            "&:hover": {
              backgroundColor: aiChatBox.container.hover.borderColor.value,
            },
            "&:has(textarea:focus)": {
              backgroundColor: aiChatBox.container.active.borderColor.value,
              outlineColor: color.ui.focusRing.value,
              outlineWidth: borderWidth.focusWidth.value,
              outlineOffset: borderWidth.focusOffset.value,
              outlineStyle: "solid",
            },
            // On focus/hover the gradient border slides to the bottom.
            "&:focus-within, &:hover": {
              "& .home-ai-gradient-border": { top: "50%", bottom: 0 },
            },
          }}
        >
          {/* AI gradient border — fills the top half; the opaque content
              wrapper clips it to a 1px frame along the top + upper sides. */}
          <Box
            role="presentation"
            className="home-ai-gradient-border"
            sx={{
              pointerEvents: "none",
              position: "absolute",
              width: "100%",
              top: 0,
              bottom: "50%",
              borderRadius: innerRadius,
              transition: "top 0.3s ease-in-out, bottom 0.3s ease-in-out",
              willChange: "top, bottom",
              background: `linear-gradient(to left, transparent 0%, ${aiChatBox.borderGradient.stop1.value} 35%, ${aiChatBox.borderGradient.stop2.value} 50%, ${aiChatBox.borderGradient.stop3.value} 65%, transparent 100%)`,
            }}
          />
          {/* Content wrapper — opaque, clips the gradient border to the frame.
              Fills the 88px-capped container; the input region below takes the
              remaining height and scrolls, keeping the toolbar always visible. */}
          <Box
            sx={{
              width: "100%",
              flex: 1,
              minHeight: 0,
              position: "relative",
              backgroundColor: aiChatBox.container.backgroundColor.value,
              borderRadius: innerRadius,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
          >
          <Box sx={{ flex: 1, minHeight: 0, overflowY: "auto" }}>
          <InputBase
            multiline
            fullWidth
            minRows={1}
            maxRows={6}
            inputRef={inputRef}
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
                // 10px top (not 12) so a single line fits within the 88px cap
                // once the 56px toolbar is accounted for, without clipping.
                padding: "10px 12px 0 12px",
                fontSize: "14px !important",
                lineHeight: "20px !important",
              },
              "& .MuiInputBase-input::placeholder": {
                color: color.type.muted.value,
                opacity: 1,
              },
            }}
          />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "8px",
              p: "12px",
              flexShrink: 0,
            }}
          >
            <SourcesFilterButton
              sources={sources}
              onToggle={handleToggleSource}
              allLabel="All sources"
            />
            <Box
              component="button"
              type="button"
              aria-label="Start chat"
              onClick={submit}
              disabled={!canSubmit}
              sx={{
                all: "unset",
                boxSizing: "border-box",
                // Always pin the submit button to the right, even when no source
                // selector is rendered (MVP outside a book).
                ml: "auto",
                cursor: canSubmit ? "pointer" : "not-allowed",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                height: "32px",
                width: "32px",
                flexShrink: 0,
                borderRadius: "12px",
                border: `1px solid ${color.action.secondary.outline.value}`,
                backgroundColor: "transparent",
                color: color.action.secondary.onSecondary.value,
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
              <ArrowUpIcon size="md" />
            </Box>
          </Box>
          </Box>
        </Box>

        {/* Suggestion chips — small Atlas outlined chips, centered below the
            composer. Clicking drops a starter prompt into the input. Shared with
            the full-screen and panel Smart Assist views (which use large). */}
        <SuggestionChips
          size="small"
          align="center"
          audience="director"
          maxVisible={3}
          promptSet="default"
          anchorEl={composerAnchor}
          placement="bottom"
          showIcon={false}
          onSelectPrompt={fillAndFocus}
          onChipOpen={focusComposer}
        />

        {/* Open Smart Assist — small tertiary Atlas button (text variant), no
            icon. The +4px top margin keeps a 16px gap above it against the 12px
            Stack gap. */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: "4px" }}>
          <Button variant="text" size="small" onClick={openSmartAssist}>
            Ask GovernAI
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}
