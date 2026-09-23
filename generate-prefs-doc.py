"""
Generate Preferences-Chips-Reference.docx
"""
from docx import Document
from docx.shared import Pt, RGBColor, Inches, Cm
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT, WD_ALIGN_VERTICAL
from docx.oxml.ns import qn
from docx.oxml import OxmlElement
import copy, sys, os

# ── Colors ────────────────────────────────────────────────────────────────────
BRAND       = RGBColor(0x0F, 0x3D, 0x74)
BRAND_LIGHT = RGBColor(0xE8, 0xF0, 0xFA)
WHITE       = RGBColor(0xFF, 0xFF, 0xFF)
GRAY        = RGBColor(0x55, 0x55, 0x55)
DARK        = RGBColor(0x33, 0x33, 0x33)
MID_GRAY    = RGBColor(0xDD, 0xDD, 0xDD)

# ── Data ──────────────────────────────────────────────────────────────────────

ABOUT_CHIPS = [
    # Director (shared pool)
    ("d-audit",            "Audit Committee",          "I sit on the Audit Committee and focus on controls, reporting, and oversight."),
    ("d-risk",             "Risk Committee",            "I focus on enterprise risk, emerging risks, and mitigation."),
    ("d-remuneration",     "Remuneration Committee",    "I focus on executive pay, incentives, and remuneration policy."),
    ("d-nomination",       "Nomination Committee",      "I focus on board composition, succession, and governance."),
    ("d-cyber",            "Cybersecurity oversight",   "I pay close attention to cybersecurity oversight and material technology risk."),
    ("d-esg",              "ESG reporting",             "I focus on ESG reporting, disclosures, and long-term oversight."),
    # Role-variant overrides
    ("d-audit-ind",        "Audit Committee",           "I sit on the Audit Committee and focus on financial oversight and controls."),
    ("d-audit-chair",      "Audit Committee",           "I chair the Audit Committee and focus on reporting, controls, and audit matters."),
    ("d-audit-cfo",        "Audit Committee",           "I focus on financial reporting, controls, and audit-related matters."),
    ("d-audit-coo",        "Audit Committee",           "I focus on controls, process gaps, and execution risk."),
    ("d-risk-ind",         "Risk Committee",            "I focus on major risks, controls, and regulatory exposure."),
    ("d-risk-chair",       "Risk Committee",            "I chair the Risk Committee and focus on major exposures and mitigation."),
    ("d-risk-board-chair", "Risk Committee",            "I focus on major board-level risks and cross-committee implications."),
    ("d-risk-ceo",         "Risk Committee",            "I focus on enterprise risk, strategic exposure, and business impact."),
    ("d-risk-cfo",         "Risk Committee",            "I focus on financial risk, controls, and material exposures."),
    ("d-risk-coo",         "Risk Committee",            "I focus on operational risk, resilience, and execution gaps."),
    ("d-risk-advisory",    "Risk Committee",            "I focus on major risks and how they affect strategic choices."),
    ("d-remuneration-chair","Remuneration Committee",   "I chair the Remuneration Committee and focus on executive pay and incentives."),
    ("d-nomination-ind",   "Nomination Committee",      "I focus on board composition, succession, and governance."),
    ("d-nomination-chair", "Nomination Committee",      "I chair the Nomination Committee and focus on succession and board composition."),
    ("d-nomination-board-chair","Nomination Committee", "I focus on board composition, succession, and leadership continuity."),
    ("d-nomination-ceo",   "Nomination Committee",      "I focus on leadership succession and governance implications."),
    ("d-nomination-advisory","Nomination Committee",    "I focus on governance quality, succession, and board effectiveness."),
    ("d-cyber-board-chair","Cybersecurity oversight",   "I focus on cyber risk, resilience, and governance preparedness."),
    ("d-cyber-ceo",        "Cybersecurity oversight",   "I focus on cybersecurity risk, resilience, and leadership implications."),
    ("d-cyber-cfo",        "Cybersecurity oversight",   "I focus on cyber risk with financial, control, or disclosure implications."),
    ("d-cyber-coo",        "Cybersecurity oversight",   "I focus on cybersecurity preparedness, incident risk, and operational resilience."),
    ("d-cyber-advisory",   "Cybersecurity oversight",   "I focus on cybersecurity, resilience, and strategic technology risk."),
    ("d-esg-ind",          "ESG reporting",             "I focus on governance, disclosure quality, and long-term risk."),
    ("d-esg-board-chair",  "ESG reporting",             "I focus on material ESG issues and board-level oversight."),
    ("d-esg-ceo",          "ESG reporting",             "I focus on ESG reporting that could affect strategy, reputation, or stakeholders."),
    ("d-esg-cfo",          "ESG reporting",             "I focus on ESG disclosures that affect reporting, investor expectations, or risk."),
    ("d-esg-coo",          "ESG reporting",             "I focus on operational implications of ESG commitments and reporting."),
    ("d-esg-advisory",     "ESG reporting",             "I focus on ESG reporting, stakeholder expectations, and long-term themes."),
    # Corporate Secretary
    ("cs-agenda",          "Agenda management",         "I focus on agenda management and board meeting coordination."),
    ("cs-approvals",       "Approvals and signatures",  "I manage approvals, signatures, and resolution workflows."),
    ("cs-minutes",         "Minutes and resolutions",   "I'm responsible for minutes, resolutions, and decision records."),
    ("cs-audit-trail",     "Audit trail",               "I need strong audit trails and evidence for governance activity."),
    ("cs-cross-committee", "Cross-committee planning",  "I coordinate work across multiple boards and committees."),
    # Board Administrator
    ("ba-board-book",      "Board book management",     "I manage board books, materials, and publishing workflows."),
    ("ba-publishing",      "Publishing readiness",      "I focus on publishing readiness and final quality checks."),
    ("ba-deadline-tracking","Deadline tracking",        "I track publishing deadlines, submission windows, and board calendar milestones."),
    ("ba-notifications",   "Notifications",             "I coordinate notifications and board pack distribution."),
    ("ba-historical",      "Historical search",         "I often need to find past materials and prior decisions quickly."),
    # Governance Manager
    ("gm-operations",      "Governance operations",     "I focus on governance operations across boards and committees."),
    ("gm-policy",          "Policy and procedure",      "I manage governance policies, procedures, and process consistency."),
    ("gm-committee",       "Committee structure",       "I work on committee structure, roles, and governance setup."),
    ("gm-compliance",      "Compliance planning",       "I track compliance-sensitive deadlines and governance obligations."),
    ("gm-reporting",       "Governance reporting",      "I prepare governance reports, registers, and compliance summaries."),
    # Paralegal
    ("pl-resolution",      "Resolution support",        "I support resolutions, approvals, and governance records."),
    ("pl-doc-history",     "Document history",          "I often need document history, prior versions, and supporting evidence."),
    ("pl-records",         "Record keeping",            "I focus on accurate records, archives, and traceability."),
    ("pl-verification",    "Verification",              "I need to verify details against source documents."),
    ("pl-statutory",       "Statutory filings",         "I assist with statutory filings, lodgements, and regulatory submissions."),
    # Executive Assistant
    ("ea-logistics",       "Meeting logistics",         "I support meeting logistics and coordination."),
    ("ea-reminders",       "Reminders and follow-up",   "I handle reminders, follow-up, and deadline tracking."),
    ("ea-director-support","Director support",          "I support directors and executives with board-related tasks."),
    ("ea-status",          "Quick status checks",       "I need quick status checks on what is ready and what is missing."),
    ("ea-prep",            "Pre-meeting preparation",   "I prepare briefing notes, agendas, and materials ahead of meetings."),
]

