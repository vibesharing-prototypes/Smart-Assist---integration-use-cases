import { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Switch,
  Tab,
  Tabs,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { SectionHeader } from "@diligentcorp/atlas-react-bundle";
import AddIcon from "@diligentcorp/atlas-react-bundle/icons/Add";
import SearchIcon from "@diligentcorp/atlas-react-bundle/icons/Search";

// ─── Skills data ──────────────────────────────────────────────────────────────

const SKILLS = [
  {
    id: "audit",
    label: "Audit & financial",
    desc: "AI expertise in internal audit, SOX compliance, control frameworks, and financial reporting integrity.",
    slash: "/audit",
    category: "Finance",
    on: true,
  },
  {
    id: "capital-markets",
    label: "Capital markets",
    desc: "AI expertise in equity and debt offerings, capital structure optimization, and securities market execution.",
    slash: "/capital-markets",
    category: "Finance",
    on: false,
  },
  {
    id: "cfo",
    label: "CFO",
    desc: "AI expertise in financial integrity, operating efficiency, cost optimization, and capital structure management.",
    slash: "/cfo",
    category: "Finance",
    on: false,
  },
  {
    id: "cyber",
    label: "Cyber & privacy",
    desc: "Security, data protection, third parties.",
    slash: "/cyber-privacy",
    category: "Technology",
    on: true,
  },
  {
    id: "data-privacy",
    label: "Data Privacy & GDPR",
    desc: "AI expertise in data protection regulations, privacy program design, and cross-border data transfer compliance.",
    slash: "/data-privacy-gdpr",
    category: "Legal",
    on: false,
  },
  {
    id: "risk",
    label: "Enterprise risk",
    desc: "Strategic & operational risk, concentrations.",
    slash: "/risk",
    category: "Risk",
    on: true,
  },
  {
    id: "strategy",
    label: "Strategy",
    desc: "Board-level strategy & execution.",
    slash: "/strategy",
    category: "Strategy",
    on: true,
  },
];

const FILTER_CHIPS = ["All", "Finance", "Legal", "Technology", "Risk", "HR", "Industry", "Communications"];

// ─── Skill card ───────────────────────────────────────────────────────────────

function SkillCard({
  skill,
  enabled,
  onToggle,
}: {
  skill: (typeof SKILLS)[0];
  enabled: boolean;
  onToggle: () => void;
}) {
  const {
    tokens: {
      semantic: { color },
    },
  } = useTheme();
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);
  const menuOpen = Boolean(menuAnchor);

  return (
    <Box
      sx={{
        background: color.surface.default.value,
        border: "1px solid #DEE0E9",
        borderRadius: "12px",
        px: "20px",
        py: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      {/* Title row: label + toggle + more */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "40px",
        }}
      >
        <Typography
          sx={{
            flex: 1,
            minWidth: 0,
            fontSize: "14px",
            fontWeight: 600,
            lineHeight: "20px",
            color: "#000",
            fontFeatureSettings: '"lnum" 1, "tnum" 1',
          }}
        >
          {skill.label}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            flexShrink: 0,
          }}
        >
          <Switch
            checked={enabled}
            size="small"
            onChange={onToggle}
            slotProps={{ input: { "aria-label": `Toggle ${skill.label}` } }}
          />
          <IconButton
            id={`skill-more-btn-${skill.id}`}
            aria-label={`More options for ${skill.label}`}
            aria-controls={menuOpen ? `skill-menu-${skill.id}` : undefined}
            aria-haspopup="true"
            aria-expanded={menuOpen ? "true" : undefined}
            onClick={(e) => setMenuAnchor(e.currentTarget)}
            sx={{ width: 32, height: 32, p: "6px" }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M9.99998 16.0577C9.65624 16.0577 9.36198 15.9353 9.11719 15.6905C8.8724 15.4457 8.75 15.1515 8.75 14.8077C8.75 14.464 8.8724 14.1697 9.11719 13.9249C9.36198 13.6801 9.65624 13.5577 9.99998 13.5577C10.3437 13.5577 10.638 13.6801 10.8828 13.9249C11.1276 14.1697 11.25 14.464 11.25 14.8077C11.25 15.1515 11.1276 15.4457 10.8828 15.6905C10.638 15.9353 10.3437 16.0577 9.99998 16.0577ZM9.99998 11.25C9.65624 11.25 9.36198 11.1276 9.11719 10.8828C8.8724 10.638 8.75 10.3438 8.75 10C8.75 9.65629 8.8724 9.36203 9.11719 9.11724C9.36198 8.87245 9.65624 8.75005 9.99998 8.75005C10.3437 8.75005 10.638 8.87245 10.8828 9.11724C11.1276 9.36203 11.25 9.65629 11.25 10C11.25 10.3438 11.1276 10.638 10.8828 10.8828C10.638 11.1276 10.3437 11.25 9.99998 11.25ZM9.99998 6.44232C9.65624 6.44232 9.36198 6.31992 9.11719 6.07513C8.8724 5.83036 8.75 5.53609 8.75 5.19234C8.75 4.84861 8.8724 4.55434 9.11719 4.30955C9.36198 4.06477 9.65624 3.94238 9.99998 3.94238C10.3437 3.94238 10.638 4.06477 10.8828 4.30955C11.1276 4.55434 11.25 4.84861 11.25 5.19234C11.25 5.53609 11.1276 5.83036 10.8828 6.07513C10.638 6.31992 10.3437 6.44232 9.99998 6.44232Z" fill="#232429"/>
            </svg>
          </IconButton>
        </Box>
      </Box>

      {/* Description */}
      <Typography
        sx={{
          fontSize: "12px",
          fontWeight: 400,
          lineHeight: "16px",
          color: color.type.muted.value,
          overflow: "hidden",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
        }}
      >
        {skill.desc}
      </Typography>

      {/* Slash command */}
      <Typography
        sx={{
          fontSize: "12px",
          fontWeight: 700,
          lineHeight: "16px",
          letterSpacing: "0.2px",
          color: color.type.muted.value,
        }}
      >
        {skill.slash}
      </Typography>

      {/* More menu */}
      <Menu
        id={`skill-menu-${skill.id}`}
        anchorEl={menuAnchor}
        open={menuOpen}
        onClose={() => setMenuAnchor(null)}
        slotProps={{
          list: { "aria-labelledby": `skill-more-btn-${skill.id}` },
        }}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem onClick={() => setMenuAnchor(null)}>
          <ListItemText>Remix</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => setMenuAnchor(null)}>
          <ListItemText>Chat with it</ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

interface ExpertSkillsPageProps {
  open: boolean;
  onClose: () => void;
}

export default function ExpertSkillsPage({ open, onClose }: ExpertSkillsPageProps) {
  useTheme();

  const [activeTab, setActiveTab] = useState(0);
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [enabled, setEnabled] = useState<Record<string, boolean>>(
    () => Object.fromEntries(SKILLS.map((s) => [s.id, s.on]))
  );

  const filtered = SKILLS.filter((s) => {
    const matchesFilter = activeFilter === "All" || s.category === activeFilter;
    const q = searchQuery.toLowerCase();
    const matchesSearch = !q || s.label.toLowerCase().includes(q) || s.desc.toLowerCase().includes(q);
    return matchesFilter && matchesSearch;
  });

  const toggle = (id: string) =>
    setEnabled((prev) => ({ ...prev, [id]: !prev[id] }));

  if (!open) return null;

  return (
    <Box sx={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>

      {/* ── Fixed header: section title + tabs ── */}
      <Box sx={{ flexShrink: 0, px: "48px", pt: "32px" }}>
        <Box sx={{ width: "100%", maxWidth: "708px", mx: "auto", display: "flex", flexDirection: "column", gap: "16px" }}>
          <SectionHeader
            headingLevel="h4"
            title="Expert skills"
            subtitle="Add specialized AI expertise to enhance your chats with domain-specific knowledge."
            sx={{
              "& h4": { fontSize: "18px !important", lineHeight: "28px !important" },
              "& p": { fontSize: "14px !important", lineHeight: "20px !important" },
            }}
            buttonArray={
              <Button size="small" variant="outlined" startIcon={<AddIcon aria-hidden />}>
                Create
              </Button>
            }
          />
          <Tabs
            value={activeTab}
            onChange={(_, v) => setActiveTab(v)}
            aria-label="Expert skills sections"
            sx={{ "&::after": { zIndex: 0 } }}
          >
            <Tab label="Discover" id="skills-tab-0" aria-controls="skills-panel-0" />
            <Tab label="Yours" id="skills-tab-1" aria-controls="skills-panel-1" />
            <Tab label="Shared by your organization" id="skills-tab-2" aria-controls="skills-panel-2" />
          </Tabs>
        </Box>
      </Box>

      {/* ── Scrollable content ── */}
      <Box
        role="tabpanel"
        id="skills-panel-0"
        aria-labelledby="skills-tab-0"
        sx={{ flex: 1, overflowY: "auto", px: "48px", py: "24px" }}
      >
        <Box sx={{ width: "100%", maxWidth: "708px", mx: "auto" }}>
          <Stack gap="24px">

            {/* Search bar — Atlas Light search form field */}
            <TextField
              fullWidth
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              inputProps={{ "aria-label": "Search skills" }}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon aria-hidden style={{ width: 24, height: 24 }} />
                    </InputAdornment>
                  ),
                },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  height: 40,
                  borderRadius: "8px",
                  "& fieldset": { borderColor: "#6f7377" },
                  "&:hover fieldset": { borderColor: "#464e53" },
                },
                "& .MuiInputBase-input": {
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: "0.2px",
                  color: "#282e37",
                  "&::placeholder": { color: "#464e53", opacity: 1 },
                },
              }}
            />

            {/* Filter chips */}
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: "8px", alignContent: "flex-start" }}>
              {FILTER_CHIPS.map((chip) => {
                const isSelected = activeFilter === chip;
                return (
                  <Box
                    key={chip}
                    component="button"
                    onClick={() => setActiveFilter(chip)}
                    sx={{
                      height: 24,
                      minWidth: 24,
                      px: "2px",
                      overflow: "hidden",
                      borderRadius: "9999px",
                      border: "none",
                      outline: isSelected
                        ? "2px solid #0040D5"
                        : "1px solid #888B9A",
                      outlineOffset: "-1px",
                      background: isSelected ? "#ECF0FF" : "transparent",
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      "&:hover": { background: isSelected ? "#E0E8FF" : "rgba(0,0,0,0.04)" },
                    }}
                  >
                    <Box sx={{ px: "8px", display: "flex", alignItems: "center", height: 24 }}>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontWeight: isSelected ? 600 : 400,
                          lineHeight: "16px",
                          color: "#232429",
                          userSelect: "none",
                        }}
                      >
                        {chip}
                      </Typography>
                    </Box>
                  </Box>
                );
              })}
            </Box>

            {/* 2-column skill grid */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
              }}
            >
              {filtered.map((skill) => (
                <SkillCard
                  key={skill.id}
                  skill={skill}
                  enabled={enabled[skill.id]}
                  onToggle={() => toggle(skill.id)}
                />
              ))}
            </Box>

          </Stack>
        </Box>
      </Box>

    </Box>
  );
}
