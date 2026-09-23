import { execSync } from "child_process";
import { existsSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Install docx if needed
if (!existsSync(path.join(__dirname, "node_modules/docx"))) {
  console.log("Installing docx...");
  execSync("npm install docx", { cwd: __dirname, stdio: "inherit" });
}

const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, HeadingLevel, BorderStyle, WidthType, ShadingType,
  VerticalAlign, PageBreak, LevelFormat
} = await import(path.join(__dirname, "node_modules/docx/build/index.js"));

import { writeFileSync } from "fs";

// ── Data (from PersonalizationDialog.tsx) ────────────────────────────────────

const ADMIN_ROLES = [
  "Corporate Secretary",
  "Board Administrator",
  "Governance Manager",
  "Paralegal",
  "Executive Assistant",
];

const DIRECTOR_ROLES = [
  "Non-executive director",
  "Independent director",
  "Committee chair",
  "Board chair",
  "CEO",
  "CFO",
  "COO",
];

const ABOUT_CHIPS = [
  // Director
  { id: "d-audit", label: "Audit Committee", text: "I sit on the Audit Committee and focus on controls, reporting, and oversight." },
  { id: "d-risk", label: "Risk Committee", text: "I focus on enterprise risk, emerging risks, and mitigation." },
  { id: "d-remuneration", label: "Remuneration Committee", text: "I focus on executive pay, incentives, and remuneration policy." },
  { id: "d-nomination", label: "Nomination Committee", text: "I focus on board composition, succession, and governance." },
  { id: "d-cyber", label: "Cybersecurity oversight", text: "I pay close attention to cybersecurity oversight and material technology risk." },
  { id: "d-esg", label: "ESG reporting", text: "I focus on ESG reporting, disclosures, and long-term oversight." },
  { id: "d-audit-ind", label: "Audit Committee", text: "I sit on the Audit Committee and focus on financial oversight and controls." },
  { id: "d-audit-chair", label: "Audit Committee", text: "I chair the Audit Committee and focus on reporting, controls, and audit matters." },
  { id: "d-audit-cfo", label: "Audit Committee", text: "I focus on financial reporting, controls, and audit-related matters." },
  { id: "d-audit-coo", label: "Audit Committee", text: "I focus on controls, process gaps, and execution risk." },
  { id: "d-risk-ind", label: "Risk Committee", text: "I focus on major risks, controls, and regulatory exposure." },
  { id: "d-risk-chair", label: "Risk Committee", text: "I chair the Risk Committee and focus on major exposures and mitigation." },
  { id: "d-risk-board-chair", label: "Risk Committee", text: "I focus on major board-level risks and cross-committee implications." },
  { id: "d-risk-ceo", label: "Risk Committee", text: "I focus on enterprise risk, strategic exposure, and business impact." },
  { id: "d-risk-cfo", label: "Risk Committee", text: "I focus on financial risk, controls, and material exposures." },
  { id: "d-risk-coo", label: "Risk Committee", text: "I focus on operational risk, resilience, and execution gaps." },
  { id: "d-risk-advisory", label: "Risk Committee", text: "I focus on major risks and how they affect strategic choices." },
  { id: "d-remuneration-chair", label: "Remuneration Committee", text: "I chair the Remuneration Committee and focus on executive pay and incentives." },
  { id: "d-nomination-ind", label: "Nomination Committee", text: "I focus on board composition, succession, and governance." },
  { id: "d-nomination-chair", label: "Nomination Committee", text: "I chair the Nomination Committee and focus on succession and board composition." },
  { id: "d-nomination-board-chair", label: "Nomination Committee", text: "I focus on board composition, succession, and leadership continuity." },
  { id: "d-nomination-ceo", label: "Nomination Committee", text: "I focus on leadership succession and governance implications." },
  { id: "d-nomination-advisory", label: "Nomination Committee", text: "I focus on governance quality, succession, and board effectiveness." },
  { id: "d-cyber-board-chair", label: "Cybersecurity oversight", text: "I focus on cyber risk, resilience, and governance preparedness." },
  { id: "d-cyber-ceo", label: "Cybersecurity oversight", text: "I focus on cybersecurity risk, resilience, and leadership implications." },
  { id: "d-cyber-cfo", label: "Cybersecurity oversight", text: "I focus on cyber risk with financial, control, or disclosure implications." },
  { id: "d-cyber-coo", label: "Cybersecurity oversight", text: "I focus on cybersecurity preparedness, incident risk, and operational resilience." },
  { id: "d-cyber-advisory", label: "Cybersecurity oversight", text: "I focus on cybersecurity, resilience, and strategic technology risk." },
  { id: "d-esg-ind", label: "ESG reporting", text: "I focus on governance, disclosure quality, and long-term risk." },
  { id: "d-esg-board-chair", label: "ESG reporting", text: "I focus on material ESG issues and board-level oversight." },
  { id: "d-esg-ceo", label: "ESG reporting", text: "I focus on ESG reporting that could affect strategy, reputation, or stakeholders." },
  { id: "d-esg-cfo", label: "ESG reporting", text: "I focus on ESG disclosures that affect reporting, investor expectations, or risk." },
  { id: "d-esg-coo", label: "ESG reporting", text: "I focus on operational implications of ESG commitments and reporting." },
  { id: "d-esg-advisory", label: "ESG reporting", text: "I focus on ESG reporting, stakeholder expectations, and long-term themes." },
  // Corporate Secretary
  { id: "cs-agenda", label: "Agenda management", text: "I focus on agenda management and board meeting coordination." },
  { id: "cs-approvals", label: "Approvals and signatures", text: "I manage approvals, signatures, and resolution workflows." },
  { id: "cs-minutes", label: "Minutes and resolutions", text: "I'm responsible for minutes, resolutions, and decision records." },
  { id: "cs-audit-trail", label: "Audit trail", text: "I need strong audit trails and evidence for governance activity." },
  { id: "cs-cross-committee", label: "Cross-committee planning", text: "I coordinate work across multiple boards and committees." },
  // Board Administrator
  { id: "ba-board-book", label: "Board book management", text: "I manage board books, materials, and publishing workflows." },
  { id: "ba-publishing", label: "Publishing readiness", text: "I focus on publishing readiness and final quality checks." },
  { id: "ba-deadline-tracking", label: "Deadline tracking", text: "I track publishing deadlines, submission windows, and board calendar milestones." },
  { id: "ba-notifications", label: "Notifications", text: "I coordinate notifications and board pack distribution." },
  { id: "ba-historical", label: "Historical search", text: "I often need to find past materials and prior decisions quickly." },
  // Governance Manager
  { id: "gm-operations", label: "Governance operations", text: "I focus on governance operations across boards and committees." },
  { id: "gm-policy", label: "Policy and procedure", text: "I manage governance policies, procedures, and process consistency." },
  { id: "gm-committee", label: "Committee structure", text: "I work on committee structure, roles, and governance setup." },
  { id: "gm-compliance", label: "Compliance planning", text: "I track compliance-sensitive deadlines and governance obligations." },
  { id: "gm-reporting", label: "Governance reporting", text: "I prepare governance reports, registers, and compliance summaries." },
  // Paralegal
  { id: "pl-resolution", label: "Resolution support", text: "I support resolutions, approvals, and governance records." },
  { id: "pl-doc-history", label: "Document history", text: "I often need document history, prior versions, and supporting evidence." },
  { id: "pl-records", label: "Record keeping", text: "I focus on accurate records, archives, and traceability." },
  { id: "pl-verification", label: "Verification", text: "I need to verify details against source documents." },
  { id: "pl-statutory", label: "Statutory filings", text: "I assist with statutory filings, lodgements, and regulatory submissions." },
  // Executive Assistant
  { id: "ea-logistics", label: "Meeting logistics", text: "I support meeting logistics and coordination." },
  { id: "ea-reminders", label: "Reminders and follow-up", text: "I handle reminders, follow-up, and deadline tracking." },
  { id: "ea-director-support", label: "Director support", text: "I support directors and executives with board-related tasks." },
  { id: "ea-status", label: "Quick status checks", text: "I need quick status checks on what is ready and what is missing." },
  { id: "ea-prep", label: "Pre-meeting preparation", text: "I prepare briefing notes, agendas, and materials ahead of meetings." },
];

