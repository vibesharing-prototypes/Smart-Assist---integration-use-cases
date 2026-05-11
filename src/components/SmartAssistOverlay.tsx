import { Fragment, useEffect, useRef, useState } from "react";
import smartAssistAvatarUrl from "../assets/smart-assist-avatar.svg";
import {
  Box,
  Button,
  IconButton,
  Popover,
  Stack,
  Switch,
  Typography,
  useTheme,
} from "@mui/material";

import {
  AIChatBox,
  AIChatContent,
  AIChatAIMessage,
  AIChatUserMessage,
  AIChatMessageHeader,
  AIChatMessageAvatar,
  AIChatMessageTextBlock,
  AIChatMessageFooter,
  AIChatThinkingIndicator,
  AIChatTimestamp,
  AIDisclaimer,
  useAIChatContext,
} from "@diligentcorp/atlas-react-bundle";

import AiSparkleIcon from "@diligentcorp/atlas-react-bundle/icons/AiSparkle";
import AiSummaryIcon from "@diligentcorp/atlas-react-bundle/icons/AiSummary";
import AiInsightsIcon from "@diligentcorp/atlas-react-bundle/icons/AiInsights";
import AiLegalScanIcon from "@diligentcorp/atlas-react-bundle/icons/AiLegalScan";
import AddCircleIcon from "@diligentcorp/atlas-react-bundle/icons/AddCircle";
import ConfigureIcon from "@diligentcorp/atlas-react-bundle/icons/Configure";
import CloseIcon from "@diligentcorp/atlas-react-bundle/icons/Close";
import CollapseSideNavIcon from "@diligentcorp/atlas-react-bundle/icons/CollapseSideNav";
import ExpandSideNavIcon from "@diligentcorp/atlas-react-bundle/icons/ExpandSideNav";
import ExpandRightIcon from "@diligentcorp/atlas-react-bundle/icons/ExpandRight";
import DockToRightIcon from "@diligentcorp/atlas-react-bundle/icons/DockToRight";
import MoreIcon from "@diligentcorp/atlas-react-bundle/icons/More";
import ReloadIcon from "@diligentcorp/atlas-react-bundle/icons/Reload";
import InfoIcon from "@diligentcorp/atlas-react-bundle/icons/Info";
import { InsightsEmptyStateIllustration, SmartSummaryIcon, SmartPrepIcon, SmartRiskScannerIcon } from "./InsightIcons.js";
import { InsightSummaryView, InsightPrepView, InsightRiskView } from "./InsightDetailViews.js";
import InsightTOC from "./InsightTOC.js";

import {
  smartSummaryText,
} from "../data/mockData.js";

import {
  type ChatThread,
  ONBOARDING_PROMPT,
} from "../data/hybrid-search.constants.js";

import AIMoreMenu from "./AIMoreMenu.js";
import ChatThreadItem from "./ChatThreadItem.js";
import PersonalizationDialog from "./PersonalizationDialog.js";
import RichAIMessageContent, { parseCiteText } from "./RichAIMessageContent.js";
import SourcesBlock from "./SourcesBlock.js";
import CitationPreviewPanel from "./CitationPreviewPanel.js";
import { type Source } from "./SourcesFilterButton.js";
import { useSmartAssist } from "../context/SmartAssistContext.js";
import { useCitationPreview } from "../context/CitationPreviewContext.js";

// ─── Figma-sourced constants ───────────────────────────────────────────────────

const LEFT_PANEL_WIDTH = 336;
const HEADER_BORDER = "rgb(240,240,243)";
const AI_GRADIENT = "linear-gradient(90deg, #be0c1e 0%, #ab48da 50%, #4069fe 100%)";
const AI_PURPLE = "#ab48da";
const PANEL_DIVIDER = "rgb(226,226,229)";
const TAB_ACTIVE_BORDER = "rgb(118,119,122)";
const ONBOARDING_BG = "rgba(228,243,255,1)";
const TEXT_DEFAULT = "rgb(36,38,40)";
const CHAT_BG = "linear-gradient(135deg, #f9f9fc 31%, #fcfcff 100%)";

