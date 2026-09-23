import { useEffect, useRef, useState } from "react";
import {
  Box,
  Chip,
  Divider,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Typography,
  useTheme,
  type SxProps,
  type Theme,
} from "@mui/material";

import { ONBOARDING_PROMPT } from "../data/hybrid-search.constants.js";

// ─── Leading icons (figma-exports/icons) ────────────────────────────────────
// Inlined verbatim from the design's SVG exports so the chips show the exact
// Figma glyphs. `width/height: 1em` lets the Atlas chip icon styling drive the
// render size; `currentColor` matches the chip's text color.

type IconProps = React.SVGProps<SVGSVGElement>;

const Svg = ({ d, ...rest }: IconProps & { d: string }) => (
  <svg
    viewBox="0 0 20 20"
    width="1em"
    height="1em"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path d={d} />
  </svg>
);

const SearchIcon = (p: IconProps) => (
  <Svg
    {...p}
    d="M15.8898 16.6472L10.9266 11.684C10.51 12.0003 10.0531 12.2452 9.55596 12.4188C9.05884 12.5924 8.54589 12.6792 8.0171 12.6792C6.71731 12.6792 5.61233 12.2243 4.70216 11.3144C3.792 10.4044 3.33691 9.30001 3.33691 8.00108C3.33691 6.70214 3.79187 5.59727 4.70179 4.68648C5.61171 3.7757 6.71614 3.32031 8.01508 3.32031C9.31401 3.32031 10.4189 3.7754 11.3297 4.68556C12.2405 5.59573 12.6959 6.70071 12.6959 8.0005C12.6959 8.54532 12.6064 9.06628 12.4274 9.5634C12.2485 10.0605 12.0062 10.5094 11.7006 10.91L16.6638 15.8732L15.8898 16.6472ZM8.01637 11.5959C9.02065 11.5959 9.87108 11.2476 10.5677 10.5511C11.2642 9.85448 11.6125 9.00405 11.6125 7.99977C11.6125 6.99549 11.2642 6.14506 10.5677 5.44848C9.87108 4.7519 9.02065 4.4036 8.01637 4.4036C7.01209 4.4036 6.16166 4.7519 5.46508 5.44848C4.76851 6.14506 4.42023 6.99549 4.42023 7.99977C4.42023 9.00405 4.76851 9.85448 5.46508 10.5511C6.16166 11.2476 7.01209 11.5959 8.01637 11.5959Z"
  />
);

const TaskIcon = (p: IconProps) => (
  <Svg
    {...p}
    d="M12.8336 15.7023L9.60128 12.4491L10.3753 11.6751L12.8336 14.1542L17.4538 9.53402L18.2278 10.308L12.8336 15.7023ZM16.5836 7.99875H15.5003V4.49875H13.5836V6.67821H6.41699V4.49875H4.5003V15.4988H9.00031V16.5821H3.41699V3.41544H8.51156C8.58528 3.06502 8.75515 2.77016 9.02116 2.53085C9.28717 2.29154 9.61356 2.17188 10.0003 2.17188C10.3764 2.17188 10.6987 2.29154 10.9674 2.53085C11.2361 2.77016 11.4073 3.06502 11.481 3.41544H16.5836V7.99875ZM9.99733 4.59492C10.1863 4.59492 10.3456 4.53101 10.4755 4.40319C10.6053 4.27537 10.6702 4.11698 10.6702 3.92802C10.6702 3.73908 10.6063 3.5797 10.4785 3.4499C10.3506 3.32009 10.1922 3.25519 10.0033 3.25519C9.81434 3.25519 9.65497 3.3191 9.52516 3.44692C9.39534 3.57474 9.33043 3.73312 9.33043 3.92206C9.33043 4.11102 9.39434 4.2704 9.52216 4.40021C9.64998 4.53001 9.80837 4.59492 9.99733 4.59492Z"
  />
);

const ChartLineIcon = (p: IconProps) => (
  <Svg
    {...p}
    d="M3.06227 14.7725L2.32031 14.0305L8.03183 8.31901L11.3027 11.569L16.8588 5.27734L17.6953 5.97282L11.3812 13.1523L8.03183 9.80293L3.06227 14.7725Z"
  />
);

