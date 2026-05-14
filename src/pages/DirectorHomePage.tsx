import { useState } from "react";
import { useNavigate } from "react-router";
import { SectionHeader } from "@diligentcorp/atlas-react-bundle";

import { AiBadge, AiInaccuracyDisclaimer } from "../components/AiDisclaimers.js";
import BookMoreMenu from "../components/BookMoreMenu.js";
import { BookStateIcon } from "../components/BookStateIcons.js";
import SmartAssistWidget from "../components/SmartAssistWidget.js";
import SmartAssistOverlay from "../components/SmartAssistOverlay.js";
import SmartAssistSidenav from "../components/SmartAssistSidenav.js";
import { useSmartAssist } from "../context/SmartAssistContext.js";
import { directorHomeBooks, type AdminBook } from "../data/mockData.js";
import {
  Box,
  Button,
  IconButton,
  Stack,
  Tab,
  Tabs,
  Typography,
  useTheme,
} from "@mui/material";

// Sparkle Smart Summary action hidden in the table for now — keep the import
// commented so it's easy to restore alongside the row IconButton below.
// import AiSparkleIcon from "@diligentcorp/atlas-react-bundle/icons/AiSparkle";
import ChartMapIcon from "@diligentcorp/atlas-react-bundle/icons/ChartMap";
import CheckedIcon from "@diligentcorp/atlas-react-bundle/icons/Checked";
import DashboardIcon from "@diligentcorp/atlas-react-bundle/icons/Dashboard";
import ExpandDownIcon from "@diligentcorp/atlas-react-bundle/icons/ExpandDown";
import ExpandRightIcon from "@diligentcorp/atlas-react-bundle/icons/ExpandRight";
import ExpandUpIcon from "@diligentcorp/atlas-react-bundle/icons/ExpandUp";
import MoreIcon from "@diligentcorp/atlas-react-bundle/icons/More";

// ─── Typography helper ──────────────────────────────────────────────────────
// Spread an Atlas semantic font token (e.g. tokens.semantic.font.text.md)
// into MUI sx properties. Pass `weight` to override the token's fontWeight
// (e.g. tokens.semantic.fontWeight.emphasis.value for 600).
type FontToken = {
  fontFamily: { value: string };
  fontSize: { value: string };
  fontWeight: { value: number };
  lineHeight: { value: string };
  letterSpacing: { value: string };
};
const textSx = (t: FontToken, weight?: number) => ({
  fontFamily: t.fontFamily.value,
  fontSize: t.fontSize.value,
  fontWeight: weight ?? t.fontWeight.value,
  lineHeight: t.lineHeight.value,
  letterSpacing: t.letterSpacing.value,
});

// ─── Data ────────────────────────────────────────────────────────────────────
// The director Home page shows published books only — `directorHomeBooks`
// (shared with the admin book list) is already filtered to `status:
// "Published"`, so unpublished and archived books never appear here.

const INITIAL_BOOKS_VISIBLE = 4;

type CompetitorUpdate = {
  title: string;
  source: string;
  date: string;
  description: string;
};

const competitorUpdates: CompetitorUpdate[] = [
  {
    title: "Computershare Posts Higher Fiscal 2025 Management Earnings, Lower Revenue",
    source: "Market Screener - Latest",
    date: "Aug 13, 2025",
    description:
      "Computershare Limited reported an increase in management earnings for fiscal year 2025, despite experiencing a decrease in revenue.",
  },
  {
    title: "Computershare Posts Higher Fiscal 2025 Management Earnings, Lower Revenue",
    source: "Market Screener - Latest",
    date: "Aug 13, 2025",
    description:
      "Computershare Limited reported an increase in management earnings for fiscal year 2025, despite experiencing a decrease in revenue.",
  },
];

