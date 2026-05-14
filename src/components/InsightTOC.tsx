import { useState } from "react";
import { Box, IconButton, Stack, Typography, useTheme } from "@mui/material";
import ArrowLeftIcon from "@diligentcorp/atlas-react-bundle/icons/ArrowLeft";
import ExpandListIcon from "@diligentcorp/atlas-react-bundle/icons/ExpandList";
import CollapseListIcon from "@diligentcorp/atlas-react-bundle/icons/CollapseList";

import {
  smartSummarySections,
  smartSummarySources,
  smartPrepInsights,
  smartRiskFindings,
  type Source,
} from "../data/mockData.js";
import {
  SUMMARY_SECTION_IDS,
  summaryCardId,
  summaryParagraphId,
  prepInsightId,
  riskFindingId,
} from "./InsightDetailViews.js";
import { useCitationPreview } from "../context/CitationPreviewContext.js";

/** Unique documents cited by a Smart Summary paragraph, in citation order. */
function citedSources(text: string): Source[] {
  const seen = new Set<number>();
  const out: Source[] = [];
  for (const m of text.matchAll(/\[(\d+)\]/g)) {
    const src = smartSummarySources.find((s) => s.index === parseInt(m[1], 10));
    if (src && !seen.has(src.index)) {
      seen.add(src.index);
      out.push(src);
    }
  }
  return out;
}

const INSIGHT_LABELS: Record<"summary" | "prep" | "risk", string> = {
  summary: "Smart Summary",
  prep: "Smart Prep",
  risk: "Smart Risk Scanner",
};

