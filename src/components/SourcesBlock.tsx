import { Box, Chip, Typography, useTheme } from "@mui/material";
import type { Source } from "../data/mockData.js";
import { useCitationPreview } from "../context/CitationPreviewContext.js";

const MAX_VISIBLE = 3;

/**
 * Dedupe sources by documentId for chip display.
 * Source chips represent documents (one chip per doc), not individual citations —
 * clicking a chip opens the document at its cover page (page 1).
 * Sources without a documentId remain distinct (fall through by index).
 */
function dedupeByDocument(sources: Source[]): Source[] {
  const seen = new Set<string>();
  const result: Source[] = [];
  for (const s of sources) {
    const key = s.documentId ?? `__no-doc-${s.index}`;
    if (seen.has(key)) continue;
    seen.add(key);
    result.push(s);
  }
  return result;
}

export default function SourcesBlock({ sources, messageId }: { sources: Source[]; messageId: string }) {
  const { tokens: { semantic: { color } } } = useTheme();
  const { openCitation, activeChipId } = useCitationPreview();

  const deduped = dedupeByDocument(sources);
  const visible = deduped.slice(0, MAX_VISIBLE);
  const overflow = deduped.length - MAX_VISIBLE;

  return (
    <Box sx={{ mt: "8px" }}>
      <Typography
        sx={{
          fontSize: "12px",
          fontWeight: 600,
          lineHeight: "16px",
          color: color.type.muted.value,
          mb: "6px",
        }}
      >
        Sources
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {visible.map((s) => {
          const chipKey = s.documentId ?? `idx-${s.index}`;
          const chipId = `${messageId}-src-${chipKey}`;
          const isActive = activeChipId === chipId;
          return (
            <Chip
              key={chipKey}
              label={s.title}
              size="small"
              variant="outlined"
              clickable
              onClick={() => openCitation(s, chipId, 1)}
              sx={isActive ? {
                borderColor: color.outline.default.value,
                backgroundColor: color.action.secondary.activeFill.value,
                "&:hover": {
                  borderColor: color.outline.default.value,
                  backgroundColor: color.action.secondary.activeFill.value,
                },
              } : undefined}
            />
          );
        })}
        {overflow > 0 && (
          <Chip label={`+${overflow}`} size="small" variant="outlined" />
        )}
      </Box>
    </Box>
  );
}
