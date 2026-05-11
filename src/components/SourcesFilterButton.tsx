import { useState } from "react";
import { Box, Button, Popover, Switch, Typography } from "@mui/material";
import ConfigureIcon from "@diligentcorp/atlas-react-bundle/icons/Configure";
import { useCitationPreview } from "../context/CitationPreviewContext.js";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Source {
  id: string;
  label: string;
  enabled: boolean;
}

export const INITIAL_SOURCES: Source[] = [
  { id: "current",  label: "Current books",   enabled: true },
  { id: "archived", label: "Archived books",  enabled: true },
  { id: "resource", label: "Resource center", enabled: true },
];

// ─── Constants ────────────────────────────────────────────────────────────────

const TEXT_DEFAULT  = "rgb(36,38,40)";
const ROW_DIVIDER   = "rgba(218,218,218,1)";

// ─── Component ────────────────────────────────────────────────────────────────

export default function SourcesFilterButton({
  sources,
  onToggle,
}: {
  sources: Source[];
  onToggle: (id: string) => void;
}) {
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);
  const allEnabled   = sources.every((s) => s.enabled);
  const enabledCount = sources.filter((s) => s.enabled).length;

  const { previewSource } = useCitationPreview();

  return (
    <>
      <Button
        type="button"
        variant="text"
        size="small"
        startIcon={<ConfigureIcon />}
        onClick={(e) => setAnchor(e.currentTarget as HTMLElement)}
      >
        {allEnabled ? "All board materials" : "Selected sources"}
      </Button>

      <Popover
        open={Boolean(anchor)}
        anchorEl={anchor}
        onClose={() => setAnchor(null)}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        transformOrigin={{ vertical: "bottom", horizontal: "left" }}
        PaperProps={{
          sx: {
            mb: "6px",
            borderRadius: "8px",
            boxShadow: "0 8px 16px rgba(0,0,0,0.1), 0 0 2px rgba(0,0,0,0.1)",
            width: "316px",
            overflow: "hidden",
            p: 0,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            px: "12px",
            height: "43px",
            borderBottom: `1px solid ${ROW_DIVIDER}`,
          }}
        >
          <Typography sx={{ fontSize: "12px", fontWeight: 600, color: "rgba(40,46,55,1)" }}>
            Search within
          </Typography>
        </Box>

        {sources.map((source) => {
          const isLastEnabled = source.enabled && enabledCount === 1;
          return (
            <Box
              key={source.id}
              onClick={(e) => {
                e.stopPropagation();
                if (!isLastEnabled) onToggle(source.id);
              }}
              sx={{
                display: "flex",
                alignItems: "center",
                p: "12px",
                gap: "12px",
                cursor: isLastEnabled ? "default" : "pointer",
                "&:hover": { backgroundColor: isLastEnabled ? "transparent" : "rgba(0,0,0,0.03)" },
              }}
            >
              <Switch
                checked={source.enabled}
                disabled={isLastEnabled}
                size="small"
                onChange={(e) => { e.stopPropagation(); onToggle(source.id); }}
                onClick={(e) => e.stopPropagation()}
                sx={{
                  flexShrink: 0,
                  "& .MuiSwitch-switchBase.Mui-checked": { color: "#fff" },
                  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                    backgroundColor: "rgba(36,38,40,1)",
                    opacity: 1,
                  },
                  "& .MuiSwitch-track": { backgroundColor: "rgba(36,38,40,0.25)", opacity: 1 },
                  "& .MuiSwitch-switchBase.Mui-disabled": { opacity: 1 },
                  "& .MuiSwitch-switchBase.Mui-disabled + .MuiSwitch-track": {
                    backgroundColor: "rgba(36,38,40,1)",
                    opacity: 0.4,
                  },
                }}
              />
              <Typography
                sx={{
                  fontSize: "14px",
                  color: TEXT_DEFAULT,
                  opacity: isLastEnabled ? 0.4 : 1,
                  userSelect: "none",
                  flex: 1,
                }}
              >
                {source.label}
              </Typography>
            </Box>
          );
        })}

        {/* "Book or document in preview" — only shown when a citation is open */}
        {previewSource && (
          <>
            <Box sx={{ height: "1px", backgroundColor: ROW_DIVIDER, mx: "12px" }} />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                p: "12px",
                gap: "12px",
                cursor: "pointer",
                "&:hover": { backgroundColor: "rgba(0,0,0,0.03)" },
              }}
            >
              <Switch
                checked={false}
                size="small"
                sx={{
                  flexShrink: 0,
                  "& .MuiSwitch-track": { backgroundColor: "rgba(36,38,40,0.25)", opacity: 1 },
                }}
              />
              <Typography
                sx={{ fontSize: "14px", color: TEXT_DEFAULT, userSelect: "none", flex: 1, lineHeight: "20px" }}
              >
                Book or document in preview{" "}
                <Box component="span" sx={{ color: "rgba(36,38,40,0.55)", fontSize: "13px" }}>
                  [{previewSource.title}]
                </Box>
              </Typography>
            </Box>
          </>
        )}
      </Popover>
    </>
  );
}