const InfoIcon = (p: IconProps) => (
  <Svg
    {...p}
    d="M9.45866 13.7929H10.542V9.00128H9.45866V13.7929ZM9.99591 7.74168C10.1618 7.74168 10.3023 7.68559 10.4174 7.57341C10.5325 7.46121 10.59 7.32219 10.59 7.15634C10.59 6.9905 10.5339 6.85001 10.4217 6.73489C10.3096 6.61978 10.1705 6.56222 10.0047 6.56222C9.83884 6.56222 9.69835 6.61832 9.58324 6.73051C9.46813 6.84271 9.41058 6.98173 9.41058 7.14757C9.41058 7.31342 9.46667 7.4539 9.57887 7.56901C9.69105 7.68412 9.83006 7.74168 9.99591 7.74168ZM10.0075 17.5846C8.96423 17.5846 7.98173 17.3872 7.05995 16.9925C6.13816 16.5978 5.33134 16.0547 4.63949 15.3631C3.94763 14.6716 3.40425 13.8654 3.00935 12.9447C2.61444 12.0239 2.41699 11.04 2.41699 9.99314C2.41699 8.94622 2.61435 7.96534 3.00908 7.05051C3.4038 6.13566 3.94692 5.33232 4.63845 4.64047C5.32999 3.94861 6.13615 3.40523 7.05693 3.01032C7.97771 2.61542 8.96155 2.41797 10.0085 2.41797C11.0554 2.41797 12.0362 2.61533 12.9511 3.01005C13.8659 3.40478 14.6693 3.9479 15.3611 4.63943C16.053 5.33097 16.5964 6.1355 16.9913 7.05303C17.3862 7.97056 17.5836 8.95093 17.5836 9.99414C17.5836 11.0374 17.3863 12.0199 16.9915 12.9416C16.5968 13.8634 16.0537 14.6702 15.3622 15.3621C14.6706 16.054 13.8661 16.5973 12.9486 16.9922C12.031 17.3871 11.0507 17.5846 10.0075 17.5846ZM10.0003 16.5013C11.8059 16.5013 13.3406 15.8693 14.6045 14.6054C15.8684 13.3416 16.5003 11.8068 16.5003 10.0013C16.5003 8.19573 15.8684 6.661 14.6045 5.39712C13.3406 4.13323 11.8059 3.50128 10.0003 3.50128C8.19475 3.50128 6.66003 4.13323 5.39614 5.39712C4.13225 6.661 3.5003 8.19573 3.5003 10.0013C3.5003 11.8068 4.13225 13.3416 5.39614 14.6054C6.66003 15.8693 8.19475 16.5013 10.0003 16.5013Z"
  />
);

// Plus glyph for the "Show more" overflow chip (full-screen + home hero, where
// only the first few chips are shown inline and the rest collapse into a menu).
const PlusIcon = (p: IconProps) => (
  <Svg {...p} d="M9.5 9.5V4.5H10.5V9.5H15.5V10.5H10.5V15.5H9.5V10.5H4.5V9.5H9.5Z" />
);

// AIBM agent-mode chip icons
const BriefcaseChipIcon = (p: IconProps) => (
  <svg viewBox="0 0 20 20" width="1em" height="1em" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...p}>
    <path d="M7.5 7V5.75c0-.41.34-.75.75-.75h3.5c.41 0 .75.34.75.75V7H15c.55 0 1 .45 1 1v7c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1h2.5zm1.25-.75V7h2.5V6.25h-2.5zM5 9v6h10V9H5z" />
  </svg>
);

const ShieldSearchChipIcon = (p: IconProps) => (
  <svg viewBox="0 0 20 20" width="1em" height="1em" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...p}>
    <path d="M10 2L3 5.5V10c0 4.08 2.97 7.9 7 9 4.03-1.1 7-4.92 7-9V5.5L10 2zm0 4a2.5 2.5 0 012.5 2.5c0 .53-.16.98-.44 1.38l1.94 1.94-1.06 1.06-1.94-1.94A2.5 2.5 0 1110 6zm0 1a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
  </svg>
);

const ListCheckChipIcon = (p: IconProps) => (
  <svg viewBox="0 0 20 20" width="1em" height="1em" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...p}>
    <path d="M3 5h2.5v2H3V5zm4 .5h10v1H7v-1zM3 9h2.5v2H3V9zm4 .5h10v1H7v-1zM3 13h2.5v2H3v-2zm4 1.5l1.5 1.5 3.5-4 1 1-4.5 5-2.5-2.5 1-1z" />
  </svg>
);

// ─── Admin leading icons (figma-exports/icons, 24×24) ────────────────────────
// These come from the admin chip set's Figma exports. They're 24×24 multi-path
// glyphs (unlike the 20×20 single-path director icons above), so they render
// their own <svg> rather than going through the `Svg` helper.

const TraceIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...p}>
    <path d="M3 3H9.65085V9.65085H3V3ZM11.8679 3H18.5187V9.65085H11.8679V3ZM3 11.8679H9.65085V18.5187H3V11.8679ZM13.198 4.33014V8.32071H17.1886V4.33014H13.198ZM4.33013 4.33014V8.32071H8.32072V4.33014H4.33013ZM4.33013 13.198V17.1886H8.32072V13.198H4.33013Z" />
    <path d="M15.5514 17.9048C16.2063 17.9048 16.7622 17.6763 17.2193 17.2193C17.6763 16.7622 17.9048 16.2063 17.9048 15.5514C17.9048 14.8966 17.6763 14.3406 17.2193 13.8836C16.7622 13.4265 16.2063 13.198 15.5514 13.198C14.8965 13.198 14.3406 13.4265 13.8836 13.8836C13.4265 14.3406 13.198 14.8966 13.198 15.5514C13.198 16.2063 13.4265 16.7622 13.8836 17.2193C14.3406 17.6763 14.8965 17.9048 15.5514 17.9048ZM20.074 21L17.6456 18.5716C17.3318 18.7899 16.9994 18.955 16.6484 19.067C16.2973 19.179 15.9317 19.235 15.5514 19.235C14.5282 19.235 13.6585 18.8768 12.9422 18.1606C12.226 17.4443 11.8679 16.5746 11.8679 15.5514C11.8679 14.5282 12.226 13.6585 12.9422 12.9422C13.6585 12.226 14.5282 11.8679 15.5514 11.8679C16.5746 11.8679 17.4443 12.226 18.1606 12.9422C18.8768 13.6585 19.235 14.5282 19.235 15.5514C19.235 15.9317 19.179 16.2973 19.067 16.6484C18.955 16.9994 18.7899 17.3318 18.5716 17.6456L21 20.074L20.074 21Z" />
  </svg>
);

const OnboardIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...p}>
    <path d="M5.4189 9.62066L7.6189 10.5514C7.8907 10.0078 8.18044 9.48251 8.48814 8.97546C8.79584 8.46839 9.13495 7.96935 9.50547 7.47833L8.03815 7.19371C7.98686 7.18089 7.93718 7.18249 7.8891 7.19851C7.84103 7.21454 7.79776 7.24179 7.7593 7.28026L5.4189 9.62066ZM8.81502 11.4937L11.6554 14.3187C12.4003 14.0072 13.1727 13.5764 13.9727 13.0264C14.7727 12.4764 15.5323 11.8418 16.2516 11.1226C17.3734 10.0008 18.241 8.77865 18.8544 7.45623C19.4679 6.1338 19.7714 4.77322 19.765 3.37448C18.3663 3.36808 17.0047 3.67161 15.6804 4.28506C14.356 4.89853 13.133 5.76615 12.0112 6.88793C11.292 7.60717 10.6573 8.36839 10.1073 9.17161C9.55735 9.97481 9.12657 10.7488 8.81502 11.4937ZM13.6304 9.49368C13.292 9.15523 13.1227 8.7437 13.1227 8.25908C13.1227 7.77448 13.292 7.36295 13.6304 7.02448C13.9689 6.68603 14.3846 6.51681 14.8775 6.51681C15.3705 6.51681 15.7862 6.68603 16.1246 7.02448C16.4631 7.36295 16.6323 7.77448 16.6323 8.25908C16.6323 8.7437 16.4631 9.15523 16.1246 9.49368C15.7862 9.83215 15.3705 10.0014 14.8775 10.0014C14.3846 10.0014 13.9689 9.83215 13.6304 9.49368ZM13.5188 17.7302L15.8593 15.3898C15.8977 15.3514 15.925 15.3081 15.941 15.26C15.957 15.212 15.9586 15.1623 15.9458 15.111L15.6612 13.6437C15.1702 14.0142 14.6711 14.3507 14.1641 14.6533C13.657 14.9559 13.1317 15.243 12.5881 15.5148L13.5188 17.7302ZM21.1323 2.00143C21.3464 3.92835 21.1185 5.75462 20.4486 7.48026C19.7788 9.20589 18.6765 10.836 17.1419 12.3706L16.9688 12.5437L17.4208 14.8071C17.481 15.1084 17.4676 15.4014 17.3804 15.686C17.2932 15.9706 17.1426 16.2199 16.9285 16.4341L13.0073 20.3456L11.1285 15.9302L7.2093 12.011L2.79395 10.1226L6.69007 6.21106C6.90419 5.99696 7.15611 5.84472 7.44584 5.75433C7.73558 5.66393 8.03109 5.64887 8.33237 5.70913L10.615 6.17066C10.6471 6.13861 10.6744 6.10976 10.6968 6.08411C10.7192 6.05847 10.7465 6.02963 10.7785 5.99758C12.3131 4.46298 13.9407 3.35978 15.6612 2.68798C17.3817 2.0162 19.2054 1.78735 21.1323 2.00143ZM4.52087 15.0706C5.00804 14.5834 5.60194 14.3389 6.30257 14.337C7.0032 14.3351 7.5971 14.5777 8.08427 15.0649C8.57145 15.552 8.81248 16.1459 8.80735 16.8466C8.80221 17.5472 8.55606 18.1411 8.0689 18.6283C7.6907 19.0065 7.07019 19.3311 6.20737 19.6023C5.34455 19.8734 4.23752 20.0904 2.88627 20.2532C3.04909 18.902 3.26767 17.7949 3.54202 16.9321C3.81639 16.0693 4.14267 15.4488 4.52087 15.0706ZM5.59007 16.1341C5.41059 16.3135 5.23751 16.6225 5.07085 17.061C4.90418 17.4995 4.79071 17.9469 4.73045 18.4033C5.18686 18.343 5.6343 18.2305 6.07277 18.0658C6.51122 17.9011 6.8202 17.7289 6.9997 17.5494C7.1997 17.3494 7.30482 17.1094 7.31507 16.8293C7.32532 16.5491 7.23045 16.3091 7.03045 16.1091C6.83045 15.9091 6.59039 15.8132 6.31027 15.8216C6.03014 15.8299 5.79007 15.9341 5.59007 16.1341Z" />
  </svg>
);

