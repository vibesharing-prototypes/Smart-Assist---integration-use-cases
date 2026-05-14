import { useState } from "react";
import { useNavigate } from "react-router";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";

import AiSparkleIcon from "@diligentcorp/atlas-react-bundle/icons/AiSparkle";
import ColumnsIcon from "@diligentcorp/atlas-react-bundle/icons/Columns";
import FilterIcon from "@diligentcorp/atlas-react-bundle/icons/Filter";
import HistoryIcon from "@diligentcorp/atlas-react-bundle/icons/History";
import MoreIcon from "@diligentcorp/atlas-react-bundle/icons/More";
import SearchIcon from "@diligentcorp/atlas-react-bundle/icons/Search";
import SortIcon from "@diligentcorp/atlas-react-bundle/icons/Sort";

import BookMoreMenu from "../components/BookMoreMenu.js";
import { BookStateIcon } from "../components/BookStateIcons.js";
import SmartAssistOverlay from "../components/SmartAssistOverlay.js";
import SmartAssistSidenav from "../components/SmartAssistSidenav.js";
import { useSmartAssist } from "../context/SmartAssistContext.js";
import { directorBooks, type AdminBook } from "../data/mockData.js";

// ─── Typography helper ──────────────────────────────────────────────────────

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
// Directors share the same book list as admins (see `directorBooks` in
// mockData) — unpublished books are filtered out there, so directors only ever
// see published + archived books. "Recently visited" is a curated subset.

const recentlyVisited: AdminBook[] = [
  directorBooks[2],
  directorBooks[3],
  directorBooks[0],
  directorBooks[4],
  directorBooks[5],
  directorBooks[1],
].filter(Boolean);

// ─── Column widths ───────────────────────────────────────────────────────────

const COL = {
  meetingDate: 156,
  committee: 220,
  action: 220,
} as const;

// ─── Header row ──────────────────────────────────────────────────────────────

function HeaderCell({
  label,
  width,
  flex,
  showSort = true,
  paddingLeft,
}: {
  label: string;
  width?: number;
  flex?: number;
  showSort?: boolean;
  paddingLeft?: string;
}) {
  const {
    tokens: {
      semantic: { color, font, fontWeight },
    },
  } = useTheme();
  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        width: width ? `${width}px` : undefined,
        flex,
        flexShrink: flex ? undefined : 0,
        minWidth: 0,
        height: "44px",
        pl: paddingLeft ?? "12px",
        pr: "12px",
        gap: "4px",
      }}
    >
      <Typography
        sx={{
          ...textSx(font.text.sm, fontWeight.emphasis.value),
          flex: 1,
          color: color.type.default.value,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </Typography>
      {showSort && (
        <IconButton
          aria-label={`Sort by ${label}`}
          size="small"
          sx={{ width: 24, height: 24, color: color.type.muted.value }}
        >
          <SortIcon size="md" />
        </IconButton>
      )}
    </Stack>
  );
}

// ─── Body row ────────────────────────────────────────────────────────────────