PREF_CHIPS = [
    # Director
    ("d-lead-risks",       "Lead with the risks",               "Lead with the key risks, open issues, and decisions I should pay attention to."),
    ("d-short-answer",     "Short answer first",                "Lead with the direct answer in one or two sentences, then supporting detail below."),
    ("d-tables",           "Tables for comparisons",            "When comparing items, periods, or committees, use a table rather than bullets."),
    ("d-3-5-bullets",      "Keep it to 3–5 bullets",       "Keep responses to three to five bullets. Use full sentences, not fragments."),
    ("d-under-200",        "Keep responses under 200 words",    "Keep responses under 200 words unless more detail is necessary."),
    ("d-lead-risks-ind",   "Lead with the risks",               "Lead with the risks, tradeoffs, and unresolved concerns."),
    ("d-lead-risks-chair", "Lead with the risks",               "Lead with the biggest issues, decisions, and escalation points."),
    ("d-lead-risks-board-chair","Lead with the risks",          "Lead with the most material risks and decisions for the board."),
    ("d-lead-risks-ceo",   "Lead with the risks",               "Lead with strategic risks, implications, and actions."),
    ("d-lead-risks-cfo",   "Lead with the risks",               "Lead with financial risks, controls issues, and key implications."),
    ("d-lead-risks-coo",   "Lead with the risks",               "Lead with operational risks, bottlenecks, and next steps."),
    ("d-under-200-board-chair","Keep responses under 200 words","Keep responses under 200 words and focus on what matters most."),
    ("d-under-200-ceo",    "Keep responses under 200 words",    "Keep responses under 200 words unless I ask for more depth."),
    # Admin shared
    ("checklists",         "Use checklists for reviews",        "Use checklist format for readiness reviews, action tracking, and to-do items."),
    ("tables",             "Use tables for comparisons",        "Present comparative data in tables when comparing across periods, documents, or entities."),
    ("regulatory",         "Include regulatory context",        "Reference relevant regulatory frameworks and compliance implications when discussing governance topics."),
    ("verify",             "Remind me to verify high-stakes items","Add a verification reminder when discussing regulatory filings, legal matters, or board votes."),
    ("board-ready",        "Summarise in board-ready format",   "Format summaries in a board-ready style suitable for distribution to the board."),
    ("historical",         "Include historical context",        "When relevant, include historical context from previous meetings or decisions on the same topic."),
    ("flag-attention",     "Flag items needing board attention","Proactively flag items that may require board or committee escalation."),
    ("concise",            "Keep responses concise",            "Keep responses concise — focus on key points and conclusions."),
    ("action-owners",      "Identify action owners",            "Where possible, identify who is responsible for each action or decision."),
    ("follow-up",          "Highlight follow-up items",         "Explicitly list follow-up items and outstanding actions at the end of each response."),
    ("plain-language",     "Use plain language",                "Avoid jargon and explain technical terms when used."),
    ("timeline",           "Include key dates",                 "Highlight key deadlines, reporting dates, and milestone timelines."),
    ("best-practice",      "Note governance best practice",     "Where relevant, note applicable governance best practice or regulatory guidance."),
    # Corporate Secretary
    ("cs-concise-structured","Concise and structured",          "Keep answers concise, structured, and easy to scan."),
    ("cs-risks-deadlines", "Risks and deadlines first",         "Lead with risks, deadlines, missing items, and blockers."),
    ("cs-checklist",       "Checklist format",                  "Use checklists and clear next steps when helpful."),
    # Board Administrator
    ("ba-status-first",    "Operational summary first",         "Start with status, blockers, and recommended actions."),
    ("ba-short-summaries", "Short summaries",                   "Prefer short summaries over long explanations."),
    ("ba-action-oriented", "Action-oriented",                   "Keep responses direct, operational, and action-oriented."),
    # Governance Manager
    ("gm-gov-tone",        "Governance tone",                   "Use a professional and governance-oriented tone."),
    ("gm-implications",    "Implications first",                "Highlight implications, dependencies, and compliance-sensitive points."),
    ("gm-balanced",        "Balanced detail",                   "Be concise, but include enough context for sound governance decisions."),
    # Paralegal
    ("pl-precise",         "Precise wording",                   "Be precise and avoid loose paraphrasing."),
    ("pl-evidence",        "Evidence-oriented",                  "Separate facts from summaries and make verification easy."),
    ("pl-cautious",        "Cautious tone",                     "Use a careful, professional tone for legally sensitive topics."),
    # Executive Assistant
    ("ea-plain",           "Plain language",                    "Use plain language and keep things easy to understand."),
    ("ea-brief",           "Brief and actionable",              "Keep answers brief and highly actionable."),
    ("ea-steps",           "Step by step",                      "Use simple step-by-step guidance when giving instructions."),
]