const exploreCompetitorUpdates: CompetitorUpdate[] = [
  {
    title: "Marriott finance chief Leeny Oberg to retire next year",
    source: "Market Screener - Latest",
    date: "August 6, 2025",
    description:
      "A key executive shift is underway at Marriott International. Leeny Oberg, the company's Chief Financial Officer since 2016, will retire on March 31, 2026, after navigating Marriott through pivotal periods including the COVID-19 pandemic. Jen Mason, a veteran Marriott executive currently serving as global treasurer and risk management officer, will succeed Oberg as CFO. Additionally, Shawn Hill is slated to",
  },
  {
    title: "Marriott finance chief Leeny Oberg to retire next year",
    source: "Market Screener - Latest",
    date: "August 6, 2025",
    description:
      "A key executive shift is underway at Marriott International. Leeny Oberg, the company's Chief Financial Officer since 2016, will retire on March 31, 2026, after navigating Marriott through pivotal periods including the COVID-19 pandemic. Jen Mason, a veteran Marriott executive currently serving as global treasurer and risk management officer, will succeed Oberg as CFO. Additionally, Shawn Hill is slated to",
  },
  {
    title: "Marriott finance chief Leeny Oberg to retire next year",
    source: "Market Screener - Latest",
    date: "August 6, 2025",
    description:
      "A key executive shift is underway at Marriott International. Leeny Oberg, the company's Chief Financial Officer since 2016, will retire on March 31, 2026, after navigating Marriott through pivotal periods including the COVID-19 pandemic. Jen Mason, a veteran Marriott executive currently serving as global treasurer and risk management officer, will succeed Oberg as CFO. Additionally, Shawn Hill is slated to",
  },
  {
    title: "Marriott finance chief Leeny Oberg to retire next year",
    source: "Market Screener - Latest",
    date: "August 6, 2025",
    description:
      "A key executive shift is underway at Marriott International. Leeny Oberg, the company's Chief Financial Officer since 2016, will retire on March 31, 2026, after navigating Marriott through pivotal periods including the COVID-19 pandemic. Jen Mason, a veteran Marriott executive currently serving as global treasurer and risk management officer, will succeed Oberg as CFO. Additionally, Shawn Hill is slated to",
  },
];

const feedFilters = [
  "All",
  "Marriott International",
  "Hilton Worldwide Holdings Inc.",
  "Hyatt Hotels Corporation",
  "Choice Hotels International",
  "Best Western Hotels & Resorts",
];

// ─── BookRow ─────────────────────────────────────────────────────────────────

