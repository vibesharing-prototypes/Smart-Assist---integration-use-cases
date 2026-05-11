import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import {
  Box,
  Button,
  Checkbox,
  Chip,
  IconButton,
  Stack,
  Tab,
  Tabs,
  Typography,
  useTheme,
} from "@mui/material";

import AiSparkleIcon from "@diligentcorp/atlas-react-bundle/icons/AiSparkle";
import CaretLeftIcon from "@diligentcorp/atlas-react-bundle/icons/CaretLeft";
import CaretRightIcon from "@diligentcorp/atlas-react-bundle/icons/CaretRight";
import ExpandRightIcon from "@diligentcorp/atlas-react-bundle/icons/ExpandRight";
import ZoomInIcon from "@diligentcorp/atlas-react-bundle/icons/ZoomIn";
import ZoomOutIcon from "@diligentcorp/atlas-react-bundle/icons/ZoomOut";
import CollapseListIcon from "@diligentcorp/atlas-react-bundle/icons/CollapseList";
import AddCircleIcon from "@diligentcorp/atlas-react-bundle/icons/AddCircle";
import MoreIcon from "@diligentcorp/atlas-react-bundle/icons/More";
import ExpandDownIcon from "@diligentcorp/atlas-react-bundle/icons/ExpandDown";
import CollapseSideNavIcon from "@diligentcorp/atlas-react-bundle/icons/CollapseSideNav";
import ExpandSideNavIcon from "@diligentcorp/atlas-react-bundle/icons/ExpandSideNav";
import SelectToolIcon from "@diligentcorp/atlas-react-bundle/icons/SelectTool";
import LinkIcon from "@diligentcorp/atlas-react-bundle/icons/Link";
import FullscreenIcon from "@diligentcorp/atlas-react-bundle/icons/Fullscreen";
import FacePagesIcon from "@diligentcorp/atlas-react-bundle/icons/FacePages";
import ExpandListIcon from "@diligentcorp/atlas-react-bundle/icons/ExpandList";

import DocumentIcon from "@diligentcorp/atlas-react-bundle/icons/Document";

import PageIcon from "@diligentcorp/atlas-react-bundle/icons/Page";
import KeyIcon from "@diligentcorp/atlas-react-bundle/icons/Key";

import SmartAssistSidenav from "../components/SmartAssistSidenav.js";
import SmartAssistOverlay from "../components/SmartAssistOverlay.js";
import { useCitationPreview } from "../context/CitationPreviewContext.js";
import { useSmartAssist } from "../context/SmartAssistContext.js";
import { DOCUMENTS, getBookPageForCitation, type DocumentId } from "../data/documents.js";
import {
  type BookTab,
  type BookDocument,
  adminBooks,
  bookStructure,
  reviewNavStructure,
  type NavItem,
} from "../data/mockData.js";


// ─── Build book tab ───────────────────────────────────────────────────────────

type TreeNode = BookTab | BookDocument;

const INDENT_PER_LEVEL = 48;

function DocumentRow({
  doc,
  depth,
  selected,
  onToggle,
  showDivider,
}: {
  doc: BookDocument;
  depth: number;
  selected: boolean;
  onToggle: (id: string) => void;
  showDivider: boolean;
}) {
  const { tokens: { semantic: { color } } } = useTheme();
  const notApproved = doc.status === "not_approved";

  return (
    <Stack direction="row" alignItems="stretch" sx={{ width: "100%" }}>
      <Box sx={{ width: `${depth * INDENT_PER_LEVEL}px`, flexShrink: 0 }} />
      <Stack
        direction="row"
        alignItems="center"
        gap="12px"
        sx={{
          flex: 1,
          height: "64px",
          px: "12px",
          py: "12px",
          borderRadius: "12px",
          position: "relative",
          backgroundColor: selected ? color.accent.blue.background.value : "transparent",
          "&:hover": { backgroundColor: selected ? color.accent.blue.background.value : color.surface.variant.value },
          ...(showDivider && {
            "&::after": {
              content: '""',
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              height: "1px",
              backgroundColor: color.ui.divider.default.value,
            },
          }),
        }}
      >
        <Checkbox
          checked={selected}
          onChange={() => onToggle(doc.id)}
          sx={{ p: 0, width: 24, height: 24 }}
        />
        <Box sx={{ width: 24, height: 24, color: color.type.default.value, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <DocumentIcon size="md" />
        </Box>
        <Stack sx={{ flex: 1, minWidth: 0, pl: "4px" }}>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "24px",
              letterSpacing: "0.2px",
              color: color.type.default.value,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {doc.name}
          </Typography>
          {notApproved ? (
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "20px",
                letterSpacing: "0.2px",
                color: color.status.error.text.value,
              }}
            >
              Not approved
            </Typography>
          ) : doc.size ? (
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "20px",
                letterSpacing: "0.2px",
                color: color.type.default.value,
              }}
            >
              {doc.size}
            </Typography>
          ) : null}
        </Stack>
        {notApproved && (
          <Button variant="text" size="medium" sx={{ fontWeight: 600, fontSize: "16px", px: "12px" }}>
            Approve
          </Button>
        )}
        <IconButton size="medium" sx={{ width: 40, height: 40 }}>
          <MoreIcon size="md" />
        </IconButton>
      </Stack>
    </Stack>
  );
}