ABOUT_ORDER = {
    "non-executive-director": ["d-risk","d-audit","d-cyber","d-esg","d-nomination"],
    "independent-director":   ["d-audit-ind","d-risk-ind","d-nomination-ind","d-esg-ind","d-cyber"],
    "committee-chair":        ["d-audit-chair","d-risk-chair","d-remuneration-chair","d-nomination-chair","d-cyber"],
    "board-chair":            ["d-risk-board-chair","d-nomination-board-chair","d-cyber-board-chair","d-esg-board-chair","d-remuneration"],
    "ceo":                    ["d-risk-ceo","d-cyber-ceo","d-esg-ceo","d-nomination-ceo","d-audit"],
    "cfo":                    ["d-audit-cfo","d-risk-cfo","d-esg-cfo","d-cyber-cfo","d-nomination"],
    "coo":                    ["d-risk-coo","d-cyber-coo","d-audit-coo","d-esg-coo","d-nomination"],
    "corporate-secretary":    ["cs-agenda","cs-approvals","cs-minutes","cs-audit-trail","cs-cross-committee"],
    "board-administrator":    ["ba-board-book","ba-publishing","ba-deadline-tracking","ba-notifications","ba-historical"],
    "governance-manager":     ["gm-operations","gm-policy","gm-committee","gm-compliance","gm-reporting"],
    "paralegal":              ["pl-resolution","pl-doc-history","pl-records","pl-verification","pl-statutory"],
    "executive-assistant":    ["ea-logistics","ea-reminders","ea-director-support","ea-status","ea-prep"],
}

