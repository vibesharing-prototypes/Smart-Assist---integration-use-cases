import { createContext, useContext, useEffect, useRef, useState } from "react";
import {
  AIChatContextProvider,
  useAIChatContext,
} from "@diligentcorp/atlas-react-bundle";

import type { ChatMessage } from "../data/mockData.js";
import { INITIAL_SOURCES, type Source } from "../components/SourcesFilterButton.js";
import {
  type ChatThread,
  STATIC_CHAT_THREADS,
  CONVERSATION_VARIANTS,
  ONBOARDING_PROMPT,
  ONBOARDING_RICH_BLOCKS,
} from "../data/hybrid-search.constants.js";

// ─── Context shape ────────────────────────────────────────────────────────────

interface SmartAssistContextValue {
  messages: ChatMessage[];
  sources: Source[];
  isGenerating: boolean;
  prompt: string;
  setPrompt: (value: string) => void;
  panelOpen: boolean;
  overlayOpen: boolean;
  openPanel: () => void;
  openSmartAssist: () => void;
  closePanel: () => void;
  closeOverlay: () => void;
  expandToOverlay: () => void;
  collapseToPanel: () => void;
  handleSend: (text: string) => void;
  handleToggleSource: (id: string) => void;
  resetChat: () => void;
  loadThread: (messages: ChatMessage[], threadId?: string) => void;
  threads: ChatThread[];
  chatTimestamp: string | null;
  threadSplitIndex: number | null;
  currentThreadId: string | null;
  overlayLeftPanelOpen: boolean;
  setOverlayLeftPanelOpen: (open: boolean) => void;
  activeTab: number;
  setActiveTab: (v: number) => void;
  selectedInsight: "summary" | "prep" | "risk" | null;
  setSelectedInsight: (v: "summary" | "prep" | "risk" | null) => void;
}

const SmartAssistContext = createContext<SmartAssistContextValue | null>(null);

const formatChatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

export function useSmartAssist() {
  const ctx = useContext(SmartAssistContext);
  if (!ctx) throw new Error("useSmartAssist must be inside SmartAssistProvider");
  return ctx;
}

// ─── Inner provider (needs to be inside AIChatContextProvider) ────────────────

