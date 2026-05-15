import { Box, type BoxProps } from "@mui/material";
import type { ReactNode } from "react";

// ─── MaxWidthBody ─────────────────────────────────────────────────────────────
// Caps a page's main content at 1440px and centres it horizontally. Place this
// INSIDE the page's flex-1 scrollable body Box so the body itself stays
// edge-to-edge (page gradient/background can still span the full width) but the
// content inside (tabs, headings, cards) reads at the design max width.
//
// The Smart Assist / Govern AI sidenav is a sibling of the body Box — it
// always sits outside this wrapper, so it continues to slide in from the
// right with its own 12px margin.
//
// Director book reader is the deliberate exception: it does NOT use this.

export const MAIN_BODY_MAX_WIDTH = 1440;

export default function MaxWidthBody({
  children,
  sx,
  ...rest
}: { children: ReactNode } & BoxProps) {
  return (
    <Box
      {...rest}
      sx={{
        width: "100%",
        maxWidth: `${MAIN_BODY_MAX_WIDTH}px`,
        marginInline: "auto",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
