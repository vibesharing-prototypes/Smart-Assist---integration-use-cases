import { createContext, useCallback, useContext, useState } from "react";
import type { Source } from "../data/mockData.js";

export type PreviewContext = "chat" | "insight";

interface CitationPreviewContextValue {
  previewSource: Source | null;
  activeChipId: string | null;
  /** 1-based page within the source's document. 1 = cover. */
  previewPage: number;
  /** Where the citation was opened from. Drives Open-button behavior in the preview panel. */
  previewContext: PreviewContext;
  openCitation: (source: Source, chipId: string, page?: number, context?: PreviewContext) => void;
  closeCitation: () => void;
  setPreviewPage: (page: number) => void;
}

const CitationPreviewContext = createContext<CitationPreviewContextValue | null>(null);

export function useCitationPreview() {
  const ctx = useContext(CitationPreviewContext);
  if (!ctx) throw new Error("useCitationPreview must be inside CitationPreviewProvider");
  return ctx;
}

export function CitationPreviewProvider({ children }: { children: React.ReactNode }) {
  const [previewSource, setPreviewSource] = useState<Source | null>(null);
  const [activeChipId, setActiveChipId] = useState<string | null>(null);
  const [previewPage, setPreviewPage] = useState<number>(1);
  const [previewContext, setPreviewContext] = useState<PreviewContext>("chat");

  const openCitation = useCallback((source: Source, chipId: string, page?: number, context: PreviewContext = "chat") => {
    setPreviewSource(source);
    setActiveChipId(chipId);
    setPreviewPage(page ?? 1);
    setPreviewContext(context);
  }, []);

  const closeCitation = useCallback(() => {
    setPreviewSource(null);
    setActiveChipId(null);
    setPreviewPage(1);
    setPreviewContext("chat");
  }, []);

  return (
    <CitationPreviewContext.Provider
      value={{ previewSource, activeChipId, previewPage, previewContext, openCitation, closeCitation, setPreviewPage }}
    >
      {children}
    </CitationPreviewContext.Provider>
  );
}