// ─── Suggestion chips (Figma node 5894:243481) ──────────────────────────────
// Labels + leading icons come straight from the design. Clicking a chip opens a
// dropdown of starter prompts above the composer (`directPaste` chips skip the
// dropdown and drop their single prompt straight in). Shared across the home
// hero (small chips), the full-screen overlay and the docked panel (large).

export type SuggestionChip = {
  label: string;
  tag?: string;
  Icon: (p: IconProps) => React.ReactElement;
  // Up to three starter prompts surfaced in the dropdown. Bracketed [tokens]
  // are placeholders the user replaces (e.g. [committee], [topic]).
  prompts: string[];
  // When true (Learn), there is no dropdown — clicking the chip pastes
  // `prompts[0]` straight into the composer (no submit) for the user to send.
  directPaste?: boolean;
  // When true (MVP Learn), clicking pastes AND submits `prompts[0]` straight to
  // the chat (via onSubmitPrompt) rather than only populating the composer.
  submit?: boolean;
};

export const DIRECTOR_SUGGESTION_CHIPS: SuggestionChip[] = [
  {
    label: "Summarize & brief",
    tag: "@briefcase",
    Icon: BriefcaseChipIcon,
    prompts: [
      "Summarize the key takeaways from the latest board pack in under 1500 words",
      "What are the top 3 risks the board should know about [topic]?",
      "Give me a board-ready synthesis of [document] with clear takeaways",
    ],
  },
  {
    label: "Investigate deeply",
    tag: "@diligence",
    Icon: ShieldSearchChipIcon,
    prompts: [
      "Run a due-diligence deep-dive on [company or topic]",
      "Cross-reference findings across our governance documents and flag inconsistencies",
      "Produce a structured risk assessment with an executive summary on [topic]",
    ],
  },
  {
    label: "Track commitments",
    tag: "@follow-through",
    Icon: ListCheckChipIcon,
    prompts: [
      "What commitments are still open from the last board meeting?",
      "Give me a status update on action items owned by [person]",
      "Which follow-ups from [committee] are overdue?",
    ],
  },
  {
    label: "Trace decisions",
    Icon: TraceIcon,
    prompts: [
      "How has the board's view on [topic] changed over the last year?",
      "What was the board's rationale for [decision], and were any concerns or dissent recorded?",
      "Trace the history of [initiative] — when it was first raised, discussed, and approved.",
    ],
  },
  {
    label: "Learn about AI Board Member",
    Icon: InfoIcon,
    // Matches ONBOARDING_PROMPT so submitting it returns the dedicated
    // "what can I help with" onboarding answer rather than a generic reply.
    prompts: [ONBOARDING_PROMPT],
    directPaste: true,
  },
];

// Admin chip set (Figma node — admin home). Same chip behaviour as the director
// set (dropdown of starter prompts; Learn pastes the onboarding prompt straight
// in), but the use cases are reframed around what a board administrator does:
// find materials, trace decisions, answer questions, onboard a director.
export const ADMIN_SUGGESTION_CHIPS: SuggestionChip[] = [
  {
    label: "Find materials",
    Icon: SearchIcon,
    prompts: [
      "Find materials related to [topic] from last year.",
      "Which board and committee packs reference [topic / document] since [year]?",
      "Locate the latest version of [policy / charter / report] and where it was last circulated.",
    ],
  },
  {
    label: "Trace decisions",
    Icon: TraceIcon,
    prompts: [
      "When was [initiative / policy] formally approved?",
      "Which committee approved [decision], and what was recorded in the minutes?",
      "Show the approval trail for [initiative] — from first tabled to final sign-off.",
    ],
  },
  {
    label: "Answer questions",
    Icon: InfoIcon,
    prompts: [
      "Has the board previously discussed [topic]?",
      "What did the board conclude the last time [topic] was raised?",
      "Which committee or directors have ownership of [topic / action]?",
    ],
  },
  {
    label: "Onboard director",
    Icon: OnboardIcon,
    prompts: [
      "Find induction materials and recent board context.",
      "What are the key decisions and approvals from the past year a new director should know?",
      "Which committee papers and policies should a new director read before their first [committee] meeting?",
    ],
  },
  {
    label: "Learn about Smart Assist",
    Icon: InfoIcon,
    // Same as the director side — pastes the onboarding prompt straight in so
    // submitting it returns the dedicated "what can I help with" answer.
    prompts: [ONBOARDING_PROMPT],
    directPaste: true,
  },
];

// ─── MVP prompt set ──────────────────────────────────────────────────────────
// The MVP branch reverts to the original four single-prompt templates per
// persona (no "Learn"/onboarding entry, no multi-prompt dropdown). Clicking a
// chip or card inserts the one prompt straight into the composer. Labels +
// prompts come from the design; cards display the prompt quoted, but the clean
// (unquoted) string is what gets inserted.

