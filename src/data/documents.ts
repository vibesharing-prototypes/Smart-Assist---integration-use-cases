// ─── Document registry ───────────────────────────────────────────────────────
// Each entry maps a logical "document" referenced by an AI-response Source
// (e.g. "Minutes, Board meeting Q4 2025") to its set of page images. Page 1
// is always the cover. Inline citations resolve to a specific page; source
// chips open the document at page 1.

export type DocumentId =
  | "minutes-q4-2025"
  | "fy2026-plan"
  | "ir-resolution"
  | "risk-cyber-2024-q3";

export interface DocumentPageDef {
  page: number;        // 1-based; 1 = cover
  label: string;       // section / page name
  image: string;       // public path
}

export interface DocumentDef {
  id: DocumentId;
  title: string;
  book: string;
  /** adminBooks id where this document lives in its assembled form. */
  bookId: string;
  /** 1-based page in the assembled book where this document starts. */
  bookStartPage: number;
  documentType: string;
  date: string;
  pages: DocumentPageDef[];
}

export const DOCUMENTS: Record<DocumentId, DocumentDef> = {
  "minutes-q4-2025": {
    id: "minutes-q4-2025",
    title: "Minutes, Board meeting Q4 2025",
    book: "Board Book Q4 2025",
    bookId: "bb-q4-2025",
    bookStartPage: 1,
    documentType: "Minutes",
    date: "December 10, 2025",
    pages: [
      { page: 1, label: "Cover & Contents",                                 image: "/doc-pages/minutes-q4-2025/page-1.png" },
      { page: 2, label: "Section 1 — Attendance, Quorum, and Agenda",       image: "/doc-pages/minutes-q4-2025/page-2.png" },
      { page: 3, label: "Section 2 — Approval of Prior Board Meeting Minutes", image: "/doc-pages/minutes-q4-2025/page-3.png" },
      { page: 4, label: "Section 3 — FY2026 Operating Plan and Budget",     image: "/doc-pages/minutes-q4-2025/page-4.png" },
      { page: 5, label: "Section 4 — Cybersecurity: Incident Response Framework", image: "/doc-pages/minutes-q4-2025/page-5.png" },
      { page: 6, label: "Section 5 — Resolutions, Action Items, and Sign-Off", image: "/doc-pages/minutes-q4-2025/page-6.png" },
    ],
  },
  "fy2026-plan": {
    id: "fy2026-plan",
    title: "FY2026 Operating Plan & Budget",
    book: "Board Book Q4 2025",
    bookId: "bb-q4-2025",
    bookStartPage: 3,
    documentType: "Annex A — For Board Approval",
    date: "Approved December 10, 2025",
    pages: [
      { page: 1, label: "Cover & Contents",                                  image: "/doc-pages/fy2026-plan/page-1.png" },
      { page: 2, label: "Executive Summary",                                 image: "/doc-pages/fy2026-plan/page-2.png" },
      { page: 3, label: "Consolidated Budget & Capital Allocation",          image: "/doc-pages/fy2026-plan/page-3.png" },
      { page: 4, label: "Headcount Growth and Talent Plan",                  image: "/doc-pages/fy2026-plan/page-4.png" },
      { page: 5, label: "International Expansion: DACH and ANZ",             image: "/doc-pages/fy2026-plan/page-5.png" },
      { page: 6, label: "Risks, Sensitivities, and Variance Reporting",      image: "/doc-pages/fy2026-plan/page-6.png" },
    ],
  },
  "ir-resolution": {
    id: "ir-resolution",
    title: "Resolution – Approval of Incident Response Framework",
    book: "Board Book Q4 2025",
    bookId: "bb-q4-2025",
    bookStartPage: 6,
    documentType: "Annex B — Board Resolution",
    date: "Adopted December 10, 2025",
    pages: [
      { page: 1, label: "Cover & Contents",                                  image: "/doc-pages/ir-resolution/page-1.png" },
      { page: 2, label: "Resolution Text and Whereas Clauses",               image: "/doc-pages/ir-resolution/page-2.png" },
      { page: 3, label: "Escalation Thresholds and Notification Triggers",   image: "/doc-pages/ir-resolution/page-3.png" },
      { page: 4, label: "Roles, Responsibilities, and Sign-Off",             image: "/doc-pages/ir-resolution/page-4.png" },
    ],
  },
  "risk-cyber-2024-q3": {
    id: "risk-cyber-2024-q3",
    title: "Risk & Cybersecurity Update",
    book: "Board Book Q3 2024",
    bookId: "bb-q3-2024",
    bookStartPage: 1,
    documentType: "Risk & Technology Committee briefing",
    date: "September 2024",
    pages: [
      { page: 1, label: "Cover & Contents",                                  image: "/doc-pages/risk-cyber-2024-q3/page-1.png" },
      { page: 2, label: "Enterprise Risk Landscape",                         image: "/doc-pages/risk-cyber-2024-q3/page-2.png" },
      { page: 3, label: "Cybersecurity Escalation Readiness",                image: "/doc-pages/risk-cyber-2024-q3/page-3.png" },
      { page: 4, label: "Findings, Gaps, and Recommendations",               image: "/doc-pages/risk-cyber-2024-q3/page-4.png" },
    ],
  },
};

export function getDocument(id: DocumentId): DocumentDef {
  return DOCUMENTS[id];
}

export function getDocumentPage(id: DocumentId, page: number): DocumentPageDef {
  const doc = DOCUMENTS[id];
  return doc.pages.find((p) => p.page === page) ?? doc.pages[0];
}

/** Book viewer has 10 pages total (see PAGE_IMAGES in BookEditorPage). */
const BOOK_PAGE_TOTAL = 10;

/** Map a (documentId, page-within-document) citation to its page in the assembled book. */
export function getBookPageForCitation(id: DocumentId, targetPage: number): number {
  const doc = DOCUMENTS[id];
  return Math.min(BOOK_PAGE_TOTAL, Math.max(1, doc.bookStartPage + (targetPage - 1)));
}
