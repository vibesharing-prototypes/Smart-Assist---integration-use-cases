import { useEffect, useRef, useState } from "react";
import {
  Alert,
  Autocomplete,
  Box,
  Button,
  Chip,
  Dialog,
  DialogContent,
  Divider,
  FormControl,
  InputLabel,
  IconButton,
  MenuItem,
  Select,
  Snackbar,
  Stack,
  Switch,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";

import CloseIcon from "@diligentcorp/atlas-react-bundle/icons/Close";
import ExpandRightIcon from "@diligentcorp/atlas-react-bundle/icons/ExpandRight";
import ExpandDownIcon from "@diligentcorp/atlas-react-bundle/icons/ExpandDown";

function AddSvgIcon({ width = 16, height = 16 }: { width?: number; height?: number }) {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.45964 10.5417H5.41797V9.45842H9.45964V5.41675H10.5429V9.45842H14.5846V10.5417H10.5429V14.5834H9.45964V10.5417Z" fill="currentColor"/>
    </svg>
  );
}

function RefreshSvgIcon({ width = 20, height = 20 }: { width?: number; height?: number }) {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.0006 15.7918C8.39268 15.7918 7.01501 15.2202 5.86758 14.0771C4.72015 12.9339 4.16727 11.5333 4.20894 9.87514V9.37029L2.81308 10.7661L2.03906 9.99212L4.75058 7.28062L7.4621 9.99212L6.68808 10.7661L5.29223 9.37029V9.87514C5.26445 11.2395 5.71504 12.3861 6.644 13.3151C7.57296 14.244 8.69182 14.7085 10.0006 14.7085C10.2901 14.7085 10.5724 14.6847 10.8475 14.6372C11.1226 14.5896 11.3895 14.5183 11.648 14.4232L12.4397 15.2149C12.0818 15.3837 11.6982 15.522 11.289 15.6299C10.8798 15.7378 10.4504 15.7918 10.0006 15.7918ZM15.2506 12.7197L12.5391 10.0082L13.3131 9.23414L14.7089 10.63V10.1251C14.7367 8.76082 14.2861 7.61418 13.3572 6.68523C12.4282 5.75627 11.3093 5.29179 10.0006 5.29179C9.72494 5.29179 9.4461 5.31556 9.16404 5.3631C8.882 5.41064 8.6117 5.48195 8.35315 5.57704L7.5615 4.78541C7.9194 4.61661 8.30642 4.47825 8.72254 4.37035C9.13868 4.26245 9.56469 4.2085 10.0006 4.2085C11.6224 4.2085 13.0035 4.78007 14.144 5.92323C15.2845 7.06639 15.8339 8.46703 15.7922 10.1251V10.63L17.1881 9.23414L17.9621 10.0082L15.2506 12.7197Z" fill="currentColor"/>
    </svg>
  );
}

// ─── Constants ────────────────────────────────────────────────────────────────

const CHIP_PAGE_SIZE = 4;

const ROLES = [
  "Independent Director",
  "Executive Director",
  "Non-Executive Director",
  "Board Chair",
  "Committee Chair",
  "Board Secretary / Company Secretary",
  "Governance Analyst",
  "Board Administrator",
  "Committee Administrator",
  "General Counsel",
  "CFO",
  "CRO",
  "COO",
  "CTO / CIO",
  "CEO",
  "Observer",
];

const LANGUAGES = [
  { value: "en-US", label: "English (US)" },
  { value: "en-GB", label: "English (UK)" },
  { value: "en-AU", label: "English (Australian)" },
  { value: "fr", label: "French" },
  { value: "de", label: "German" },
  { value: "es", label: "Spanish" },
  { value: "it", label: "Italian" },
  { value: "pt", label: "Portuguese" },
  { value: "nl", label: "Dutch" },
  { value: "ja", label: "Japanese" },
  { value: "ar", label: "Arabic" },
  { value: "he", label: "Hebrew" },
];

// ─── About-you chips ──────────────────────────────────────────────────────────

