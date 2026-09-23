import { useState } from "react";
import {
  Box,
  Button,
  Chip,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import CheckIcon from "@mui/icons-material/Check";
import MessageIcon from "@diligentcorp/atlas-react-bundle/icons/Message";
import AddCircleIcon from "@diligentcorp/atlas-react-bundle/icons/AddCircle";

// ─── Skills data (mirrors EXPERT_SKILLS in SmartAssistOverlay) ────────────────

const SKILLS = [
  {
    id: "audit",
    label: "Audit & financial",
    desc: "Financial reporting, controls, the auditor",
    slash: "/audit",
    category: "Finance",
  },
  {
    id: "risk",
    label: "Enterprise risk",
    desc: "Strategic & operational risk, concentrations",
    slash: "/risk",
    category: "Risk",
  },
  {
    id: "cyber",
    label: "Cyber & privacy",
    desc: "Security, data protection, third parties",
    slash: "/cyber",
    category: "Technology",
  },
  {
    id: "strategy",
    label: "Strategy",
    desc: "Board-level strategy & execution",
    slash: "/strategy",
    category: "Strategy",
  },
];

const FILTER_TABS = ["All", "Finance", "Risk", "Technology", "Strategy"];

// ─── Skill card ───────────────────────────────────────────────────────────────

function SkillCard({
  skill,
  active,
  onToggle,
}: {
  skill: (typeof SKILLS)[0];
  active: boolean;
  onToggle: () => void;
}) {
  return (
    <Box
      sx={{
        background: "#fff",
        border: "1px solid #e2e2e5",
        borderRadius: "12px",
        p: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "6px",
        transition: "box-shadow 120ms ease",
        "&:hover": { boxShadow: "0 2px 8px rgba(0,0,0,0.08)" },
      }}
    >
      {/* Top row: title + action buttons */}
      <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "8px" }}>
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
            <Typography
              sx={{ fontSize: 15, fontWeight: 600, color: "#232429", lineHeight: "20px" }}
            >
              {skill.label}
            </Typography>
            <Box
              component="span"
              sx={{
                fontSize: 11,
                fontWeight: 500,
                color: "#575A67",
                background: "rgba(0,0,0,0.06)",
                borderRadius: "4px",
                px: "5px",
                py: "1px",
                lineHeight: "16px",
                letterSpacing: "0.1px",
              }}
            >
              {skill.slash}
            </Box>
          </Box>
          <Typography
            sx={{
              fontSize: 11,
              color: "#575A67",
              lineHeight: "16px",
              mt: "2px",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
              <circle cx="5" cy="5" r="4.5" stroke="#6366f1" />
              <path d="M5 2C5 2 3 3.5 3 5C3 6.5 4 7.5 5 8C6 7.5 7 6.5 7 5C7 3.5 5 2 5 2Z" fill="#6366f1" fillOpacity="0.4" />
              <path d="M3 5H7" stroke="#6366f1" strokeWidth="0.8" />
              <path d="M5 2V8" stroke="#6366f1" strokeWidth="0.8" />
            </svg>
            Curated by Diligent
          </Typography>
        </Box>

        {/* Action icons */}
        <Box sx={{ display: "flex", gap: "2px", flexShrink: 0, mt: "-2px" }}>
          <IconButton
            size="small"
            aria-label="Chat with this skill"
            sx={{
              width: 28,
              height: 28,
              color: "#575A67",
              "&:hover": { background: "rgba(0,0,0,0.06)", color: "#232429" },
            }}
          >
            <MessageIcon size="sm" />
          </IconButton>
          <IconButton
            size="small"
            aria-label={active ? "Remove skill" : "Add skill"}
            onClick={onToggle}
            sx={{
              width: 28,
              height: 28,
              color: active ? "#fff" : "#575A67",
              background: active ? "#0040d5" : "transparent",
              borderRadius: "50%",
              "&:hover": {
                background: active ? "#0033bb" : "rgba(0,0,0,0.06)",
                color: active ? "#fff" : "#232429",
              },
            }}
          >
            {active ? (
              <CheckIcon sx={{ fontSize: 16 }} />
            ) : (
              <AddCircleIcon size="sm" />
            )}
          </IconButton>
        </Box>
      </Box>

      {/* Description */}
      <Typography sx={{ fontSize: 13, color: "#575A67", lineHeight: "18px" }}>
        {skill.desc}
      </Typography>
    </Box>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ExpertSkillsPage() {
  useTheme();
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  // All 4 skills ship pre-added (they're already in the Expert skills menu)
  const [added, setAdded] = useState<Set<string>>(() => new Set(SKILLS.map((s) => s.id)));

  const filtered = SKILLS.filter((s) => {
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      s.label.toLowerCase().includes(q) ||
      s.desc.toLowerCase().includes(q) ||
      s.slash.includes(q);
    const matchFilter = activeFilter === "All" || s.category === activeFilter;
    return matchSearch && matchFilter;
  });

  const toggleAdded = (id: string) =>
    setAdded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100dvh",
        background:
          "radial-gradient(125.08% 101.36% at 0% 0%, var(--lens-semantic-color-background-base-gradient-start, #f9f9fc) 30.53%, var(--lens-semantic-color-background-base-gradient-end, #fcfcff) 100%)",
        px: 3,
        pt: 3,
        pb: 4,
      }}
    >
      {/* ── Header ── */}
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 2,
          mb: 3,
        }}
      >
        <Box>
          <Typography
            variant="h1"
            sx={{
              fontSize: 24,
              fontWeight: 700,
              color: "#232429",
              lineHeight: "32px",
              letterSpacing: "-0.3px",
            }}
          >
            Expert skills
          </Typography>
          <Typography
            sx={{ fontSize: 14, color: "#575A67", lineHeight: "20px", mt: "4px", maxWidth: 520 }}
          >
            Add specialized AI expertise to enhance your chats with domain-specific knowledge.
          </Typography>
        </Box>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{ flexShrink: 0, borderRadius: "8px", textTransform: "none", fontWeight: 600 }}
        >
          Create skill
        </Button>
      </Box>

      {/* ── Search ── */}
      <Box sx={{ maxWidth: 360, mb: 2 }}>
        <OutlinedInput
          fullWidth
          size="small"
          placeholder="Search expert skills..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon sx={{ fontSize: 20, color: "#575A67" }} />
            </InputAdornment>
          }
          sx={{
            height: 40,
            borderRadius: "8px",
            fontSize: 14,
            color: "#232429",
            "& .MuiOutlinedInput-notchedOutline": { borderColor: "#d8d8db" },
            "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#a0a0a5" },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#0040d5" },
          }}
        />
      </Box>

      {/* ── Filter chips ── */}
      <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 3, gap: "8px !important" }}>
        {FILTER_TABS.map((tab) => {
          const isActive = activeFilter === tab;
          return (
            <Chip
              key={tab}
              label={tab}
              onClick={() => setActiveFilter(tab)}
              sx={{
                height: 32,
                borderRadius: "20px",
                fontSize: 14,
                fontWeight: isActive ? 600 : 400,
                px: "4px",
                cursor: "pointer",
                background: isActive ? "#0040d5" : "transparent",
                color: isActive ? "#fff" : "#232429",
                border: isActive ? "1px solid #0040d5" : "1px solid #d8d8db",
                "& .MuiChip-label": { px: "10px" },
                "&:hover": {
                  background: isActive ? "#0033bb" : "rgba(0,0,0,0.04)",
                  color: isActive ? "#fff" : "#232429",
                },
              }}
            />
          );
        })}
      </Stack>

      {/* ── Skills grid ── */}
      {filtered.length === 0 ? (
        <Box sx={{ mt: 8, textAlign: "center" }}>
          <Typography sx={{ fontSize: 15, color: "#575A67" }}>
            No skills match your search.
          </Typography>
        </Box>
      ) : (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
          }}
        >
          {filtered.map((skill) => (
            <SkillCard
              key={skill.id}
              skill={skill}
              active={added.has(skill.id)}
              onToggle={() => toggleAdded(skill.id)}
            />
          ))}
        </Box>
      )}
    </Box>
  );
}