function TabRow({
  tab,
  depth,
  selected,
  onToggle,
  expanded,
  onToggleExpand,
}: {
  tab: BookTab;
  depth: number;
  selected: boolean;
  onToggle: (id: string) => void;
  expanded: boolean;
  onToggleExpand: (id: string) => void;
}) {
  const { tokens: { semantic: { color } } } = useTheme();

  return (
    <Stack direction="row" alignItems="stretch" sx={{ width: "100%" }}>
      <Box sx={{ width: `${depth * INDENT_PER_LEVEL}px`, flexShrink: 0 }} />
      <Stack
        direction="row"
        alignItems="center"
        gap="12px"
        sx={{
          flex: 1,
          height: "64px",
          px: "12px",
          py: "12px",
          borderRadius: "12px",
          border: `1px solid ${color.ui.divider.default.value}`,
          backgroundColor: selected ? color.accent.blue.background.value : color.surface.default.value,
          "&:hover": { backgroundColor: selected ? color.accent.blue.background.value : color.surface.variant.value },
        }}
      >
        <Checkbox
          checked={selected}
          onChange={() => onToggle(tab.id)}
          sx={{ p: 0, width: 24, height: 24 }}
        />
        <IconButton
          size="small"
          onClick={() => onToggleExpand(tab.id)}
          sx={{ width: 24, height: 24, p: 0 }}
        >
          {expanded ? <ExpandDownIcon size="md" /> : <ExpandRightIcon size="md" />}
        </IconButton>
        <Typography
          sx={{
            flex: 1,
            minWidth: 0,
            fontSize: "16px",
            fontWeight: 600,
            lineHeight: "24px",
            letterSpacing: "0.2px",
            color: color.type.default.value,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {tab.name}
        </Typography>
        <IconButton size="medium" sx={{ width: 40, height: 40 }}>
          <MoreIcon size="md" />
        </IconButton>
      </Stack>
    </Stack>
  );
}

function BuildBookTree({
  nodes,
  depth = 0,
  selected,
  onToggle,
  expanded,
  onToggleExpand,
}: {
  nodes: TreeNode[];
  depth?: number;
  selected: Set<string>;
  onToggle: (id: string) => void;
  expanded: Set<string>;
  onToggleExpand: (id: string) => void;
}) {
  // Group consecutive documents into a "files" block (rendered with 0 gap),
  // separating them from tab groups (rendered with 4px gap). Top-level uses 12px.
  type Group =
    | { kind: "files"; items: BookDocument[] }
    | { kind: "tab"; node: BookTab };
  const groups: Group[] = [];
  let fileBlock: BookDocument[] = [];
  for (const node of nodes) {
    if (node.type === "document") {
      fileBlock.push(node);
    } else {
      if (fileBlock.length) { groups.push({ kind: "files", items: fileBlock }); fileBlock = []; }
      groups.push({ kind: "tab", node });
    }
  }
  if (fileBlock.length) groups.push({ kind: "files", items: fileBlock });

  return (
    <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
      {groups.map((g, i) => {
        const prev = groups[i - 1];
        // 12px between sibling tabs (at any depth); 4px between a files block
        // and an adjacent tab; 0 for the first group.
        const mt =
          i === 0
            ? "0px"
            : g.kind === "tab" && prev?.kind === "tab"
              ? "12px"
              : "4px";

        if (g.kind === "files") {
          const isLastGroup = i === groups.length - 1;
          return (
            <Box key={`f-${i}`} sx={{ width: "100%", mt }}>
              {g.items.map((doc, j) => {
                const isLastDoc = j === g.items.length - 1;
                // Hide divider on the very last element within this parent tab
                const showDivider = !(isLastGroup && isLastDoc);
                return (
                  <DocumentRow
                    key={doc.id}
                    doc={doc}
                    depth={depth}
                    selected={selected.has(doc.id)}
                    onToggle={onToggle}
                    showDivider={showDivider}
                  />
                );
              })}
            </Box>
          );
        }
        const tab = g.node;
        const isExpanded = expanded.has(tab.id);
        return (
          <Stack key={tab.id} gap="4px" sx={{ width: "100%", mt }}>
            <TabRow
              tab={tab}
              depth={depth}
              selected={selected.has(tab.id)}
              onToggle={onToggle}
              expanded={isExpanded}
              onToggleExpand={onToggleExpand}
            />
            {isExpanded && tab.children.length > 0 && (
              <BuildBookTree
                nodes={tab.children}
                depth={depth + 1}
                selected={selected}
                onToggle={onToggle}
                expanded={expanded}
                onToggleExpand={onToggleExpand}
              />
            )}
          </Stack>
        );
      })}
    </Box>
  );
}

function BuildBookTab({ bookTitle: _bookTitle }: { bookTitle: string }) {
  const { tokens: { semantic: { color } } } = useTheme();

  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [expanded, setExpanded] = useState<Set<string>>(
    new Set(["t1", "t1-1", "t1-1-2"])
  );

  const toggleSelected = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleExpanded = (id: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <Box sx={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
      {/* Toolbar */}
      <Box
        sx={{
          px: "32px",
          pb: "10px",
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          alignItems: "center",
        }}
      >
        {/* Left group: search + selection + actions */}
        <Stack direction="row" alignItems="center" gap="8px" sx={{ flex: 1 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              border: `1px solid ${color.ui.divider.default.value}`,
              borderRadius: "6px",
              px: "10px",
              py: "4px",
              gap: "6px",
              width: "220px",
              backgroundColor: color.surface.default.value,
            }}
          >
            <Typography sx={{ fontSize: "13px", color: color.type.muted.value, flex: 1 }}>Search</Typography>
          </Box>
          <Button variant="text" endIcon={<ExpandDownIcon size="md" />} sx={{ fontSize: "13px", fontWeight: 600 }}>
            Actions
          </Button>
        </Stack>

        {/* Right group: wraps to line 2 when narrow */}
        <Stack direction="row" alignItems="center" gap="8px">
          <Button variant="text" startIcon={<CollapseListIcon size="md" />} sx={{ fontSize: "13px", fontWeight: 600 }}>
            Collapse
          </Button>
          <Button variant="text" startIcon={<AddCircleIcon size="md" />} sx={{ fontSize: "13px", fontWeight: 600 }}>
            Add tab
          </Button>
          <Button variant="outlined" sx={{ fontSize: "13px", fontWeight: 600 }}>Approve all</Button>
        </Stack>
      </Box>

      {/* Tree */}
      <Box sx={{ flex: 1, overflowY: "auto", px: "32px" }}>
        <BuildBookTree
          nodes={bookStructure}
          selected={selected}
          onToggle={toggleSelected}
          expanded={expanded}
          onToggleExpand={toggleExpanded}
        />
      </Box>
    </Box>
  );
}

// ─── Review book tab ──────────────────────────────────────────────────────────

function NavTreeItem({ item, activeId, onSelect, depth = 0 }: {
  item: NavItem;
  activeId: string;
  onSelect: (id: string) => void;
  depth?: number;
}) {
  const { tokens: { semantic: { color } } } = useTheme();
  const [expanded, setExpanded] = useState(item.expanded ?? false);
  const isActive = item.id === activeId;

  // Items starting with a digit or "Agenda" are section headings; everything else is a document
  const isSection = /^\d|^Agenda/.test(item.label);

  if (isSection) {
    return (
      <Box>
        <Stack
          direction="row"
          alignItems="center"
          sx={{
            pl: `${16 + depth * 16}px`,
            pr: "4px",
            py: "7px",
            cursor: "pointer",
            "&:hover": { backgroundColor: color.surface.variant.value },
          }}
          onClick={() => { onSelect(item.id); if (item.children) setExpanded((v) => !v); }}
        >
          <Typography
            sx={{
              fontSize: "13px",
              color: color.type.default.value,
              flex: 1,
              lineHeight: "18px",
            }}
          >
            {item.label}
          </Typography>
          <IconButton size="small" sx={{ p: "2px", flexShrink: 0 }}>
            {item.children && expanded
              ? <ExpandDownIcon size="md" />
              : <ExpandRightIcon size="md" />}
          </IconButton>
        </Stack>
        {expanded && item.children && (
          <Box>
            {item.children.map((child) => (
              <NavTreeItem
                key={child.id}
                item={child}
                activeId={activeId}
                onSelect={onSelect}
                depth={depth + 1}
              />
            ))}
          </Box>
        )}
      </Box>
    );
  }

  // Document item
  return (
    <Stack
      direction="row"
      alignItems="flex-start"
      gap="6px"
      sx={{
        pl: `${16 + depth * 16}px`,
        pr: "8px",
        py: "6px",
        cursor: "pointer",
        borderLeft: isActive
          ? `2px solid ${color.action.primary.default.value}`
          : "2px solid transparent",
        backgroundColor: isActive ? color.surface.variant.value : "transparent",
        "&:hover": { backgroundColor: color.surface.variant.value },
      }}
      onClick={() => onSelect(item.id)}
    >
      <Box sx={{ mt: "1px", flexShrink: 0, color: color.type.muted.value }}>
        <PageIcon size="md" />
      </Box>
      <Typography
        sx={{
          fontSize: "12px",
          color: color.type.default.value,
          lineHeight: "18px",
          flex: 1,
          overflow: "hidden",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
        }}
      >
        {item.label}
      </Typography>
      {item.restricted && (
        <Box sx={{ mt: "1px", flexShrink: 0, color: color.type.muted.value }}>
          <KeyIcon size="md" />
        </Box>
      )}
    </Stack>
  );
}

// Page images exported from Figma — file numbers 12..21 map to printed pages 1..10
// (page-12 is the cover; page-21 is the back cover).
const PAGE_IMAGES = Array.from({ length: 10 }, (_, i) => `/boardroom-pages/page-${12 + i}.png`);
const TOTAL_PAGES = PAGE_IMAGES.length;
const ZOOM_LEVELS = [50, 75, 100, 125, 150, 200];

function ReviewBookTab({
  bookTitle: _bookTitle,
  assistOpen,
  forcedPage,
  forcedPageNonce,
  forcedDocumentId,
}: {
  bookTitle: string;
  assistOpen: boolean;
  forcedPage?: number;
  forcedPageNonce?: number;
  forcedDocumentId?: DocumentId;
}) {
  const { tokens: { semantic: { color } } } = useTheme();
  const [navOpen, setNavOpen] = useState(true);
  const [activeNavId, setActiveNavId] = useState("s1-2-1-1-d1");
  const [currentPage, setCurrentPage] = useState(forcedPage ?? 1);
  const [zoomIndex, setZoomIndex] = useState(2); // 100%
  const totalPages = TOTAL_PAGES;
  const zoomPct = ZOOM_LEVELS[zoomIndex];
  const pageRefs = useRef<(HTMLDivElement | null)[]>([]);

  // When a document is "opened" via the citation preview's Open button, overlay
  // its pages onto the assembled book at the document's bookStartPage offset so
  // the main viewport mirrors what the AI preview panel was showing.
  const pageImages = (() => {
    if (!forcedDocumentId) return PAGE_IMAGES;
    const doc = DOCUMENTS[forcedDocumentId];
    if (!doc) return PAGE_IMAGES;
    const imgs = [...PAGE_IMAGES];
    doc.pages.forEach((p, i) => {
      const bookIdx = doc.bookStartPage - 1 + i;
      if (bookIdx >= 0 && bookIdx < imgs.length) imgs[bookIdx] = p.image;
    });
    return imgs;
  })();

  useEffect(() => {
    if (assistOpen) setNavOpen(false);
  }, [assistOpen]);

  // Externally-driven page change (Open button). forcedPageNonce makes repeat
  // triggers to the same page fire again.
  useEffect(() => {
    if (typeof forcedPage === "number") {
      setCurrentPage(Math.min(TOTAL_PAGES, Math.max(1, forcedPage)));
    }
  }, [forcedPage, forcedPageNonce]);

  useEffect(() => {
    pageRefs.current[currentPage - 1]?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [currentPage]);

  const cardSx = {
    borderRadius: "12px",
    outline: `1px ${color.ui.divider.default.value} solid`,
    outlineOffset: "-1px",
    backgroundColor: color.surface.default.value,
  } as const;

  const toolIconSx = {
    width: 24, height: 24, display: "flex", alignItems: "center",
    justifyContent: "center", cursor: "pointer", flexShrink: 0,
  } as const;

  return (
    <Box sx={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", ml: "32px" }}>

      {/* ── Floating top toolbar ── */}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ flexShrink: 0, mb: "12px", mr: "24px", px: "24px", py: "8px", ...cardSx }}
      >
        <Stack direction="row" alignItems="center" gap="24px">
          {/* Nav sub-group */}
          <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ width: navOpen ? "299px" : "auto", flexShrink: 0 }}>
            <Stack direction="row" alignItems="center" gap="8px">
              <Box onClick={() => setNavOpen((v) => !v)} sx={{ ...toolIconSx, color: color.type.default.value }}>
                {navOpen ? <CollapseSideNavIcon size="lg" /> : <ExpandSideNavIcon size="lg" />}
              </Box>
              {navOpen && (
                <Typography sx={{ fontSize: "14px", fontWeight: 400, lineHeight: "20px", letterSpacing: "0.20px", color: color.type.default.value, whiteSpace: "nowrap" }}>
                  Navigation
                </Typography>
              )}
            </Stack>
            {navOpen && (
              <Box sx={{ ...toolIconSx, color: color.type.default.value }}>
                <ExpandListIcon size="lg" />
              </Box>
            )}
          </Stack>
          {/* Tool icons */}
          <Stack direction="row" alignItems="center" gap="24px" sx={{ pl: "24px" }}>
            <Box sx={{ ...toolIconSx, color: color.action.primary.default.value }}>
              <SelectToolIcon size="lg" />
            </Box>
            <Box sx={{ ...toolIconSx, color: color.type.default.value }}>
              <LinkIcon size="lg" />
            </Box>
          </Stack>
        </Stack>

        {/* Right: icon + label column */}
        <Stack direction="row" alignItems="center" gap="24px">
          {(["Focus", "View mode", "More"] as const).map((label) => (
            <Stack key={label} direction="column" alignItems="center" gap="2px" sx={{ cursor: "pointer" }}>
              <Box sx={{ ...toolIconSx, color: color.type.default.value }}>
                {label === "Focus" && <FullscreenIcon size="lg" />}
                {label === "View mode" && <FacePagesIcon size="lg" />}
                {label === "More" && <MoreIcon size="lg" />}
              </Box>
              <Typography sx={{ fontSize: "10px", fontWeight: 600, lineHeight: "12px", letterSpacing: "0.30px", color: color.type.default.value, whiteSpace: "nowrap" }}>
                {label}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>

      {/* ── Content row: floating nav panel + document area ── */}
      <Box sx={{ flex: 1, display: "flex", overflow: "hidden", mr: "24px", mb: "12px", gap: "12px" }}>

        {/* Floating nav panel — no tabs */}
        {navOpen && (
          <Box sx={{ width: "300px", flexShrink: 0, display: "flex", flexDirection: "column", overflow: "hidden", ...cardSx }}>
            <Box sx={{ flex: 1, overflowY: "auto", p: "4px 8px" }}>
              {reviewNavStructure.map((item) => (
                <NavTreeItem key={item.id} item={item} activeId={activeNavId} onSelect={setActiveNavId} />
              ))}
            </Box>
          </Box>
        )}

        {/* Document area */}
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", position: "relative" }}>
          <Box sx={{ flex: 1, overflow: "auto", pt: "20px", px: "16px", pb: "80px", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
            {pageImages.map((src, idx) => (
              <Box
                key={idx}
                ref={(el: HTMLDivElement | null) => { pageRefs.current[idx] = el; }}
                sx={{
                  flexShrink: 0,
                  height: `${zoomPct}%`,
                  display: "flex",
                  borderRadius: "12px",
                  overflow: "hidden",
                  scrollMarginTop: "20px",
                  boxShadow: `inset 0 0 0 0.68px ${color.outline.fixed.value}, 0 1px 4px #0000001f`,
                }}
              >
                <img
                  src={src}
                  alt={`Page ${idx + 1}`}
                  style={{ height: "100%", width: "auto", display: "block" }}
                />
              </Box>
            ))}
          </Box>

          {/* Bottom toolbar */}
          <Box sx={{ position: "absolute", bottom: "20px", left: "50%", transform: "translateX(-50%)", backgroundColor: color.surface.default.value, borderRadius: "12px", boxShadow: "0px 8px 16px rgba(15, 17, 19, 0.10), 0px 0px 2px rgba(15, 17, 19, 0.10)", outline: `1px ${color.ui.divider.default.value} solid`, outlineOffset: "-1px", p: "8px" }}>
            <Stack direction="row" alignItems="center">
              <Button variant="text" size="small" sx={{ color: color.type.default.value, fontSize: "16px", fontWeight: 600, lineHeight: "24px", letterSpacing: "0.2px", px: "12px", py: "4px", borderRadius: "8px", minWidth: 0, textTransform: "none" }}>
                Agenda
              </Button>
              <Stack direction="row" alignItems="center" gap="8px">
                <IconButton size="small" sx={{ p: "4px", borderRadius: "8px", color: color.type.default.value }} disabled={currentPage <= 1} onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}>
                  <CaretLeftIcon size="lg" />
                </IconButton>
                <Stack direction="row" alignItems="center" gap="4px">
                  <Box sx={{ width: "40px", height: "32px", px: "4px", borderRadius: "4px", outline: `1px ${color.ui.divider.default.value} solid`, outlineOffset: "-1px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Typography sx={{ fontSize: "14px", fontWeight: 600, lineHeight: "20px", letterSpacing: "0.2px", color: color.type.default.value }}>{currentPage}</Typography>
                  </Box>
                  <Typography sx={{ fontSize: "14px", fontWeight: 400, lineHeight: "20px", letterSpacing: "0.2px", color: color.type.default.value, width: "12px", textAlign: "center" }}>/</Typography>
                  <Typography sx={{ fontSize: "14px", fontWeight: 400, lineHeight: "20px", letterSpacing: "0.2px", color: color.type.default.value }}>{totalPages}</Typography>
                </Stack>
                <IconButton size="small" sx={{ p: "4px", borderRadius: "8px", color: color.type.default.value }} disabled={currentPage >= totalPages} onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}>
                  <CaretRightIcon size="lg" />
                </IconButton>
              </Stack>
              <Stack direction="row" alignItems="center">
                <IconButton size="small" sx={{ p: "4px", borderRadius: "8px", color: color.type.default.value }} disabled={zoomIndex <= 0} onClick={() => setZoomIndex((z) => Math.max(0, z - 1))}><ZoomOutIcon size="lg" /></IconButton>
                <Button variant="text" size="small" sx={{ color: color.type.default.value, fontSize: "16px", fontWeight: 600, lineHeight: "24px", letterSpacing: "0.2px", px: "12px", py: "4px", borderRadius: "8px", minWidth: 0, textTransform: "none" }}>{zoomPct}%</Button>
                <IconButton size="small" sx={{ p: "4px", borderRadius: "8px", color: color.type.default.value }} disabled={zoomIndex >= ZOOM_LEVELS.length - 1} onClick={() => setZoomIndex((z) => Math.min(ZOOM_LEVELS.length - 1, z + 1))}><ZoomInIcon size="lg" /></IconButton>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

// ─── BookEditorPage ───────────────────────────────────────────────────────────

function collapseGlobalNav() {
  const mockNav = document.querySelector("mock-hb-global-navigator") as HTMLElement | null;
  if (!mockNav?.shadowRoot) return;
  const globalNav = mockNav.shadowRoot.querySelector("atlas-global-nav") as (HTMLElement & { shadowRoot: ShadowRoot }) | null;
  if (!globalNav?.shadowRoot) return;
  const btn = globalNav.shadowRoot.querySelector("button.menu-button") as HTMLButtonElement | null;
  btn?.click();
}

export default function BookEditorPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const { tokens: { semantic: { color } }, presets: { TabsPresets } } = useTheme();

  const book = adminBooks.find((b) => b.id === id) ?? adminBooks[0];

  // GovernAI visibility lives in the shared SmartAssistContext so panel/overlay
  // state persists across navigation between admin books, resource center, and
  // book editor pages. Inside a book, fresh opens default to the docked panel.
  const {
    panelOpen: sidenavOpen,
    overlayOpen,
    openPanel,
    closePanel,
    closeOverlay,
    expandToOverlay,
    collapseToPanel,
  } = useSmartAssist();

  const [activeTab, setActiveTab] = useState(0);
  const [reviewForcedPage, setReviewForcedPage] = useState<number | undefined>();
  const [forcedPageNonce, setForcedPageNonce] = useState(0);
  const [forcedDocumentId, setForcedDocumentId] = useState<DocumentId | undefined>();

  // Consume routed state from the citation preview's "Open" button: switch to
  // "Review book", overlay the document's pages onto the assembled book, and
  // scroll to the cited page. Keyed on location.key so it re-fires even when
  // navigating to the same pathname.
  useEffect(() => {
    const state = location.state as
      | { openTab?: string; documentId?: DocumentId; documentPage?: number }
      | null;
    if (!state) return;
    if (state.openTab === "review") setActiveTab(1);
    if (state.documentId && DOCUMENTS[state.documentId]) {
      const docPage = typeof state.documentPage === "number" ? state.documentPage : 1;
      setForcedDocumentId(state.documentId);
      setReviewForcedPage(getBookPageForCitation(state.documentId, docPage));
      setForcedPageNonce((n) => n + 1);
    }
    navigate(location.pathname, { replace: true, state: null });
  }, [location.key]);

  // Reset the overlaid document when the user navigates to a different book.
  useEffect(() => {
    setForcedDocumentId(undefined);
  }, [id]);

  // Collapse the global app nav when entering this page; restore on leave.
  useEffect(() => {
    const wasOpen = document.body.classList.contains("atlas-gn-panel--open");
    if (wasOpen) {
      collapseGlobalNav();
      return () => { collapseGlobalNav(); };
    }
  }, []);

  const handleGovernAI = openPanel;
  const handleExpand = expandToOverlay;
  const handleCollapse = collapseToPanel;

  const { previewSource } = useCitationPreview();
  const overlayOpenRef = useRef(overlayOpen);
  overlayOpenRef.current = overlayOpen;
  const handleExpandRef = useRef(handleExpand);
  handleExpandRef.current = handleExpand;

  useEffect(() => {
    if (previewSource && !overlayOpenRef.current) {
      handleExpandRef.current();
    }
  }, [previewSource]);

  return (
    <Box sx={{ display: "flex", height: "100%", overflow: "hidden", background: "radial-gradient(125.08% 101.36% at 0% 0%, var(--lens-semantic-color-background-base-gradient-start, #f9f9fc) 30.53%, var(--lens-semantic-color-background-base-gradient-end, #fcfcff) 100%)" }}>
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {/* Page header */}
        <Box sx={{ position: "relative" }}>
          <Box sx={{ pl: "32px", pr: sidenavOpen ? 0 : "32px", pt: "16px", pb: "0", transition: "padding-right 0.3s ease" }}>
            {/* Breadcrumb */}
            <Stack direction="row" alignItems="center" gap="6px" sx={{ mb: "8px" }}>
              <Typography
                component="span"
                sx={{ fontSize: "12px", color: color.type.muted.value, cursor: "pointer", "&:hover": { textDecoration: "underline" } }}
                onClick={() => navigate("/")}
              >
                Boards
              </Typography>
              <Typography sx={{ fontSize: "12px", color: color.type.muted.value }}>›</Typography>
              <Typography
                component="span"
                sx={{ fontSize: "12px", color: color.type.muted.value, cursor: "pointer", "&:hover": { textDecoration: "underline" } }}
                onClick={() => navigate("/admin/books")}
              >
                Books
              </Typography>
              <Typography sx={{ fontSize: "12px", color: color.type.muted.value }}>›</Typography>
              <Typography sx={{ fontSize: "12px", color: color.type.default.value, fontWeight: 600, maxWidth: "300px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {book.title}
              </Typography>
            </Stack>

            {/* Title + actions */}
            <Stack direction="row" alignItems="center" gap="10px" sx={{ mb: "12px" }}>
              <Typography sx={{ fontSize: "22px", fontWeight: 700, lineHeight: 1.4, color: color.type.default.value, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {book.title}
              </Typography>
              <Chip
                label={book.documentStatus}
                size="small"
                sx={{ height: "22px", fontSize: "12px", fontWeight: 600, backgroundColor: color.surface.variant.value }}
              />
              <Button variant="contained" sx={{ fontWeight: 600, minWidth: "90px", ml: "auto" }}>Publish</Button>
              {!sidenavOpen && (
                <Button
                  variant="outlined"
                  color="ai"
                  startIcon={<AiSparkleIcon size="lg" />}
                  onClick={handleGovernAI}
                  sx={{
                    fontWeight: 600,
                    fontSize: "16px",
                    lineHeight: "25.5px",
                    letterSpacing: "0.16px",
                    color: "#242628",
                    borderRadius: "12px",
                    px: "12px",
                    py: "4px",
                    background: "#fff",
                    border: "1px solid #B11F62",
                    "&::before": { display: "none" },
                    "&:hover": {
                      background: "#fafafa",
                      border: "1px solid #B11F62",
                    },
                  }}
                >
                  GovernAI
                </Button>
              )}
              <IconButton size="small"><MoreIcon /></IconButton>
            </Stack>
          </Box>

          {/* Tabs — divider stays within 32px horizontal margins */}
          <Box sx={{ ml: "32px", mr: sidenavOpen ? 0 : "32px", transition: "margin-right 0.3s ease" }}>
            <Tabs
              value={activeTab}
              onChange={(_, v) => setActiveTab(v)}
              {...TabsPresets.Tabs.alignToPageHeader}
              sx={{
                minHeight: "40px",
                borderBottom: `1px solid ${color.ui.divider.default.value}`,
                "& .MuiTab-root": {
                  minHeight: "40px",
                  px: "16px",
                  fontSize: "14px",
                  borderBottom: "none",
                  "&:not(.Mui-selected)::after": { display: "none" },
                },
              }}
            >
              <Tab label="Build book" />
              <Tab label="Review book" />
            </Tabs>
          </Box>

        </Box>

        {/* Tab content — shared container for both tabs */}
        <Box sx={{ flex: 1, overflow: "hidden", display: "flex", flexDirection: "column", pt: "12px" }}>
          {activeTab === 0 && <BuildBookTab bookTitle={book.title} />}
          {activeTab === 1 && (
            <ReviewBookTab
              bookTitle={book.title}
              assistOpen={sidenavOpen || overlayOpen}
              forcedPage={reviewForcedPage}
              forcedPageNonce={forcedPageNonce}
              forcedDocumentId={forcedDocumentId}
            />
          )}
        </Box>
      </Box>

      {/* GovernAI sidenav */}
      <SmartAssistSidenav
        open={sidenavOpen}
        onClose={closePanel}
        onExpand={handleExpand}
        bookTitle={book.title}
        title="GovernAI"
        variant="persistent"
        showInsights
      />
      <SmartAssistOverlay
        open={overlayOpen}
        onClose={closeOverlay}
        onCollapse={handleCollapse}
        bookTitle={book.title}
        showInsights
      />
    </Box>
  );
}