const ABOUT_CHIPS = [
  { id: "audit", label: "Audit & financial reporting", text: "I focus on audit and financial reporting." },
  { id: "risk", label: "Risk & compliance", text: "I focus on risk management and compliance." },
  { id: "esg", label: "ESG & sustainability", text: "I focus on ESG and sustainability matters." },
  { id: "strategy", label: "Strategy & M&A", text: "I focus on corporate strategy and M&A." },
  { id: "compensation", label: "Compensation & remuneration", text: "I focus on compensation and remuneration." },
  { id: "governance", label: "Nomination & governance", text: "I focus on board nomination and governance." },
  { id: "cyber", label: "Technology & cyber", text: "I focus on technology oversight and cybersecurity." },
  { id: "legal", label: "Legal & regulatory", text: "I focus on legal and regulatory matters." },
  { id: "boardpack", label: "Board pack preparation", text: "I'm responsible for board pack preparation and document management." },
  { id: "minutes", label: "Minutes & action items", text: "I manage meeting minutes and action item tracking." },
  { id: "agenda", label: "Agenda management", text: "I'm responsible for agenda management and meeting coordination." },
  { id: "director-support", label: "Director support", text: "I support directors with onboarding, briefings, and governance queries." },
  { id: "internal-audit", label: "Internal audit oversight", text: "I oversee the internal audit function and management of audit findings." },
  { id: "investment", label: "Investment oversight", text: "I focus on investment oversight and capital allocation decisions." },
  { id: "succession", label: "Succession planning", text: "I focus on succession planning and board composition." },
  { id: "ethics", label: "Ethics & culture", text: "I oversee organisational ethics, conduct standards, and culture." },
  { id: "performance", label: "Performance oversight", text: "I focus on organisational performance monitoring and KPI oversight." },
  { id: "reporting", label: "Regulatory reporting", text: "I focus on regulatory reporting and statutory compliance." },
  { id: "disclosure", label: "Disclosures & filings", text: "I manage corporate disclosures, shareholder communications, and regulatory filings." },
  { id: "board-eval", label: "Board effectiveness", text: "I focus on board effectiveness reviews and director performance evaluation." },
  { id: "policy", label: "Policy management", text: "I manage policy review, approval, and compliance tracking." },
  { id: "resolution", label: "Resolutions & approvals", text: "I track board and committee resolutions, delegated authorities, and formal approvals." },
  { id: "stakeholder", label: "Stakeholder engagement", text: "I oversee stakeholder engagement and investor relations activities." },
  { id: "crisis", label: "Crisis & continuity", text: "I focus on crisis management and business continuity planning." },
  { id: "fiduciary", label: "Fiduciary duty & independence", text: "I focus on fiduciary duty, director independence, and conflicts of interest management." },
  { id: "m-and-a", label: "M&A & transactions", text: "I focus on M&A strategy, transaction oversight, and post-merger integration evaluation." },
  { id: "capital-allocation", label: "Capital allocation", text: "I focus on capital allocation decisions, balance sheet management, and shareholder returns." },
  { id: "operational-performance", label: "Operational performance", text: "I focus on operational performance, management accountability, and KPI oversight." },
];

const ABOUT_ORDER: Record<string, string[]> = {
  director: ["fiduciary", "audit", "risk", "governance", "strategy", "m-and-a", "internal-audit", "investment", "capital-allocation", "succession", "ethics", "board-eval", "stakeholder", "esg", "compensation", "cyber", "legal", "operational-performance"],
  admin: ["boardpack", "minutes", "agenda", "director-support", "policy", "resolution", "disclosure", "reporting", "governance", "legal", "stakeholder", "ethics"],
  executive: ["strategy", "risk", "performance", "investment", "stakeholder", "crisis", "esg", "ethics", "succession", "reporting", "disclosure", "legal", "cyber", "audit"],
  default: ["audit", "risk", "strategy", "governance", "esg", "legal", "cyber", "compensation", "performance", "stakeholder", "ethics", "internal-audit"],
};

// ─── Preference chips ─────────────────────────────────────────────────────────

