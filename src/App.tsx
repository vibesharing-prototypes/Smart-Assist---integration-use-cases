import { AppLayout } from "@diligentcorp/atlas-react-bundle";
import { Navigate, Outlet, Route, Routes } from "react-router";
import { useEffect } from "react";
import "./styles.css";

import Navigation from "./Navigation.js";
import SettingsPage from "./pages/SettingsPage.js";
import SimplePage from "./pages/SimplePage.js";
import AIAssistantPage from "./pages/AIAssistantPage.js";
import AdminBooksPage from "./pages/AdminBooksPage.js";
import BookEditorPage from "./pages/BookEditorPage.js";
import ResourceCenterPage from "./pages/ResourceCenterPage.js";
import { SmartAssistProvider } from "./context/SmartAssistContext.js";
import { CitationPreviewProvider } from "./context/CitationPreviewContext.js";

// ─── Force sidebar into persistent panel mode ─────────────────────────────────

function usePanelMode() {
  useEffect(() => {
    const trySet = () => {
      const mockNav = document.querySelector("mock-hb-global-navigator");
      const root = (mockNav as Element & { shadowRoot: ShadowRoot | null })?.shadowRoot;
      const globalNav = root?.querySelector("atlas-global-nav") as HTMLElement | null;
      if (globalNav) {
        globalNav.setAttribute("display-mode", "panel");
        return true;
      }
      return false;
    };
    if (trySet()) return;
    const id = setInterval(() => {
      if (trySet()) clearInterval(id);
    }, 100);
    return () => clearInterval(id);
  }, []);
}

// ─── Side nav extends full height (top:0) so it sits beside the header ───────
// The CSS variable --atlas-global-nav-content-left (set by Atlas on the body)
// drives margin-inline-start on both mock-hb-global-navigator (styles.css) and
// [data-atlas-gn-app] (Atlas CSS), so they stay in sync without JS measurement.
// We only need to fix atlas-global-nav's shadow DOM: .nav-container defaults to
// top:64px (below the header bar) — override to 0 so the panel spans full height.

function useNavContainerFullHeight() {
  useEffect(() => {
    const trySetup = () => {
      const mockNav = document.querySelector("mock-hb-global-navigator");
      const mockRoot = (mockNav as Element & { shadowRoot: ShadowRoot | null })?.shadowRoot;
      const globalNav = mockRoot?.querySelector("atlas-global-nav") as (Element & {
        shadowRoot: ShadowRoot | null;
      }) | null;
      if (!globalNav?.shadowRoot) return false;
      if (globalNav.shadowRoot.querySelector("#custom-nav-height-style")) return true;

      const style = document.createElement("style");
      style.id = "custom-nav-height-style";
      style.textContent = `
        .nav-container { top: 0 !important; }
        button.menu-button { display: none !important; }
        /* Remove the global-nav header's bottom stroke (header::after divider) */
        header::after { display: none !important; }
      `;
      globalNav.shadowRoot.appendChild(style);

      // atlas-gn-side-nav height is calc(100dvh - --atlas-global-header-height).
      // Setting the custom property to 0 makes it fill the full panel height.
      const sideNav = mockRoot?.querySelector("atlas-gn-side-nav") as HTMLElement | null;
      sideNav?.style.setProperty("--atlas-global-header-height", "0px");

      return true;
    };

    if (trySetup()) return;
    const id = setInterval(() => {
      if (trySetup()) clearInterval(id);
    }, 100);
    return () => clearInterval(id);
  }, []);
}

// ─── Collapsed nav: 64px, 12px padding, icons centered ───────────────────────

function useCollapsedNavStyle() {
  useEffect(() => {
    const tryInject = () => {
      const mockNav = document.querySelector("mock-hb-global-navigator");
      const mockRoot = (mockNav as Element & { shadowRoot: ShadowRoot | null })?.shadowRoot;
      const sideNav = mockRoot?.querySelector("atlas-gn-side-nav") as (Element & {
        shadowRoot: ShadowRoot | null;
      }) | null;
      if (!sideNav?.shadowRoot) return false;
      if (sideNav.shadowRoot.querySelector("#custom-collapse-style")) return true;

      const style = document.createElement("style");
      style.id = "custom-collapse-style";
      style.textContent = `
        /* Collapsed nav items container: 12px padding, icons centered */
        :host([collapsed]) nav,
        :host([collapsed]) .nav,
        :host([collapsed]) .nav-items,
        :host([collapsed]) .items,
        :host([collapsed]) ul {
          padding-inline: 12px !important;
          align-items: center !important;
        }
        /* Each slotted nav link fills the container and centers its icon */
        :host([collapsed]) ::slotted(*) {
          width: 100% !important;
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
        }
      `;
      sideNav.shadowRoot.appendChild(style);
      return true;
    };
    if (tryInject()) return;
    const id = setInterval(() => {
      if (tryInject()) clearInterval(id);
    }, 100);
    return () => clearInterval(id);
  }, []);
}

// ─── Hide platform-injected nav items (e.g. "Home (Platform)") ───────────────

function useHidePlatformNavItems() {
  useEffect(() => {
    const tryHide = () => {
      const mockNav = document.querySelector("mock-hb-global-navigator");
      const mockRoot = (mockNav as Element & { shadowRoot: ShadowRoot | null })?.shadowRoot;
      if (!mockRoot) return false;

      // Search in mock root and any nested shadow roots one level deep
      const roots: (ShadowRoot | Element)[] = [mockRoot];
      mockRoot.querySelectorAll("*").forEach((el) => {
        const sr = (el as Element & { shadowRoot?: ShadowRoot | null }).shadowRoot;
        if (sr) roots.push(sr);
      });

      let found = false;
      roots.forEach((root) => {
        root.querySelectorAll("*").forEach((el) => {
          const label = el.getAttribute("label") ?? "";
          if (label.includes("Platform") || label === "Home") {
            (el as HTMLElement).style.display = "none";
            found = true;
          }
        });
      });
      return found;
    };
    if (tryHide()) return;
    const id = setInterval(() => {
      if (tryHide()) clearInterval(id);
    }, 100);
    return () => clearInterval(id);
  }, []);
}