function SmartAssistProviderInner({ children }: { children: React.ReactNode }) {
  const { setIsGenerating, isGenerating, setPrompt, prompt } = useAIChatContext();

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [sources, setSources] = useState<Source[]>(INITIAL_SOURCES);
  const [variantIndex, setVariantIndex] = useState(0);
  const [panelOpen, setPanelOpen] = useState(false);
  const [overlayOpen, setOverlayOpen] = useState(false);
  // Session-only preference for how Smart Assist opens outside a book.
  // Defaults to overlay; flips to "panel" if the user collapses, and back
  // to "overlay" if they expand. Resets on page refresh.
  const [preferredMode, setPreferredMode] = useState<"overlay" | "panel">("overlay");
  const [userThreads, setUserThreads] = useState<ChatThread[]>([]);
  const [chatTimestamp, setChatTimestamp] = useState<string | null>(null);
  const [threadSplitIndex, setThreadSplitIndex] = useState<number | null>(null);
  const [currentThreadId, setCurrentThreadId] = useState<string | null>(null);
  const [overlayLeftPanelOpen, setOverlayLeftPanelOpen] = useState(true);
  const [activeTab, setActiveTab] = useState(0);
  const [selectedInsight, setSelectedInsight] = useState<"summary" | "prep" | "risk" | null>(null);
  // Tracks last activity time for each thread (overrides updatedAt for sort order)
  const [threadLastActivity, setThreadLastActivity] = useState<Record<string, string>>({});
  // True only after the user sends a message in the current thread; reset on thread load/new chat
  const hasInteractedWithThread = useRef(false);

  const threads = [...userThreads, ...STATIC_CHAT_THREADS].sort((a, b) => {
    const aDate = threadLastActivity[a.id] ?? a.updatedAt;
    const bDate = threadLastActivity[b.id] ?? b.updatedAt;
    return new Date(bDate).getTime() - new Date(aDate).getTime();
  });

  const handleToggleSource = (id: string) =>
    setSources((prev) => prev.map((s) => (s.id === id ? { ...s, enabled: !s.enabled } : s)));

  // Sync user thread messages and last-activity whenever AI finishes responding,
  // but only if the user actually sent a message (not just selected the thread).
  useEffect(() => {
    if (currentThreadId && messages.length > 0 && !isGenerating && hasInteractedWithThread.current) {
      const now = new Date().toISOString();
      setUserThreads((prev) => prev.map((t) =>
        t.id === currentThreadId
          ? { ...t, messages: [...messages], updatedAt: now }
          : t
      ));
      setThreadLastActivity((prev) => ({ ...prev, [currentThreadId]: now }));
    }
  }, [messages.length, isGenerating, currentThreadId]);

  const handleSend = (text: string) => {
    hasInteractedWithThread.current = true;
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content: text,
      timestamp: new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
    };
    if (messages.length === 0) {
      // New chat: auto-create thread, date shown at top
      const now = new Date().toISOString();
      setChatTimestamp(formatChatDate(now));
      setThreadSplitIndex(null);
      const raw = text.replace(/^["']|["']$/g, "").trim();
      const title = raw.charAt(0).toUpperCase() + raw.slice(1);
      const id = `u-${Date.now()}`;
      setUserThreads((prev) => [{ id, title, createdAt: now, updatedAt: now, messages: [userMsg] }, ...prev]);
      setCurrentThreadId(id);
      setThreadLastActivity((prev) => ({ ...prev, [id]: now }));
    } else {
      // Continuing a loaded thread: show date before first new message, unless already used today
      if (!chatTimestamp && threadSplitIndex !== -1) setChatTimestamp(formatChatDate(new Date().toISOString()));
      if (currentThreadId) {
        setThreadLastActivity((prev) => ({ ...prev, [currentThreadId]: new Date().toISOString() }));
      }
    }
    setMessages((prev) => [...prev, userMsg]);
    setPrompt("");
    setIsGenerating(true);

    const isOnboarding = text.trim() === ONBOARDING_PROMPT;
    const responseVariant = CONVERSATION_VARIANTS[variantIndex];

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "ai" as const,
          content: "",
          richContent: isOnboarding ? ONBOARDING_RICH_BLOCKS : responseVariant.richContent,
          sources: isOnboarding ? [] : responseVariant.sources,
          timestamp: new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
      if (!isOnboarding) setVariantIndex((i) => (i + 1) % CONVERSATION_VARIANTS.length);
      setIsGenerating(false);
    }, 1800);
  };

  return (
    <SmartAssistContext.Provider
      value={{
        messages,
        sources,
        isGenerating,
        prompt,
        setPrompt,
        panelOpen,
        overlayOpen,
        openPanel: () => setPanelOpen(true),
        openSmartAssist: () => {
          if (preferredMode === "panel") setPanelOpen(true);
          else setOverlayOpen(true);
        },
        closePanel: () => setPanelOpen(false),
        closeOverlay: () => setOverlayOpen(false),
        expandToOverlay: () => { setPanelOpen(false); setOverlayOpen(true); setPreferredMode("overlay"); },
        collapseToPanel: () => { setOverlayOpen(false); setPanelOpen(true); setPreferredMode("panel"); },
        handleSend,
        handleToggleSource,
        resetChat: () => {
          setMessages([]);
          setChatTimestamp(null);
          setCurrentThreadId(null);
          setThreadSplitIndex(null);
          hasInteractedWithThread.current = false;
        },
        loadThread: (msgs: ChatMessage[], threadId?: string) => {
          hasInteractedWithThread.current = false;
          setMessages(msgs);
          setChatTimestamp(null);
          setCurrentThreadId(threadId ?? null);
          const usedToday = threadId && threadLastActivity[threadId]
            ? new Date(threadLastActivity[threadId]).toDateString() === new Date().toDateString()
            : false;
          // -1 = already used today, skip separator; ≥0 = separator before first new message
          setThreadSplitIndex(usedToday ? -1 : msgs.length);
        },
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
      }}
    >
      {children}
    </SmartAssistContext.Provider>
  );
}

// ─── Exported provider ────────────────────────────────────────────────────────

export function SmartAssistProvider({ children }: { children: React.ReactNode }) {
  return (
    <AIChatContextProvider>
      <SmartAssistProviderInner>{children}</SmartAssistProviderInner>
    </AIChatContextProvider>
  );
}
