import { Fragment, useEffect, useLayoutEffect, useRef, useState } from "react";
import smartAssistAvatarUrl from "../assets/smart-assist-avatar.svg";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  InputBase,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

import {
  AIChatContent,
  AIChatAIMessage,
  AIChatUserMessage,
  AIChatMessageHeader,
  AIChatMessageAvatar,
  AIChatMessageTextBlock,
  AIChatMessageFooter,
  AIChatThinkingIndicator,
  AIChatTimestamp,
} from "@diligentcorp/atlas-react-bundle";

import AiSparkleIcon from "@diligentcorp/atlas-react-bundle/icons/AiSparkle";
import { SmartSummaryIcon, SmartPrepIcon, SmartRiskScannerIcon } from "./InsightIcons.js";
import { InsightSummaryView, InsightPrepView, InsightRiskView } from "./InsightDetailViews.js";
import { AiBadge, AiInaccuracyDisclaimer } from "./AiDisclaimers.js";
import AddCircleIcon from "@diligentcorp/atlas-react-bundle/icons/AddCircle";
import ArrowLeftIcon from "@diligentcorp/atlas-react-bundle/icons/ArrowLeft";
import ArrowUpIcon from "@diligentcorp/atlas-react-bundle/icons/ArrowUp";
import CloseIcon from "@diligentcorp/atlas-react-bundle/icons/Close";
import ExpandRightIcon from "@diligentcorp/atlas-react-bundle/icons/ExpandRight";
import FullscreenIcon from "@diligentcorp/atlas-react-bundle/icons/Fullscreen";
import MoreIcon from "@diligentcorp/atlas-react-bundle/icons/More";
import ReloadIcon from "@diligentcorp/atlas-react-bundle/icons/Reload";

import { type SuggestionCard, suggestionCards, directorSuggestionCards } from "../data/mockData.js";
import { type ChatThread, ONBOARDING_PROMPT } from "../data/hybrid-search.constants.js";
import RichAIMessageContent, { parseCiteText } from "./RichAIMessageContent.js";
import SourcesBlock from "./SourcesBlock.js";
import SourcesFilterButton from "./SourcesFilterButton.js";
import AIMoreMenu from "./AIMoreMenu.js";
import ChatThreadItem from "./ChatThreadItem.js";
import PersonalizationDialog from "./PersonalizationDialog.js";
import { useSmartAssist } from "../context/SmartAssistContext.js";

// ─── Constants ────────────────────────────────────────────────────────────────

const AI_GRADIENT = "linear-gradient(90deg, #be0c1e 0%, #ab48da 50%, #4069fe 100%)";
const THREAD_BG = "linear-gradient(135deg, #f9f9fc 31%, #fcfcff 100%)";
const AI_PURPLE = "#ab48da";
const DRAWER_WIDTH = 440;

// ─── Suggestion cards ─────────────────────────────────────────────────────────