// ─── Hide atlas-gn-side-nav's built-in app-name header ────────────────────────
// Uses a <style> injection instead of an inline style because the <header> is
// inside a Lit when() conditional — it is removed/recreated on every
// collapse↔expand cycle, which would wipe any inline style set on the element.
// An appended <style> persists in the shadow root independently of Lit's render.

function useHideSideNavAppName() {
  useEffect(() => {
    const tryHide = () => {
      const mockNav = document.querySelector("mock-hb-global-navigator");
      const root = (mockNav as Element & { shadowRoot: ShadowRoot | null })?.shadowRoot;
      const sideNav = root?.querySelector("atlas-gn-side-nav") as (Element & {
        shadowRoot: ShadowRoot | null;
      }) | null;
      if (sideNav?.shadowRoot) {
        if (sideNav.shadowRoot.querySelector("#custom-hide-appname-style")) return true;
        const style = document.createElement("style");
        style.id = "custom-hide-appname-style";
        style.textContent = `header { display: none !important; }`;
        sideNav.shadowRoot.appendChild(style);
        return true;
      }
      return false;
    };
    if (tryHide()) return;
    const id = setInterval(() => {
      if (tryHide()) clearInterval(id);
    }, 100);
    return () => clearInterval(id);
  }, []);
}

// ─── Hide atlas-gn-side-nav footer logo ───────────────────────────────────────

function useHideSideNavFooter() {
  useEffect(() => {
    const tryHide = () => {
      const mockNav = document.querySelector("mock-hb-global-navigator");
      const root = (mockNav as Element & { shadowRoot: ShadowRoot | null })?.shadowRoot;
      const sideNav = root?.querySelector("atlas-gn-side-nav") as (Element & {
        shadowRoot: ShadowRoot | null;
      }) | null;
      if (sideNav?.shadowRoot) {
        const footer = sideNav.shadowRoot.querySelector("footer") as HTMLElement | null;
        if (footer) {
          footer.style.display = "none";
          return true;
        }
      }
      return false;
    };
    if (tryHide()) return;
    const id = setInterval(() => {
      if (tryHide()) clearInterval(id);
    }, 100);
    return () => clearInterval(id);
  }, []);
}

// ─── Disable header icon-button clicks (help / settings / profile) ──────────
// Intercept clicks at document capture so the buttons stay visible and keep
// their CSS hover states, but never trigger their menus.

function useDisableHeaderMenuClicks() {
  useEffect(() => {
    const TAGS = ["atlas-gn-help-menu", "atlas-gn-user-menu", "atlas-gn-org-settings-menu"];

    const swallow = (e: Event) => {
      const path = e.composedPath();
      const inMenu = path.some(
        (n) => n instanceof Element && TAGS.includes(n.tagName.toLowerCase()),
      );
      if (!inMenu) return;
      e.stopImmediatePropagation();
      e.preventDefault();
    };

    const keyHandler = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") swallow(e);
    };

    document.addEventListener("click", swallow, true);
    document.addEventListener("mousedown", swallow, true);
    document.addEventListener("keydown", keyHandler, true);
    return () => {
      document.removeEventListener("click", swallow, true);
      document.removeEventListener("mousedown", swallow, true);
      document.removeEventListener("keydown", keyHandler, true);
    };
  }, []);
}

// ─── Hide app switcher from the global nav header ─────────────────────────────

function useHideAppSwitcher() {
  useEffect(() => {
    const tryHide = () => {
      const mockNav = document.querySelector("mock-hb-global-navigator");
      const root = (mockNav as Element & { shadowRoot: ShadowRoot | null })?.shadowRoot;
      const el = root?.querySelector("atlas-gn-app-switcher") as HTMLElement | null;
      if (el) {
        el.style.display = "none";
        return true;
      }
      return false;
    };
    if (tryHide()) return;
    const id = setInterval(() => {
      if (tryHide()) clearInterval(id);
    }, 100);
    return () => clearInterval(id);
  }, []);
}

// ─── App ──────────────────────────────────────────────────────────────────────

function AppShell() {
  usePanelMode();
  useNavContainerFullHeight();
  useDisableHeaderMenuClicks();
  useHideAppSwitcher();
  useHideSideNavAppName();
  useHideSideNavFooter();
  useHidePlatformNavItems();
  useCollapsedNavStyle();
  return (
    <AppLayout navigation={<Navigation />} orgName="Test company">
      <CitationPreviewProvider>
        <SmartAssistProvider>
          <Outlet />
        </SmartAssistProvider>
      </CitationPreviewProvider>
    </AppLayout>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AppShell />}>
        <Route index element={<Navigate to="/books" replace />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="simple" element={<SimplePage />} />
        <Route path="ai-assistant" element={<AIAssistantPage />} />
        <Route path="resource-center" element={<ResourceCenterPage />} />
        <Route path="books" element={<AdminBooksPage />} />
        <Route path="books/:id" element={<BookEditorPage />} />
        <Route path="admin/books" element={<AdminBooksPage />} />
        <Route path="admin/books/:id" element={<BookEditorPage />} />
        <Route path="smart-assist" element={<AIAssistantPage />} />
      </Route>
    </Routes>
  );
}