// ─── Sources filter ───────────────────────────────────────────────────────────

function SourcesFilterButton({
  sources,
  onToggle,
}: {
  sources: Source[];
  onToggle: (id: string) => void;
}) {
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);
  const allEnabled = sources.every((s) => s.enabled);
  const enabledCount = sources.filter((s) => s.enabled).length;
  const ROW_DIVIDER = "rgba(218,218,218,1)";

  return (
    <>
      <Button
        type="button"
        variant="text"
        size="small"
        startIcon={<ConfigureIcon />}
        onClick={(e) => setAnchor(e.currentTarget as HTMLElement)}
      >
        {allEnabled ? "All sources" : "Selected sources"}
      </Button>

      <Popover
        open={Boolean(anchor)}
        anchorEl={anchor}
        onClose={() => setAnchor(null)}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        transformOrigin={{ vertical: "bottom", horizontal: "left" }}
        PaperProps={{
          sx: {
            mb: "6px",
            borderRadius: "8px",
            boxShadow: "0 8px 16px rgba(0,0,0,0.1), 0 0 2px rgba(0,0,0,0.1)",
            width: "316px",
            overflow: "hidden",
            p: 0,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            px: "12px",
            height: "43px",
            borderBottom: `1px solid ${ROW_DIVIDER}`,
          }}
        >
          <Typography sx={{ fontSize: "12px", fontWeight: 600, color: "rgba(40,46,55,1)" }}>
            Search within these sources
          </Typography>
        </Box>

        {sources.map((source) => {
          const isLastEnabled = source.enabled && enabledCount === 1;
          return (
            <Box
              key={source.id}
              onClick={(e) => {
                e.stopPropagation();
                if (!isLastEnabled) onToggle(source.id);
              }}
              sx={{
                display: "flex",
                alignItems: "center",
                p: "12px",
                gap: "12px",
                cursor: isLastEnabled ? "default" : "pointer",
                "&:hover": { backgroundColor: isLastEnabled ? "transparent" : "rgba(0,0,0,0.03)" },
              }}
            >
              <Switch
                checked={source.enabled}
                disabled={isLastEnabled}
                size="small"
                onChange={(e) => {
                  e.stopPropagation();
                  onToggle(source.id);
                }}
                onClick={(e) => e.stopPropagation()}
                sx={{
                  flexShrink: 0,
                  "& .MuiSwitch-switchBase.Mui-checked": { color: "#fff" },
                  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                    backgroundColor: "rgba(36,38,40,1)",
                    opacity: 1,
                  },
                  "& .MuiSwitch-track": { backgroundColor: "rgba(36,38,40,0.25)", opacity: 1 },
                  "& .MuiSwitch-switchBase.Mui-disabled": { opacity: 1 },
                  "& .MuiSwitch-switchBase.Mui-disabled + .MuiSwitch-track": {
                    backgroundColor: "rgba(36,38,40,1)",
                    opacity: 0.4,
                  },
                }}
              />
              <Typography
                sx={{
                  fontSize: "14px",
                  color: TEXT_DEFAULT,
                  opacity: isLastEnabled ? 0.4 : 1,
                  userSelect: "none",
                  flex: 1,
                }}
              >
                {source.label}
              </Typography>
            </Box>
          );
        })}
      </Popover>
    </>
  );
}

const overlaySuggestions = [
  { category: "Find past materials", prompt: '"Find materials related to [topic] from last year."' },
  { category: "Trace decisions", prompt: '"When was [initiative / policy] formally approved?"' },
  { category: "Answer questions", prompt: '"Has the board previously discussed [topic]?"' },
  { category: "Onboard director", prompt: '"Find induction materials and recent board context."' },
];

// ─── Left panel ───────────────────────────────────────────────────────────────

