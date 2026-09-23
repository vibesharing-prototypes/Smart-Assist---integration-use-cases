import { Menu, MenuItem, Stack, Typography, useTheme } from "@mui/material";

import GiveFeedbackIcon from "@diligentcorp/atlas-react-bundle/icons/GiveFeedback";
import InfoIcon from "@diligentcorp/atlas-react-bundle/icons/Info";
import ExternalLinkIcon from "@diligentcorp/atlas-react-bundle/icons/ExternalLink";

interface AIMoreMenuProps {
  anchorEl: HTMLElement | null;
  onClose: () => void;
}

export default function AIMoreMenu({ anchorEl, onClose }: AIMoreMenuProps) {
  const { tokens: { semantic: { color } } } = useTheme();

  const items = [
    { Icon: InfoIcon, label: "Learn more about data policy", onClick: onClose, TrailingIcon: ExternalLinkIcon, href: "https://help.highbond.com/helpdocs/highbond/en-us/Default.htm#cshid=brds-ai-faq" },
    { Icon: GiveFeedbackIcon, label: "Give feedback", onClick: onClose },
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
            minWidth: "240px",
            py: "8px",
            border: `1px solid ${color.ui.divider.default.value}`,
          },
        },
      }}
    >
      {items.map(({ Icon, label, onClick, TrailingIcon, href }) => (
        <MenuItem
          key={label}
          onClick={onClick}
          {...(href ? { component: "a", href, target: "_blank", rel: "noopener noreferrer" } : {})}
          sx={{
            px: "16px",
            py: "12px",
            gap: 0,
            "&:hover": { backgroundColor: color.surface.variant.value },
          }}
        >
          <Stack direction="row" alignItems="center" gap="12px">
            <Icon size="md" />
            <Typography sx={{ fontSize: "14px", lineHeight: "20px", color: color.type.default.value }}>
              {label}
            </Typography>
            {TrailingIcon && <TrailingIcon size="md" style={{ color: color.type.muted.value }} />}
          </Stack>
        </MenuItem>
      ))}
    </Menu>
  );
}