export type MvpPrompt = {
  label: string;
  Icon: (p: IconProps) => React.ReactElement;
  prompt: string;
};

export const MVP_ADMIN_PROMPTS: MvpPrompt[] = [
  { label: "Find materials",      Icon: SearchIcon,  prompt: "Find materials related to [topic] from last year." },
  { label: "Trace decisions",     Icon: TraceIcon,   prompt: "When was [initiative / policy] formally approved?" },
  { label: "Answer questions",    Icon: InfoIcon,    prompt: "Has the board previously discussed [topic]?" },
  { label: "Onboard director",    Icon: OnboardIcon, prompt: "Find induction materials and recent board context." },
];

export const MVP_DIRECTOR_PROMPTS: MvpPrompt[] = [
  { label: "Find topics",           Icon: SearchIcon,    prompt: "When did the board approve [policy], and what was resolved?" },
  { label: "Prepare for meetings",  Icon: TaskIcon,      prompt: "What should I review before [committee] based on last meeting's follow-ups?" },
  { label: "Monitor trends",        Icon: ChartLineIcon, prompt: "How has [risk / metric / topic] changed across the last [X] board cycles?" },
  { label: "Trace decisions",       Icon: TraceIcon,     prompt: "How has the board's view on [topic] changed over the last year?" },
];

export const mvpPromptsForAudience = (audience: "admin" | "director") =>
  audience === "director" ? MVP_DIRECTOR_PROMPTS : MVP_ADMIN_PROMPTS;

// ─── MVP prompt cards (full-screen overlay) ──────────────────────────────────
// "Ideas to get you started" header + a 4-up grid of template cards: a blue
// category pill over the quoted prompt. Clicking inserts the prompt.

export function PromptSuggestionCards({
  audience = "admin",
  onSelect,
  onLearn,
}: {
  audience?: "admin" | "director";
  onSelect: (prompt: string) => void;
  // When provided, renders a "Learn about Smart Assist" button below the cards
  // that submits the onboarding prompt straight to the chat.
  onLearn?: (prompt: string) => void;
}) {
  const { tokens: { semantic: { color, radius } } } = useTheme();
  const cards = mvpPromptsForAudience(audience);

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ mb: "24px" }}>
        <Typography sx={{ fontSize: "18px", fontWeight: 600, lineHeight: "28px", color: color.type.default.value }}>
          Start here
        </Typography>
        <Typography sx={{ fontSize: "13px", lineHeight: "20px", color: color.type.muted.value }}>
          Select a prompt to get started, or ask your own question.
        </Typography>
      </Box>
      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px", width: "100%" }}>
        {cards.map((card) => (
          <Box
            key={card.label}
            component="button"
            type="button"
            onClick={() => onSelect(card.prompt)}
            sx={{
              all: "unset",
              boxSizing: "border-box",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              p: "14px",
              borderRadius: radius.lg.value,
              border: `1px solid ${color.ui.divider.default.value}`,
              backgroundColor: color.surface.default.value,
              textAlign: "left",
              transition: "background-color 0.15s ease",
              "&:hover": { backgroundColor: color.surface.variant.value },
            }}
          >
            <Box
              sx={{
                display: "inline-flex",
                alignSelf: "flex-start",
                alignItems: "center",
                gap: "8px",
                height: "24px",
                px: "10px",
                borderRadius: "9999px",
                backgroundColor: color.accent.blue.background.value,
                color: "#004c6c",
              }}
            >
              <Box sx={{ display: "flex", fontSize: "16px", color: "inherit" }}>
                <card.Icon />
              </Box>
              <Typography sx={{ fontSize: "12px", fontWeight: 600, color: "inherit", lineHeight: "16px", letterSpacing: "0.3px" }}>
                {card.label}
              </Typography>
            </Box>
            <Typography sx={{ fontSize: "12px", fontWeight: 400, color: color.type.muted.value, lineHeight: "16px", letterSpacing: "0.3px" }}>
              {`"${card.prompt}"`}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Learn about Smart Assist — centered below the cards. Submits the
          onboarding prompt straight to the chat. */}
      {onLearn && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: "24px" }}>
          <Box
            component="button"
            type="button"
            onClick={() => onLearn(ONBOARDING_PROMPT)}
            sx={{
              all: "unset",
              boxSizing: "border-box",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              px: "16px",
              height: "40px",
              borderRadius: radius.lg.value,
              border: `1px solid ${color.ui.divider.default.value}`,
              backgroundColor: color.surface.default.value,
              color: color.type.default.value,
              transition: "background-color 0.15s ease",
              "&:hover": { backgroundColor: color.surface.variant.value },
            }}
          >
            <Box sx={{ display: "flex", fontSize: "20px", color: color.type.default.value }}>
              <InfoIcon />
            </Box>
            <Typography sx={{ fontSize: "14px", fontWeight: 600, lineHeight: "20px", color: color.type.default.value }}>
              {audience === "director" ? "Learn about AI Board Member" : "Learn about Smart Assist"}
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
}

