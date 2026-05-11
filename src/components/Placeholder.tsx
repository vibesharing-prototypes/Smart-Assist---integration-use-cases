import DocumentIcon from "@diligentcorp/atlas-react-bundle/icons/Document";
import { Button, Stack, Typography, useTheme } from "@mui/material";
import type { PropsWithChildren } from "react";

export default function Placeholder({ children }: PropsWithChildren) {
  const {
    tokens: {
      core: { spacing },
      semantic: {
        color: { background, outline, surface },
        radius,
        borderWidth,
      },
    },
  } = useTheme();
  return (
    <Stack
      sx={{
        backgroundColor: background.base.value,
      }}
    >
      <Stack
        alignItems="center"
        justifyContent="center"
        gap={spacing["1_5"].value}
        sx={{
          width: "100%",
          height: "100%",
          p: spacing["1_5"].value,
          border: `${borderWidth.thin.value} dashed ${outline.default.value}`,
          borderRadius: radius.lg.value,
          backgroundColor: surface.variant.value,
        }}
      >
        <Typography variant="h1" fontWeight="bold" align="center">
          {children}
        </Typography>
        <Button
          variant="contained"
          href="https://diligentbrands.atlassian.net/wiki/spaces/ATLAS/overview"
          target="_blank"
          rel="noreferrer"
          startIcon={<DocumentIcon />}
        >
          View Atlas docs on Confluence
        </Button>
      </Stack>
    </Stack>
  );
}