const PREF_CHIPS = [
  { id: "risks", label: "Highlight risks and red flags", text: "Proactively highlight risks, red flags, and items requiring immediate attention." },
  { id: "decisions", label: "Lead with decisions and actions", text: "Start responses with key decisions and action items before supporting context." },
  { id: "board-tone", label: "Use professional, board-appropriate tone", text: "Use a professional, board-appropriate tone suitable for sharing with directors and executives." },
  { id: "delta", label: "Focus on what changed since last meeting", text: "When summarising or preparing, focus on what has changed since the previous meeting or report." },
  { id: "checklists", label: "Use checklists for reviews", text: "Use checklist format for readiness reviews, action tracking, and to-do items." },
  { id: "tables", label: "Use tables for comparisons", text: "Present comparative data in tables when comparing across periods, documents, or entities." },
  { id: "regulatory", label: "Include regulatory context", text: "Reference relevant regulatory frameworks and compliance implications when discussing governance topics." },
  { id: "verify", label: "Remind me to verify high-stakes items", text: "Add a verification reminder when discussing regulatory filings, legal matters, or board votes." },
  { id: "board-ready", label: "Summarise in board-ready format", text: "Format summaries in a board-ready style suitable for distribution to the board." },
  { id: "historical", label: "Include historical context", text: "When relevant, include historical context from previous meetings or decisions on the same topic." },
  { id: "flag-attention", label: "Flag items needing board attention", text: "Proactively flag items that may require board or committee escalation." },
  { id: "concise", label: "Keep responses concise", text: "Keep responses concise — focus on key points and conclusions." },
  { id: "exec-summary", label: "Lead with executive summary", text: "Open each response with a concise executive summary before detail." },
  { id: "action-owners", label: "Identify action owners", text: "Where possible, identify who is responsible for each action or decision." },
  { id: "follow-up", label: "Highlight follow-up items", text: "Explicitly list follow-up items and outstanding actions at the end of each response." },
  { id: "materiality", label: "Focus on material issues", text: "Prioritise material issues and filter out immaterial detail." },
  { id: "numbers", label: "Include key numbers", text: "Include relevant financial figures, percentages, and metrics where available." },
  { id: "comparison", label: "Compare to prior period", text: "Where relevant, compare figures or positions to the prior period or reporting cycle." },
  { id: "escalation", label: "Flag escalation triggers", text: "Identify situations that may require escalation to the full board or a regulator." },
  { id: "risk-appetite", label: "Reference risk appetite", text: "Reference the organisation's risk appetite and tolerance when discussing risk matters." },
  { id: "plain-language", label: "Use plain language", text: "Avoid jargon and explain technical terms when used." },
  { id: "timeline", label: "Include key dates", text: "Highlight key deadlines, reporting dates, and milestone timelines." },
  { id: "quorum", label: "Note quorum and attendance", text: "Flag quorum requirements and attendance records when discussing meeting matters." },
  { id: "best-practice", label: "Note governance best practice", text: "Where relevant, note applicable governance best practice or regulatory guidance." },
];

const PREF_ORDER: Record<string, string[]> = {
  director: ["risks", "decisions", "delta", "flag-attention", "materiality", "exec-summary", "escalation", "risk-appetite", "regulatory", "historical", "best-practice", "board-tone", "follow-up", "concise"],
  admin: ["checklists", "board-ready", "action-owners", "timeline", "quorum", "follow-up", "plain-language", "verify", "board-tone", "tables", "concise", "risks"],
  executive: ["decisions", "exec-summary", "risks", "materiality", "numbers", "comparison", "concise", "regulatory", "escalation", "risk-appetite", "delta", "follow-up", "board-tone", "tables"],
  default: ["risks", "decisions", "board-tone", "concise", "exec-summary", "follow-up", "delta", "regulatory", "historical", "flag-attention", "plain-language", "verify"],
};

// ─── Types ────────────────────────────────────────────────────────────────────

interface PersonalizationState {
  userRole: string;
  aboutMeText: string;
  instructionsText: string;
  userLanguage: string;
  isPersonalizationEnabled: boolean;
  usedAboutChips: string[];
  usedInstrChips: string[];
}

