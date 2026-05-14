import { useState } from "react";
import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import InfoIcon from "@diligentcorp/atlas-react-bundle/icons/Info";

import { AiInaccuracyDisclaimer } from "./AiDisclaimers.js";

import {
  smartSummarySections,
  smartSummarySources,
  smartPrepInsights,
  smartPrepSources,
  smartRiskFindings,
  smartRiskEmptyCategories,
  smartRiskSources,
  SMART_RISK_DISCLAIMER,
  type SummarySection,
  type PrepInsight,
  type RiskFinding,
} from "../data/mockData.js";
import RichAIMessageContent, { parseCiteText, type CiteCounter } from "./RichAIMessageContent.js";
import type { Span } from "../data/hybrid-search.constants.js";

// ─── Shared building blocks ───────────────────────────────────────────────────

function DetailCard({ children }: { children: React.ReactNode }) {
  const { tokens: { semantic: { color, radius } } } = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: color.surface.default.value,
        border: `1px solid ${color.ui.divider.default.value}`,
        borderRadius: radius.lg.value,
        p: "24px",
      }}
    >
      {children}
    </Box>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  const { tokens: { semantic: { color, fontWeight } } } = useTheme();
  return (
    <Typography
      variant="h4"
      sx={{ fontWeight: fontWeight.emphasis.value, color: color.type.default.value }}
    >
      {children}
    </Typography>
  );
}

function CardTitle({ children }: { children: React.ReactNode }) {
  const { tokens: { semantic: { color, fontWeight } } } = useTheme();
  return (
    <Typography
      variant="h4"
      sx={{ fontWeight: fontWeight.emphasis.value, color: color.type.default.value }}
    >
      {children}
    </Typography>
  );
}

function SubLabel({ children }: { children: React.ReactNode }) {
  const { tokens: { semantic: { color, fontWeight } } } = useTheme();
  return (
    <Typography
      variant="body1"
      sx={{ fontWeight: fontWeight.emphasis.value, color: color.type.default.value }}
    >
      {children}
    </Typography>
  );
}

function BodyText({ children }: { children: React.ReactNode }) {
  const { tokens: { semantic: { color } } } = useTheme();
  return (
    <Typography
      sx={{
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: "22px",
        color: color.type.default.value,
      }}
    >
      {children}
    </Typography>
  );
}

function BulletList({ items }: { items: string[] }) {
  const { tokens: { semantic: { color } } } = useTheme();
  return (
    <Box
      component="ul"
      sx={{
        m: 0,
        pl: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        "& li": {
          fontSize: "14px",
          lineHeight: "22px",
          color: color.type.default.value,
        },
      }}
    >
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </Box>
  );
}

function FooterDisclaimer({ extra }: { extra?: string }) {
  const { tokens: { semantic: { color } } } = useTheme();
  return (
    <Stack gap="12px" sx={{ alignItems: "center", pt: "8px" }}>
      {extra && (
        <Typography
          sx={{
            fontSize: "12px",
            lineHeight: "16px",
            color: color.type.muted.value,
            textAlign: "center",
            maxWidth: "640px",
          }}
        >
          {extra}
        </Typography>
      )}
      <AiInaccuracyDisclaimer />
    </Stack>
  );
}

// ─── Smart Summary ────────────────────────────────────────────────────────────

const COLLAPSED_PARAGRAPH_LIMIT = 2;

/** Stable anchor IDs for the TOC to scroll to. */
export const SUMMARY_SECTION_IDS = {
  exec: "insight-summary-exec",
  detailed: "insight-summary-detailed",
};
export const summaryCardId = (sectionIdx: number, cardIdx: number) =>
  `insight-summary-${sectionIdx}-${cardIdx}`;
export const summaryParagraphId = (sectionIdx: number, cardIdx: number, pIdx: number) =>
  `insight-summary-${sectionIdx}-${cardIdx}-p-${pIdx}`;

