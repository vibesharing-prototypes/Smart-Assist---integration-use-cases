import { Container, Stack } from "@mui/material";
import { PropsWithChildren } from "react";

export default function PageLayout({ children }: PropsWithChildren) {
  return (
    <Container sx={{ py: 2 }}>
      <Stack gap={3}>{children}</Stack>
    </Container>
  );
}