const DEFAULT_STATE: PersonalizationState = {
  userRole: "",
  aboutMeText: "",
  instructionsText: "",
  userLanguage: "en-US",
  isPersonalizationEnabled: true,
  usedAboutChips: [],
  usedInstrChips: [],
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

// Session-scoped: resets on page refresh. Persists across dialog open/close within the same page load.
let sessionState: PersonalizationState = DEFAULT_STATE;

function loadState(): PersonalizationState {
  return sessionState;
}

function saveState(next: PersonalizationState) {
  sessionState = next;
}

function getRoleGroup(role: string): "director" | "admin" | "executive" | "default" {
  const r = role.toLowerCase();
  if (/director|chair|observer|non-executive|ned/.test(r)) return "director";
  if (/secretary|administrator|analyst|coordinator/.test(r)) return "admin";
  if (/ceo|cfo|cro|coo|cto|cio|counsel/.test(r)) return "executive";
  return "default";
}

function getOrderedChips<T extends { id: string }>(
  all: T[],
  order: Record<string, string[]>,
  group: string,
): T[] {
  const ids = order[group] ?? order.default;
  const map = Object.fromEntries(all.map((c) => [c.id, c]));
  return ids.flatMap((id) => (map[id] ? [map[id]] : []));
}

function getChipPage<T extends { id: string }>(
  ordered: T[],
  used: string[],
  page: number,
): T[] {
  const available = ordered.filter((c) => !used.includes(c.id));
  if (available.length === 0) return [];
  const totalPages = Math.ceil(available.length / CHIP_PAGE_SIZE);
  const safe = page % totalPages;
  return available.slice(safe * CHIP_PAGE_SIZE, safe * CHIP_PAGE_SIZE + CHIP_PAGE_SIZE);
}

function buildPromptPreview(form: PersonalizationState): string {
  const lang = LANGUAGES.find((l) => l.value === form.userLanguage)?.label ?? "English (US)";
  const parts: string[] = [];
  if (form.userRole) {
    parts.push(`## User Context\nThe current user is a ${form.userRole}.`);
  }
  if (form.aboutMeText) {
    parts.push(`## About this user\n${form.aboutMeText}`);
  }
  if (form.instructionsText) {
    parts.push(`## Custom Instructions\n${form.instructionsText}`);
  }
  parts.push(`## Language & Locale\nRespond in ${lang}. Use ${lang} spelling, terminology, and date formats.`);
  return parts.join("\n\n");
}

// ─── RoleField ────────────────────────────────────────────────────────────────

function RoleField({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string, fromDropdown?: boolean) => void;
}) {
  const { tokens: { semantic: { color } } } = useTheme();

  return (
    <Autocomplete
      freeSolo
      options={ROLES}
      value={value}
      inputValue={value}
      onInputChange={(_, newValue, reason) => {
        if (reason === "input") onChange(newValue, false);
        if (reason === "clear") onChange("", true);
      }}
      onChange={(_, newValue) => {
        if (typeof newValue === "string") onChange(newValue, true);
        else if (newValue === null) onChange("", true);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Your primary role"
          helperText="If you hold multiple roles, choose the one you use Smart Assist for most."
          variant="outlined"
          InputLabelProps={{ ...params.InputLabelProps, shrink: true }}
          inputProps={{ ...params.inputProps, placeholder: !value ? "Select your role" : undefined }}
          sx={{
            "& .MuiInputBase-root": { backgroundColor: "transparent" },
            "& .MuiInputBase-input::placeholder": {
              color: color.type.muted.value,
              opacity: 1,
            },
            ...(value ? {
              "& .MuiOutlinedInput-notchedOutline": { borderColor: color.outline.default.value },
              "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: color.outline.hover.value },
            } : {}),
          }}
        />
      )}
    />
  );
}

// ─── ChipSuggestions ──────────────────────────────────────────────────────────

