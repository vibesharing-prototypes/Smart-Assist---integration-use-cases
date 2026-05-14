# @diligentcorp/atlas-react-bundle

A self-contained bundle of all Atlas React packages, designed for **AI-assisted prototyping** workflows (e.g. Cursor, Figma Make). It removes the need for a DiligentCorp GitHub account, local NPM configuration, or knowledge of individual Atlas packages.

## Motivation

Installing Atlas packages normally requires access to the GitHub NPM registry and familiarity with multiple `@diligentcorp/atlas-*` packages. This bundle consolidates everything into a single dependency that can be installed directly from a URL — no registry authentication needed.

## What's included

### Main entry (`@diligentcorp/atlas-react-bundle`)

- `AtlasThemeProvider` — Pre-configured Atlas theme provider component, set up with the Atlas Lens theme, Data Grid, Date Picker, and Tree View themes
- `AppLayout` — Pre-configured Atlas app layout component, with Global Navigation and main content area
- All custom Atlas components (Card, PopoverContent, PageHeader, SectionHeader, FilterToolbar, AI Chat components, etc.)
- `LensTheme` type for theme-aware components using `useTheme()`

### Icons (`@diligentcorp/atlas-react-bundle/icons/[IconName]`)

- All Lens icon components from `@diligentcorp/atlas-react-icons`, available as individual files
- Each icon is a default export — import by icon name: `import HomeIcon from ".../icons/Home"`
- No barrel file — only the icons you import are included in your production build

### Global Navigation (`@diligentcorp/atlas-react-bundle/global-nav`)

- App-level navigation components: `NavLink`, `RoutedNavLink`, `NavSection`
- Configuration constants (e.g. `DISPLAY_MODE_CHANGE_EVENT_NAME`)
- Associated configuration types

### Styles

- `@diligentcorp/atlas-react-bundle/styles` — Theme CSS (fonts, design tokens)
- `@diligentcorp/atlas-react-bundle/global-nav.css` — Global Navigation CSS

## Installation

Install directly from the hosted `.tgz` URL — no GitHub NPM registry required:

```bash
npm install https://atlas.diligent.com/react-bundle.tgz
```

### Peer dependencies

The bundle expects the following peer dependencies to be installed in your project:

- `react` (18 or 19) and `react-dom`
- `react-router` (7)
- `@mui/material`, `@mui/system`, `@mui/utils`
- `@mui/x-data-grid`, `@mui/x-data-grid-pro`
- `@mui/x-date-pickers`, `@mui/x-date-pickers-pro`
- `@mui/x-tree-view`, `@mui/x-license`
- `@emotion/react`, `@emotion/cache`
- `@hello-pangea/dnd`
- `@lit/react`, `lit`

## Usage

### CSS imports

Import the required stylesheets in your app's CSS entry point:

```css
@import "@diligentcorp/atlas-react-bundle/styles";
@import "@diligentcorp/atlas-react-bundle/global-nav.css";
```

### Components

```tsx
import { AppLayout, AtlasThemeProvider } from "@diligentcorp/atlas-react-bundle";
import { NavLink } from "@diligentcorp/atlas-react-bundle/global-nav";
import HomeIcon from "@diligentcorp/atlas-react-bundle/icons/Home";
import SettingsIcon from "@diligentcorp/atlas-react-bundle/icons/Settings";

function App() {
  return (
    <AtlasThemeProvider>
      <AppLayout
        navigation={
          <>
            <NavLink label="Home" url="/" isCurrent={true}>
              <HomeIcon slot="icon" />
            </NavLink>
            <NavLink label="Settings" url="/settings" isCurrent={false}>
              <SettingsIcon slot="icon" />
            </NavLink>
          </>
        }
      >
        Main content
      </AppLayout>
    </AtlasThemeProvider>
  );
}
```

### React Router integration

```tsx
import { Routes, Route, Outlet } from "react-router";
import { AppLayout, AtlasThemeProvider } from "@diligentcorp/atlas-react-bundle";
import { RoutedNavLink } from "@diligentcorp/atlas-react-bundle/global-nav";
import HomeIcon from "@diligentcorp/atlas-react-bundle/icons/Home";
import SettingsIcon from "@diligentcorp/atlas-react-bundle/icons/Settings";

function App() {
  return (
    <AtlasThemeProvider>
      <Routes>
        <Route
          path="/"
          element={
            <AppLayout
              navigation={
                <>
                  <RoutedNavLink to="/" label="Home">
                    <HomeIcon slot="icon" />
                  </RoutedNavLink>
                  <RoutedNavLink to="/settings" label="Settings">
                    <SettingsIcon slot="icon" />
                  </RoutedNavLink>
                </>
              }
            >
              <Outlet />
            </AppLayout>
          }
        >
          <Route index element={<h1>Home</h1>} />
          <Route path="settings" element={<h1>Settings</h1>} />
        </Route>
      </Routes>
    </AtlasThemeProvider>
  );
}
```

Icons are individual default exports — import by name:

```tsx
import SearchIcon from "@diligentcorp/atlas-react-bundle/icons/Search";
```

## Building

The bundle is built with [tsup](https://tsup.egoist.dev/) for the main and global-nav entries, plus a post-build step that copies pre-compiled individual icon files from `@diligentcorp/atlas-react-icons`:

```bash
pnpm build
```

The build output goes to the `dist/` directory. During the documentation site build, the package is packed into a `.tgz` archive and made available at a public URL on `atlas.diligent.com`.