function BookRow({
  book,
  isLast,
  onClick,
  onSmartSummary,
  onSmartPrep,
}: {
  book: AdminBook;
  isLast: boolean;
  onClick?: () => void;
  onSmartSummary?: () => void;
  onSmartPrep?: () => void;
}) {
  const {
    tokens: {
      semantic: { color, radius, font, fontWeight },
    },
  } = useTheme();

  const divider = `1px solid ${color.ui.divider.default.value}`;
  const [moreAnchor, setMoreAnchor] = useState<HTMLElement | null>(null);

  // All cells share the same 12px padding from Figma so cell vertical
  // axes line up regardless of which row has the Approvals button.
  const cellSx = {
    px: "12px" /* spacing/1_5 */,
    py: "12px" /* spacing/1_5 */,
    minHeight: 64,
    display: "flex",
    alignItems: "center",
  } as const;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "stretch",
        borderBottom: isLast ? "none" : divider,
      }}
    >
      {/* Book title cell — grows to fill remaining space */}
      <Box
        sx={{
          ...cellSx,
          flex: 1,
          minWidth: 240,
          gap: "12px",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            width: 40,
            height: 40,
            p: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#F9F9FC" /* surface/variant-subtle */,
            border: `1px solid ${color.ui.divider.default.value}`,
            borderRadius: radius.md.value,
            flexShrink: 0,
          }}
        >
          <BookStateIcon status={book.status} />
        </Box>
        <Typography
          component="button"
          type="button"
          onClick={onClick}
          sx={{
            ...textSx(font.text.md, fontWeight.emphasis.value),
            color: color.type.default.value,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            textAlign: "left",
            background: "transparent",
            border: "none",
            padding: 0,
            cursor: "pointer",
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
            "&:focus-visible": { outline: "2px solid #1C4EE4", outlineOffset: "2px", borderRadius: "2px" },
          }}
        >
          {book.title}
        </Typography>
      </Box>

      {/* Meeting date cell — fixed */}
      <Box
        sx={{
          ...cellSx,
          flex: "0 0 100px",
          minWidth: 80,
          maxWidth: 100,
        }}
      >
        <Typography
          sx={{
            ...textSx(font.text.md),
            color: color.type.muted.value,
          }}
        >
          {book.meetingDate}
        </Typography>
      </Box>

      {/* Action cell — locked width so the More icon sits at the same x in every
          row; Approvals uses the standard 12px cell padding, More stays right. */}
      <Box
        sx={{
          ...cellSx,
          flex: "0 0 220px",
          minWidth: "220px",
          maxWidth: "220px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        {book.approvals ? (
          <Box
            component="button"
            type="button"
            onClick={(e) => e.stopPropagation()}
            sx={{
              ...textSx(font.text.md, fontWeight.emphasis.value),
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              p: "4px",
              border: "none",
              background: "transparent",
              cursor: "pointer",
              flexShrink: 0,
              color: color.type.default.value,
              "&:hover .approvals-label": { textDecoration: "underline" },
              "&:focus-visible": { outline: "2px solid #1C4EE4", outlineOffset: "2px", borderRadius: "2px" },
            }}
          >
            <Box component="span" className="approvals-label">Approvals</Box>
            <Box
              component="span"
              sx={{
                ...textSx(font.text.sm, fontWeight.emphasis.value),
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "16px",
                height: "16px",
                minWidth: "16px",
                maxWidth: "16px",
                minHeight: "16px",
                maxHeight: "16px",
                flexShrink: 0,
                boxSizing: "border-box",
                borderRadius: "999px",
                backgroundColor: "#1C4EE4" /* status/new/default */,
                color: "#FFFFFF",
              }}
            >
              {book.approvals}
            </Box>
          </Box>
        ) : null}
        {/* Sparkle Smart Summary action — hidden for now, may return later.
        <IconButton
          aria-label="Smart Summary"
          color="ai"
          onClick={(e) => e.stopPropagation()}
          sx={{ p: "4px", borderRadius: "8px", width: 32, height: 32, flexShrink: 0 }}
        >
          <AiSparkleIcon size="lg" />
        </IconButton>
        */}
        <IconButton
          aria-label="More"
          onClick={(e) => {
            e.stopPropagation();
            setMoreAnchor(e.currentTarget);
          }}
          sx={{ p: "4px", borderRadius: "8px", width: 32, height: 32, flexShrink: 0, ml: "auto" }}
        >
          <MoreIcon size="lg" />
        </IconButton>
        <BookMoreMenu
          anchorEl={moreAnchor}
          onClose={() => setMoreAnchor(null)}
          onSmartSummary={onSmartSummary}
          onSmartPrep={onSmartPrep}
        />
      </Box>
    </Box>
  );
}

// ─── BooksGrid ───────────────────────────────────────────────────────────────

function BooksGrid({
  onOpenBook,
  onOpenInsight,
}: {
  onOpenBook: (id: string) => void;
  onOpenInsight: (id: string, insight: "summary" | "prep") => void;
}) {
  const {
    tokens: {
      semantic: { color, radius, font, fontWeight },
    },
  } = useTheme();
  const [showAll, setShowAll] = useState(false);
  const canCollapse = directorHomeBooks.length > INITIAL_BOOKS_VISIBLE;
  const visible = showAll
    ? directorHomeBooks
    : directorHomeBooks.slice(0, INITIAL_BOOKS_VISIBLE);

  return (
    <Box
      sx={{
        backgroundColor: color.surface.default.value,
        // Match the inner table's lg radius so overflow:hidden doesn't clip the
        // bottom corners (md < lg was shaving the bottom-left/right corners).
        borderRadius: radius.lg.value,
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          border: `1px solid ${color.ui.divider.default.value}`,
          borderRadius: `${radius.lg.value} ${radius.lg.value} 0 0`,
          overflow: "hidden",
        }}
      >
        {visible.map((book, i) => (
          <BookRow
            key={book.id}
            book={book}
            isLast={i === visible.length - 1}
            onClick={() => onOpenBook(book.id)}
            onSmartSummary={() => onOpenInsight(book.id, "summary")}
            onSmartPrep={() => onOpenInsight(book.id, "prep")}
          />
        ))}
      </Box>

      {/* Show all / Show less toggle */}
      {canCollapse && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            py: "8px",
            border: `1px solid ${color.ui.divider.default.value}`,
            borderTop: "none",
            borderRadius: "0 0 12px 12px",
          }}
        >
          <Button
            variant="text"
            onClick={() => setShowAll((v) => !v)}
            endIcon={
              showAll ? <ExpandUpIcon size="md" /> : <ExpandDownIcon size="md" />
            }
            sx={{
              ...textSx(font.text.sm, fontWeight.emphasis.value),
              minWidth: 0,
              p: "4px",
              borderRadius: "8px",
              color: color.type.default.value,
              textTransform: "none",
              "& .MuiButton-endIcon": { ml: "2px" },
            }}
          >
            {showAll ? "Show less" : "Show all"}
          </Button>
        </Box>
      )}
    </Box>
  );
}