PREF_ORDER = {
    "non-executive-director": ["d-lead-risks","d-short-answer","d-tables","d-3-5-bullets","d-under-200"],
    "independent-director":   ["d-lead-risks-ind","d-short-answer","d-tables","d-3-5-bullets","d-under-200"],
    "committee-chair":        ["d-lead-risks-chair","d-short-answer","d-tables","d-3-5-bullets","d-under-200"],
    "board-chair":            ["d-lead-risks-board-chair","d-under-200-board-chair","d-short-answer","d-tables","d-3-5-bullets"],
    "ceo":                    ["d-lead-risks-ceo","d-under-200-ceo","d-short-answer","d-tables","d-3-5-bullets"],
    "cfo":                    ["d-lead-risks-cfo","d-short-answer","d-tables","d-3-5-bullets","d-under-200"],
    "coo":                    ["d-lead-risks-coo","d-short-answer","d-tables","d-3-5-bullets","d-under-200"],
    "corporate-secretary":    ["cs-concise-structured","cs-risks-deadlines","cs-checklist","checklists","action-owners","timeline"],
    "board-administrator":    ["ba-status-first","ba-short-summaries","ba-action-oriented","checklists","action-owners","timeline"],
    "governance-manager":     ["gm-gov-tone","gm-implications","gm-balanced","regulatory","best-practice","verify"],
    "paralegal":              ["pl-precise","pl-evidence","pl-cautious","verify","historical","regulatory","action-owners"],
    "executive-assistant":    ["ea-plain","ea-brief","ea-steps","checklists","timeline","action-owners"],
}

# ── Helpers ───────────────────────────────────────────────────────────────────

about_map = {c[0]: c for c in ABOUT_CHIPS}
pref_map  = {c[0]: c for c in PREF_CHIPS}

def resolve(order, chip_map):
    return [chip_map[id_] for id_ in order if id_ in chip_map]

def set_cell_bg(cell, rgb: RGBColor):
    tc = cell._tc
    tcPr = tc.get_or_add_tcPr()
    shd = OxmlElement("w:shd")
    shd.set(qn("w:val"), "clear")
    shd.set(qn("w:color"), "auto")
    shd.set(qn("w:fill"), f"{rgb[0]:02X}{rgb[1]:02X}{rgb[2]:02X}")
    tcPr.append(shd)