function LeftPanel({
  activeTab,
  onTabChange,
  threads,
  currentThreadId,
  onLoadThread,
  onNewChat,
  showInsights = false,
  selectedInsight,
  onInsightSelect,
  detailScrollRef,
}: {
  activeTab: number;
  onTabChange: (v: number) => void;
  threads: ChatThread[];
  currentThreadId: string | null;
  onLoadThread: (thread: ChatThread) => void;
  onNewChat: () => void;
  showInsights?: boolean;
  selectedInsight: "summary" | "prep" | "risk" | null;
  onInsightSelect: (id: "summary" | "prep" | "risk" | null) => void;
  detailScrollRef?: React.RefObject<HTMLElement | null>;
}) {
  const { tokens: { semantic: { color } } } = useTheme();
  return (
    <Box
      sx={{
        width: LEFT_PANEL_WIDTH,
        flexShrink: 0,
        borderRight: `1px solid ${PANEL_DIVIDER}`,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        backgroundColor: "#fff",
      }}
    >
      {showInsights && (
        <Box sx={{ pt: "20px", px: "20px", flexShrink: 0 }}>
          <Stack direction="row" gap="8px">
            {(["Smart Assist", "Insights"] as const).map((label, i) => {
              const isActive = activeTab === i;
              return (
                <Box
                  key={label}
                  component="button"
                  onClick={() => onTabChange(i)}
                  sx={{
                    all: "unset",
                    position: "relative",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    overflow: "hidden",
                    px: "12px",
                    pt: "4px",
                    pb: "4px",
                    height: "24px",
                    boxSizing: "border-box",
                    borderRadius: isActive ? "12px" : "8px",
                    border: isActive ? `1px solid ${TAB_ACTIVE_BORDER}` : "1px solid transparent",
                    fontSize: "12px",
                    fontWeight: 600,
                    color: TEXT_DEFAULT,
                    whiteSpace: "nowrap",
                    transition: "all 0.15s ease",
                    "&:hover": { backgroundColor: "rgba(0,0,0,0.04)" },
                  }}
                >
                  {label}
                </Box>
              );
            })}
          </Stack>
        </Box>
      )}

      {activeTab === 1 ? (
        selectedInsight === null ? (
          <InsightsList onSelect={onInsightSelect} />
        ) : (
          <InsightTOC selectedInsight={selectedInsight} onBack={() => onInsightSelect(null)} scrollContainerRef={detailScrollRef} />
        )
      ) : (
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            pt: "24px",
            pl: "20px",
          }}
        >
          <Button
            variant="text"
            size="small"
            startIcon={<AddCircleIcon size="md" />}
            onClick={onNewChat}
            sx={{ height: "24px", fontSize: "12px", "& .MuiButton-startIcon": { mr: "4px" }, alignSelf: "flex-start" }}
          >
            New chat
          </Button>
          <Typography sx={{ mt: "24px", px: "12px", fontSize: "12px", fontWeight: 600, lineHeight: "16px", color: color.type.muted.value }}>
            All chats
          </Typography>

          <Box sx={{ flex: 1, overflowY: "auto", pr: "8px", mt: "8px" }}>
            <Stack>
              {threads.map((thread) => (
                <ChatThreadItem
                  key={thread.id}
                  thread={thread}
                  variant="overlay"
                  isActive={currentThreadId === thread.id}
                  onLoadThread={onLoadThread}
                />
              ))}
            </Stack>
          </Box>

          <Box
            sx={{
              borderTop: `1px solid ${PANEL_DIVIDER}`,
              ml: "-20px",
              height: "68px",
              boxSizing: "border-box",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: "24px",
              flexShrink: 0,
              backgroundColor: "#fff",
            }}
          >
            <Box
              component="button"
              sx={{
                all: "unset",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                px: "12px",
                py: "4px",
                borderRadius: "8px",
                "&:hover": { backgroundColor: "rgba(0,0,0,0.04)" },
              }}
            >
              <Typography sx={{ fontSize: "14px", fontWeight: 600, color: TEXT_DEFAULT }}>
                Delete all chats
              </Typography>
            </Box>
          </Box>
        </Box>
      )}

      {activeTab === 1 && (
        <Box
          sx={({ tokens: { semantic: { color } } }) => ({
            flexShrink: 0,
            borderTop: `1px solid ${PANEL_DIVIDER}`,
            height: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: "16px",
            backgroundColor: color.surface.default.value,
          })}
        >
          <Box
            component="button"
            sx={({ tokens: { semantic: { color } } }) => ({
              all: "unset",
              boxSizing: "border-box",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              px: "12px",
              height: "40px",
              borderRadius: "12px",
              backgroundColor: color.surface.default.value,
              outline: `1px solid ${color.action.aiPrimary.defaultGradientStart.value}`,
              outlineOffset: "-1px",
              transition: "background-color 0.15s ease",
              "&:hover": { backgroundColor: color.surface.variant.value },
            })}
          >
            <Box sx={{ width: 24, height: 24, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <AiSparkleIcon size="lg" />
            </Box>
            <Box sx={{ height: 24, px: "4px", display: "flex", alignItems: "center" }}>
              <Typography sx={{ fontSize: "16px", fontWeight: 600, lineHeight: "24px", letterSpacing: "0.2px", color: "#242628" }}>
                Regenerate
              </Typography>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}

// ─── Prompt suggestion cards ──────────────────────────────────────────────────

function OverlaySuggestionCards({ onSelect }: { onSelect: (prompt: string) => void }) {
  const { tokens: { semantic: { color, radius } } } = useTheme();

  return (
    <Box sx={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px", width: "100%" }}>
      {overlaySuggestions.map((card) => (
        <Box
          key={card.category}
          component="button"
          onClick={() => onSelect(card.prompt)}
          sx={{
            all: "unset",
            boxSizing: "border-box",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            p: "14px",
            borderRadius: radius.lg.value,
            border: `1px solid ${PANEL_DIVIDER}`,
            backgroundColor: color.surface.default.value,
            textAlign: "left",
            transition: "all 0.15s ease",
            "&:hover": { backgroundColor: color.surface.variant.value },
          }}
        >
          <Box
            sx={{
              display: "inline-flex",
              alignSelf: "flex-start",
              alignItems: "center",
              height: "24px",
              px: "10px",
              borderRadius: "9999px",
              backgroundColor: color.accent.blue.background.value,
            }}
          >
            <Typography
              sx={{ fontSize: "12px", fontWeight: 600, color: "#004c6c", lineHeight: "16px", letterSpacing: "0.3px", wordWrap: "break-word" }}
            >
              {card.category}
            </Typography>
          </Box>
          <Typography sx={{ fontSize: "12px", fontWeight: 400, color: "#5D5E61", lineHeight: "16px", letterSpacing: "0.3px", wordWrap: "break-word" }}>
            {card.prompt}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

// ─── Insights panel ───────────────────────────────────────────────────────────

const INSIGHT_ITEMS = [
  { id: "summary" as const, Icon: SmartSummaryIcon, label: "Smart Summary", desc: "Create and read an accurate executive summary" },
  { id: "prep" as const, Icon: SmartPrepIcon, label: "Smart Prep", desc: "Prepare smarter with suggested discussion topics" },
  { id: "risk" as const, Icon: SmartRiskScannerIcon, label: "Smart Risk Scanner", desc: "Identify potential business risks" },
];

function InsightsList({ onSelect }: { onSelect: (id: "summary" | "prep" | "risk") => void }) {
  const { tokens: { semantic: { color } } } = useTheme();
  return (
    <Box sx={{ flex: 1, overflowY: "auto", px: "24px", pt: "24px", pb: "16px", backgroundColor: "#fff" }}>
      <Typography sx={{ fontSize: "14px", fontWeight: 600, lineHeight: "20px", letterSpacing: "0.2px", color: TEXT_DEFAULT, mb: "16px" }}>
        AI tools
      </Typography>
      <Stack gap="12px">
        {INSIGHT_ITEMS.map(({ id, Icon, label, desc }) => (
          <Box
            key={id}
            component="button"
            onClick={() => onSelect(id)}
            sx={{
              all: "unset",
              boxSizing: "border-box",
              cursor: "pointer",
              display: "flex",
              alignItems: "flex-start",
              gap: "12px",
              p: "16px",
              border: `1px solid ${PANEL_DIVIDER}`,
              borderRadius: "12px",
              backgroundColor: color.surface.default.value,
              width: "100%",
              transition: "background-color 0.15s ease",
              "&:hover": { backgroundColor: color.surface.variant.value },
            }}
          >
            <Box sx={{ flexShrink: 0, width: 24, height: 24, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon size={24} />
            </Box>
            <Stack gap="4px" sx={{ flex: 1, minWidth: 0 }}>
              <Typography sx={{ fontSize: "14px", fontWeight: 600, lineHeight: "20px", letterSpacing: "0.2px", color: TEXT_DEFAULT }}>
                {label}
              </Typography>
              <Typography sx={{ alignSelf: "stretch", fontSize: "12px", fontWeight: 400, lineHeight: "16px", letterSpacing: "0.3px", color: color.type.muted.value }}>
                {desc}
              </Typography>
            </Stack>
            <Box sx={{ flexShrink: 0, p: "4px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", color: "#242628" }}>
              <ExpandRightIcon size="lg" />
            </Box>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}

function InsightsEmptyState() {
  return (
    <Box sx={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", p: "24px" }}>
      <Box
        sx={{
          flex: 1,
          alignSelf: "stretch",
          backgroundColor: "#fff",
          border: `1px solid ${PANEL_DIVIDER}`,
          borderRadius: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: "24px",
        }}
      >
        <Stack alignItems="center" gap="20px" sx={{ width: "688px", maxWidth: "100%" }}>
          <InsightsEmptyStateIllustration />
          <Typography sx={{ width: "100%", textAlign: "center", color: "#282E37", fontSize: "26px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, lineHeight: "34px" }}>
            Content appears here once you select an AI tool
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}

function InsightDetail({
  view,
  scrollRef,
}: {
  view: "summary" | "prep" | "risk";
  bookTitle?: string;
  scrollRef?: React.Ref<HTMLDivElement>;
}) {
  return (
    <Box ref={scrollRef} sx={{ flex: 1, overflowY: "auto", px: "48px", py: "32px" }}>
      <Box sx={{ maxWidth: "720px", mx: "auto" }}>
        {view === "summary" && <InsightSummaryView />}
        {view === "prep" && <InsightPrepView />}
        {view === "risk" && <InsightRiskView />}
      </Box>
    </Box>
  );
}

// ─── Props ────────────────────────────────────────────────────────────────────

interface SmartAssistOverlayProps {
  open: boolean;
  onClose: () => void;
  onCollapse?: () => void;
  bookTitle?: string;
  showInsights?: boolean;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function SmartAssistOverlay({ open, onClose, onCollapse, bookTitle, showInsights = false }: SmartAssistOverlayProps) {
  // Shared conversation state from context
  const {
    messages,
    sources,
    isGenerating,
    handleSend,
    handleToggleSource,
    resetChat,
    loadThread,
    threads,
    chatTimestamp,
    threadSplitIndex,
    currentThreadId,
    overlayLeftPanelOpen,
    setOverlayLeftPanelOpen,
    activeTab,
    setActiveTab,
    selectedInsight,
    setSelectedInsight,
  } = useSmartAssist();

  // setPrompt is still needed for suggestion card clicks (populate AIChatBox input)
  const { setPrompt } = useAIChatContext();

  const { previewSource, closeCitation } = useCitationPreview();

  // UI-only local state
  const [moreMenuAnchor, setMoreMenuAnchor] = useState<HTMLElement | null>(null);
  const [personalizationOpen, setPersonalizationOpen] = useState(false);

  const handleTabChange = (v: number) => {
    setActiveTab(v);
    if (v !== 1) setSelectedInsight(null);
  };

  // Mutual exclusion: citation preview and history panel can't both be open
  useEffect(() => {
    if (previewSource) {
      setOverlayLeftPanelOpen(false);
    }
  }, [previewSource]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const insightDetailScrollRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when a new message arrives
  useEffect(() => {
    if (messages.length > 0) {
      setTimeout(() => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }), 50);
    }
  }, [messages.length]);

  return (
    <>
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1300,
        background: CHAT_BG,
        overflow: "hidden",
        opacity: open ? 1 : 0,
        visibility: open ? "visible" : "hidden",
        transition: open ? "none" : "opacity 0.15s ease, visibility 0s ease 0.15s",
        pointerEvents: open ? "auto" : "none",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>

        {/* ── Header ── */}
        <Stack
          direction="row"
          alignItems="center"
          gap="8px"
          sx={({ tokens: { semantic: { color } } }) => ({
            flexShrink: 0,
            px: "24px",
            pt: "24px",
            pb: "12px",
            backgroundColor: "#fff",
            borderBottom: `1px solid ${color.surface.variant.value}`,
          })}
        >
          <IconButton
            size="small"
            onClick={() => {
              const opening = !overlayLeftPanelOpen;
              if (opening) closeCitation();
              setOverlayLeftPanelOpen(opening);
            }}
            title="Toggle side panel"
            sx={{ width: 40, height: 40, borderRadius: "12px", padding: "8px", flexShrink: 0 }}
          >
            {overlayLeftPanelOpen ? <CollapseSideNavIcon size="md" /> : <ExpandSideNavIcon size="md" />}
          </IconButton>

          <Typography sx={{ flex: 1, fontSize: "20px", fontWeight: 600, color: TEXT_DEFAULT, lineHeight: "24px" }}>
            {showInsights ? "GovernAI" : "Smart Assist"}
          </Typography>

          <Stack direction="row" gap="16px" alignItems="center">
            {onCollapse && (
              <IconButton
                size="small"
                onClick={onCollapse}
                title="Dock to right panel"
                sx={{ width: 40, height: 40, borderRadius: "12px", padding: "8px" }}
              >
                <DockToRightIcon size="md" />
              </IconButton>
            )}
            <IconButton size="small" sx={{ width: 40, height: 40, borderRadius: "12px", padding: "8px" }} title="More options" onClick={(e) => setMoreMenuAnchor(e.currentTarget)}>
              <MoreIcon size="md" />
            </IconButton>
            <IconButton
              size="small"
              onClick={onClose}
              title="Close"
              sx={{ width: 40, height: 40, borderRadius: "12px", padding: "8px" }}
            >
              <CloseIcon size="md" />
            </IconButton>
          </Stack>
        </Stack>

        {/* ── Body ── */}
        <Box sx={{ display: "flex", flex: 1, overflow: "hidden" }}>

          {overlayLeftPanelOpen && (
            <LeftPanel
              activeTab={activeTab}
              onTabChange={handleTabChange}
              threads={threads}
              currentThreadId={currentThreadId}
              onLoadThread={(thread) => loadThread(thread.messages, thread.id)}
              onNewChat={resetChat}
              showInsights={showInsights}
              selectedInsight={selectedInsight}
              onInsightSelect={setSelectedInsight}
              detailScrollRef={insightDetailScrollRef}
            />
          )}

          <Box sx={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", background: CHAT_BG, minWidth: 0, position: "relative" }}>

            {/* ── Smart Assist tab ── */}
            {activeTab === 0 && (
              <>
                {messages.length === 0 ? (

                  <><Box sx={{ flex: 1, overflowY: "auto", display: "flex", alignItems: "center" }}>
                    <Stack
                      sx={{
                        alignItems: "center",
                        px: "48px",
                        py: "48px",
                        width: "100%",
                        gap: "48px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "1.625rem",
                          fontWeight: 700,
                          lineHeight: "2.125rem",
                          letterSpacing: 0,
                          color: TEXT_DEFAULT,
                          textAlign: "center",
                        }}
                      >
                        Hi, how can I assist you?
                      </Typography>

                      <Box sx={{ width: "100%", maxWidth: "980px" }}>
                        <AIChatBox
                          onSubmit={handleSend}
                          onStop={() => {}}
                          isUploadAvailable={false}
                          leadingActions={<SourcesFilterButton sources={sources} onToggle={handleToggleSource} />}
                          sx={{ "& .MuiInputBase-input": { padding: "16px 24px 12px" } }}
                          slotProps={{
                            textField: {
                              placeholder: "Ask me anything about your board materials",
                            },
                          }}
                        />
                      </Box>

                      <Box sx={{ width: "100%", maxWidth: "980px" }}>
                        <Stack gap="4px" sx={{ mb: "24px" }}>
                          <Typography sx={{ fontSize: "18px", fontWeight: 600, color: TEXT_DEFAULT }}>
                            Ideas to get you started
                          </Typography>
                          <Typography sx={{ fontSize: "13px", color: "rgba(36,38,40,0.6)", lineHeight: "20px" }}>
                            Click on one of the suggested prompt templates to populate the search field
                          </Typography>
                        </Stack>

                        <OverlaySuggestionCards onSelect={(p) => setPrompt(p)} />

                        <Box
                          component="button"
                          onClick={() => setPrompt(ONBOARDING_PROMPT)}
                          sx={({ tokens: { semantic: { color } } }) => ({
                            all: "unset",
                            boxSizing: "border-box",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "8px",
                            mt: "16px",
                            px: "16px",
                            height: "56px",
                            borderRadius: "12px",
                            backgroundColor: color.accent.blue.background.value,
                            border: `1px solid ${PANEL_DIVIDER}`,
                            width: "fit-content",
                            mx: "auto",
                            transition: "background-color 0.15s ease",
                            "&:hover": { filter: "brightness(0.96)" },
                          })}
                        >
                          <Box
                            sx={{
                              width: 20,
                              height: 20,
                              borderRadius: "50%",
                              border: "1.5px solid #004c6c",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                            }}
                          >
                            <Typography sx={{ fontSize: "11px", fontWeight: 700, color: "#004c6c", lineHeight: 1 }}>?</Typography>
                          </Box>
                          <Typography sx={{ fontSize: "12px", fontWeight: 600, color: "#004c6c", lineHeight: "16px", letterSpacing: "0.3px", whiteSpace: "nowrap" }}>
                            New to Smart Assist? Ask me what I can help you with.
                          </Typography>
                        </Box>
                      </Box>
                    </Stack>
                  </Box>

                  <Button
                    variant="text"
                    size="small"
                    startIcon={<InfoIcon size="md" />}
                    sx={{
                      position: "absolute",
                      bottom: "24px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      color: "var(--Color-Action-Secondary-On-secondary, #242628)",
                      fontSize: "14px",
                      fontWeight: 600,
                      lineHeight: "20px",
                      letterSpacing: "0.14px",
                      px: "12px",
                      py: "4px",
                      borderRadius: "8px",
                      textTransform: "none",
                      whiteSpace: "nowrap",
                      "& .MuiButton-startIcon": { mr: "4px", color: "inherit" },
                      "&:hover": { backgroundColor: "rgba(36,38,40,0.06)" },
                    }}
                  >
                    Learn about data privacy
                  </Button>
                  </>

                ) : (

                  <>
                    <Box sx={{ flex: 1, overflowY: "auto", px: "48px", py: "32px" }}>
                      <Box sx={{ width: "100%", maxWidth: "980px", mx: "auto", "& .AtlasAIChatUserMessage .MuiTypography-body1": { fontSize: "14px !important" }, "& li": { fontSize: "14px" } }}>
                        <AIChatContent>
                          {chatTimestamp && threadSplitIndex === null && <AIChatTimestamp time={chatTimestamp} />}
                          {messages.map((msg, index) => (
                            <Fragment key={msg.id}>
                              {chatTimestamp && threadSplitIndex !== null && threadSplitIndex >= 0 && index === threadSplitIndex && (
                                <AIChatTimestamp time={chatTimestamp} />
                              )}
                              {msg.role === "user" ? (
                                <AIChatUserMessage
                                  alignment="end"
                                  message={msg.content}
                                  header={
                                    <AIChatMessageHeader
                                      name="Jane Doe"
                                      time={msg.timestamp}
                                      avatar={<AIChatMessageAvatar uniqueId="jane-doe" initials="JD" />}
                                      slotProps={{ root: { sx: { flexDirection: "row-reverse" } } }}
                                    />
                                  }
                                />
                              ) : (
                                <AIChatAIMessage
                                  header={
                                    <AIChatMessageHeader
                                      name="Smart Assist"
                                      time={msg.timestamp}
                                      avatar={<AIChatMessageAvatar uniqueId="smart-assist" imageUrl={smartAssistAvatarUrl} avatarProps={{ sx: { borderRadius: "8px", backgroundColor: "transparent", border: "none", boxShadow: "none" } }} />}
                                    />
                                  }
                                  footer={
                                    <AIChatMessageFooter
                                      leadingActions={
                                        <Button variant="text" size="small" startIcon={<ReloadIcon size="md" />}>
                                          Regenerate
                                        </Button>
                                      }
                                    />
                                  }
                                >
                                  {msg.richContent
                                    ? <RichAIMessageContent blocks={msg.richContent} sources={msg.sources} messageId={msg.id} />
                                    : /\[\d+\]/.test(msg.content) && msg.sources
                                      ? <RichAIMessageContent blocks={[{ type: "p", spans: parseCiteText(msg.content) }]} sources={msg.sources} messageId={msg.id} />
                                      : <AIChatMessageTextBlock>{msg.content}</AIChatMessageTextBlock>
                                  }
                                  {msg.sources && msg.sources.length > 0 && (
                                    <SourcesBlock sources={msg.sources} messageId={msg.id} />
                                  )}
                                </AIChatAIMessage>
                              )}
                            </Fragment>
                          ))}
                          {isGenerating && (
                            <AIChatAIMessage
                              header={
                                <AIChatMessageHeader
                                  name="Smart Assist"
                                  time=""
                                  avatar={<AIChatMessageAvatar uniqueId="smart-assist-thinking" imageUrl={smartAssistAvatarUrl} avatarProps={{ sx: { borderRadius: "8px", backgroundColor: "transparent", border: "none", boxShadow: "none" } }} />}
                                />
                              }
                            >
                              <AIChatThinkingIndicator label="Thinking" />
                            </AIChatAIMessage>
                          )}
                          <div ref={messagesEndRef} />
                        </AIChatContent>
                      </Box>
                    </Box>

                    <Box sx={{ flexShrink: 0, px: "48px", py: "16px" }}>
                      <Box sx={{ width: "100%", maxWidth: "980px", mx: "auto" }}>
                        <AIChatBox
                          onSubmit={handleSend}
                          onStop={() => {}}
                          isUploadAvailable={false}
                          leadingActions={<SourcesFilterButton sources={sources} onToggle={handleToggleSource} />}
                          sx={{ "& .MuiInputBase-input": { padding: "16px 24px 12px" } }}
                          slotProps={{
                            textField: { placeholder: "Ask me anything about your board materials" },
                          }}
                        />
                      </Box>
                    </Box>
                  </>
                )}
              </>
            )}

            {/* ── Insights tab ── */}
            {activeTab === 1 && (
              selectedInsight === null
                ? <InsightsEmptyState />
                : <InsightDetail view={selectedInsight} bookTitle={bookTitle} scrollRef={insightDetailScrollRef} />
            )}
          </Box>

          <CitationPreviewPanel />
        </Box>
      </Box>
    </Box>
    <AIMoreMenu
      anchorEl={moreMenuAnchor}
      onClose={() => setMoreMenuAnchor(null)}
      onPersonalizationClick={() => setPersonalizationOpen(true)}
    />
    <PersonalizationDialog open={personalizationOpen} onClose={() => setPersonalizationOpen(false)} />
    </>
  );
}