function BookRow({
  book,
  isLast,
  showCommittee,
  onClick,
  onSmartSummary,
  onSmartPrep,
}: {
  book: AdminBook;
  isLast: boolean;
  showCommittee: boolean;
  onClick?: () => void;
  onSmartSummary?: () => void;
  onSmartPrep?: () => void;
}) {
  const isArchived = book.status === "Archived";
  const {
    tokens: {
      semantic: { color, radius, font, fontWeight },
    },
  } = useTheme();

  const divider = `1px solid ${color.ui.divider.default.value}`;
  const [moreAnchor, setMoreAnchor] = useState<HTMLElement | null>(null);
  const cellSx = {
    px: "12px",
    py: "12px",
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
      {/* Title */}
      <Box sx={{ ...cellSx, flex: 1, minWidth: 240, gap: "12px", overflow: "hidden" }}>
        <Box
          sx={{
            width: 40,
            height: 40,
            p: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#F9F9FC",
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
            // Archived books read as muted on the director Books page.
            color: isArchived ? color.type.muted.value : color.type.default.value,
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

      {/* Meeting date */}
      <Box
        sx={{
          ...cellSx,
          flex: `0 0 ${COL.meetingDate}px`,
          minWidth: COL.meetingDate,
          maxWidth: COL.meetingDate,
        }}
      >
        <Typography sx={{ ...textSx(font.text.md), color: color.type.muted.value }}>
          {book.meetingDate}
        </Typography>
      </Box>

      {/* Committee */}
      {showCommittee && (
        <Box
          sx={{
            ...cellSx,
            flex: `0 0 ${COL.committee}px`,
            minWidth: COL.committee,
            maxWidth: COL.committee,
            gap: "4px",
            overflow: "hidden",
          }}
        >
          <Typography
            sx={{
              ...textSx(font.text.md),
              color: color.type.muted.value,
              flex: 1,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {book.committees[0]}
          </Typography>
          {book.extraCommittees > 0 && (
            <Button
              variant="text"
              size="small"
              onClick={(e) => e.stopPropagation()}
              sx={{
                ...textSx(font.text.sm, fontWeight.emphasis.value),
                minWidth: 0,
                px: "6px",
                py: "2px",
                color: color.type.muted.value,
                textTransform: "none",
                flexShrink: 0,
              }}
            >
              +{book.extraCommittees}
            </Button>
          )}
        </Box>
      )}

      {/* Actions */}
      <Box
        sx={{
          ...cellSx,
          flex: `0 0 ${COL.action}px`,
          minWidth: COL.action,
          maxWidth: COL.action,
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
            <Box component="span" className="approvals-label">
              Approvals
            </Box>
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
                backgroundColor: "#1C4EE4",
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

// ─── Recently visited card ───────────────────────────────────────────────────

function RecentlyVisitedCard({
  book,
  onClick,
}: {
  book: AdminBook;
  onClick?: () => void;
}) {
  const {
    tokens: {
      semantic: { color, font, fontWeight },
    },
  } = useTheme();

  return (
    <Box
      component="button"
      type="button"
      onClick={onClick}
      sx={{
        flexShrink: 0,
        width: 248,
        minWidth: 248,
        maxWidth: 248,
        backgroundColor: color.surface.default.value,
        border: `1px solid ${color.ui.divider.default.value}`,
        borderRadius: "16px",
        pl: "16px",
        pr: "20px",
        py: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "4px",
        textAlign: "left",
        cursor: "pointer",
        transition: "border-color 0.15s ease, box-shadow 0.15s ease",
        "&:hover": {
          borderColor: color.outline.default.value,
          boxShadow: "0 1px 2px rgba(0, 0, 0, 0.04)",
        },
        "&:focus-visible": {
          outline: "2px solid #1C4EE4",
          outlineOffset: "2px",
        },
      }}
    >
      <Typography
        sx={{
          ...textSx(font.text.md, fontWeight.emphasis.value),
          color: color.type.default.value,
          width: "100%",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {book.title}
      </Typography>
      <Typography
        sx={{
          ...textSx(font.text.md),
          color: color.type.muted.value,
        }}
      >
        {book.meetingDate}
      </Typography>
    </Box>
  );
}

// ─── DirectorBooksPage ───────────────────────────────────────────────────────

export default function DirectorBooksPage() {
  const {
    tokens: {
      core: { spacing },
      semantic: { color, radius, font, fontWeight },
    },
  } = useTheme();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const {
    panelOpen,
    overlayOpen,
    openSmartAssist,
    openPanel,
    closePanel,
    closeOverlay,
    expandToOverlay,
    collapseToPanel,
    setActiveTab,
    setSelectedInsight,
  } = useSmartAssist();

  const showCommittee = !panelOpen;

  // Smart Summary / Smart Prep from a book's more-menu: open the book reader
  // with the docked panel showing that insight.
  const openInsightInBook = (insight: "summary" | "prep", bookPath: string) => {
    setActiveTab(1);
    setSelectedInsight(insight);
    openPanel();
    navigate(bookPath);
  };

  const filtered = directorBooks.filter((b) =>
    b.title.toLowerCase().includes(searchValue.toLowerCase()),
  );

  // Title col left padding for the header row so "Title" sits over the body
  // title text (40px icon + 12px gap + 12px cell px = 64px; back off 4px so
  // the sort caret stays inside the title column).
  const titleHeaderPaddingLeft = "60px";

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
        <Box
          sx={{
            pl: spacing["4"].value,
            pr: panelOpen ? "12px" : spacing["4"].value,
            pt: spacing["3"].value,
            pb: spacing["4"].value,
            transition: "padding-right 0.3s ease",
          }}
        >
          {/* Page heading */}
          <Stack direction="row" alignItems="center" gap="16px">
            <Typography
              component="h1"
              sx={{
                fontSize: "24px",
                fontWeight: 600,
                lineHeight: "32px",
                color: color.type.default.value,
                flex: 1,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              Books
            </Typography>

            {!panelOpen && !overlayOpen && (
              <Button
                variant="outlined"
                color="ai"
                startIcon={<AiSparkleIcon size="lg" />}
                onClick={openSmartAssist}
                sx={{
                  fontWeight: 600,
                  fontSize: "16px",
                  borderRadius: "12px",
                  px: "12px",
                  border: "1px solid transparent !important",
                  backgroundColor: "transparent !important",
                  backgroundImage:
                    "linear-gradient(#fff, #fff), linear-gradient(128deg, #b11f62 17.49%, #1c4ee4 100%) !important",
                  backgroundOrigin: "border-box !important",
                  backgroundClip: "padding-box, border-box !important",
                  "&::before": { display: "none" },
                  "&:hover, &:not(.Mui-disabled):hover": {
                    border: "1px solid transparent !important",
                    backgroundColor: "transparent !important",
                    backgroundImage:
                      "linear-gradient(#f3f3f3, #f3f3f3), linear-gradient(128deg, #b11f62 17.49%, #1c4ee4 100%) !important",
                    backgroundOrigin: "border-box !important",
                    backgroundClip: "padding-box, border-box !important",
                  },
                  "&:hover::before, &::after, &:hover::after": { display: "none" },
                }}
              >
                Smart Assist
              </Button>
            )}
          </Stack>

          {/* Recently visited */}
          <Stack sx={{ mt: "24px", gap: "12px" }}>
            <Stack direction="row" alignItems="center" gap="8px">
              <Box sx={{ display: "inline-flex", color: color.type.default.value }}>
                <HistoryIcon size="md" />
              </Box>
              <Typography
                sx={{
                  ...textSx(font.text.body),
                  color: color.type.default.value,
                }}
              >
                Recently visited
              </Typography>
            </Stack>
            <Box
              sx={{
                display: "flex",
                gap: "16px",
                overflowX: "auto",
                overflowY: "hidden",
                pb: "4px",
                // Hide horizontal scrollbar visually while keeping scroll behavior.
                scrollbarWidth: "none",
                "&::-webkit-scrollbar": { display: "none" },
              }}
            >
              {recentlyVisited.map((book) => (
                <RecentlyVisitedCard
                  key={book.id}
                  book={book}
                  onClick={() => navigate(`/director/books/${book.id}`)}
                />
              ))}
            </Box>
          </Stack>

          {/* Toolbar */}
          <Stack direction="row" alignItems="center" gap="16px" sx={{ mt: "24px" }}>
            <TextField
              placeholder="Search"
              size="small"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon size="lg" />
                  </InputAdornment>
                ),
              }}
              sx={{ width: "300px" }}
            />
            <Button
              variant="text"
              startIcon={<FilterIcon size="lg" />}
              sx={{ color: color.type.default.value, textTransform: "none" }}
            >
              Filter
            </Button>
            <Button
              variant="text"
              startIcon={<ColumnsIcon size="lg" />}
              sx={{ color: color.type.default.value, textTransform: "none" }}
            >
              Column
            </Button>
          </Stack>

          {/* Table */}
          <Box sx={{ mt: "16px" }}>
            {/* Column headers */}
            <Stack direction="row" alignItems="stretch">
              <HeaderCell label="Title" flex={1} paddingLeft={titleHeaderPaddingLeft} />
              <HeaderCell
                label="Meeting date"
                width={COL.meetingDate}
              />
              {showCommittee && (
                <HeaderCell
                  label="Committee"
                  width={COL.committee}
                  showSort={false}
                />
              )}
              <Box sx={{ width: `${COL.action}px`, flexShrink: 0 }} />
            </Stack>

            {/* Body card */}
            <Box
              sx={{
                backgroundColor: color.surface.default.value,
                border: `1px solid ${color.ui.divider.default.value}`,
                borderRadius: radius.lg.value,
                overflow: "hidden",
              }}
            >
              {filtered.map((book, i) => (
                <BookRow
                  key={book.id}
                  book={book}
                  isLast={i === filtered.length - 1}
                  showCommittee={showCommittee}
                  onClick={() => navigate(`/director/books/${book.id}`)}
                  onSmartSummary={() => openInsightInBook("summary", `/director/books/${book.id}`)}
                  onSmartPrep={() => openInsightInBook("prep", `/director/books/${book.id}`)}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>

      <SmartAssistSidenav
        open={panelOpen}
        onClose={closePanel}
        onExpand={expandToOverlay}
        variant="persistent"
        audience="director"
      />
      <SmartAssistOverlay
        open={overlayOpen}
        onClose={closeOverlay}
        onCollapse={collapseToPanel}
        audience="director"
      />
    </Box>
  );
}