function SummarySectionBlock({
  section,
  sectionIdx,
  cardSpans,
}: {
  section: SummarySection;
  sectionIdx: number;
  /** Precomputed citation spans per paragraph: cardSpans[cardIdx][paragraphIdx]. */
  cardSpans: (Span[] | null)[][];
}) {
  const [expanded, setExpanded] = useState(false);
  const sectionAnchorId =
    section.title === "Executive Summary"
      ? SUMMARY_SECTION_IDS.exec
      : section.title === "Detailed Summary"
        ? SUMMARY_SECTION_IDS.detailed
        : `insight-summary-section-${sectionIdx}`;
  return (
    <Stack gap="16px">
      <Box id={sectionAnchorId} sx={{ scrollMarginTop: "32px" }}>
        <SectionHeading>{section.title}</SectionHeading>
      </Box>
      {section.cards.map((card, idx) => {
        const isLastCard = idx === section.cards.length - 1;
        const showToggle = section.collapsible && isLastCard;
        const visibleParagraphs =
          showToggle && !expanded
            ? card.paragraphs.slice(0, COLLAPSED_PARAGRAPH_LIMIT)
            : card.paragraphs;
        return (
          <Box
            key={idx}
            id={summaryCardId(sectionIdx, idx)}
            sx={{ scrollMarginTop: "32px" }}
          >
            <DetailCard>
              <Stack gap="16px">
                {card.title && <CardTitle>{card.title}</CardTitle>}
                {visibleParagraphs.map((p, i) => {
                  const citeSpans = cardSpans[idx]?.[i] ?? null;
                  return (
                    <Stack
                      key={i}
                      id={summaryParagraphId(sectionIdx, idx, i)}
                      gap="4px"
                      sx={{ scrollMarginTop: "32px" }}
                    >
                      {p.label && <SubLabel>{p.label}</SubLabel>}
                      {p.text && (
                        citeSpans ? (
                          <Box
                            sx={({ tokens: { semantic: { color } } }) => ({
                              fontSize: "14px",
                              lineHeight: "22px",
                              color: color.type.default.value,
                            })}
                          >
                            <RichAIMessageContent
                              blocks={[{ type: "p", spans: citeSpans }]}
                              sources={smartSummarySources}
                              messageId={`summary-${sectionIdx}-${idx}-${i}`}
                              previewContext="insight"
                            />
                          </Box>
                        ) : (
                          <BodyText>{p.text}</BodyText>
                        )
                      )}
                    </Stack>
                  );
                })}
                {showToggle && card.paragraphs.length > COLLAPSED_PARAGRAPH_LIMIT && (
                  <Box sx={{ pt: "4px" }}>
                    <Button
                      variant="text"
                      size="small"
                      onClick={() => setExpanded((v) => !v)}
                      sx={{ alignSelf: "flex-start", px: 0 }}
                    >
                      {expanded ? "Show less" : "Show more"}
                    </Button>
                  </Box>
                )}
              </Stack>
            </DetailCard>
          </Box>
        );
      })}
    </Stack>
  );
}

export function InsightSummaryView() {
  // One counter for the whole tab so every citation chip gets a unique number,
  // even when multiple chips resolve to the same source document/page.
  const counter: CiteCounter = { n: 0 };
  return (
    <Stack gap="32px">
      {smartSummarySections.map((s, i) => {
        const cardSpans = s.cards.map((card) =>
          card.paragraphs.map((p) =>
            p.text && p.text.includes("[") ? parseCiteText(p.text, counter) : null,
          ),
        );
        return (
          <SummarySectionBlock key={s.title} section={s} sectionIdx={i} cardSpans={cardSpans} />
        );
      })}
      <FooterDisclaimer />
    </Stack>
  );
}

// ─── Smart Prep ───────────────────────────────────────────────────────────────

export const prepInsightId = (n: number) => `insight-prep-${n}`;

function PrepInsightCard({ insight, rationaleSpans }: { insight: PrepInsight; rationaleSpans: Span[] }) {
  return (
    <Box id={prepInsightId(insight.number)} sx={{ scrollMarginTop: "32px" }}>
    <DetailCard>
      <Stack gap="20px">
        <CardTitle>
          {insight.number}. {insight.title}
        </CardTitle>

        <Stack gap="8px">
          <SubLabel>Rationale</SubLabel>
          <Box
            sx={({ tokens: { semantic: { color } } }) => ({
              fontSize: "14px",
              lineHeight: "22px",
              color: color.type.default.value,
            })}
          >
            <RichAIMessageContent
              blocks={[{ type: "p", spans: rationaleSpans }]}
              sources={smartPrepSources}
              messageId={`prep-rationale-${insight.number}`}
              previewContext="insight"
            />
          </Box>
        </Stack>

        <Stack gap="8px">
          <SubLabel>Inference for the Organization</SubLabel>
          <BodyText>{insight.inference}</BodyText>
        </Stack>

        <Stack gap="8px">
          <SubLabel>Discussion topic</SubLabel>
          <BulletList items={insight.discussionTopics} />
        </Stack>

        <Stack gap="8px">
          <SubLabel>Suggested questions</SubLabel>
          <BulletList items={insight.suggestedQuestions} />
        </Stack>
      </Stack>
    </DetailCard>
    </Box>
  );
}

