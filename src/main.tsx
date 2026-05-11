import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import { AtlasThemeProvider } from "@diligentcorp/atlas-react-bundle";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AtlasThemeProvider tokenMode="atlas-light">
        <App />
      </AtlasThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