// ─── CompetitorUpdatesCard ───────────────────────────────────────────────────

function CompetitorUpdatesCard() {
  const {
    tokens: {
      core: { spacing },
      semantic: { color, font, fontWeight },
    },
  } = useTheme();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Box sx={{ position: "relative" }}>
      {/* Header */}
      <Box>
        <Box
          component="button"
          type="button"
          aria-expanded={!collapsed}
          aria-controls="competitor-updates-body"
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
            // AI gradient horizontal stroke at the bottom of the header
            "&::after": {
              content: '""',
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              height: "1px",
              background:
                "linear-gradient(90deg, #BE0C1E 0%, #AB48DA 50%, #4069FE 100%)",
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
                ...textSx(font.text.body, fontWeight.emphasis.value),
                color: color.type.default.value,
              }}
            >
              Competitor updates
            </Typography>
            <AiBadge>Curated and summarised by AI</AiBadge>
          </Stack>
        </Box>
      </Box>

      {/* Body */}
      <Stack
        id="competitor-updates-body"
        hidden={collapsed}
        sx={{
          pt: spacing["2"].value,
          gap: spacing["2"].value,
          display: collapsed ? "none" : "flex",
        }}
      >
        {competitorUpdates.map((update, i) => (
          <Stack key={i} sx={{ gap: spacing["1_5"].value }}>
            <Stack sx={{ gap: spacing["1"].value }}>
              <Typography
                sx={{
                  ...textSx(font.text.md, fontWeight.emphasis.value),
                  color: color.type.default.value,
                }}
              >
                {update.title}
              </Typography>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                flexWrap="wrap"
                sx={{ rowGap: "4px" }}
              >
                <Typography
                  sx={{
                    ...textSx(font.text.sm),
                    color: color.type.muted.value,
                    pr: "4px",
                  }}
                >
                  {update.source}
                </Typography>
                <Typography
                  sx={{
                    ...textSx(font.text.sm),
                    color: color.type.muted.value,
                    textAlign: "right",
                  }}
                >
                  {update.date}
                </Typography>
              </Stack>
            </Stack>
            <Typography
              sx={{
                ...textSx(font.text.sm),
                color: color.type.muted.value,
              }}
            >
              {update.description}
            </Typography>
          </Stack>
        ))}

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="text"
            sx={{
              ...textSx(font.text.body, fontWeight.emphasis.value),
              color: color.type.default.value,
              textTransform: "none",
            }}
          >
            Read more updates
          </Button>
        </Box>

        <AiInaccuracyDisclaimer />
      </Stack>
    </Box>
  );
}

// ─── ExploreCompetitorCard ───────────────────────────────────────────────────