const ABOUT_ORDER = {
  director: ["d-risk", "d-audit", "d-cyber", "d-esg", "d-nomination", "d-remuneration"],
  "non-executive-director": ["d-risk", "d-audit", "d-cyber", "d-esg", "d-nomination"],
  "independent-director": ["d-audit-ind", "d-risk-ind", "d-nomination-ind", "d-esg-ind", "d-cyber"],
  "committee-chair": ["d-audit-chair", "d-risk-chair", "d-remuneration-chair", "d-nomination-chair", "d-cyber"],
  "board-chair": ["d-risk-board-chair", "d-nomination-board-chair", "d-cyber-board-chair", "d-esg-board-chair", "d-remuneration"],
  "chief-executive-officer": ["d-risk-ceo", "d-cyber-ceo", "d-esg-ceo", "d-nomination-ceo", "d-audit"],
  "chief-financial-officer": ["d-audit-cfo", "d-risk-cfo", "d-esg-cfo", "d-cyber-cfo", "d-nomination"],
  "chief-operating-officer": ["d-risk-coo", "d-cyber-coo", "d-audit-coo", "d-esg-coo", "d-nomination"],
  "corporate-secretary": ["cs-agenda", "cs-approvals", "cs-minutes", "cs-audit-trail", "cs-cross-committee"],
  "board-administrator": ["ba-board-book", "ba-publishing", "ba-deadline-tracking", "ba-notifications", "ba-historical"],
  "governance-manager": ["gm-operations", "gm-policy", "gm-committee", "gm-compliance", "gm-reporting"],
  paralegal: ["pl-resolution", "pl-doc-history", "pl-records", "pl-verification", "pl-statutory"],
  "executive-assistant": ["ea-logistics", "ea-reminders", "ea-director-support", "ea-status", "ea-prep"],
};