function ChipSuggestions({
  chips,
  animKey,
  isLoading,
  onChipClick,
  onMore,
}: {
  chips: Array<{ id: string; label: string; text: string }>;
  animKey: number;
  isLoading: boolean;
  onChipClick: (chip: { id: string; label: string; text: string }) => void;
  onMore: () => void;
}) {
  const { tokens: { semantic: { color } } } = useTheme();

  return (
    <Stack gap="12px" sx={{ mt: "12px" }}>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
        {chips.map((chip, i) => (
          <Chip
            key={`${animKey}-${chip.id}`}
            icon={<AddSvgIcon />}
            label={chip.label}
            size="small"
            onClick={() => onChipClick(chip)}
            sx={{
              backgroundColor: color.action.secondary.variant.value,
              border: "none",
              "& .MuiChip-icon": { color: color.type.default.value, ml: "8px" },
              "@keyframes chipFadeIn": {
                "0%": { opacity: 0, transform: "translateY(4px)" },
                "100%": { opacity: 1, transform: "translateY(0)" },
              },
              animation: "chipFadeIn 200ms ease both",
              animationDelay: `${i * 40}ms`,
              cursor: "pointer",
            }}
          />
        ))}
      </Box>
      <Button
        variant="text"
        size="small"
        startIcon={
          <Box
            component="span"
            sx={{
              display: "inline-flex",
              "@keyframes spin": {
                "0%": { transform: "rotate(0deg)" },
                "100%": { transform: "rotate(360deg)" },
              },
              animation: isLoading ? "spin 300ms linear" : "none",
            }}
          >
            <RefreshSvgIcon width={16} height={16} />
          </Box>
        }
        onClick={onMore}
        disabled={isLoading}
        sx={{ alignSelf: "flex-start" }}
      >
        More suggestions
      </Button>
    </Stack>
  );
}

// ─── SectionHeader ────────────────────────────────────────────────────────────

function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  const { tokens: { semantic: { color } } } = useTheme();
  return (
    <Box>
      <Typography sx={{ fontSize: "16px", fontWeight: 600, lineHeight: "24px", color: color.type.default.value }}>
        {title}
      </Typography>
      <Typography sx={{ display: "block", fontSize: "14px", lineHeight: "20px", color: color.type.muted.value, mt: "4px" }}>
        {subtitle}
      </Typography>
    </Box>
  );
}

// ─── PromptPreview ────────────────────────────────────────────────────────────