def set_cell_margins(cell, top=60, bottom=60, left=100, right=100):
    tc = cell._tc
    tcPr = tc.get_or_add_tcPr()
    tcMar = OxmlElement("w:tcMar")
    for side, val in [("top",top),("bottom",bottom),("left",left),("right",right)]:
        el = OxmlElement(f"w:{side}")
        el.set(qn("w:w"), str(val))
        el.set(qn("w:type"), "dxa")
        tcMar.append(el)
    tcPr.append(tcMar)

def set_table_borders(table, color="DDDDDD"):
    tbl = table._tbl
    tblPr = tbl.tblPr
    tblBorders = OxmlElement("w:tblBorders")
    for side in ["top","left","bottom","right","insideH","insideV"]:
        el = OxmlElement(f"w:{side}")
        el.set(qn("w:val"), "single")
        el.set(qn("w:sz"), "4")
        el.set(qn("w:space"), "0")
        el.set(qn("w:color"), color)
        tblBorders.append(el)
    tblPr.append(tblBorders)

def set_col_width(cell, width_twips):
    tc = cell._tc
    tcPr = tc.get_or_add_tcPr()
    tcW = OxmlElement("w:tcW")
    tcW.set(qn("w:w"), str(width_twips))
    tcW.set(qn("w:type"), "dxa")
    tcPr.append(tcW)

def page_width_twips(doc):
    section = doc.sections[0]
    return section.page_width.twips - section.left_margin.twips - section.right_margin.twips

# ── Document builders ─────────────────────────────────────────────────────────

def add_cover_heading(doc, line1, line2):
    p1 = doc.add_paragraph()
    run = p1.add_run(line1)
    run.bold = True
    run.font.size = Pt(22)
    run.font.color.rgb = BRAND
    run.font.name = "Arial"
    p1.paragraph_format.space_after = Pt(4)

    p2 = doc.add_paragraph()
    run2 = p2.add_run(line2)
    run2.font.size = Pt(14)
    run2.font.color.rgb = GRAY
    run2.font.name = "Arial"
    p2.paragraph_format.space_after = Pt(24)

def add_h2(doc, text):
    p = doc.add_paragraph()
    run = p.add_run(text)
    run.bold = True
    run.font.size = Pt(14)
    run.font.color.rgb = BRAND
    run.font.name = "Arial"
    p.paragraph_format.space_before = Pt(18)
    p.paragraph_format.space_after = Pt(4)
    # Bottom border
    pPr = p._p.get_or_add_pPr()
    pBdr = OxmlElement("w:pBdr")
    bottom = OxmlElement("w:bottom")
    bottom.set(qn("w:val"), "single")
    bottom.set(qn("w:sz"), "6")
    bottom.set(qn("w:space"), "2")
    bottom.set(qn("w:color"), f"{BRAND[0]:02X}{BRAND[1]:02X}{BRAND[2]:02X}")
    pBdr.append(bottom)
    pPr.append(pBdr)

def add_h3(doc, text):
    p = doc.add_paragraph()
    run = p.add_run(text)
    run.bold = True
    run.font.size = Pt(12)
    run.font.color.rgb = DARK
    run.font.name = "Arial"
    p.paragraph_format.space_before = Pt(14)
    p.paragraph_format.space_after = Pt(4)

def add_body(doc, text, bold=False):
    p = doc.add_paragraph()
    run = p.add_run(text)
    run.font.size = Pt(10)
    run.font.color.rgb = DARK
    run.font.name = "Arial"
    run.bold = bold
    p.paragraph_format.space_before = Pt(2)
    p.paragraph_format.space_after = Pt(2)