const PREF_CHIPS = [
  // Director
  { id: "d-lead-risks", label: "Lead with the risks", text: "Lead with the key risks, open issues, and decisions I should pay attention to." },
  { id: "d-short-answer", label: "Short answer first", text: "Lead with the direct answer in one or two sentences, then supporting detail below." },
  { id: "d-tables", label: "Tables for comparisons", text: "When comparing items, periods, or committees, use a table rather than bullets." },
  { id: "d-3-5-bullets", label: "Keep it to 3–5 bullets", text: "Keep responses to three to five bullets. Use full sentences, not fragments." },
  { id: "d-under-200", label: "Keep responses under 200 words", text: "Keep responses under 200 words unless more detail is necessary." },
  { id: "d-lead-risks-ind", label: "Lead with the risks", text: "Lead with the risks, tradeoffs, and unresolved concerns." },
  { id: "d-lead-risks-chair", label: "Lead with the risks", text: "Lead with the biggest issues, decisions, and escalation points." },
  { id: "d-lead-risks-board-chair", label: "Lead with the risks", text: "Lead with the most material risks and decisions for the board." },
  { id: "d-lead-risks-ceo", label: "Lead with the risks", text: "Lead with strategic risks, implications, and actions." },
  { id: "d-lead-risks-cfo", label: "Lead with the risks", text: "Lead with financial risks, controls issues, and key implications." },
  { id: "d-lead-risks-coo", label: "Lead with the risks", text: "Lead with operational risks, bottlenecks, and next steps." },
  { id: "d-under-200-board-chair", label: "Keep responses under 200 words", text: "Keep responses under 200 words and focus on what matters most." },
  { id: "d-under-200-ceo", label: "Keep responses under 200 words", text: "Keep responses under 200 words unless I ask for more depth." },
  // Admin shared
  { id: "checklists", label: "Use checklists for reviews", text: "Use checklist format for readiness reviews, action tracking, and to-do items." },
  { id: "tables", label: "Use tables for comparisons", text: "Present comparative data in tables when comparing across periods, documents, or entities." },
  { id: "regulatory", label: "Include regulatory context", text: "Reference relevant regulatory frameworks and compliance implications when discussing governance topics." },
  { id: "verify", label: "Remind me to verify high-stakes items", text: "Add a verification reminder when discussing regulatory filings, legal matters, or board votes." },
  { id: "board-ready", label: "Summarise in board-ready format", text: "Format summaries in a board-ready style suitable for distribution to the board." },
  { id: "historical", label: "Include historical context", text: "When relevant, include historical context from previous meetings or decisions on the same topic." },
  { id: "flag-attention", label: "Flag items needing board attention", text: "Proactively flag items that may require board or committee escalation." },
  { id: "concise", label: "Keep responses concise", text: "Keep responses concise — focus on key points and conclusions." },
  { id: "action-owners", label: "Identify action owners", text: "Where possible, identify who is responsible for each action or decision." },
  { id: "follow-up", label: "Highlight follow-up items", text: "Explicitly list follow-up items and outstanding actions at the end of each response." },
  { id: "plain-language", label: "Use plain language", text: "Avoid jargon and explain technical terms when used." },
  { id: "timeline", label: "Include key dates", text: "Highlight key deadlines, reporting dates, and milestone timelines." },
  { id: "best-practice", label: "Note governance best practice", text: "Where relevant, note applicable governance best practice or regulatory guidance." },
  // Corporate Secretary
  { id: "cs-concise-structured", label: "Concise and structured", text: "Keep answers concise, structured, and easy to scan." },
  { id: "cs-risks-deadlines", label: "Risks and deadlines first", text: "Lead with risks, deadlines, missing items, and blockers." },
  { id: "cs-checklist", label: "Checklist format", text: "Use checklists and clear next steps when helpful." },
  // Board Administrator
  { id: "ba-status-first", label: "Operational summary first", text: "Start with status, blockers, and recommended actions." },
  { id: "ba-short-summaries", label: "Short summaries", text: "Prefer short summaries over long explanations." },
  { id: "ba-action-oriented", label: "Action-oriented", text: "Keep responses direct, operational, and action-oriented." },
  // Governance Manager
  { id: "gm-gov-tone", label: "Governance tone", text: "Use a professional and governance-oriented tone." },
  { id: "gm-implications", label: "Implications first", text: "Highlight implications, dependencies, and compliance-sensitive points." },
  { id: "gm-balanced", label: "Balanced detail", text: "Be concise, but include enough context for sound governance decisions." },
  // Paralegal
  { id: "pl-precise", label: "Precise wording", text: "Be precise and avoid loose paraphrasing." },
  { id: "pl-evidence", label: "Evidence-oriented", text: "Separate facts from summaries and make verification easy." },
  { id: "pl-cautious", label: "Cautious tone", text: "Use a careful, professional tone for legally sensitive topics." },
  // Executive Assistant
  { id: "ea-plain", label: "Plain language", text: "Use plain language and keep things easy to understand." },
  { id: "ea-brief", label: "Brief and actionable", text: "Keep answers brief and highly actionable." },
  { id: "ea-steps", label: "Step by step", text: "Use simple step-by-step guidance when giving instructions." },
];

