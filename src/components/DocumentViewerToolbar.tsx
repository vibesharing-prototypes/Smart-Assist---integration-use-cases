import { Box, Button, IconButton, SvgIcon, Typography, useTheme } from "@mui/material";

export const ZOOM_LEVELS = [50, 75, 100, 125, 150, 200];

type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  zoomIndex: number;
  onZoomIndexChange: (index: number) => void;
  onAgendaClick?: () => void;
};

const strokeIcon = (d: string) => (
  <SvgIcon fontSize="small" viewBox="0 0 24 24">
    <path d={d} stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </SvgIcon>
);

export default function DocumentViewerToolbar({
  currentPage,
  totalPages,
  onPageChange,
  zoomIndex,
  onZoomIndexChange,
  onAgendaClick,
}: Props) {
  const { tokens: { semantic: { color, radius } } } = useTheme();

  return (
    <Box
      sx={{
        position: "absolute",
        bottom: "16px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        alignItems: "center",
        gap: "4px",
        px: "8px",
        py: "6px",
        backgroundColor: color.surface.default.value,
        borderRadius: radius.lg.value,
        boxShadow: "0 4px 16px rgba(0,0,0,0.18), 0 1px 4px rgba(0,0,0,0.1)",
        border: `1px solid ${color.ui.divider.default.value}`,
        whiteSpace: "nowrap",
      }}
    >
      <Button
        size="small"
        variant="text"
        onClick={onAgendaClick}
        startIcon={strokeIcon("M4 6h16 M4 12h16 M4 18h16")}
        sx={{
          textTransform: "none",
          fontSize: "13px",
          color: color.type.default.value,
          fontWeight: 500,
          height: "32px",
          px: "8px",
        }}
      >
        Agenda
      </Button>

      {/* Page navigation */}
      <IconButton
        size="small"
        disabled={currentPage <= 1}
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        sx={{ color: color.type.default.value }}
      >
        {strokeIcon("M15 6l-6 6 6 6")}
      </IconButton>

      <Typography sx={{ fontSize: "13px", color: color.type.default.value, mx: "2px", minWidth: "36px", textAlign: "center" }}>
        {currentPage}/{totalPages}
      </Typography>

      <IconButton
        size="small"
        disabled={currentPage >= totalPages}
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        sx={{ color: color.type.default.value }}
      >
        {strokeIcon("M9 6l6 6-6 6")}
      </IconButton>

      {/* Zoom controls */}
      <IconButton
        size="small"
        disabled={zoomIndex <= 0}
        onClick={() => onZoomIndexChange(Math.max(0, zoomIndex - 1))}
        sx={{ color: color.type.default.value }}
      >
        {strokeIcon("M5 12h14")}
      </IconButton>

      <Typography
        sx={{
          fontSize: "13px",
          color: color.type.default.value,
          minWidth: "40px",
          textAlign: "center",
          cursor: "default",
        }}
      >
        {ZOOM_LEVELS[zoomIndex]}%
      </Typography>

      <IconButton
        size="small"
        disabled={zoomIndex >= ZOOM_LEVELS.length - 1}
        onClick={() => onZoomIndexChange(Math.min(ZOOM_LEVELS.length - 1, zoomIndex + 1))}
        sx={{ color: color.type.default.value }}
      >
        {strokeIcon("M12 5v14 M5 12h14")}
      </IconButton>
    </Box>
  );
}
