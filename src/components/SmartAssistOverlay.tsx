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

const directorOverlaySuggestions = [
  { category: "Prepare for my meeting", prompt: '"What should I review before [committee] based on last meeting\'s follow-ups?"' },
  { category: "Monitor trends", prompt: '"How has [risk / metric / topic] changed across the last [X] board cycles?"' },
  { category: "Find a past decision", prompt: '"When did the board approve [policy], and what was resolved?"' },
  { category: "Summarize decisions", prompt: '"Summarize key board decisions and highlights from the past year."' },
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
  hideInsightsFooter = false,
  audience = "admin",
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
  hideInsightsFooter?: boolean;
  audience?: "admin" | "director";
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
        <Box sx={{ pt: "20px", px: "20px", pb: "12px", flexShrink: 0 }}>
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
          <InsightsList onSelect={onInsightSelect} audience={audience} />
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
            pt: showInsights ? "12px" : "24px",
            pl: "20px",
          }}
        >
          <Button
            variant="text"
            size="small"
            startIcon={<AddCircleIcon size="lg" />}
            onClick={onNewChat}
            sx={{
              height: "24px",
              pl: "8px !important",
              pr: "8px !important",
              py: "4px",
              borderRadius: "8px",
              fontSize: "12px",
              fontWeight: 600,
              lineHeight: "16px",
              letterSpacing: "0.3px",
              color: "#242628",
              textTransform: "none",
              "& .MuiButton-startIcon": { marginRight: "4px !important", color: "#242628" },
              alignSelf: "flex-start",
            }}
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

      {activeTab === 1 && !hideInsightsFooter && (
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
            sx={{
              all: "unset",
              boxSizing: "border-box",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              px: "12px",
              height: "32px",
              borderRadius: "8px",
              border: "1px solid transparent",
              background:
                "linear-gradient(#fff, #fff) padding-box, linear-gradient(128deg, #b11f62 17.49%, #1c4ee4 100%) border-box",
              transition: "background 0.15s ease",
              "&:hover": {
                background:
                  "linear-gradient(#f3f3f3, #f3f3f3) padding-box, linear-gradient(128deg, #b11f62 17.49%, #1c4ee4 100%) border-box",
              },
            }}
          >
            <Box sx={{ width: 16, height: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <AiSparkleIcon size="md" />
            </Box>
            <Box sx={{ height: 20, display: "flex", alignItems: "center" }}>
              <Typography sx={{ fontSize: "14px", fontWeight: 600, lineHeight: "20px", letterSpacing: "0.2px", color: "#242628" }}>
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

function OverlaySuggestionCards({ onSelect, audience = "admin" }: { onSelect: (prompt: string) => void; audience?: "admin" | "director" }) {
  const { tokens: { semantic: { color, radius } } } = useTheme();
  const cards = audience === "director" ? directorOverlaySuggestions : overlaySuggestions;

  return (
    <Box sx={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px", width: "100%" }}>
      {cards.map((card) => (
        <Box
          key={card.category}
          component="button"
          onClick={() => onSelect(card.prompt.replace(/["“”]/g, ""))}
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

const INSIGHT_ITEMS_ADMIN = [
  { id: "summary" as const, Icon: SmartSummaryIcon, label: "Smart Summary", desc: "Create and read an accurate executive summary" },
  { id: "prep" as const, Icon: SmartPrepIcon, label: "Smart Prep", desc: "Prepare smarter with suggested discussion topics" },
  { id: "risk" as const, Icon: SmartRiskScannerIcon, label: "Smart Risk Scanner", desc: "Identify potential business risks" },
];

const INSIGHT_ITEMS_DIRECTOR = [
  { id: "summary" as const, Icon: SmartSummaryIcon, label: "Smart Summary", desc: "Read a summary before or after reviewing materials" },
  { id: "prep" as const, Icon: SmartPrepIcon, label: "Smart Prep", desc: "Prepare confidently with suggested discussion topics and questions" },
  { id: "risk" as const, Icon: SmartRiskScannerIcon, label: "Smart Risk Scanner", desc: "Identify potential business risks" },
];

function InsightsList({ onSelect, audience = "admin" }: { onSelect: (id: "summary" | "prep" | "risk") => void; audience?: "admin" | "director" }) {
  const { tokens: { semantic: { color, fontWeight }, core: { spacing } } } = useTheme();
  const items = audience === "director" ? INSIGHT_ITEMS_DIRECTOR : INSIGHT_ITEMS_ADMIN;
  return (
    <Box sx={{ flex: 1, overflowY: "auto", px: "24px", pt: "12px", pb: "16px", backgroundColor: "#fff" }}>
      {audience === "director" && (
        <Stack gap={spacing["1"].value} sx={{ mb: spacing["3"].value }}>
          <Typography variant="body1" sx={{ fontWeight: fontWeight.emphasis.value, color: TEXT_DEFAULT }}>
            Your own AI governance advisor: Instant insights for better governance
          </Typography>
          <Typography variant="textMd" sx={{ color: color.type.muted.value }}>
            Insights brings intelligent assistance to streamline the way boards and executives prepare for, participate in, and follow up on meetings. Backed by Diligent's 20+ years of governance expertise and built with enterprise-grade security, sharpen your focus and unlock faster insights with AI-powered governance.
          </Typography>
        </Stack>
      )}
      <Stack gap="12px" sx={{ mt: audience === "director" ? 0 : spacing["1"].value }}>
        {items.map(({ id, Icon, label, desc }) => (
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
              <Typography variant="body1" sx={{ fontWeight: fontWeight.emphasis.value, color: TEXT_DEFAULT }}>
                {label}
              </Typography>
              <Typography variant="textMd" sx={{ alignSelf: "stretch", color: color.type.muted.value }}>
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
        <Stack alignItems="center" gap="48px" sx={{ width: "688px", maxWidth: "100%" }}>
          <InsightsEmptyStateIllustration />
          <Typography
            sx={{
              width: "100%",
              textAlign: "center",
              color: "#282E37",
              fontFamily: "var(--lens-semantic-font-title-h3-lg-font-family)",
              fontSize: "var(--lens-semantic-font-title-h3-lg-font-size)",
              fontWeight: "var(--lens-semantic-font-weight-emphasis)",
              letterSpacing: "var(--lens-semantic-font-title-h3-lg-letter-spacing)",
              lineHeight: "var(--lens-semantic-font-title-h3-lg-line-height)",
            }}
          >
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
      <Box sx={{ width: "100%", maxWidth: "916px", mx: "auto" }}>
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
  audience?: "admin" | "director";
  hideInsightsFooter?: boolean;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function SmartAssistOverlay({ open, onClose, onCollapse, bookTitle, showInsights = false, audience = "admin", hideInsightsFooter = false }: SmartAssistOverlayProps) {
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
    setAudience,
  } = useSmartAssist();

  useEffect(() => {
    setAudience(audience);
  }, [audience, setAudience]);

  // The Insights tab only exists in the GovernAI (book) context. `activeTab`
  // lives in shared context and persists across navigation, so opening Insights
  // inside a book and then opening Smart Assist outside one would otherwise
  // render the Insights view in the content area. Force the chat tab whenever
  // insights aren't available here.
  const effectiveTab = showInsights ? activeTab : 0;

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
            {showInsights
              ? bookTitle
                ? `GovernAI – ${bookTitle}`
                : "GovernAI"
              : "Smart Assist"}
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
              activeTab={effectiveTab}
              onTabChange={handleTabChange}
              threads={threads}
              currentThreadId={currentThreadId}
              onLoadThread={(thread) => loadThread(thread.messages, thread.id)}
              onNewChat={resetChat}
              showInsights={showInsights}
              hideInsightsFooter={hideInsightsFooter}
              audience={audience}
              selectedInsight={selectedInsight}
              onInsightSelect={setSelectedInsight}
              detailScrollRef={insightDetailScrollRef}
            />
          )}

          <Box sx={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", background: CHAT_BG, minWidth: 0, position: "relative" }}>

            {/* ── Smart Assist tab ── */}
            {effectiveTab === 0 && (
              <>
                {messages.length === 0 ? (

                  <><Box sx={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column" }}>
                    <Stack
                      sx={{
                        alignItems: "center",
                        px: "48px",
                        py: "48px",
                        width: "100%",
                        gap: "48px",
                        my: "auto",
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
                          sx={{ "& .MuiInputBase-input": { padding: "16px 24px 12px", fontSize: "14px !important" } }}
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

                        <OverlaySuggestionCards onSelect={(p) => setPrompt(p)} audience={audience} />

                        <Box
                          component="button"
                          onClick={() => handleSend(ONBOARDING_PROMPT)}
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
                            backgroundColor: color.surface.default.value,
                            border: `1px solid ${PANEL_DIVIDER}`,
                            width: "fit-content",
                            mx: "auto",
                            transition: "background-color 0.15s ease",
                            "&:hover": { backgroundColor: color.surface.variant.value },
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
                                      name={audience === "director" ? "Josh Doe" : "Jane Doe"}
                                      time={msg.timestamp}
                                      avatar={
                                        <AIChatMessageAvatar
                                          uniqueId={audience === "director" ? "josh-doe" : "jane-doe"}
                                          initials="JD"
                                        />
                                      }
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
                          sx={{ "& .MuiInputBase-input": { padding: "16px 24px 12px", fontSize: "14px !important" } }}
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
            {effectiveTab === 1 && (
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