export function InsightPrepView() {
  const counter: CiteCounter = { n: 0 };
  return (
    <Stack gap="16px">
      {smartPrepInsights.map((insight) => (
        <PrepInsightCard
          key={insight.number}
          insight={insight}
          rationaleSpans={parseCiteText(insight.rationale, counter)}
        />
      ))}
      <FooterDisclaimer />
    </Stack>
  );
}

// ─── Smart Risk Scanner ───────────────────────────────────────────────────────

export const riskCategorySlug = (category: string) =>
  category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
export const riskFindingId = (category: string) => `insight-risk-${riskCategorySlug(category)}`;

function RiskFindingCard({
  finding,
  index,
  excerptSpans,
}: {
  finding: RiskFinding;
  index: number;
  /** Precomputed citation spans per excerpt. */
  excerptSpans: Span[][];
}) {
  return (
    <Box id={riskFindingId(finding.category)} sx={{ scrollMarginTop: "32px" }}>
    <DetailCard>
      <Stack gap="20px">
        <CardTitle>
          {index}. {finding.category}
        </CardTitle>

        <Stack gap="16px">
          <Typography
            variant="h4"
            sx={({ tokens: { semantic: { color, fontWeight } } }) => ({
              fontWeight: fontWeight.emphasis.value,
              color: color.type.default.value,
            })}
          >
            {finding.heading}
          </Typography>

          <Stack gap="8px">
            <SubLabel>Risk implications</SubLabel>
            <BodyText>{finding.riskImplications}</BodyText>
          </Stack>

          <Stack gap="8px">
            <SubLabel>Relevant excerpt</SubLabel>
            <Stack gap="12px" sx={{ "& .AtlasAIChatMessage": { backgroundColor: "transparent" }, "& li": { fontSize: "14px" } }}>
              {finding.excerpts.map((_ex, i) => {
                return (
                  <Box
                    key={i}
                    sx={({ tokens: { semantic: { color } } }) => ({
                      fontSize: "14px",
                      lineHeight: "22px",
                      color: color.type.default.value,
                    })}
                  >
                    <RichAIMessageContent
                      blocks={[{ type: "p", spans: excerptSpans[i] }]}
                      sources={smartRiskSources}
                      messageId={`risk-${finding.category}-${i}`}
                      previewContext="insight"
                    />
                  </Box>
                );
              })}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </DetailCard>
    </Box>
  );
}

function RiskEmptyCategoriesCard({ categories }: { categories: readonly string[] }) {
  const { tokens: { semantic: { color, fontWeight } } } = useTheme();
  return (
    <DetailCard>
      <Stack gap="20px">
        <Stack direction="row" gap="8px" alignItems="flex-start">
          <Box sx={{ flexShrink: 0, color: color.type.muted.value, display: "flex", mt: "2px" }}>
            <InfoIcon size="md" />
          </Box>
          <Typography
            variant="h4"
            sx={{ fontWeight: fontWeight.emphasis.value, color: color.type.default.value }}
          >
            No relevant content to highlight in these categories
          </Typography>
        </Stack>
        <Stack gap="16px" sx={{ pl: "32px" }}>
          {categories.map((c) => (
            <Typography
              key={c}
              sx={{
                fontSize: "14px",
                lineHeight: "22px",
                color: color.type.default.value,
              }}
            >
              {c}
            </Typography>
          ))}
        </Stack>
      </Stack>
    </DetailCard>
  );
}

export function InsightRiskView() {
  const counter: CiteCounter = { n: 0 };
  return (
    <Stack gap="16px">
      {smartRiskFindings.map((finding, i) => {
        const excerptSpans = finding.excerpts.map((ex, j) =>
          parseCiteText(
            `– Relevant Excerpt ${j + 1}: "${ex.text}" [${ex.citationIndex}]`,
            counter,
          ),
        );
        return (
          <RiskFindingCard
            key={finding.category}
            finding={finding}
            index={i + 1}
            excerptSpans={excerptSpans}
          />
        );
      })}
      {smartRiskEmptyCategories.length > 0 && (
        <RiskEmptyCategoriesCard categories={smartRiskEmptyCategories} />
      )}
      <FooterDisclaimer extra={SMART_RISK_DISCLAIMER} />
    </Stack>
  );
}
