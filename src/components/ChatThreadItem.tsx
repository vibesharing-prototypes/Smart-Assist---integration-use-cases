import { useState, type MouseEvent } from "react";
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";

import MoreIcon from "@diligentcorp/atlas-react-bundle/icons/More";
import EditIcon from "@diligentcorp/atlas-react-bundle/icons/Edit";
import TrashIcon from "@diligentcorp/atlas-react-bundle/icons/Trash";

import { type ChatThread } from "../data/hybrid-search.constants.js";

type Variant = "overlay" | "sidenav";

interface ChatThreadItemProps {
  thread: ChatThread;
  isActive?: boolean;
  variant: Variant;
  onLoadThread: (thread: ChatThread) => void;
}

const TEXT_DEFAULT = "rgb(36,38,40)";

export default function ChatThreadItem({ thread, isActive = false, variant, onLoadThread }: ChatThreadItemProps) {
  const { tokens: { semantic: { color } } } = useTheme();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleOpenMenu = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setAnchorEl(e.currentTarget);
  };

  const handleCloseMenu = (e?: object, reason?: string) => {
    void e; void reason;
    setAnchorEl(null);
  };

  const rowSx =
    variant === "overlay"
      ? {
          borderRadius: "6px",
          backgroundColor: isActive ? "rgba(0,0,0,0.04)" : "transparent",
          opacity: !isActive ? 0.75 : 1,
          fontWeight: isActive ? 600 : 400,
          color: TEXT_DEFAULT,
          "&:hover": { backgroundColor: "rgba(0,0,0,0.04)", opacity: 1 },
        }
      : {
          color: color.type.default.value,
          "&:hover": { backgroundColor: color.surface.variant.value },
        };

  return (
    <>
      <Tooltip
        title={
          <Box sx={{ p: "2px" }}>
            <Typography sx={{ fontSize: "13px", fontWeight: 700, color: "#1a1f27", lineHeight: "18px", mb: "2px" }}>
              {new Date(thread.updatedAt).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
            </Typography>
            <Typography sx={{ fontSize: "13px", fontWeight: 400, color: "#4a4f5a", lineHeight: "18px", maxWidth: "200px", wordBreak: "break-word" }}>
              {thread.title}
            </Typography>
          </Box>
        }
        placement="right"
        arrow
        enterDelay={800}
        disableHoverListener={isMenuOpen}
        componentsProps={{
          tooltip: {
            sx: {
              backgroundColor: "#fff",
              borderRadius: "8px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
              px: "12px",
              py: "10px",
              "& .MuiTooltip-arrow": { color: "#fff" },
            },
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            width: "100%",
            boxSizing: "border-box",
            ...rowSx,
            "& .chat-thread-more-btn": {
              opacity: isMenuOpen ? 1 : 0,
              backgroundColor: isMenuOpen ? "rgba(0,0,0,0.06)" : "transparent",
            },
            "&:hover .chat-thread-more-btn": { opacity: 1 },
          }}
        >
          <Box
            component="button"
            onClick={() => onLoadThread(thread)}
            sx={{
              all: "unset",
              cursor: "pointer",
              flex: 1,
              minWidth: 0,
              boxSizing: "border-box",
              px: "12px",
              py: "8px",
              fontSize: "14px",
              lineHeight: "20px",
              textAlign: "left",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              paddingRight: "36px",
              fontWeight: "inherit",
              color: "inherit",
            }}
          >
            {thread.title}
          </Box>
          <IconButton
            className="chat-thread-more-btn"
            aria-label="More options"
            onClick={handleOpenMenu}
            sx={{
              position: "absolute",
              right: "4px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "32px",
              height: "32px",
              borderRadius: "6px",
              transition: "opacity 120ms ease",
              "&:hover": { backgroundColor: "rgba(0,0,0,0.06)" },
            }}
          >
            <MoreIcon size="lg" />
          </IconButton>
        </Box>
      </Tooltip>

      <Menu
        open={isMenuOpen}
        anchorEl={anchorEl}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        slotProps={{
          paper: {
            sx: {
              mt: "4px",
              borderRadius: "12px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.12), 0 0 2px rgba(0,0,0,0.08)",
              minWidth: "200px",
              py: "8px",
              border: `1px solid ${color.ui.divider.default.value}`,
            },
          },
        }}
      >
        <MenuItem
          onClick={handleCloseMenu}
          sx={{ px: "16px", py: "12px", gap: 0, "&:hover": { backgroundColor: color.surface.variant.value } }}
        >
          <Stack direction="row" alignItems="center" gap="12px">
            <EditIcon size="md" />
            <Typography sx={{ fontSize: "14px", lineHeight: "20px", color: color.type.default.value }}>
              Rename
            </Typography>
          </Stack>
        </MenuItem>
        <MenuItem
          onClick={handleCloseMenu}
          sx={{ px: "16px", py: "12px", gap: 0, "&:hover": { backgroundColor: color.surface.variant.value } }}
        >
          <Stack direction="row" alignItems="center" gap="12px" sx={{ color: color.status.error.text.value }}>
            <TrashIcon size="md" />
            <Typography sx={{ fontSize: "14px", lineHeight: "20px", color: "inherit" }}>
              Delete
            </Typography>
          </Stack>
        </MenuItem>
      </Menu>
    </>
  );
}
