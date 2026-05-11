import { Menu, MenuItem, Stack, Typography, useTheme } from "@mui/material";

import GiveFeedbackIcon from "@diligentcorp/atlas-react-bundle/icons/GiveFeedback";
import InfoIcon from "@diligentcorp/atlas-react-bundle/icons/Info";
import ProfileIcon from "@diligentcorp/atlas-react-bundle/icons/Profile";

interface AIMoreMenuProps {
  anchorEl: HTMLElement | null;
  onClose: () => void;
  onPersonalizationClick: () => void;
}

export default function AIMoreMenu({ anchorEl, onClose, onPersonalizationClick }: AIMoreMenuProps) {
  const { tokens: { semantic: { color } } } = useTheme();

  const items = [
    { Icon: ProfileIcon, label: "Personalization", onClick: () => { onClose(); onPersonalizationClick(); } },
    { Icon: InfoIcon, label: "Learn about data privacy", onClick: onClose },
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
      {items.map(({ Icon, label, onClick }) => (
        <MenuItem
          key={label}
          onClick={onClick}
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
          </Stack>
        </MenuItem>
      ))}
    </Menu>
  );
}