/** Scroll a same-document anchor into view, scoped to a container ref. */
function scrollToId(id: string, container?: HTMLElement | null) {
  const root: ParentNode = container ?? document;
  const el = root.querySelector(`[id="${id}"]`) as HTMLElement | null;
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

// ─── Shared TOC chrome ────────────────────────────────────────────────────────

function TOCHeader({ label, onBack }: { label: string; onBack: () => void }) {
  return (
    <Stack direction="row" alignItems="center" gap="4px" sx={{ px: "12px", pt: "8px", flexShrink: 0 }}>
      <IconButton size="small" onClick={onBack} title="Back" sx={{ width: 32, height: 32 }}>
        <ArrowLeftIcon size="md" />
      </IconButton>
      <Typography
        sx={({ tokens: { semantic: { color } } }) => ({
          fontSize: "16px",
          fontWeight: 600,
          lineHeight: "24px",
          color: color.type.default.value,
        })}
      >
        {label}
      </Typography>
    </Stack>
  );
}

function TOCItem({
  label,
  active,
  depth = 0,
  onClick,
  prefix,
}: {
  label: string;
  active?: boolean;
  depth?: number;
  onClick: () => void;
  prefix?: React.ReactNode;
}) {
  const { tokens: { semantic: { color } } } = useTheme();
  return (
    <Box
      component="button"
      onClick={onClick}
      sx={{
        all: "unset",
        boxSizing: "border-box",
        cursor: "pointer",
        position: "relative",
        display: "flex",
        alignItems: "center",
        gap: "6px",
        width: "100%",
        minHeight: "32px",
        pl: `${12 + depth * 16}px`,
        pr: "12px",
        py: "6px",
        borderRadius: "8px",
        backgroundColor: active ? color.accent.blue.background.value : "transparent",
        transition: "background-color 0.1s ease",
        "&:hover": { backgroundColor: active ? color.accent.blue.background.value : color.surface.variant.value },
      }}
    >
      {active && (
        <Box
          sx={{
            position: "absolute",
            left: 0,
            top: "4px",
            bottom: "4px",
            width: "3px",
            borderRadius: "2px",
            backgroundColor: "#0040D5",
          }}
        />
      )}
      {prefix}
      <Typography
        sx={{
          flex: 1,
          textAlign: "left",
          fontSize: "13px",
          lineHeight: "18px",
          fontWeight: active ? 600 : 400,
          color: color.type.default.value,
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}

function Chevron({ open, onClick }: { open: boolean; onClick: (e: React.MouseEvent) => void }) {
  const { tokens: { semantic: { color } } } = useTheme();
  return (
    <Box
      component="span"
      onClick={onClick}
      sx={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 16,
        height: 16,
        cursor: "pointer",
        color: color.type.muted.value,
        flexShrink: 0,
        transform: open ? "rotate(90deg)" : "rotate(0deg)",
        transition: "transform 0.15s ease",
      }}
    >
      <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
        <path d="M3 1l4 4-4 4V1z" />
      </svg>
    </Box>
  );
}

// ─── Summary TOC (tree) ───────────────────────────────────────────────────────

function SummaryTOC({ activeId, onSelect }: { activeId: string | null; onSelect: (id: string) => void }) {
  const detailed = smartSummarySections.find((s) => s.title === "Detailed Summary");
  const [detailedOpen, setDetailedOpen] = useState(true);
  const [openCards, setOpenCards] = useState<Record<number, boolean>>({});
  const [allOpen, setAllOpen] = useState(true);
  const { openCitation, activeChipId } = useCitationPreview();

  const toggleAll = () => {
    const next = !allOpen;
    setAllOpen(next);
    setDetailedOpen(next);
    if (detailed) {
      setOpenCards(Object.fromEntries(detailed.cards.map((_, i) => [i, next])));
    }
  };

  return (
    <Stack gap="2px" sx={{ px: "8px", pt: "8px" }}>
      <TOCItem
        label="Executive summary"
        active={activeId === SUMMARY_SECTION_IDS.exec}
        onClick={() => onSelect(SUMMARY_SECTION_IDS.exec)}
      />
      <Box sx={{ position: "relative" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ flex: 1 }}>
            <TOCItem
              label="Detailed summary"
              active={activeId === SUMMARY_SECTION_IDS.detailed}
              depth={0}
              prefix={
                <Chevron
                  open={detailedOpen}
                  onClick={(e) => {
                    e.stopPropagation();
                    setDetailedOpen((v) => !v);
                  }}
                />
              }
              onClick={() => onSelect(SUMMARY_SECTION_IDS.detailed)}
            />
          </Box>
          <IconButton
            size="small"
            onClick={toggleAll}
            title={allOpen ? "Collapse all" : "Expand all"}
            sx={{ width: 28, height: 28, mr: "4px" }}
          >
            {allOpen ? <CollapseListIcon size="md" /> : <ExpandListIcon size="md" />}
          </IconButton>
        </Box>
        {detailedOpen && detailed?.cards.map((card, cardIdx) => {
          const sectionIdx = smartSummarySections.indexOf(detailed);
          const cardAnchor = summaryCardId(sectionIdx, cardIdx);
          const open = openCards[cardIdx] ?? true;
          const labels = card.paragraphs.filter((p) => Boolean(p.label));
          return (
            <Box key={cardIdx}>
              <TOCItem
                label={card.title ?? `Section ${cardIdx + 1}`}
                active={activeId === cardAnchor}
                depth={1}
                prefix={
                  labels.length > 0 ? (
                    <Chevron
                      open={open}
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpenCards((prev) => ({ ...prev, [cardIdx]: !open }));
                      }}
                    />
                  ) : null
                }
                onClick={() => onSelect(cardAnchor)}
              />
              {open && labels.length > 0 && (
                <Stack gap="2px">
                  {card.paragraphs.map((p, pIdx) => {
                    if (!p.label) return null;
                    const paragraphAnchor = summaryParagraphId(sectionIdx, cardIdx, pIdx);
                    const docs = citedSources(p.text);
                    return (
                      <Box key={pIdx}>
                        <TOCItem
                          label={p.label}
                          active={activeId === paragraphAnchor}
                          depth={2}
                          onClick={() => onSelect(paragraphAnchor)}
                        />
                        {docs.map((src) => {
                          const chipId = `summary-toc-doc-${src.index}`;
                          return (
                            <TOCItem
                              key={src.index}
                              label={src.title}
                              active={activeChipId === chipId}
                              depth={3}
                              onClick={() => openCitation(src, chipId, src.targetPage, "insight")}
                            />
                          );
                        })}
                      </Box>
                    );
                  })}
                </Stack>
              )}
            </Box>
          );
        })}
      </Box>
    </Stack>
  );
}

// ─── Prep / Risk TOC (flat numbered list) ─────────────────────────────────────

function FlatTOC({
  items,
  activeId,
  onSelect,
}: {
  items: { id: string; label: string }[];
  activeId: string | null;
  onSelect: (id: string) => void;
}) {
  return (
    <Stack gap="2px" sx={{ px: "8px", pt: "8px" }}>
      {items.map((item) => (
        <TOCItem
          key={item.id}
          label={item.label}
          active={activeId === item.id}
          onClick={() => onSelect(item.id)}
        />
      ))}
    </Stack>
  );
}

// ─── Top-level ────────────────────────────────────────────────────────────────

export default function InsightTOC({
  selectedInsight,
  onBack,
  scrollContainerRef,
}: {
  selectedInsight: "summary" | "prep" | "risk";
  onBack: () => void;
  scrollContainerRef?: React.RefObject<HTMLElement | null>;
}) {
  const [activeId, setActiveId] = useState<string | null>(null);

  const handleSelect = (id: string) => {
    setActiveId(id);
    scrollToId(id, scrollContainerRef?.current ?? null);
  };

  return (
    <Stack sx={{ flex: 1, overflowY: "auto", pt: "8px", pb: "16px", backgroundColor: "#fff" }}>
      <TOCHeader label={INSIGHT_LABELS[selectedInsight]} onBack={onBack} />
      {selectedInsight === "summary" && (
        <SummaryTOC activeId={activeId} onSelect={handleSelect} />
      )}
      {selectedInsight === "prep" && (
        <FlatTOC
          items={smartPrepInsights.map((p) => ({
            id: prepInsightId(p.number),
            label: `${p.number}. ${p.title}`,
          }))}
          activeId={activeId}
          onSelect={handleSelect}
        />
      )}
      {selectedInsight === "risk" && (
        <FlatTOC
          items={smartRiskFindings.map((f, i) => ({
            id: riskFindingId(f.category),
            label: `${i + 1}. ${f.category}`,
          }))}
          activeId={activeId}
          onSelect={handleSelect}
        />
      )}
    </Stack>
  );
}