function ExploreCompetitorCard({ update }: { update: CompetitorUpdate }) {
  const {
    tokens: {
      core: { spacing },
      semantic: { color, radius, font, fontWeight },
    },
  } = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: color.surface.default.value,
        border: `1px solid ${color.ui.divider.default.value}`,
        borderRadius: radius.lg.value,
        p: spacing["3"].value /* 24px */,
        display: "flex",
        flexDirection: "column",
        gap: spacing["1_5"].value /* 12px */,
      }}
    >
      <Stack sx={{ gap: spacing["1"].value /* 8px */ }}>
        <Typography
          sx={{
            ...textSx(font.text.body, fontWeight.emphasis.value),
            color: color.type.default.value,
          }}
        >
          {update.title}
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          flexWrap="wrap"
          sx={{ rowGap: "4px", columnGap: "8px" }}
        >
          <Typography
            sx={{
              ...textSx(font.text.md),
              color: color.type.muted.value,
            }}
          >
            {update.date}
          </Typography>
          <Typography
            sx={{
              ...textSx(font.text.md),
              color: color.type.muted.value,
              textAlign: "right",
            }}
          >
            {update.source}
          </Typography>
        </Stack>
      </Stack>
      <Typography
        sx={{
          ...textSx(font.text.md),
          color: color.type.default.value,
        }}
      >
        {update.description}
      </Typography>
    </Box>
  );
}

// ─── CustomizeYourFeedFilter ─────────────────────────────────────────────────

