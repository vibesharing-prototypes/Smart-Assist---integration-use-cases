import { PageHeader, OverflowBreadcrumbs } from "@diligentcorp/atlas-react-bundle";
import { Button, Stack } from "@mui/material";
import { NavLink } from "react-router";
import AddIcon from "@diligentcorp/atlas-react-bundle/icons/Add";

import PageLayout from "../components/PageLayout.js";

export default function SimplePage() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <PageLayout>
      <PageHeader
        pageTitle="Simple Page"
        pageSubtitle="A simple page with navigation and a button"
        breadcrumbs={
          <OverflowBreadcrumbs
            leadingElement={<span>My App</span>}
            items={[
              {
                id: "simple",
                label: "Simple Page",
                url: "/simple",
              },
            ]}
            hideLastItem={true}
            aria-label="Breadcrumbs"
          >
            {({ label, url }) => <NavLink to={url}>{label}</NavLink>}
          </OverflowBreadcrumbs>
        }
      />
      <Stack spacing={2} alignItems="flex-start">
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleClick}
        >
          Click Me
        </Button>
      </Stack>
    </PageLayout>
  );
}
