import { RoutedNavLink, NavLink } from "@diligentcorp/atlas-react-bundle/global-nav";
import CurrentBooksIcon from "@diligentcorp/atlas-react-bundle/icons/CurrentBooks";
import HomeIcon from "@diligentcorp/atlas-react-bundle/icons/Home";
import ResourceCenterIcon from "@diligentcorp/atlas-react-bundle/icons/ResourceCenter";
import ExpandLeftIcon from "@diligentcorp/atlas-react-bundle/icons/ExpandLeft";
import { SvgIcon } from "@mui/material";
import QuestionnairesIcon from "@diligentcorp/atlas-react-bundle/icons/Questionnaires";
import UserManagementIcon from "@diligentcorp/atlas-react-bundle/icons/UserManagement";
import { NavLink as RouterNavLink, useLocation } from "react-router";
import AppNavHeader from "./components/AppNavHeader.js";

type Persona = "admin" | "director";

function usePersona(): Persona {
  const { pathname } = useLocation();
  if (pathname === "/books" || pathname.startsWith("/books/") || pathname.startsWith("/admin")) {
    return "admin";
  }
  return "director";
}

function DirectorBooksNavLink() {
  const { pathname } = useLocation();
  const isActive = pathname === "/director/books" || pathname.startsWith("/director/books/");
  return (
    <RouterNavLink to="/director/books">
      <NavLink as="span" label="Books" isCurrent={isActive}>
        <CurrentBooksIcon slot="icon" />
      </NavLink>
    </RouterNavLink>
  );
}

function AdminBooksNavLink() {
  const { pathname } = useLocation();
  const isActive =
    pathname === "/admin/books" ||
    pathname.startsWith("/admin/books/") ||
    pathname === "/books" ||
    pathname.startsWith("/books/");
  return (
    <RouterNavLink to="/admin/books">
      <NavLink as="span" label="Books" isCurrent={isActive}>
        <CurrentBooksIcon slot="icon" />
      </NavLink>
    </RouterNavLink>
  );
}

function SmartBuilderIcon(props: React.ComponentProps<typeof SvgIcon>) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path
        d="M6 9.83398L3.67969 10.7041L7.19043 20.0693L12.0449 18.249H16.3096L6.31543 21.999L1.75 9.8291L6 8.23438V9.83398ZM20.5 3.23438V16.2344H7.5V3.23438H20.5ZM9 4.73438V14.7344H19V4.73438H9ZM15.085 8.64941L17.25 9.73438L15.085 10.8193L14 12.9844L12.915 10.8193L10.75 9.73438L12.915 8.64941L14 6.48438L15.085 8.64941Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}

function DecisionHubIcon(props: React.ComponentProps<typeof SvgIcon>) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path
        d="M17.8457 20.25C18.2596 20.2504 18.5957 20.586 18.5957 21C18.5957 21.414 18.2596 21.7496 17.8457 21.75H5.40527C4.99106 21.75 4.65527 21.4142 4.65527 21C4.65527 20.5858 4.99106 20.25 5.40527 20.25H17.8457Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5947 2.25C11.7397 2.25 11.8852 2.25539 12.0352 2.27539C13.6801 2.48048 14.9848 3.87046 15.0898 5.52539C15.1298 6.22016 14.9748 6.86984 14.6699 7.42969C14.1699 8.33469 13.8447 9.32547 13.8447 10.3555C13.845 11.9553 15.1404 13.25 16.7402 13.25H17.25C18.355 13.25 19.25 14.145 19.25 15.25V18H4V15.25C4 14.145 4.895 13.25 6 13.25H6.4502C8.04995 13.2499 9.34447 11.9552 9.34473 10.3555V10.1348C9.34468 9.20485 9.04516 8.31946 8.5752 7.51953C8.27029 6.99959 8.09473 6.39489 8.09473 5.75C8.09473 3.81509 9.66485 2.25015 11.5947 2.25ZM11.5996 3.75977C10.4949 3.75998 9.59974 4.655 9.59961 5.75977C9.59961 6.11463 9.69513 6.46461 9.875 6.76953C10.5199 7.87442 10.8495 9.00477 10.8496 10.1396V10.3604C10.8494 12.7852 8.87993 14.7548 6.45508 14.7549H6.00488C5.72998 14.7549 5.50495 14.98 5.50488 15.2549V16.5049H17.7549V15.2549C17.7548 14.9799 17.5298 14.7549 17.2549 14.7549H16.7451C14.3202 14.7549 12.3498 12.7852 12.3496 10.3604C12.3496 9.15535 12.6904 7.92496 13.3604 6.70996C13.5353 6.38007 13.6197 6.01008 13.5947 5.61523C13.5347 4.68023 12.7846 3.87965 11.8496 3.76465L11.5996 3.75977Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}

function DirectorNavigation() {
  return (
    <>
      <AppNavHeader />
      <NavLink label="Boards" as="span" style={{ marginTop: "12px" }}>
        <ExpandLeftIcon slot="icon" />
      </NavLink>
      <RoutedNavLink to="/director" end label="Home">
        <HomeIcon slot="icon" />
      </RoutedNavLink>
      <DirectorBooksNavLink />
      <RoutedNavLink to="/director/resource-center" label="Resource Center">
        <ResourceCenterIcon slot="icon" />
      </RoutedNavLink>
      <NavLink label="Smart Builder" as="span">
        <SmartBuilderIcon slot="icon" />
      </NavLink>
      <NavLink label="Decision Hub" as="span">
        <DecisionHubIcon slot="icon" />
      </NavLink>
      <NavLink label="Questionnaires" as="span">
        <QuestionnairesIcon slot="icon" />
      </NavLink>
      <hr />
      <NavLink label="Boards account" as="span">
        <UserManagementIcon slot="icon" />
      </NavLink>
    </>
  );
}

function AdminNavigation() {
  return (
    <>
      <AppNavHeader />
      <NavLink label="Boards" as="span" style={{ marginTop: "12px" }}>
        <ExpandLeftIcon slot="icon" />
      </NavLink>
      <AdminBooksNavLink />
      <RoutedNavLink to="/admin/resource-center" label="Resource Center">
        <ResourceCenterIcon slot="icon" />
      </RoutedNavLink>
      <NavLink label="Smart Builder" as="span">
        <SmartBuilderIcon slot="icon" />
      </NavLink>
      <NavLink label="Decision Hub" as="span">
        <DecisionHubIcon slot="icon" />
      </NavLink>
      <NavLink label="Questionnaires" as="span">
        <QuestionnairesIcon slot="icon" />
      </NavLink>
      <hr />
      <NavLink label="Boards account" as="span">
        <UserManagementIcon slot="icon" />
      </NavLink>
    </>
  );
}

export default function Navigation() {
  const persona = usePersona();
  return persona === "admin" ? <AdminNavigation /> : <DirectorNavigation />;
}
