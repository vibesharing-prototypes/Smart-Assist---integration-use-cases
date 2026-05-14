import { Menu, MenuItem, Stack, Typography, useTheme } from "@mui/material";

interface BookMoreMenuProps {
  anchorEl: HTMLElement | null;
  onClose: () => void;
  onMeetingDetails?: () => void;
  onAgenda?: () => void;
  onSmartSummary?: () => void;
  onSmartPrep?: () => void;
}

// ─── Menu icons (exact SVGs from Figma) ──────────────────────────────────────
// Meeting details + Agenda are solid #242628; Smart Summary + Smart Prep carry
// the AI gradient baked into the SVG.

function MeetingDetailsIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.99997 8.80787H18V6.00012H3.99997V8.80787ZM2.5 21.5001V4.50014H5.69232V2.38477H7.23075V4.50014H14.8077V2.38477H16.3076V4.50014H19.5V11.7713C19.2602 11.6661 19.0153 11.5812 18.7654 11.5165C18.5154 11.4517 18.2602 11.4008 18 11.3636V10.3078H3.99997V20.0001H10.8096C10.8942 20.277 10.9965 20.5389 11.1164 20.7857C11.2362 21.0325 11.3724 21.2706 11.525 21.5001H2.5ZM17.1923 22.5001C15.9436 22.5001 14.8814 22.0623 14.0058 21.1866C13.1301 20.311 12.6923 19.2488 12.6923 18.0001C12.6923 16.7514 13.1301 15.6892 14.0058 14.8136C14.8814 13.938 15.9436 13.5001 17.1923 13.5001C18.441 13.5001 19.5032 13.938 20.3788 14.8136C21.2544 15.6892 21.6922 16.7514 21.6922 18.0001C21.6922 19.2488 21.2544 20.311 20.3788 21.1866C19.5032 22.0623 18.441 22.5001 17.1923 22.5001ZM18.8577 20.2886L19.4807 19.6655L17.6346 17.8175V15.0578H16.75V18.1809L18.8577 20.2886Z" fill="#242628" />
    </svg>
  );
}

function AgendaIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.25 13.7501V12.2501H16.75V13.7501H7.25ZM7.25 17.7501V16.2501H13.75V17.7501H7.25ZM3.5 21.5001V4.50014H6.69233V2.38477H8.23075V4.50014H15.8077V2.38477H17.3076V4.50014H20.5V21.5001H3.5ZM4.99997 20.0001H19V10.3078H4.99997V20.0001ZM4.99997 8.80787H19V6.00012H4.99997V8.80787Z" fill="#242628" />
    </svg>
  );
}

function SmartSummaryIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.64453 4.25H15.3945V5.75H4.64453V4.25Z" fill="url(#bmm_summary_grad)" />
      <path d="M16.6445 11L18.1445 14L21.1445 15.5L18.1445 17L16.6445 20L15.1445 17L12.1445 15.5L15.1445 14L16.6445 11Z" fill="url(#bmm_summary_grad)" />
      <path d="M19.3945 7.75H4.64453V9.25H19.3945V7.75Z" fill="url(#bmm_summary_grad)" />
      <path d="M4.64453 11.25H14.8945L13.3945 12.75H4.64453V11.25Z" fill="url(#bmm_summary_grad)" />
      <path d="M10.8945 14.75H4.64453V16.25H10.8945V14.75Z" fill="url(#bmm_summary_grad)" />
      <path d="M4.64453 19.75V18.25H13.3945L14.8945 19.75H4.64453Z" fill="url(#bmm_summary_grad)" />
      <defs>
        <linearGradient id="bmm_summary_grad" x1="5.40315" y1="9.56562" x2="19.8494" y2="21.5599" gradientUnits="userSpaceOnUse">
          <stop stopColor="#BE0C1E" />
          <stop offset="0.5" stopColor="#AB48DA" />
          <stop offset="1" stopColor="#4069FE" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function SmartPrepIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M15.4299 11.365C15.8599 11.365 16.2749 11.3 16.6699 11.17C17.0699 11.04 17.4299 10.86 17.7549 10.625L19.8749 12.75L21.0099 13.885L22.0649 12.83L18.8049 9.57501C19.0249 9.25001 19.2049 8.895 19.3399 8.505C19.4749 8.12 19.5449 7.7 19.5449 7.25C19.5449 6.1 19.1449 5.12999 18.3499 4.32999C17.5499 3.53499 16.5749 3.13501 15.4299 3.13501C14.2849 3.13501 13.3099 3.53499 12.5099 4.32999C11.7149 5.12999 11.3149 6.1 11.3149 7.25C11.3149 8.4 11.7149 9.36998 12.5099 10.17C13.3099 10.965 14.2799 11.365 15.4299 11.365ZM13.5749 5.39499C14.0799 4.88499 14.6999 4.63501 15.4299 4.63501C16.1599 4.63501 16.7799 4.88499 17.2849 5.39499C17.7949 5.89999 18.0449 6.52 18.0449 7.25C18.0449 7.98 17.7949 8.59998 17.2849 9.10498C16.7799 9.61498 16.1599 9.86499 15.4299 9.86499C14.6999 9.86499 14.0799 9.61498 13.5749 9.10498C13.0649 8.59998 12.8149 7.98 12.8149 7.25C12.8149 6.52 13.0649 5.89999 13.5749 5.39499Z" fill="url(#bmm_prep_grad)" />
      <path d="M3.25 5H9.43V6.75H3.25V5Z" fill="url(#bmm_prep_grad)" />
      <path d="M3.25 9H9.43V10.75H3.25V9Z" fill="url(#bmm_prep_grad)" />
      <path d="M14.93 13H3.25V14.75H13.43L14.93 13Z" fill="url(#bmm_prep_grad)" />
      <path d="M3.25 17H11.43V18.75H3.25V17Z" fill="url(#bmm_prep_grad)" />
      <path d="M17.1801 21.5L15.6801 18.5L12.6801 17L15.6801 15.5L17.1801 12.5L18.6801 15.5L21.6801 17L18.6801 18.5L17.1801 21.5Z" fill="url(#bmm_prep_grad)" />
      <defs>
        <linearGradient id="bmm_prep_grad" x1="4.11505" y1="9.33319" x2="20.8869" y2="22.9509" gradientUnits="userSpaceOnUse">
          <stop stopColor="#BE0C1E" />
          <stop offset="0.5" stopColor="#AB48DA" />
          <stop offset="1" stopColor="#4069FE" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function BookMoreMenu({
  anchorEl,
  onClose,
  onMeetingDetails,
  onAgenda,
  onSmartSummary,
  onSmartPrep,
}: BookMoreMenuProps) {
  const {
    tokens: {
      semantic: { color },
    },
  } = useTheme();

  const run = (fn?: () => void) => () => {
    onClose();
    fn?.();
  };

  // Items without a wired-in handler stay visible (and keep their hover state)
  // but are inert — clicking them does nothing rather than just closing the menu.
  const items: Array<{
    Icon: React.ComponentType;
    label: string;
    onClick?: () => void;
    divider?: boolean;
  }> = [
    { Icon: MeetingDetailsIcon, label: "Meeting details", onClick: onMeetingDetails ? run(onMeetingDetails) : undefined },
    { Icon: AgendaIcon, label: "Agenda", onClick: onAgenda ? run(onAgenda) : undefined, divider: true },
    { Icon: SmartSummaryIcon, label: "Smart Summary", onClick: onSmartSummary ? run(onSmartSummary) : undefined },
    { Icon: SmartPrepIcon, label: "Smart Prep", onClick: onSmartPrep ? run(onSmartPrep) : undefined },
  ];

  return (
    <Menu
      open={Boolean(anchorEl)}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      slotProps={{
        paper: {
          sx: {
            mt: "4px",
            borderRadius: "12px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.12), 0 0 2px rgba(0,0,0,0.08)",
            minWidth: "280px",
            py: "8px",
            border: `1px solid ${color.ui.divider.default.value}`,
          },
        },
      }}
    >
      {items.map(({ Icon, label, onClick, divider }) => (
        <MenuItem
          key={label}
          onClick={onClick}
          divider={divider}
          sx={{
            px: "16px",
            py: "12px",
            gap: 0,
            "&:hover": { backgroundColor: color.surface.variant.value },
          }}
        >
          <Stack direction="row" alignItems="center" gap="12px">
            <Stack component="span" sx={{ display: "inline-flex" }}>
              <Icon />
            </Stack>
            <Typography
              sx={{ fontSize: "14px", lineHeight: "20px", color: color.type.default.value }}
            >
              {label}
            </Typography>
          </Stack>
        </MenuItem>
      ))}
    </Menu>
  );
}
