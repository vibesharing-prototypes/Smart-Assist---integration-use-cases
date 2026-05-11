import { PageHeader, OverflowBreadcrumbs } from "@diligentcorp/atlas-react-bundle";
import { NavLink } from "react-router";

import PageLayout from "../components/PageLayout.js";

export default function SettingsPage() {
  return (
    <PageLayout>
      <PageHeader
        pageTitle="Settings"
        pageSubtitle="This is the app's settings"
        breadcrumbs={
          <OverflowBreadcrumbs
            leadingElement={<span>My App</span>}
            items={[
              {
                id: "settings",
                label: "Settings",
                url: "/",
              },
            ]}
            hideLastItem={true}
            aria-label="Breadcrumbs"
          >
            {({ label, url }) => <NavLink to={url}>{label}</NavLink>}
          </OverflowBreadcrumbs>
        }
      />
    </PageLayout>
  );
}