const PREF_ORDER = {
  director: ["d-lead-risks", "d-short-answer", "d-tables", "d-3-5-bullets", "d-under-200"],
  "non-executive-director": ["d-lead-risks", "d-short-answer", "d-tables", "d-3-5-bullets", "d-under-200"],
  "independent-director": ["d-lead-risks-ind", "d-short-answer", "d-tables", "d-3-5-bullets", "d-under-200"],
  "committee-chair": ["d-lead-risks-chair", "d-short-answer", "d-tables", "d-3-5-bullets", "d-under-200"],
  "board-chair": ["d-lead-risks-board-chair", "d-under-200-board-chair", "d-short-answer", "d-tables", "d-3-5-bullets"],
  "chief-executive-officer": ["d-lead-risks-ceo", "d-under-200-ceo", "d-short-answer", "d-tables", "d-3-5-bullets"],
  "chief-financial-officer": ["d-lead-risks-cfo", "d-short-answer", "d-tables", "d-3-5-bullets", "d-under-200"],
  "chief-operating-officer": ["d-lead-risks-coo", "d-short-answer", "d-tables", "d-3-5-bullets", "d-under-200"],
  "corporate-secretary": ["cs-concise-structured", "cs-risks-deadlines", "cs-checklist", "checklists", "action-owners", "timeline"],
  "board-administrator": ["ba-status-first", "ba-short-summaries", "ba-action-oriented", "checklists", "action-owners", "timeline"],
  "governance-manager": ["gm-gov-tone", "gm-implications", "gm-balanced", "regulatory", "best-practice", "verify"],
  paralegal: ["pl-precise", "pl-evidence", "pl-cautious", "verify", "historical", "regulatory", "action-owners"],
  "executive-assistant": ["ea-plain", "ea-brief", "ea-steps", "checklists", "timeline", "action-owners"],
};