function CustomizeYourFeedFilter() {
  const {
    tokens: {
      core: { spacing },
      semantic: { color, radius, font, fontWeight },
    },
  } = useTheme();
  const [selected, setSelected] = useState("All");

  return (
    <Box
      sx={{
        borderRadius: radius.lg.value,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        pt: "12px",
        pb: "16px",
        px: "12px",
      }}
    >
      <Stack sx={{ gap: "4px" }}>
        <Typography
          sx={{
            ...textSx(font.text.body, fontWeight.emphasis.value),
            color: color.type.default.value,
          }}
        >
          Customize your feed
        </Typography>
        <Typography
          sx={{
            ...textSx(font.text.sm),
            color: color.type.muted.value,
          }}
        >
          Company filter options are managed by your Boards administrator to ensure accuracy and relevancy. Contact your administrator to update your options.
        </Typography>
      </Stack>

      <Box
        sx={{
          pt: spacing["2"].value /* 16px */,
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
        }}
      >
        {feedFilters.map((label) => {
          const isSelected = label === selected;
          return (
            <Box
              key={label}
              component="button"
              type="button"
              onClick={() => setSelected(label)}
              sx={{
                height: "36px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 0,
                px: "8px",
                borderRadius: "9999px",
                cursor: "pointer",
                whiteSpace: "nowrap",
                backgroundColor: isSelected
                  ? color.selection.secondary.default.value
                  : "transparent",
                border: isSelected
                  ? `1px solid ${color.action.secondary.outline.value}`
                  : `1px solid ${color.outline.default.value}`,
                color: color.action.secondary.onSecondary.value,
                "&:focus-visible": {
                  outline: "2px solid #1C4EE4",
                  outlineOffset: "2px",
                },
              }}
            >
              {isSelected && (
                <Box
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: color.action.secondary.onSecondary.value,
                  }}
                >
                  <CheckedIcon size="md" />
                </Box>
              )}
              <Box
                component="span"
                sx={{
                  ...textSx(font.label.lg),
                  px: "8px",
                  color: color.action.secondary.onSecondary.value,
                }}
              >
                {label}
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

// ─── DirectorHomePage ────────────────────────────────────────────────────────

export default function DirectorHomePage() {
  const [tabValue, setTabValue] = useState(0);
  const {
    tokens: {
      core: { spacing },
      semantic: { color },
    },
    presets: { TabsPresets },
  } = useTheme();
  const aiGradient = `linear-gradient(90deg, ${color.ai.default.gradientStart.value} 0%, ${color.ai.default.gradientMiddle.value} 50%, ${color.ai.default.gradientEnd.value} 100%)`;
  const navigate = useNavigate();
  const {
    panelOpen,
    overlayOpen,
    openPanel,
    closePanel,
    closeOverlay,
    expandToOverlay,
    collapseToPanel,
    setActiveTab,
    setSelectedInsight,
  } = useSmartAssist();

  // Smart Summary / Smart Prep from a book's more-menu: open the book reader
  // with the docked panel showing that insight.
  const openInsightInBook = (id: string, insight: "summary" | "prep") => {
    setActiveTab(1);
    setSelectedInsight(insight);
    openPanel();
    navigate(`/director/books/${id}`);
  };

  return (
    <Box sx={{ display: "flex", height: "100%", overflow: "hidden" }}>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        minWidth: 0,
        height: "100%",
        overflow: "auto",
        background:
          "radial-gradient(125.08% 101.36% at 0% 0%, var(--lens-semantic-color-background-base-gradient-start, #f9f9fc) 30.53%, var(--lens-semantic-color-background-base-gradient-end, #fcfcff) 100%)",
      }}
    >
      {/* Hidden SVG defs — provides the AI gradient referenced by the Explore icon. */}
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden>
        <defs>
          <linearGradient
            id="director-tabs-ai-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#BE0C1E" />
            <stop offset="50%" stopColor="#AB48DA" />
            <stop offset="100%" stopColor="#4069FE" />
          </linearGradient>
        </defs>
      </svg>

      <Tabs
        value={tabValue}
        onChange={(_, v) => setTabValue(v)}
        {...TabsPresets.Tabs.alignToPageHeader}
        sx={{
          mt: "24px" /* spacing/3 */,
          // Edge-to-edge bottom divider: Tabs spans 100% of its container and
          // tabs are inset by content/margin (32px) via internal padding so the
          // border runs to the edges on both sides.
          width: "100%",
          pl: "32px" /* content/margin */,
          pr: panelOpen ? "12px" : "32px" /* content/margin */,
          transition: "padding-right 0.3s ease",
          minHeight: "40px",
          // Atlas paints the Tabs divider on `::after` at `z-index: -1`. Tabs
          // itself doesn't form a stacking context, so that pseudo escapes to
          // the nearest stacking-context ancestor and gets painted behind the
          // parent Box's radial-gradient background — making the divider
          // invisible. `isolation: isolate` forces Tabs to be its own stacking
          // context, containing the negative-z pseudo so it stays visible.
          isolation: "isolate",
          // No gap between tab buttons so the divider underneath is unbroken.
          "& .MuiTabs-flexContainer": {
            gap: 0,
          },
          // The Atlas Tabs theme paints the divider via Tabs root `::after`
          // (`zIndex: -1`, behind everything) and gives each Tab its own
          // `::after` (gray for unselected, colored for selected). Suppress
          // the per-tab gray underline so we get one unbroken divider across
          // the full Tabs width (the Tabs root `::after` shows through), and
          // let the selected tab's colored 2px underline paint above it.
          // Keep the divider at Atlas's default `zIndex: -1` — the Tab has
          // `zIndex: 3` and forms a stacking context, so its `::after` (the
          // 2px selected underline) paints above the divider. Bumping the
          // Tabs `::after` forward covers the bottom 1px of the 2px
          // underline, clipping it to half-height.
          // Inset the divider by the 32px horizontal padding so it spans the
          // inner content width (matching the tab row), not the outer box.
          "&::after": {
            left: "32px",
            right: "32px",
          },
          "& .MuiTab-root::after": {
            display: "none",
          },
          "& .MuiTab-root.Mui-selected::after": {
            display: "block",
            height: "2px",
            bottom: 0,
            top: "auto",
            borderTopLeftRadius: "2px",
            borderTopRightRadius: "2px",
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          },
          // Explore tab is the AI tab — its selected underline uses the Atlas
          // AI horizontal gradient instead of the standard selection color.
          "& #tab-explore.Mui-selected::after": {
            background: aiGradient,
            backgroundColor: "transparent",
          },
          "& .MuiTab-root": {
            minHeight: "40px",
            height: "40px",
            px: "20px",
            pt: "8px",
            pb: "8px",
          },
          // AI gradient fill for the Explore tab icon.
          "& #tab-explore svg path": {
            fill: "url(#director-tabs-ai-gradient)",
          },
        }}
      >
        <Tab
          icon={<DashboardIcon />}
          iconPosition="start"
          label="Overview"
          id="tab-overview"
          aria-controls="tabpanel-overview"
        />
        <Tab
          icon={<ChartMapIcon />}
          iconPosition="start"
          label="Explore"
          id="tab-explore"
          aria-controls="tabpanel-explore"
        />
      </Tabs>

      <div
        role="tabpanel"
        hidden={tabValue !== 0}
        id="tabpanel-overview"
        aria-labelledby="tab-overview"
      >
        {tabValue === 0 && (
          <Box
            sx={{
              display: "flex",
              gap: spacing["3"].value /* content/gutter = 24 */,
              pl: spacing["4"].value /* content/margin = 32 */,
              pr: panelOpen ? "12px" : spacing["4"].value /* content/margin = 32 */,
              pt: spacing["2"].value /* page-header-to-content = 16 */,
              pb: spacing["4"].value,
              alignItems: "flex-start",
              transition: "padding-right 0.3s ease",
            }}
          >
            {/* Left column — fluid */}
            <Stack
              sx={{
                flex: 1,
                minWidth: 0,
                gap: spacing["2"].value,
                pt: spacing["1_5"].value,
              }}
            >
              <SectionHeader
                title="Books"
                subtitle="Board materials, ordered by meeting date."
                headingLevel="h3"
                slotProps={{ title: { sx: { fontWeight: 600 } } }}
              />
              <BooksGrid
                onOpenBook={(id) => navigate(`/director/books/${id}`)}
                onOpenInsight={openInsightInBook}
              />
            </Stack>

            {/* Right column (343) — hidden while the Smart Assist panel is docked,
                so the panel takes the inline space without crowding the page. */}
            {!panelOpen && (
              <Box sx={{ width: 343, flexShrink: 0 }}>
                <Stack sx={{ gap: "24px" }}>
                  <SmartAssistWidget />
                  <Box
                    sx={{
                      height: "1px",
                      backgroundColor: color.ui.divider.default.value,
                    }}
                  />
                  <CompetitorUpdatesCard />
                </Stack>
              </Box>
            )}
          </Box>
        )}
      </div>

      <div
        role="tabpanel"
        hidden={tabValue !== 1}
        id="tabpanel-explore"
        aria-labelledby="tab-explore"
      >
        {tabValue === 1 && (
          <Box
            sx={{
              display: "flex",
              gap: spacing["3"].value /* content/gutter = 24 */,
              pl: spacing["4"].value /* content/margin = 32 */,
              pr: panelOpen ? "12px" : spacing["4"].value /* content/margin = 32 */,
              pt: spacing["2"].value /* page-header-to-content = 16 */,
              pb: spacing["4"].value,
              alignItems: "flex-start",
              transition: "padding-right 0.3s ease",
            }}
          >
            {/* Left column — fluid */}
            <Stack
              sx={{
                flex: 1,
                minWidth: 0,
                gap: spacing["2"].value /* 16px */,
                pt: spacing["1_5"].value /* 12px */,
              }}
            >
              <SectionHeader
                title="Competitor updates"
                subtitle={<AiBadge>Curated and summarized by AI.</AiBadge>}
                headingLevel="h3"
                slotProps={{ title: { sx: { fontWeight: 600 } } }}
              />
              <Stack sx={{ gap: "8px", pl: "1px" }}>
                {exploreCompetitorUpdates.map((update, i) => (
                  <ExploreCompetitorCard key={i} update={update} />
                ))}
              </Stack>
            </Stack>

            {/* Right column (343) */}
            <Box sx={{ width: 343, flexShrink: 0 }}>
              <CustomizeYourFeedFilter />
            </Box>
          </Box>
        )}
      </div>
    </Box>

      {/* ── Smart Assist sidenav (panel mode) ── */}
      <SmartAssistSidenav
        open={panelOpen}
        onClose={closePanel}
        onExpand={expandToOverlay}
        variant="persistent"
        audience="director"
      />

      {/* ── Smart Assist overlay (full-screen mode) ── */}
      <SmartAssistOverlay
        open={overlayOpen}
        onClose={closeOverlay}
        onCollapse={collapseToPanel}
        audience="director"
      />
    </Box>
  );
}