// ─── Component ──────────────────────────────────────────────────────────────
// Atlas outlined chips with a leading icon. `size="small"` is the compact home
// hero treatment (24px tall, 20px icon); `size="large"` is the roomier
// treatment used in the full-screen and panel Smart Assist views (36px tall,
// 24px icon).
//
// Clicking a chip opens a dropdown of that chip's starter prompts, anchored to
// `anchorEl` (the composer) and floated *above* it. Nothing is pasted until the
// user picks a prompt — that calls `onSelectPrompt`. `onChipOpen` fires when the
// dropdown opens so the surface can move focus to its composer. The Learn chip
// (`directPaste`) skips the dropdown and pastes its prompt immediately.
//
// We use a non-modal `Popper` (not a modal `Popover`/`Menu`): a modal would mark
// the page `aria-hidden` and steal/return focus, which fights the "caret stays
// blinking in the composer while the dropdown shows" behaviour from the design.
// The panel itself is built from Atlas `Paper` + `MenuList` + `MenuItem`.

export default function SuggestionChips({
  size = "small",
  align = "center",
  anchorEl = null,
  placement = "top",
  audience = "admin",
  maxVisible,
  variant = "outlined",
  layout = "wrap",
  promptSet = "default",
  showLearn = false,
  showIcon = true,
  onSelectPrompt,
  onSubmitPrompt,
  onChipOpen,
  sx,
}: {
  size?: "small" | "large";
  align?: "center" | "flex-start";
  // When set and there are more chips than this, only the first `maxVisible`
  // render inline; the rest collapse behind a "Show more" chip that opens a
  // menu (full-screen + home hero). Leave undefined to show every chip (panel).
  maxVisible?: number;
  // "outlined" → standard Atlas outlined chip (full-screen + home hero).
  // "plain" → no stroke / transparent fill, used by the docked panel list.
  variant?: "outlined" | "plain";
  // "wrap" → chips flow horizontally and wrap (full-screen + home hero).
  // "list" → chips stack vertically (the docked panel).
  layout?: "wrap" | "list";
  // Which chip set to show. "admin" → find/trace/answer/onboard/learn;
  // "director" → find/prepare/monitor/trace/learn. Behaviour is identical;
  // only the labels, icons and starter prompts differ.
  audience?: "admin" | "director";
  // "default" → the multi-prompt dropdown chips (Explorations). "mvp" → the
  // reverted single-prompt set: clicking a chip inserts its one prompt straight
  // into the composer (no dropdown, no "Learn"/onboarding entry, no overflow).
  promptSet?: "default" | "mvp";
  // MVP only: append a "Learn about Smart Assist" entry that submits the
  // onboarding prompt straight to the chat. Used by the panel + full-screen
  // welcome screens, not the home hero.
  showLearn?: boolean;
  // When false, chip icons are hidden (text-only chips). Default true.
  showIcon?: boolean;
  // The composer element to anchor the dropdown to.
  anchorEl?: HTMLElement | null;
  // Which edge of the composer the dropdown opens from. "top" floats it above
  // the chat box (overlay + panel); "bottom" pins it to the bottom edge so it
  // opens downward (home hero, where the chips sit below the composer).
  placement?: "top" | "bottom";
  // Paste the chosen prompt into the composer (and focus it). Also used by the
  // direct-paste Learn chip, which drops its prompt in without submitting.
  onSelectPrompt: (prompt: string) => void;
  // Submit a prompt straight to the chat (MVP Learn entry).
  onSubmitPrompt?: (prompt: string) => void;
  // Focus the composer when a chip's dropdown opens.
  onChipOpen?: () => void;
  sx?: SxProps<Theme>;
}) {
  const {
    tokens: {
      semantic: { color },
    },
  } = useTheme();
  const isMvp = promptSet === "mvp";
  // MVP set → map the single-prompt templates onto the chip shape with
  // `directPaste` so a click inserts the one prompt (no dropdown, no Learn).
  const chips: SuggestionChip[] = isMvp
    ? [
        ...mvpPromptsForAudience(audience).map((p) => ({
          label: p.label,
          Icon: p.Icon,
          prompts: [p.prompt],
          directPaste: true,
        })),
        // MVP Learn entry (panel + full-screen welcome only): submits the
        // onboarding prompt straight to the chat.
        ...(showLearn
          ? [{
              label: audience === "director" ? "Learn about AI Board Member" : "Learn about Smart Assist",
              Icon: InfoIcon,
              prompts: [ONBOARDING_PROMPT],
              submit: true,
            } as SuggestionChip]
          : []),
      ]
    : audience === "director"
      ? DIRECTOR_SUGGESTION_CHIPS
      : ADMIN_SUGGESTION_CHIPS;
  const isLarge = size === "large";
  // Atlas Chip: small → 20px icon, large → 24px icon.
  const iconPx = isLarge ? "24px" : "20px";
  // Class the size-specific overrides target (paddings differ from Atlas
  // defaults so the leading icon isn't crowded against the chip's left edge).
  const sizeClass = isLarge ? "MuiChip-sizeLarge" : "MuiChip-sizeSmall";

  const isPlain = variant === "plain";
  const isList = layout === "list";

  // Split into inline chips and the overflow set hidden behind "Show more".
  // `maxVisible` undefined (panel) → show every chip, no overflow. MVP shows all
  // four templates inline (no "Show more").
  const hasOverflow = !isMvp && maxVisible != null && chips.length > maxVisible;
  const inlineChips = hasOverflow ? chips.slice(0, maxVisible) : chips;
  const overflowChips = hasOverflow ? chips.slice(maxVisible) : [];

  // Which chip's dropdown is open (by label), or null when closed.
  const [openLabel, setOpenLabel] = useState<string | null>(null);
  // Anchor for the "Show more" overflow menu (null when closed).
  const [showMoreAnchor, setShowMoreAnchor] = useState<HTMLElement | null>(null);
  const chipsRef = useRef<HTMLDivElement>(null);
  const paperRef = useRef<HTMLDivElement>(null);
  const moreRef = useRef<HTMLDivElement>(null);

  const activeChip = chips.find((c) => c.label === openLabel) ?? null;
  const popperOpen = Boolean(openLabel && anchorEl && activeChip && !activeChip.directPaste);

  const handleChipClick = (chip: SuggestionChip) => {
    if (chip.submit) {
      // Learn (MVP) — paste + submit the onboarding prompt straight to the chat.
      setOpenLabel(null);
      onSubmitPrompt?.(chip.prompts[0]);
      return;
    }
    if (chip.directPaste) {
      // Learn — paste prompts[0] straight into the composer (no dropdown, no
      // submit) so the user can edit it or send it themselves.
      setOpenLabel(null);
      onSelectPrompt(chip.prompts[0]);
      return;
    }
    // Toggle this chip's dropdown; switching from another chip just re-points it.
    const willOpen = openLabel !== chip.label;
    setOpenLabel(willOpen ? chip.label : null);
    if (willOpen) onChipOpen?.();
  };

  const handleSelectPrompt = (prompt: string) => {
    setOpenLabel(null);
    onSelectPrompt(prompt);
  };

  // Close the prompt dropdown and/or "Show more" menu on outside click
  // (including clicking into the composer) and on Escape. Clicks on the chips
  // themselves are ignored here so a chip's own handler can toggle/switch
  // without this listener racing it closed.
  useEffect(() => {
    if (!popperOpen && !showMoreAnchor) return;
    const onPointerDown = (e: MouseEvent) => {
      const target = e.target as Node;
      if (paperRef.current?.contains(target)) return;
      if (moreRef.current?.contains(target)) return;
      if (chipsRef.current?.contains(target)) return;
      setOpenLabel(null);
      setShowMoreAnchor(null);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenLabel(null);
        setShowMoreAnchor(null);
      }
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [popperOpen, showMoreAnchor]);

  // Shared chip styling. Atlas shrinks the left padding when a leading icon is
  // present (a high-specificity :has() rule), so we re-assert it on both the
  // size class and that same :has() selector. The plain variant (panel) drops
  // the stroke/fill and pulls the icon to an 8px inset so it lines up with the
  // panel's "How can I assist you?" title.
  const chipPadLeft = isPlain ? "8px" : isLarge ? "12px" : "8px";
  const chipSx: SxProps<Theme> = {
    [`&.${sizeClass}`]: {
      paddingLeft: chipPadLeft,
      paddingRight: "16px",
    },
    [`&.${sizeClass}:has(.MuiChip-icon + .MuiChip-label)`]: {
      paddingLeft: chipPadLeft,
    },
    "& .MuiChip-icon": {
      fontSize: iconPx,
      width: iconPx,
      height: iconPx,
      margin: 0,
    },
    "& .MuiChip-label": {
      paddingLeft: 0,
      paddingRight: 0,
    },
    ...(isPlain && {
      border: "none",
      backgroundColor: "transparent",
      "&:hover, &.MuiChip-clickable:hover": {
        backgroundColor: color.surface.variant.value,
      },
    }),
  };

  const renderChip = (chip: SuggestionChip) => {
    const { label, Icon } = chip;
    const expanded = !chip.directPaste && openLabel === label;
    return (
      <Chip
        key={label}
        label={label}
        variant="outlined"
        size={size}
        clickable
        {...(showIcon ? { icon: <Icon /> } : {})}
        onClick={() => handleChipClick(chip)}
        aria-haspopup={chip.directPaste ? undefined : "menu"}
        aria-expanded={chip.directPaste ? undefined : expanded}
        sx={chipSx}
      />
    );
  };

  return (
    <>
      <Box
        ref={chipsRef}
        sx={{
          display: "flex",
          flexDirection: isList ? "column" : "row",
          flexWrap: isList ? "nowrap" : "wrap",
          alignItems: isList ? "flex-start" : "center",
          justifyContent: isList ? "flex-start" : align,
          gap: "8px",
          ...sx,
        }}
      >
        {inlineChips.map((chip) => renderChip(chip))}

        {/* Overflow — the chips past `maxVisible` collapse here. Clicking opens
            a menu of the remaining chips; picking one behaves like clicking the
            chip directly (opens its prompt dropdown, or pastes for Learn). */}
        {hasOverflow && (
          <Chip
            label="Show more"
            variant="outlined"
            size={size}
            clickable
            {...(showIcon ? { icon: <PlusIcon /> } : {})}
            onClick={(e) =>
              setShowMoreAnchor((prev) => (prev ? null : (e.currentTarget as HTMLElement)))
            }
            aria-haspopup="menu"
            aria-expanded={Boolean(showMoreAnchor)}
            sx={chipSx}
          />
        )}
      </Box>

      {/* "Show more" overflow menu — opens below the chip, lists the collapsed
          chips with their leading icons. */}
      <Popper
        open={Boolean(showMoreAnchor)}
        anchorEl={showMoreAnchor}
        placement="bottom-start"
        modifiers={[
          { name: "offset", options: { offset: [0, 8] } },
          { name: "flip", enabled: false },
        ]}
        sx={{ zIndex: 1400 }}
      >
        <Paper
          ref={moreRef}
          elevation={0}
          sx={{
            minWidth: "220px",
            borderRadius: "12px",
            border: `1px solid ${color.ui.divider.default.value}`,
            boxShadow: "0 4px 16px rgba(0,0,0,0.12), 0 0 2px rgba(0,0,0,0.08)",
            overflow: "hidden",
          }}
        >
          <MenuList sx={{ py: "4px" }}>
            {overflowChips.map((chip) => {
              const { label, Icon } = chip;
              return (
                <MenuItem
                  key={label}
                  onClick={() => {
                    setShowMoreAnchor(null);
                    handleChipClick(chip);
                  }}
                  sx={{
                    display: "flex",
                    gap: "12px",
                    px: "16px",
                    py: "10px",
                    "&:hover": { backgroundColor: color.surface.variant.value },
                  }}
                >
                  <Box sx={{ display: "flex", fontSize: "20px", color: color.type.default.value }}>
                    <Icon />
                  </Box>
                  <Typography sx={{ fontSize: "14px", lineHeight: "20px", color: color.type.default.value }}>
                    {label}
                  </Typography>
                </MenuItem>
              );
            })}
          </MenuList>
        </Paper>
      </Popper>

      {/* Prompt dropdown — floats above the composer. Header names the selected
          chip, then its three starter prompts. */}
      <Popper
        open={popperOpen}
        anchorEl={anchorEl}
        placement={placement}
        // Disable flip so the dropdown stays on its chosen edge consistently
        // (e.g. the home hero always opens downward from the bottom of the box)
        // rather than jumping to the opposite side when space is tight.
        modifiers={[
          { name: "offset", options: { offset: [0, 8] } },
          { name: "flip", enabled: false },
        ]}
        sx={{ zIndex: 1400 }}
      >
        {activeChip && (
          <Paper
            ref={paperRef}
            elevation={0}
            sx={{
              width: anchorEl ? anchorEl.offsetWidth : undefined,
              maxWidth: "100%",
              borderRadius: "12px",
              border: `1px solid ${color.ui.divider.default.value}`,
              boxShadow: "0 4px 16px rgba(0,0,0,0.12), 0 0 2px rgba(0,0,0,0.08)",
              overflow: "hidden",
            }}
          >
            {/* Header — which chip was selected (e.g. "Prepare"). */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                px: "16px",
                py: "10px",
                color: color.type.muted.value,
              }}
            >
              <Box sx={{ display: "flex", fontSize: "18px" }}>
                <activeChip.Icon />
              </Box>
              <Typography
                sx={{
                  fontSize: "13px",
                  fontWeight: 600,
                  lineHeight: "18px",
                  letterSpacing: "0.4px",
                  color: color.type.muted.value,
                }}
              >
                {activeChip.label}{activeChip.tag ? ` · ${activeChip.tag}` : ""}
              </Typography>
            </Box>

            <Divider sx={{ borderColor: color.ui.divider.default.value }} />

            <MenuList sx={{ py: "4px" }}>
              {activeChip.prompts.map((prompt) => (
                <MenuItem
                  key={prompt}
                  onClick={() => handleSelectPrompt(prompt)}
                  sx={{
                    px: "16px",
                    py: "10px",
                    whiteSpace: "normal",
                    "&:hover": { backgroundColor: color.surface.variant.value },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      lineHeight: "20px",
                      color: color.type.default.value,
                    }}
                  >
                    {prompt}
                  </Typography>
                </MenuItem>
              ))}
            </MenuList>
          </Paper>
        )}
      </Popper>
    </>
  );
}