// ── Helpers ───────────────────────────────────────────────────────────────────

const chipMap = (arr) => Object.fromEntries(arr.map(c => [c.id, c]));
const aboutMap = chipMap(ABOUT_CHIPS);
const prefMap = chipMap(PREF_CHIPS);

function resolveChips(order, map) {
  return order.flatMap(id => map[id] ? [map[id]] : []);
}

// ── Styles ────────────────────────────────────────────────────────────────────

const BRAND = "#0F3D74";
const BRAND_LIGHT = "#E8F0FA";
const GRAY = "#555555";
const LIGHT_GRAY = "#F2F2F2";
const MID_GRAY = "#DDDDDD";

const cellBorder = { style: BorderStyle.SINGLE, size: 1, color: MID_GRAY.replace("#","") };
const noBorder = { style: BorderStyle.NIL, size: 0, color: "FFFFFF" };
const allBorders = { top: cellBorder, bottom: cellBorder, left: cellBorder, right: cellBorder };
const noBorders = { top: noBorder, bottom: noBorder, left: noBorder, right: noBorder };

function heading1(text) {
  return new Paragraph({
    children: [new TextRun({ text, bold: true, size: 32, color: "FFFFFF", font: "Arial" })],
    shading: { fill: BRAND.replace("#",""), type: ShadingType.CLEAR },
    spacing: { before: 0, after: 240 },
    indent: { left: 180, right: 180 },
  });
}

function heading2(text) {
  return new Paragraph({
    children: [new TextRun({ text, bold: true, size: 26, color: BRAND.replace("#",""), font: "Arial" })],
    spacing: { before: 360, after: 120 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: BRAND.replace("#",""), space: 4 } },
  });
}

function heading3(text) {
  return new Paragraph({
    children: [new TextRun({ text, bold: true, size: 22, color: "333333", font: "Arial" })],
    spacing: { before: 240, after: 80 },
  });
}

function body(text, opts = {}) {
  return new Paragraph({
    children: [new TextRun({ text, size: 20, color: "333333", font: "Arial", ...opts })],
    spacing: { before: 40, after: 40 },
  });
}

function spacer() {
  return new Paragraph({ children: [new TextRun("")], spacing: { before: 60, after: 60 } });
}

function chipTable(chips) {
  if (chips.length === 0) return [];
  return chips.map(chip => new Table({
    width: { size: 9360, type: WidthType.DXA },
    columnWidths: [2400, 6960],
    rows: [
      new TableRow({
        children: [
          new TableCell({
            borders: allBorders,
            width: { size: 2400, type: WidthType.DXA },
            shading: { fill: BRAND_LIGHT.replace("#",""), type: ShadingType.CLEAR },
            margins: { top: 80, bottom: 80, left: 140, right: 140 },
            verticalAlign: VerticalAlign.CENTER,
            children: [new Paragraph({
              children: [new TextRun({ text: chip.label, bold: true, size: 18, color: BRAND.replace("#",""), font: "Arial" })],
            })],
          }),
          new TableCell({
            borders: allBorders,
            width: { size: 6960, type: WidthType.DXA },
            margins: { top: 80, bottom: 80, left: 140, right: 140 },
            children: [new Paragraph({
              children: [new TextRun({ text: chip.text, size: 18, color: "333333", font: "Arial" })],
            })],
          }),
        ],
      }),
    ],
  }));
}