function SuggestionCards({
  cards,
  onSelect,
}: {
  cards: SuggestionCard[];
  onSelect: (prompt: string) => void;
}) {
  const { tokens: { semantic: { color, radius } } } = useTheme();

  return (
    <Stack gap="12px" sx={{ px: "4px" }}>
      <Stack gap="4px">
        <Typography sx={{ fontSize: "14px", fontWeight: 600, lineHeight: "20px", color: color.type.default.value }}>
          Ideas to get you started
        </Typography>
        <Typography variant="textSm" sx={{ color: color.type.muted.value }}>
          Click on one of the suggested prompt templates to populate the search field
        </Typography>
      </Stack>
      <Stack gap="10px">
        {cards.map((card) => (
          <Box
            key={card.prompt}
            component="button"
            onClick={() => onSelect(card.prompt.replace(/["“”]/g, ""))}
            sx={{
              all: "unset",
              boxSizing: "border-box",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              p: "12px",
              borderRadius: radius.lg.value,
              border: `1px solid ${color.ui.divider.default.value}`,
              backgroundColor: color.surface.default.value,
              textAlign: "left",
              transition: "background-color 0.15s ease",
              "&:hover": { backgroundColor: color.surface.variant.value },
            }}
          >
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                height: "24px",
                px: "12px",
                borderRadius: "9999px",
                backgroundColor: color.accent.blue.background.value,
                width: "fit-content",
              }}
            >
              <Typography sx={{ fontSize: "12px", fontWeight: 600, color: "#004c6c", lineHeight: "16px", letterSpacing: "0.3px", wordWrap: "break-word" }}>
                {card.category}
              </Typography>
            </Box>
            <Typography sx={{ fontSize: "12px", fontWeight: 400, color: color.type.muted.value, lineHeight: "16px", letterSpacing: "0.3px", wordWrap: "break-word" }}>
              {card.prompt}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Stack>
  );
}

// ─── Props ────────────────────────────────────────────────────────────────────

interface SmartAssistSidenavProps {
  open: boolean;
  onClose: () => void;
  onExpand: () => void;
  bookTitle?: string;
  title?: string;
  variant?: "temporary" | "persistent";
  showInsights?: boolean;
  audience?: "admin" | "director";
  hideInsightsFooter?: boolean;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function SmartAssistSidenav({
  open,
  onClose,
  onExpand,
  bookTitle: _bookTitle,
  title = "Smart Assist",
  variant = "temporary",
  showInsights = false,
  audience = "admin",
  hideInsightsFooter = false,
}: SmartAssistSidenavProps) {
  const { tokens: { semantic: { color, radius, fontWeight }, core: { spacing } } } = useTheme();
  const {
    messages,
    sources,
    isGenerating,
    prompt,
    setPrompt,
    handleSend,
    handleToggleSource,
    resetChat,
    loadThread,
    threads,
    chatTimestamp,
    threadSplitIndex,
    currentThreadId,
    activeTab,
    setActiveTab,
    selectedInsight,
    setSelectedInsight,
    setAudience,
  } = useSmartAssist();

  useEffect(() => {
    setAudience(audience);
  }, [audience, setAudience]);

  const [smartAssistView, setSmartAssistView] = useState<"new-chat" | "thread-list">("new-chat");
  const [moreMenuAnchor, setMoreMenuAnchor] = useState<HTMLElement | null>(null);
  const [personalizationOpen, setPersonalizationOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const chatStarted = messages.length > 0;

  // The Insights tab only exists in the GovernAI (book) context. `activeTab`
  // lives in shared context and persists across navigation, so opening Insights
  // inside a book and then opening Smart Assist outside one would otherwise
  // render the Insights view in the chat area. Force the chat tab whenever
  // insights aren't available here.
  const effectiveTab = showInsights ? activeTab : 0;

  const handleTabChange = (idx: number) => {
    setActiveTab(idx);
    if (idx === 0) setSmartAssistView("new-chat");
    if (idx === 1) setSelectedInsight(null);
  };

  const handleNewChat = () => {
    resetChat();
    setSmartAssistView("new-chat");
  };

  const handleLoadThread = (thread: ChatThread) => {
    loadThread(thread.messages, thread.id);
    setSmartAssistView("new-chat");
  };

  const showSubheader =
    (effectiveTab === 0 && smartAssistView === "new-chat") ||
    (effectiveTab === 1 && selectedInsight !== null);
  const insightLabel = selectedInsight === "summary"
    ? "Smart Summary"
    : selectedInsight === "prep"
      ? "Smart Prep"
      : selectedInsight === "risk"
        ? "Smart Risk Scanner"
        : null;
  const subheaderLabel =
    effectiveTab === 0
      ? currentThreadId !== null
        ? threads.find((t) => t.id === currentThreadId)?.title ?? "New chat"
        : "New chat"
      : insightLabel;
  const handleSubheaderBack = () => {
    if (effectiveTab === 0) setSmartAssistView("thread-list");
    else setSelectedInsight(null);
  };

  const showInput = effectiveTab === 0 && smartAssistView === "new-chat";
  const showThreadListFooter = effectiveTab === 0 && smartAssistView === "thread-list";

  // Scroll the chat's own container to the bottom without disturbing
  // ancestor scrollers (using scrollIntoView on a sentinel can scroll the
  // whole page when the panel mounts — produces a visible jump on nav).
  const scrollChatToBottom = (smooth: boolean) => {
    const sentinel = messagesEndRef.current;
    if (!sentinel) return;
    let el: HTMLElement | null = sentinel.parentElement;
    while (el && el.scrollHeight <= el.clientHeight) el = el.parentElement;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: smooth ? "smooth" : "auto" });
  };

  // When panel mounts/opens with an active thread, show the chat (not the
  // thread list) and jump to the latest message before paint — useLayoutEffect
  // avoids the flicker of seeing scrollTop=0 between mount and a deferred scroll.
  useLayoutEffect(() => {
    if (open && currentThreadId !== null) {
      setSmartAssistView("new-chat");
      scrollChatToBottom(false);
    }
  }, [open]);

  // Scroll to bottom whenever a new message arrives
  useEffect(() => {
    if (messages.length > 0) {
      scrollChatToBottom(true);
    }
  }, [messages.length]);

  return (
    <>
    <Drawer
      anchor="right"
      open={open}
      variant={variant}
      onClose={onClose}
      sx={{
        width: open ? DRAWER_WIDTH + 24 : 0,
        minWidth: 0,
        overflow: "hidden",
        flexShrink: 0,
        ...(variant === "persistent" && { height: "100%" }),
        "& .MuiDrawer-paper": {
          width: DRAWER_WIDTH,
          boxSizing: "border-box",
          padding: 0,
          border: `1px solid ${color.outline.fixed.value}`,
          boxShadow: "none",
          display: "flex",
          flexDirection: "column",
          gap: 0,
          overflow: "hidden",
          borderRadius: "12px",
          marginTop: "12px",
          marginRight: "12px",
          marginBottom: "12px",
          marginLeft: "12px",
          position: variant === "persistent" ? "relative" : "fixed",
          height: variant === "persistent" ? "calc(100% - 24px)" : "calc(100vh - 24px)",
        },
      }}
    >
      {/* ── Header ── */}
      <Box
        sx={{
          position: "relative",
          flexShrink: 0,
          backgroundColor: color.surface.default.value,
        }}
      >
        {/* Title row */}
        <Stack
          direction="row"
          alignItems="center"
          gap="12px"
          sx={{ px: "12px", pt: "12px", pb: "12px" }}
        >
          <Stack direction="row" alignItems="center" gap="8px" sx={{ flex: 1, minWidth: 0 }}>
            <Box sx={{ width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: AI_PURPLE }}>
              <AiSparkleIcon size="lg" />
            </Box>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: 600,
                lineHeight: "24px",
                color: color.type.default.value,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {title}
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" gap="16px" sx={{ flexShrink: 0 }}>
            <IconButton sx={{ p: "4px", width: 32, height: 32 }} onClick={onExpand} title="Open full screen">
              <FullscreenIcon size="lg" />
            </IconButton>
            <IconButton sx={{ p: "4px", width: 32, height: 32 }} title="More options" onClick={(e) => setMoreMenuAnchor(e.currentTarget)}>
              <MoreIcon size="lg" />
            </IconButton>
            <IconButton sx={{ p: "4px", width: 32, height: 32 }} onClick={onClose} title="Close">
              <CloseIcon size="lg" />
            </IconButton>
          </Stack>
        </Stack>

        {/* Tabs row — only in GovernAI (book) context */}
        {showInsights && (
          <Stack
            direction="row"
            alignItems="center"
            gap="8px"
            sx={{
              flexShrink: 0,
              px: "16px",
              py: "8px",
            }}
          >
            {(["Smart Assist", "Insights"] as const).map((label, idx) => (
              <Box
                key={label}
                component="button"
                onClick={() => handleTabChange(idx)}
                sx={{
                  all: "unset",
                  cursor: "pointer",
                  px: "12px",
                  py: "4px",
                  borderRadius: "9999px",
                  border: activeTab === idx ? `1px solid ${color.type.default.value}` : "1px solid transparent",
                  color: color.type.default.value,
                  fontSize: "14px",
                  fontWeight: 600,
                  lineHeight: "20px",
                  transition: "border-color 0.15s, color 0.15s",
                }}
              >
                {label}
              </Box>
            ))}
          </Stack>
        )}

      </Box>

      {/* ── Subheader ── */}
      {showSubheader && (
        <Stack
          direction="row"
          alignItems="center"
          gap="4px"
          sx={{
            flexShrink: 0,
            px: "8px",
            py: "6px",
            borderTop: `1px solid ${color.ui.divider.default.value}`,
            backgroundColor: color.surface.default.value,
          }}
        >
          <IconButton sx={{ p: "4px", width: 32, height: 32 }} onClick={handleSubheaderBack} title="Back">
            <ArrowLeftIcon size="lg" />
          </IconButton>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 600,
              lineHeight: "20px",
              color: color.type.default.value,
              flex: 1,
              minWidth: 0,
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
              overflow: "hidden",
              overflowWrap: "anywhere",
            }}
          >
            {subheaderLabel}
          </Typography>
        </Stack>
      )}

      {/* Gradient accent border — always at the bottom of the full header area */}
      <Box sx={{ height: "1px", flexShrink: 0, background: AI_GRADIENT }} />

      {/* ── Smart Assist tab — new chat ── */}
      {effectiveTab === 0 && smartAssistView === "new-chat" && (
        <Box
          sx={{
            flex: 1,
            minHeight: 0,
            overflowY: "auto",
            pt: "16px",
            px: "16px",
            pb: "16px",
            background: THREAD_BG,
          }}
        >
          {!chatStarted ? (
            <Box sx={{ minHeight: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", pb: "16px" }}>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: 600,
                  lineHeight: "28px",
                  color: color.type.default.value,
                  mt: "8px",
                  mb: "24px",
                }}
              >
                How can I assist you?
              </Typography>
              <SuggestionCards
                cards={audience === "director" ? directorSuggestionCards : suggestionCards}
                onSelect={(p) => setPrompt(p)}
              />
              <Box
                component="button"
                onClick={() => handleSend(ONBOARDING_PROMPT)}
                sx={{
                  all: "unset",
                  boxSizing: "border-box",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  mt: "10px",
                  mx: "4px",
                  px: "16px",
                  height: "56px",
                  borderRadius: radius.lg.value,
                  backgroundColor: color.surface.default.value,
                  border: `1px solid ${color.ui.divider.default.value}`,
                  transition: "background-color 0.15s ease",
                  "&:hover": { backgroundColor: color.surface.variant.value },
                }}
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
          ) : (
            <Box sx={{ "& .AtlasAIChatUserMessage .MuiTypography-body1": { fontSize: "14px !important" }, "& li": { fontSize: "14px" } }}>
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
          )}
        </Box>
      )}

      {/* ── Smart Assist tab — thread list ── */}
      {effectiveTab === 0 && smartAssistView === "thread-list" && (
        <Box sx={{ flex: 1, minHeight: 0, overflowY: "auto", background: THREAD_BG, pt: "24px", px: "16px", pb: "16px" }}>
          <Button
            variant="text"
            size="small"
            startIcon={<AddCircleIcon size="lg" />}
            onClick={handleNewChat}
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
              mb: "24px",
            }}
          >
            New chat
          </Button>
          <Typography sx={{ fontSize: "12px", fontWeight: 600, lineHeight: "16px", color: color.type.muted.value, mb: "8px", px: "12px" }}>
            All chats
          </Typography>
          <Stack>
            {threads.map((thread) => (
              <ChatThreadItem
                key={thread.id}
                thread={thread}
                variant="sidenav"
                onLoadThread={handleLoadThread}
              />
            ))}
          </Stack>
        </Box>
      )}

      {/* ── Insights tab — feature list ── */}
      {effectiveTab === 1 && selectedInsight === null && (
        <Box
          sx={{
            flex: 1,
            minHeight: 0,
            overflowY: "auto",
            px: "16px",
            pt: "24px",
            pb: "16px",
            background: THREAD_BG,
          }}
        >
          {audience === "director" && (
            <Stack gap={spacing["1"].value} sx={{ mb: spacing["3"].value }}>
              <Typography variant="body1" sx={{ fontWeight: fontWeight.emphasis.value, color: color.type.default.value }}>
                Your own AI governance advisor: Instant insights for better governance
              </Typography>
              <Typography variant="textMd" sx={{ color: color.type.muted.value }}>
                Insights brings intelligent assistance to streamline the way boards and executives prepare for, participate in, and follow up on meetings. Backed by Diligent's 20+ years of governance expertise and built with enterprise-grade security, sharpen your focus and unlock faster insights with AI-powered governance.
              </Typography>
            </Stack>
          )}
          <Stack gap="12px" sx={{ mt: audience === "director" ? 0 : spacing["1"].value }}>
            {(audience === "director"
              ? ([
                  { Icon: SmartSummaryIcon, id: "summary", label: "Smart Summary", desc: "Read a summary before or after reviewing materials" },
                  { Icon: SmartPrepIcon, id: "prep", label: "Smart Prep", desc: "Prepare confidently with suggested discussion topics and questions" },
                  { Icon: SmartRiskScannerIcon, id: "risk", label: "Smart Risk Scanner", desc: "Identify potential business risks" },
                ] as const)
              : ([
                  { Icon: SmartSummaryIcon, id: "summary", label: "Smart Summary", desc: "Create and read an accurate executive summary" },
                  { Icon: SmartPrepIcon, id: "prep", label: "Smart Prep", desc: "Prepare smarter with suggested discussion topics" },
                  { Icon: SmartRiskScannerIcon, id: "risk", label: "Smart Risk Scanner", desc: "Identify potential business risks" },
                ] as const)
            ).map(({ Icon, id, label, desc }) => (
              <Box
                key={label}
                component="button"
                onClick={() => setSelectedInsight(id)}
                sx={{
                  all: "unset",
                  boxSizing: "border-box",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  p: "16px",
                  border: `1px solid ${color.ui.divider.default.value}`,
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
                  <Typography variant="body1" sx={{ fontWeight: fontWeight.emphasis.value, color: color.type.default.value }}>
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
      )}

      {/* ── Insights tab — feature view ── */}
      {effectiveTab === 1 && selectedInsight !== null && (
        <Box
          sx={{
            flex: 1,
            minHeight: 0,
            overflowY: "auto",
            pt: "16px",
            px: "16px",
            pb: "16px",
            background: THREAD_BG,
          }}
        >
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: "16px" }}>
            <Typography sx={{ fontSize: "12px", lineHeight: "16px", color: color.type.muted.value }}>
              Updated: April 23, 2024, 9:03 AM
            </Typography>
            <AiBadge />
          </Stack>

          {selectedInsight === "summary" && <InsightSummaryView />}
          {selectedInsight === "prep" && <InsightPrepView />}
          {selectedInsight === "risk" && <InsightRiskView />}
        </Box>
      )}

      {/* ── Insights footer (Regenerate) ── */}
      {effectiveTab === 1 && !hideInsightsFooter && (
        <Box
          sx={{
            flexShrink: 0,
            px: "16px",
            py: "12px",
            borderTop: `1px solid ${color.ui.divider.default.value}`,
            backgroundColor: color.surface.default.value,
            display: "flex",
            justifyContent: "flex-end",
          }}
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

      {/* ── Thread list footer ── */}
      {showThreadListFooter && (
        <Box
          sx={{
            flexShrink: 0,
            px: "16px",
            py: "16px",
            borderTop: `1px solid ${color.ui.divider.default.value}`,
            backgroundColor: color.surface.default.value,
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button variant="text" size="small">
            Delete all chats
          </Button>
        </Box>
      )}

      {/* ── Input area (Smart Assist / new chat only) ── */}
      {showInput && <Box sx={{ flexShrink: 0, backgroundColor: color.surface.default.value }}>
        {/* AI glow highlight top border */}
        <Box
          sx={{
            height: "1px",
            background: `linear-gradient(90deg, transparent 0%, ${color.ai.default.gradientStart.value} 15%, ${color.ai.default.gradientMiddle.value} 50%, ${color.ai.default.gradientEnd.value} 85%, transparent 100%)`,
          }}
        />
        {/* Focus-ring wrapper: 2px inset ring drawn via pseudo-element on focus,
            so it appears around the input area without shifting layout. */}
        <Box
          sx={{
            position: "relative",
            "&:focus-within::after": {
              content: '""',
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              boxShadow: `inset 0 0 0 2px ${color.action.primary.default.value}`,
            },
          }}
        >
        <InputBase
          multiline
          fullWidth
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey && prompt.trim()) {
              e.preventDefault();
              handleSend(prompt);
            }
          }}
          placeholder="Ask me anything about your board materials"
          sx={{
            color: color.type.default.value,
            "& .MuiInputBase-input": { padding: "16px 24px 12px !important", height: "80px !important", overflow: "auto !important", fontSize: "14px !important", lineHeight: "20px !important" },
            "& .MuiInputBase-input::placeholder": { color: color.type.muted.value, opacity: 1 },
            alignItems: "flex-start",
          }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: "8px",
            pb: "8px",
          }}
        >
          <SourcesFilterButton sources={sources} onToggle={handleToggleSource} />
          <IconButton
            size="small"
            onClick={() => { if (prompt.trim()) handleSend(prompt); }}
            disabled={!prompt.trim() || isGenerating}
            sx={{
              width: 40,
              height: 40,
              borderRadius: "10px",
              border: `1px solid ${color.ui.divider.default.value}`,
              color: prompt.trim() ? color.type.default.value : color.type.muted.value,
            }}
          >
            <ArrowUpIcon size="md" />
          </IconButton>
        </Box>
        </Box>
        <Box
          sx={{
            borderTop: `1px solid ${color.ui.divider.default.value}`,
            px: "16px",
            py: "12px",
            // Force light-theme colors — Drawer renders in a DOM portal that doesn't
            // inherit AppLayout's CSS custom properties, so tokens must be applied explicitly.
            "& p, & span": { color: `${color.type.muted.value} !important` },
            "& a": { color: `${color.action.primary.default.value} !important` },
          }}
        >
          <AiInaccuracyDisclaimer />
        </Box>
      </Box>}
    </Drawer>
    <AIMoreMenu
      anchorEl={moreMenuAnchor}
      onClose={() => setMoreMenuAnchor(null)}
      onPersonalizationClick={() => setPersonalizationOpen(true)}
    />
    <PersonalizationDialog open={personalizationOpen} onClose={() => setPersonalizationOpen(false)} />
    </>
  );
}