def add_chip_table(doc, chips):
    if not chips:
        return
    content_w = int(page_width_twips(doc))
    col1 = int(content_w * 0.28)
    col2 = content_w - col1

    table = doc.add_table(rows=0, cols=2)
    table.style = "Table Grid"
    set_table_borders(table)
    table.alignment = WD_TABLE_ALIGNMENT.LEFT

    for (cid, label, text) in chips:
        row = table.add_row()
        c0, c1 = row.cells[0], row.cells[1]

        set_col_width(c0, col1)
        set_col_width(c1, col2)
        set_cell_bg(c0, BRAND_LIGHT)
        set_cell_margins(c0, 60, 60, 120, 120)
        set_cell_margins(c1, 60, 60, 120, 120)

        p0 = c0.paragraphs[0]
        r0 = p0.add_run(label)
        r0.bold = True
        r0.font.size = Pt(9.5)
        r0.font.color.rgb = BRAND
        r0.font.name = "Arial"

        p1 = c1.paragraphs[0]
        r1 = p1.add_run(text)
        r1.font.size = Pt(9.5)
        r1.font.color.rgb = DARK
        r1.font.name = "Arial"

    doc.add_paragraph()  # spacer

def add_role_section(doc, role_key, role_label):
    about = resolve(ABOUT_ORDER.get(role_key, []), about_map)
    prefs = resolve(PREF_ORDER.get(role_key, []), pref_map)
    add_h3(doc, role_label)
    add_body(doc, "Focus area chips  (About you section)", bold=True)
    add_chip_table(doc, about)
    add_body(doc, "Custom instruction chips  (Response style section)", bold=True)
    add_chip_table(doc, prefs)

def add_page_break(doc):
    p = doc.add_paragraph()
    run = p.add_run()
    run.add_break(1)  # WD_BREAK.PAGE = 1 but we can use int

# ── Main ──────────────────────────────────────────────────────────────────────

doc = Document()

# Page setup — US Letter, 1-inch margins
section = doc.sections[0]
section.page_width  = Inches(8.5)
section.page_height = Inches(11)
section.left_margin = section.right_margin = Inches(1)
section.top_margin  = section.bottom_margin = Inches(1)

# Default font
style = doc.styles["Normal"]
style.font.name = "Arial"
style.font.size = Pt(10)

# ── Cover ──────────────────────────────────────────────────────────────────────
add_cover_heading(doc,
    "Smart Assist / AI Board Member",
    "Preferences — Suggestion Chips Reference")

# ── ADMIN SIDE ─────────────────────────────────────────────────────────────────
add_h2(doc, "Admin side (Smart Assist)")
add_body(doc,
    "Chips surface based on the user’s selected primary role in the Preferences dialog. "
    "Each role has a distinct set for Focus areas (About you) and Response style (Custom instructions).")
doc.add_paragraph()

add_role_section(doc, "corporate-secretary",  "Corporate Secretary")
add_role_section(doc, "board-administrator",  "Board Administrator")
add_role_section(doc, "governance-manager",   "Governance Manager")
add_role_section(doc, "paralegal",            "Paralegal")
add_role_section(doc, "executive-assistant",  "Executive Assistant")

# ── DIRECTOR SIDE ──────────────────────────────────────────────────────────────
doc.add_page_break()
add_h2(doc, "Director side (AI Board Member)")
add_body(doc,
    "Director chips are role-variant: the chip label is the same across roles, but the prompt text is "
    "reframed for each role’s perspective. Chips surface based on the user’s selected primary role.")
doc.add_paragraph()

add_role_section(doc, "non-executive-director", "Non-executive director")
add_role_section(doc, "independent-director",   "Independent director")
add_role_section(doc, "committee-chair",        "Committee chair")
add_role_section(doc, "board-chair",            "Board chair")
add_role_section(doc, "ceo",                    "CEO")
add_role_section(doc, "cfo",                    "CFO")
add_role_section(doc, "coo",                    "COO")

# ── FULL CATALOGUE ─────────────────────────────────────────────────────────────
doc.add_page_break()
add_h2(doc, "Complete chip catalogue")
add_body(doc, "Every chip defined in the codebase, in definition order.")
doc.add_paragraph()

add_body(doc, "Focus area chips (all)", bold=True)
add_chip_table(doc, ABOUT_CHIPS)

doc.add_page_break()
add_body(doc, "Custom instruction chips (all)", bold=True)
add_chip_table(doc, PREF_CHIPS)

# ── Save ───────────────────────────────────────────────────────────────────────
out = os.path.join(os.path.dirname(os.path.abspath(__file__)), "Preferences-Chips-Reference.docx")
doc.save(out)
print(f"Saved: {out}")