function roleSection(roleKey, roleLabel, aboutOrder, prefOrder) {
  const aboutChips = resolveChips(aboutOrder[roleKey] || [], aboutMap);
  const prefChips = resolveChips(prefOrder[roleKey] || [], prefMap);

  return [
    heading3(roleLabel),
    body("Focus area chips (About you section):", { bold: true }),
    spacer(),
    ...chipTable(aboutChips),
    spacer(),
    body("Custom instruction chips (Response style section):", { bold: true }),
    spacer(),
    ...chipTable(prefChips),
    spacer(),
  ];
}

// ── Build document ─────────────────────────────────────────────────────────

const children = [
  // Cover heading
  new Paragraph({
    children: [new TextRun({ text: "Smart Assist / AI Board Member", bold: true, size: 40, color: BRAND.replace("#",""), font: "Arial" })],
    spacing: { before: 0, after: 120 },
  }),
  new Paragraph({
    children: [new TextRun({ text: "Preferences — Suggestion Chips Reference", size: 28, color: GRAY.replace("#",""), font: "Arial" })],
    spacing: { before: 0, after: 480 },
  }),

  // ── ADMIN SIDE ──────────────────────────────────────────────────────────────
  heading2("Admin side (Smart Assist)"),
  body("The following chips appear in the Preferences dialog for admin roles. Chips are surfaced based on the user’s selected primary role."),
  spacer(),

  ...roleSection("corporate-secretary", "Corporate Secretary", ABOUT_ORDER, PREF_ORDER),
  ...roleSection("board-administrator", "Board Administrator", ABOUT_ORDER, PREF_ORDER),
  ...roleSection("governance-manager", "Governance Manager", ABOUT_ORDER, PREF_ORDER),
  ...roleSection("paralegal", "Paralegal", ABOUT_ORDER, PREF_ORDER),
  ...roleSection("executive-assistant", "Executive Assistant", ABOUT_ORDER, PREF_ORDER),

  // Page break before Director section
  new Paragraph({ children: [new PageBreak()] }),

  // ── DIRECTOR SIDE ───────────────────────────────────────────────────────────
  heading2("Director side (AI Board Member)"),
  body("The following chips appear in the Preferences dialog for director roles. Role-variant chips are tailored versions of the same topic — the chip label stays the same but the prompt text is framed for that role’s perspective."),
  spacer(),

  ...roleSection("non-executive-director", "Non-executive director", ABOUT_ORDER, PREF_ORDER),
  ...roleSection("independent-director", "Independent director", ABOUT_ORDER, PREF_ORDER),
  ...roleSection("committee-chair", "Committee chair", ABOUT_ORDER, PREF_ORDER),
  ...roleSection("board-chair", "Board chair", ABOUT_ORDER, PREF_ORDER),
  ...roleSection("chief-executive-officer", "CEO", ABOUT_ORDER, PREF_ORDER),
  ...roleSection("chief-financial-officer", "CFO", ABOUT_ORDER, PREF_ORDER),
  ...roleSection("chief-operating-officer", "COO", ABOUT_ORDER, PREF_ORDER),

  // Page break before full chip catalogue
  new Paragraph({ children: [new PageBreak()] }),

  // ── COMPLETE CHIP CATALOGUE ─────────────────────────────────────────────────
  heading2("Complete chip catalogue"),
  body("All chips defined in the codebase. Chips with role-variant IDs are the same label with a different prompt text."),
  spacer(),

  heading3("Focus area chips (all)"),
  spacer(),
  ...chipTable(ABOUT_CHIPS),
  spacer(),

  new Paragraph({ children: [new PageBreak()] }),

  heading3("Custom instruction chips (all)"),
  spacer(),
  ...chipTable(PREF_CHIPS),
];

const doc = new Document({
  styles: {
    default: {
      document: { run: { font: "Arial", size: 20 } },
    },
  },
  sections: [{
    properties: {
      page: {
        size: { width: 12240, height: 15840 },
        margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 },
      },
    },
    children,
  }],
});

const buffer = await Packer.toBuffer(doc);
const outPath = path.join(__dirname, "Preferences-Chips-Reference.docx");
writeFileSync(outPath, buffer);
console.log("Written:", outPath);