function PromptPreview({ form }: { form: PersonalizationState }) {
  const { tokens: { semantic: { color, radius } } } = useTheme();
  const [expanded, setExpanded] = useState(false);

  const preStyle = {
    fontFamily: "'Fira Code', Menlo, monospace",
    fontSize: "13px",
    lineHeight: 1.65,
    color: "#374151",
    whiteSpace: "pre-wrap" as const,
    margin: 0,
    wordBreak: "break-word" as const,
  };

  return (
    <Box>
      <Box
        component="button"
        onClick={() => setExpanded((e) => !e)}
        sx={{
          all: "unset",
          display: "block",
          width: "100%",
          boxSizing: "border-box",
          cursor: "pointer",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Box sx={{ flexShrink: 0, display: "flex", alignItems: "center", color: color.type.default.value }}>
            {expanded ? <ExpandDownIcon size="md" /> : <ExpandRightIcon size="md" />}
          </Box>
          <Typography sx={{ fontSize: "16px", fontWeight: 600, lineHeight: "24px", color: color.type.default.value }}>
            Prompt preview
          </Typography>
        </Box>
        <Typography sx={{ display: "block", fontSize: "14px", lineHeight: "20px", color: color.type.muted.value, mt: "4px", pl: "28px" }}>
          Exactly what's used at the start of every conversation.
        </Typography>
      </Box>

      {expanded && (
        <Box
          sx={{
            mt: "12px",
            border: `1px solid ${color.ui.divider.default.value}`,
            borderRadius: radius.md.value,
            overflow: "hidden",
            backgroundColor: "#f9fafb",
          }}
        >
          {/* Org context */}
          <Box sx={{ p: "16px" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px", mb: "10px" }}>
              <Typography sx={{ fontSize: "12px", color: "#6b7280" }}>Organisation context</Typography>
              <Box sx={{ px: "8px", py: "2px", backgroundColor: "#e5e7eb", borderRadius: "9999px" }}>
                <Typography sx={{ fontSize: "11px", lineHeight: "16px", color: "#374151" }}>
                  Set in organization settings
                </Typography>
              </Box>
            </Box>
            <Box component="pre" sx={preStyle}>{`## Organisation Context
The user's organisation is Meridian Holdings Ltd, based in United Kingdom.
Industries: Financial Services, Asset Management.
Organisation size: 5,000–20,000 employees.

## Governance
We have 4 standing committees: Audit, Risk, Remuneration, and Nomination & Governance. The Audit and Risk committees share overlapping membership.`}</Box>
          </Box>

          <Divider sx={{ borderColor: color.ui.divider.default.value }} />

          {/* Personalisation block */}
          <Box
            sx={{
              p: "16px",
              opacity: form.isPersonalizationEnabled ? 1 : 0.42,
              transition: "opacity 0.2s ease",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px", mb: "10px" }}>
              <Typography sx={{ fontSize: "12px", color: "#6b7280" }}>Your personalisation</Typography>
              {!form.isPersonalizationEnabled && (
                <Box sx={{ px: "8px", py: "2px", backgroundColor: "#fff2aa", borderRadius: "9999px" }}>
                  <Typography sx={{ fontSize: "11px", lineHeight: "16px", color: "#92400e" }}>
                    Paused
                  </Typography>
                </Box>
              )}
            </Box>
            <Box component="pre" sx={preStyle}>{buildPromptPreview(form)}</Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}

// ─── PersonalizationDialog ────────────────────────────────────────────────────

interface PersonalizationDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function PersonalizationDialog({ open, onClose }: PersonalizationDialogProps) {
  const { tokens: { semantic: { color, radius } } } = useTheme();

  const [form, setForm] = useState<PersonalizationState>(DEFAULT_STATE);
  const [snapshot, setSnapshot] = useState<PersonalizationState>(DEFAULT_STATE);
  // committedRole drives chip computation — updated immediately on dropdown select, debounced on freetext typing
  const [committedRole, setCommittedRole] = useState("");
  const chipDebounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [aboutPage, setAboutPage] = useState(0);
  const [instrPage, setInstrPage] = useState(0);
  const [aboutAnimKey, setAboutAnimKey] = useState(0);
  const [instrAnimKey, setInstrAnimKey] = useState(0);
  const [aboutMoreLoading, setAboutMoreLoading] = useState(false);
  const [instrMoreLoading, setInstrMoreLoading] = useState(false);

  const [toastOpen, setToastOpen] = useState(false);

  useEffect(() => {
    if (open) {
      const saved = loadState();
      setForm(saved);
      setSnapshot(saved);
      setCommittedRole(saved.userRole);
      setAboutPage(0);
      setInstrPage(0);
      setAboutAnimKey(0);
      setInstrAnimKey(0);
    }
  }, [open]);

  const roleGroup = getRoleGroup(committedRole);
  const orderedAbout = getOrderedChips(ABOUT_CHIPS, ABOUT_ORDER, roleGroup);
  const orderedInstr = getOrderedChips(PREF_CHIPS, PREF_ORDER, roleGroup);
  const aboutChips = getChipPage(orderedAbout, form.usedAboutChips, aboutPage);
  const instrChips = getChipPage(orderedInstr, form.usedInstrChips, instrPage);

  const refreshChips = () => {
    setAboutPage(0);
    setInstrPage(0);
    setAboutAnimKey((k) => k + 1);
    setInstrAnimKey((k) => k + 1);
  };

  const handleRoleChange = (v: string, fromDropdown = false) => {
    setForm((f) => ({ ...f, userRole: v }));
    if (chipDebounceRef.current) clearTimeout(chipDebounceRef.current);
    if (fromDropdown) {
      setCommittedRole(v);
      refreshChips();
    } else {
      chipDebounceRef.current = setTimeout(() => {
        setCommittedRole(v);
        refreshChips();
      }, 500);
    }
  };

  const handleSave = () => {
    saveState(form);
    setToastOpen(true);
    onClose();
  };

  const handleCancel = () => {
    setForm(snapshot);
    onClose();
  };

  const appendAboutChip = (chip: (typeof ABOUT_CHIPS)[0]) => {
    setForm((f) => ({
      ...f,
      aboutMeText: f.aboutMeText ? `${f.aboutMeText.trimEnd()} ${chip.text}` : chip.text,
      usedAboutChips: [...f.usedAboutChips, chip.id],
    }));
  };

  const appendInstrChip = (chip: (typeof PREF_CHIPS)[0]) => {
    setForm((f) => ({
      ...f,
      instructionsText: f.instructionsText ? `${f.instructionsText.trimEnd()} ${chip.text}` : chip.text,
      usedInstrChips: [...f.usedInstrChips, chip.id],
    }));
  };

  const handleAboutMore = () => {
    setAboutMoreLoading(true);
    setTimeout(() => {
      setAboutPage((p) => p + 1);
      setAboutAnimKey((k) => k + 1);
      setAboutMoreLoading(false);
    }, 300);
  };

  const handleInstrMore = () => {
    setInstrMoreLoading(true);
    setTimeout(() => {
      setInstrPage((p) => p + 1);
      setInstrAnimKey((k) => k + 1);
      setInstrMoreLoading(false);
    }, 300);
  };

  return (
    <>
    <Dialog
      open={open}
      onClose={(_e, reason) => {
        if (reason === "backdropClick" || reason === "escapeKeyDown") return;
        onClose();
      }}
      disableEscapeKeyDown
      maxWidth={false}
      PaperProps={{
        sx: {
          maxWidth: 800,
          width: "100%",
          maxHeight: "90vh",
          borderRadius: radius.lg.value,
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      {/* ── Header ── */}
      <Box
        sx={{
          flexShrink: 0,
          px: "24px",
          pt: "20px",
          pb: "16px",
          borderBottom: `1px solid ${color.ui.divider.default.value}`,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "16px" }}>
          <Box>
            <Typography sx={{ fontSize: "18px", fontWeight: 600, lineHeight: "28px", color: color.type.default.value }}>
              Smart Assist personalization
            </Typography>
            <Typography sx={{ fontSize: "14px", lineHeight: "20px", color: color.type.muted.value, mt: "4px" }}>
              This information helps Smart Assist understand who you are and how you prefer to work.
            </Typography>
          </Box>
          <IconButton onClick={handleCancel} size="small" sx={{ p: "4px", flexShrink: 0, mt: "2px" }}>
            <CloseIcon size="md" />
          </IconButton>
        </Box>
      </Box>

      {/* ── Body ── */}
      <DialogContent sx={{ p: "24px", overflowY: "auto", flex: 1 }}>
        <Stack gap="24px" sx={{ px: "4px", py: "8px" }}>

          {/* ── Section 1: About you ── */}
          <Stack gap="24px">
            <SectionHeader
              title="About you"
              subtitle="Tell Smart Assist about your role, committees, and focus areas so it can prioritise what matters to you."
            />

            <RoleField value={form.userRole} onChange={handleRoleChange} />

            <Box>
              <TextField
                label="More about you"
                multiline
                rows={4}
                fullWidth
                value={form.aboutMeText}
                onChange={(e) => setForm((f) => ({ ...f, aboutMeText: e.target.value }))}
                placeholder="e.g. I sit on the Audit and Risk committees and focus on regulatory compliance"
                variant="outlined"
              />
              {!committedRole ? (
                <Typography sx={{ fontSize: "12px", lineHeight: "16px", color: color.type.muted.value, mt: "8px" }}>
                  Fill in your role above to get personalised suggestions.
                </Typography>
              ) : aboutChips.length > 0 ? (
                <ChipSuggestions
                  chips={aboutChips}
                  animKey={aboutAnimKey}
                  isLoading={aboutMoreLoading}
                  onChipClick={appendAboutChip}
                  onMore={handleAboutMore}
                />
              ) : null}
            </Box>
          </Stack>

          <Divider sx={{ borderColor: color.ui.divider.default.value }} />

          {/* ── Section 2: Output settings ── */}
          <Stack gap="24px">
            <SectionHeader
              title="Output settings"
              subtitle="Your editorial defaults — they shape how Smart Assist structures and phrases responses. They don't affect what it can access, cite, or verify. Your preferences will apply to all conversations, within Diligent's guidelines."
            />

            <Box>
              <TextField
                label="Personal preferences"
                multiline
                rows={4}
                fullWidth
                value={form.instructionsText}
                onChange={(e) => setForm((f) => ({ ...f, instructionsText: e.target.value }))}
                placeholder="e.g. lead with the risks, keep responses under 200 words"
                variant="outlined"
              />
              {!committedRole ? (
                <Typography sx={{ fontSize: "12px", lineHeight: "16px", color: color.type.muted.value, mt: "8px" }}>
                  Fill in your role above to get personalised suggestions.
                </Typography>
              ) : instrChips.length > 0 ? (
                <ChipSuggestions
                  chips={instrChips}
                  animKey={instrAnimKey}
                  isLoading={instrMoreLoading}
                  onChipClick={appendInstrChip}
                  onMore={handleInstrMore}
                />
              ) : null}
            </Box>

            <Stack gap="4px">
              <FormControl sx={{ maxWidth: 320 }} variant="outlined">
                <InputLabel>Response language</InputLabel>
                <Select
                  value={form.userLanguage}
                  label="Response language"
                  onChange={(e) => setForm((f) => ({ ...f, userLanguage: e.target.value }))}
                >
                  {LANGUAGES.map((l) => (
                    <MenuItem key={l.value} value={l.value}>{l.label}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Typography sx={{ fontSize: "12px", lineHeight: "16px", color: color.type.muted.value, mt: "4px" }}>
                Smart Assist will respond in your chosen language and use the corresponding spelling, terminology, and date formats.
              </Typography>
            </Stack>
          </Stack>

          <Divider sx={{ borderColor: color.ui.divider.default.value }} />

          {/* ── Prompt preview accordion ── */}
          <PromptPreview form={form} />

          <Divider sx={{ borderColor: color.ui.divider.default.value }} />

          {/* ── Toggle row ── */}
          <Box sx={{ display: "flex", alignItems: "flex-start", gap: "8px", py: "12px" }}>
            <Switch
              checked={form.isPersonalizationEnabled}
              onChange={(e) => setForm((f) => ({ ...f, isPersonalizationEnabled: e.target.checked }))}
              color="default"
              size="small"
              sx={{ flexShrink: 0, mt: "2px", ml: "-4px" }}
            />
            <Stack gap="4px">
              <Typography sx={{ fontSize: "14px", lineHeight: "20px", color: color.type.default.value }}>
                Apply my personalisation
              </Typography>
              <Typography sx={{ fontSize: "12px", lineHeight: "16px", color: color.type.muted.value }}>
                Disabling personalisation keeps your inputs preserved. This setting does not affect organisation context.
              </Typography>
            </Stack>
          </Box>

        </Stack>
      </DialogContent>

      {/* ── Footer ── */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexShrink: 0,
          px: "24px",
          py: "16px",
          borderTop: `1px solid ${color.ui.divider.default.value}`,
        }}
      >
        <Button variant="outlined" color="primary" onClick={handleCancel}>
          Cancel
        </Button>
        <Button variant="contained" color="primary" onClick={handleSave}>
          Save
        </Button>
      </Box>
    </Dialog>

    <Snackbar
      open={toastOpen}
      autoHideDuration={5000}
      onClose={(_e, reason) => {
        if (reason === "clickaway") return;
        setToastOpen(false);
      }}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      sx={{ top: "24px !important", right: "24px !important" }}
    >
      <Alert
        severity="success"
        aria-live="polite"
        action={
          <IconButton size="small" aria-label="Dismiss" onClick={() => setToastOpen(false)}>
            <CloseIcon size="md" />
          </IconButton>
        }
        sx={{
          border: `1px solid ${color.outline.default.value}`,
          "&&&&": {
            boxShadow:
              "0px 32px 32px rgba(15, 17, 19, 0.10), 0px 0px 2px rgba(15, 17, 19, 0.10)",
          },
        }}
      >
        Personalization settings saved. Changes will apply to new chats.
      </Alert>
    </Snackbar>
    </>
  );
}
