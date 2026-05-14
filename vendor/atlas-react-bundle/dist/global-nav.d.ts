import * as lit from 'lit';
import { TemplateResult, LitElement, PropertyValues, PropertyValueMap } from 'lit';
import * as react_jsx_runtime from 'react/jsx-runtime';
import { NavLinkProps } from 'react-router';
import * as _lit_react from '@lit/react';
import { EventName } from '@lit/react';

type IconSize$2 = "sm" | "md" | "lg" | "xl" | "2xl";
type NavItem$2<TKey extends string> = {
    key: TKey;
    icon: (size?: IconSize$2) => TemplateResult;
    label: () => TemplateResult | string;
    loadIcon: () => Promise<unknown>;
};
/**
 * These are the apps that the API provides.
 * They are rendered if the API provides their key and URL.
 * Icons are lazy loaded.
 */
declare const APPS$1: {
    readonly LAUNCHPAD: NavItem$2<"launchpad">;
    readonly EQUITY: NavItem$2<"equity">;
    readonly EQUITY_INVEST: NavItem$2<"equity-invest">;
    readonly COMMUNITY: NavItem$2<"community">;
    readonly BOARDS_CLOUD: NavItem$2<"boards-cloud">;
    readonly BOARDS_CLOUD_CSP: NavItem$2<"boards-cloud-csp">;
    readonly BOARDEFFECT: NavItem$2<"boardeffect">;
    readonly QUESTIONNAIRES_HOST: NavItem$2<"questionnaires-host">;
    readonly RISK_MANAGER: NavItem$2<"risk-manager">;
    readonly RISK_ESSENTIALS: NavItem$2<"risk-essentials">;
    readonly ASSET_MANAGER: NavItem$2<"asset-manager">;
    readonly STRATEGY: NavItem$2<"strategy">;
    readonly ASSET_INVENTORY: NavItem$2<"asset-inventory">;
    readonly ENTITIES: NavItem$2<"entities">;
    readonly MISSION_CONTROL: NavItem$2<"mission-control">;
    readonly INTERNAL_CONTROLS: NavItem$2<"internal-controls">;
    readonly ASSESSMENTS: NavItem$2<"assessments">;
    readonly ASSURANCE_PLANS: NavItem$2<"assurance-plans">;
    readonly AUDIT: NavItem$2<"audit">;
    readonly PROJECTS: NavItem$2<"projects">;
    readonly FRAMEWORKS: NavItem$2<"frameworks">;
    readonly ISSUE_TRACKER: NavItem$2<"issue-tracker">;
    readonly TASK_TRACKER: NavItem$2<"task-tracker">;
    readonly PROJECT_TIMESHEETS: NavItem$2<"project-timesheets">;
    readonly PROJECT_SCHEDULER: NavItem$2<"project-scheduler">;
    readonly ACADEMY: NavItem$2<"academy">;
    readonly DILIGENT_INSTITUTE: NavItem$2<"diligent-institute">;
    readonly ROBOTS: NavItem$2<"robots">;
    readonly ANALYTICS: NavItem$2<"analytics">;
    readonly ACCUVIO: NavItem$2<"accuvio">;
    readonly COMPLIANCE_MAPS: NavItem$2<"compliance-maps">;
    readonly POLICY_MANAGER: NavItem$2<"policy-manager">;
    readonly THIRDPARTY_MANAGER: NavItem$2<"third-party-manager">;
    readonly THIRDPARTY_MANAGER_AI: NavItem$2<"third-party-manager-ai">;
    readonly THIRDPARTY_MANAGER_UI: NavItem$2<"third-party-manager-ui">;
    readonly DMI: NavItem$2<"market-intelligence">;
    readonly RESEARCH_PORTAL: NavItem$2<"research-portal">;
    readonly ISSUE_MANAGER: NavItem$2<"issue-manager">;
    readonly ACTIVITY_CENTER: NavItem$2<"activity-center">;
    readonly RESULTS: NavItem$2<"results">;
    readonly STORYBOARDS: NavItem$2<"storyboards">;
    readonly REPORTS: NavItem$2<"reports">;
    readonly INSTALLERS: NavItem$2<"installers">;
    readonly ENTERPRISE_STRATEGY: NavItem$2<"enterprise-strategy">;
    readonly SECURE_FILE_SHARING: NavItem$2<"securefiles">;
    readonly DATA_ROOM: NavItem$2<"dataroom">;
    readonly ACL_AI_STUDIO: NavItem$2<"acl-ai-studio">;
    readonly SWIFT_SURVEY: NavItem$2<"swift-survey">;
    readonly SAMPLE_APP_1: NavItem$2<"wso2-poc-sample-app-1">;
    readonly SAMPLE_APP_2: NavItem$2<"wso2-poc-sample-app-2">;
    readonly VAULT: NavItem$2<"vault">;
    readonly COMPLIANCE_EDUCATION: NavItem$2<"compliance-education">;
    readonly AI_REPORTING: NavItem$2<"ai-reporting">;
    readonly COMPLIANCE_AGENT: NavItem$2<"compliance-agent">;
};
declare const APP_SECTIONS$1: {
    readonly BOARDS_GOVERNANCE: NavItem$2<"boards-governance">;
    readonly RISK_STRATEGY: NavItem$2<"risk-strategy">;
    readonly AUDIT_ANALYTICS: NavItem$2<"audit-analytics">;
    readonly ESG_DIVERSITY: NavItem$2<"esg-diversity">;
    readonly COMPLIANCE_ETHICS: NavItem$2<"compliance-ethics">;
    readonly MARKET_INTELLIGENCE: NavItem$2<"mkt-intelligence">;
    readonly ISSUES_REPORTING: NavItem$2<"issues-reporting">;
    readonly EDUCATION: NavItem$2<"education">;
};
/**
 * These are the nav sections that we use besides the app sections.
 * Home is the "root" section, which is displayed by default.
 */
declare const NAV_SECTIONS$1: {
    HOME: NavItem$2<"home">;
    SETTINGS: NavItem$2<"settings">;
    HELP: NavItem$2<"help">;
};
/**
 * These setting items are typically only available to organization admins.
 * They will be rendered if the API provides their key and URL.
 */
declare const SETTINGS_ITEMS$1: {
    readonly USERS: NavItem$2<"users">;
    readonly GROUPS: NavItem$2<"groups">;
    readonly ROLES: NavItem$2<"roles">;
    readonly ACTIVATIONS: NavItem$2<"activations">;
    readonly CONFIGURATION: NavItem$2<"configuration">;
    readonly ACTIVITY_LOGS: NavItem$2<"activityLog">;
    readonly ORGANIZATION: NavItem$2<"organization">;
    readonly GOVMAPS: NavItem$2<"govMaps">;
    readonly NOTIFICATION_SETTINGS: NavItem$2<"notificationSettings">;
    readonly SECURITY_SETTINGS: NavItem$2<"securitySettings">;
    readonly ORG_STRUCTURE: NavItem$2<"orgStructure">;
};
declare const SETTINGS_SECTIONS$1: {
    readonly USERS: {
        readonly key: "users";
        readonly label: () => string;
    };
    readonly ORGANIZATION: {
        readonly key: "organization";
        readonly label: () => string;
    };
};
declare const SETTINGS_GROUPS: {
    readonly users: readonly ["users", "roles", "groups"];
    readonly organization: readonly ["organization", "securitySettings", "notificationSettings", "activityLog", "activations", "configuration", "govMaps", "orgStructure"];
};
/**
 * These are links that are provided by the API.
 * They will be rendered if the API provides their key and URL.
 */
declare const LINKS$1: {
    readonly SUPPORT: NavItem$2<"support">;
    readonly LAUNCHPAD: NavItem$2<"launchpad">;
    readonly LOGIN: NavItem$2<"login">;
    readonly LOGOUT: NavItem$2<"logout">;
    readonly NOTIFICATION_PREFERENCES: NavItem$2<"notification-preferences">;
    readonly PROFILE: NavItem$2<"profile">;
    readonly PROFILE_SETTINGS: NavItem$2<"profile-settings">;
    readonly DOCUMENTATION: NavItem$2<"documentation">;
    readonly RESOURCES_SUPPORT: NavItem$2<"resources_support">;
    readonly DILIGENT_CONNECT: NavItem$2<"community">;
    readonly DOWNLOADS: NavItem$2<"downloads">;
    readonly MARKETPLACE: NavItem$2<"toolkits">;
    readonly GROUPS: NavItem$2<"groups">;
};
/**
 * These are the help menu items that are displayed in the HelpMenu component.
 * They will be rendered if the API provides their key and URL.
 */
declare const HELP_ITEMS: {
    readonly DOCUMENTATION: NavItem$2<"documentation">;
    readonly ACADEMY: NavItem$2<"academy">;
    readonly KEYBOARD_SHORTCUTS: NavItem$2<"keyboard-shortcuts">;
    readonly MARKETPLACE: NavItem$2<"toolkits">;
    readonly SUPPORT: NavItem$2<"support">;
    readonly STATUS: NavItem$2<"status">;
    readonly PRODUCT_UPDATES: NavItem$2<"product-updates">;
};
declare const BACK_TO_OLD_NAVIGATION: NavItem$2<"back-to-old-navigation">;
/**
 * These are help items that belong to specific apps.
 * Each help item uses the same icon and label, but have different URLs from the API.
 * In practice we'll only display one of these at a time.
 */
declare const APP_HELP_ITEMS$1: {
    readonly HOMEPAGE: NavItem$2<"homepage">;
    readonly STRATEGY: NavItem$2<"strategy">;
    readonly PROJECTS: NavItem$2<"projects">;
    readonly MISSION_CONTROL: NavItem$2<"mission_control">;
    readonly ROBOTS: NavItem$2<"robots">;
    readonly RESULTS: NavItem$2<"results">;
    readonly REPORTS: NavItem$2<"reports">;
    readonly LAUNCHPAD: NavItem$2<"launchpad">;
};
/**
 * This controls the order of sections, and the order of apps within each section.
 */
declare const APP_NAVIGATION: {
    readonly "boards-governance": readonly ["boards-cloud", "boardeffect", "boards-cloud-csp", "community", "questionnaires-host", "securefiles", "dataroom"];
    readonly "risk-strategy": readonly ["risk-manager", "risk-essentials", "asset-manager", "strategy", "asset-inventory", "enterprise-strategy"];
    readonly "audit-analytics": readonly ["acl-ai-studio", "assessments", "audit", "assurance-plans", "projects", "frameworks", "task-tracker", "project-timesheets", "project-scheduler", "analytics", "robots", "mission-control", "internal-controls"];
    readonly "esg-diversity": readonly ["accuvio", "swift-survey"];
    readonly "compliance-ethics": readonly ["compliance-maps", "entities", "equity", "equity-invest", "policy-manager", "third-party-manager", "third-party-manager-ai", "third-party-manager-ui", "vault", "compliance-education", "compliance-agent"];
    readonly "mkt-intelligence": readonly ["market-intelligence", "research-portal"];
    readonly "issues-reporting": readonly ["activity-center", "results", "storyboards", "reports", "issue-tracker", "issue-manager", "ai-reporting"];
    readonly education: readonly ["academy", "diligent-institute", "wso2-poc-sample-app-1", "wso2-poc-sample-app-2"];
};
declare const TRAILING_LINKS: readonly [NavItem$2<"toolkits">, NavItem$2<"documentation">, NavItem$2<"resources_support">, NavItem$2<"community">];
declare const NAV_STATE$1: {
    Disabled: string;
    PanelExpanded: string;
    PanelCollapsed: string;
    DialogOpen: string;
    DialogClosed: string;
};
declare const CONFIGURATION_EVENT_NAME: "atlas-gn:configure";
declare const OPEN_SECTION_EVENT_NAME: "atlas-gn:open-section";
declare const CHANGE_ORG_EVENT_NAME: "atlas-gn:org-change";
declare const TOGGLE_MODAL_EVENT_NAME$1: "atlas-gn:toggle-modal";
declare const OPEN_EVENT_NAME$1: "atlas-gn:open";
declare const CLOSE_EVENT_NAME$1: "atlas-gn:close";
declare const DISPLAY_MODE_CHANGE_EVENT_NAME$1: "atlas-gn:display-mode-change";
declare const BACK_TO_OLD_NAVIGATION_EVENT_NAME: "atlas-gn:back-to-old-navigation";
declare const TOGGLE_FAVORITE_APP_EVENT_NAME: "atlas-gn:toggle-app-favorite";
declare const REORDER_APPS_EVENT_NAME: "atlas-gn:reorder-apps";
declare const OPEN_SHORTCUTS_EVENT_NAME: "atlas-gn:open-shortcuts";
/**
 * This is the threshold at which the navigation appears inside a dialog instead of a sidebar.
 * When the viewport width is greater than this value, the navigation will be rendered as a sidebar.
 * Otherwise, it will be rendered as a dialog, overlaying the page content.
 */
declare const FORCED_DIALOG_THRESHOLD: 1280;
declare const MINIMUM_ORG_COUNT_SEARCH: 5;
declare const MINIMUM_APP_COUNT_SEARCH: 5;
declare const GLOBAL_NAV_MODE_DIALOG: "dialog";
declare const GLOBAL_NAV_MODE_DYNAMIC: "dynamic";
declare const GLOBAL_NAV_MODE_PANEL: "panel";
declare const BOARDS_CLOUD_CUSTOMER_ADMIN_DEMO_URL: "https://director.diligentboards.com";
/**
 * List of platform domains where GlobalNav parent validation is enforced.
 * When running on these domains, <atlas-global-nav> must be wrapped by <hb-global-navigator>.
 *
 * To add a new platform domain, submit a PR updating this constant.
 *
 * Organized by environment:
 * - Dev: diligentoneplatform-dev.com, highbond-s3.com, aclgrc-s3.com
 * - Staging: diligentoneplatform-staging.com, highbond-s1.com, aclgrc-s1.com
 * - Preprod: diligentoneplatform-preprod.com, highbond-s2.com, aclgrc-s2.com
 * - Production: diligentoneplatform.com, highbond.com, aclgrc.com
 * - Gov Staging: diligentoneplatform-staging-gov.com, highbond-gov-s1.com
 * - DoD Staging: diligentoneplatform-staging-mil.com, highbond-mil-s1.com
 * - Gov Production: diligentoneplatform-gov.com, highbond-gov.com
 * - SLED Production: diligentoneplatform-gov2.com, highbond-gov2.com
 * - DoD Production: diligentoneplatform-gov3.com, diligentoneplatform.mil, highbond-gov3.com, highbond.mil
 */
declare const PLATFORM_DOMAINS: readonly ["diligentoneplatform-dev.com", "highbond-s3.com", "aclgrc-s3.com", "diligentoneplatform-staging.com", "highbond-s1.com", "aclgrc-s1.com", "diligentoneplatform-preprod.com", "highbond-s2.com", "aclgrc-s2.com", "diligentoneplatform.com", "highbond.com", "aclgrc.com", "diligentoneplatform-staging-gov.com", "highbond-gov-s1.com", "diligentoneplatform-staging-mil.com", "highbond-mil-s1.com", "diligentoneplatform-gov.com", "highbond-gov.com", "diligentoneplatform-gov2.com", "highbond-gov2.com", "diligentoneplatform-gov3.com", "diligentoneplatform.mil", "highbond-gov3.com", "highbond.mil"];
declare const GLOBAL_NAV_DISPLAY_MODES$1: readonly ["panel", "dialog", "dynamic"];

/**
 * All valid project locale codes. Sorted lexicographically.
 */
declare const allLocales: readonly ["ar-IN", "de-DE", "en-US", "en-US", "es-LA", "fr-FR", "it-IT", "ja-JP", "nl-NL", "pt-BR", "zh-CN"];

type IconSize$1 = "sm" | "md" | "lg" | "xl" | "2xl";
type NavItem$1<TKey extends string> = {
    key: TKey;
    icon: (size?: IconSize$1) => TemplateResult;
    label: () => TemplateResult | string;
    loadIcon: () => Promise<unknown>;
};
/**
 * These are the apps that the API provides.
 * They are rendered if the API provides their key and URL.
 * Icons are lazy loaded.
 */
declare const APPS: {
    readonly LAUNCHPAD: NavItem$1<"launchpad">;
    readonly EQUITY: NavItem$1<"equity">;
    readonly EQUITY_INVEST: NavItem$1<"equity-invest">;
    readonly COMMUNITY: NavItem$1<"community">;
    readonly BOARDS_CLOUD: NavItem$1<"boards-cloud">;
    readonly BOARDS_CLOUD_CSP: NavItem$1<"boards-cloud-csp">;
    readonly BOARDEFFECT: NavItem$1<"boardeffect">;
    readonly QUESTIONNAIRES_HOST: NavItem$1<"questionnaires-host">;
    readonly RISK_MANAGER: NavItem$1<"risk-manager">;
    readonly RISK_ESSENTIALS: NavItem$1<"risk-essentials">;
    readonly ASSET_MANAGER: NavItem$1<"asset-manager">;
    readonly STRATEGY: NavItem$1<"strategy">;
    readonly ASSET_INVENTORY: NavItem$1<"asset-inventory">;
    readonly ENTITIES: NavItem$1<"entities">;
    readonly MISSION_CONTROL: NavItem$1<"mission-control">;
    readonly INTERNAL_CONTROLS: NavItem$1<"internal-controls">;
    readonly ASSESSMENTS: NavItem$1<"assessments">;
    readonly ASSURANCE_PLANS: NavItem$1<"assurance-plans">;
    readonly AUDIT: NavItem$1<"audit">;
    readonly PROJECTS: NavItem$1<"projects">;
    readonly FRAMEWORKS: NavItem$1<"frameworks">;
    readonly ISSUE_TRACKER: NavItem$1<"issue-tracker">;
    readonly TASK_TRACKER: NavItem$1<"task-tracker">;
    readonly PROJECT_TIMESHEETS: NavItem$1<"project-timesheets">;
    readonly PROJECT_SCHEDULER: NavItem$1<"project-scheduler">;
    readonly ACADEMY: NavItem$1<"academy">;
    readonly DILIGENT_INSTITUTE: NavItem$1<"diligent-institute">;
    readonly ROBOTS: NavItem$1<"robots">;
    readonly ANALYTICS: NavItem$1<"analytics">;
    readonly ACCUVIO: NavItem$1<"accuvio">;
    readonly COMPLIANCE_MAPS: NavItem$1<"compliance-maps">;
    readonly POLICY_MANAGER: NavItem$1<"policy-manager">;
    readonly THIRDPARTY_MANAGER: NavItem$1<"third-party-manager">;
    readonly THIRDPARTY_MANAGER_AI: NavItem$1<"third-party-manager-ai">;
    readonly THIRDPARTY_MANAGER_UI: NavItem$1<"third-party-manager-ui">;
    readonly DMI: NavItem$1<"market-intelligence">;
    readonly RESEARCH_PORTAL: NavItem$1<"research-portal">;
    readonly ISSUE_MANAGER: NavItem$1<"issue-manager">;
    readonly ACTIVITY_CENTER: NavItem$1<"activity-center">;
    readonly RESULTS: NavItem$1<"results">;
    readonly STORYBOARDS: NavItem$1<"storyboards">;
    readonly REPORTS: NavItem$1<"reports">;
    readonly INSTALLERS: NavItem$1<"installers">;
    readonly ENTERPRISE_STRATEGY: NavItem$1<"enterprise-strategy">;
    readonly SECURE_FILE_SHARING: NavItem$1<"securefiles">;
    readonly DATA_ROOM: NavItem$1<"dataroom">;
    readonly ACL_AI_STUDIO: NavItem$1<"acl-ai-studio">;
    readonly SWIFT_SURVEY: NavItem$1<"swift-survey">;
    readonly SAMPLE_APP_1: NavItem$1<"wso2-poc-sample-app-1">;
    readonly SAMPLE_APP_2: NavItem$1<"wso2-poc-sample-app-2">;
    readonly VAULT: NavItem$1<"vault">;
    readonly COMPLIANCE_EDUCATION: NavItem$1<"compliance-education">;
    readonly AI_REPORTING: NavItem$1<"ai-reporting">;
    readonly COMPLIANCE_AGENT: NavItem$1<"compliance-agent">;
};
declare const APP_SECTIONS: {
    readonly BOARDS_GOVERNANCE: NavItem$1<"boards-governance">;
    readonly RISK_STRATEGY: NavItem$1<"risk-strategy">;
    readonly AUDIT_ANALYTICS: NavItem$1<"audit-analytics">;
    readonly ESG_DIVERSITY: NavItem$1<"esg-diversity">;
    readonly COMPLIANCE_ETHICS: NavItem$1<"compliance-ethics">;
    readonly MARKET_INTELLIGENCE: NavItem$1<"mkt-intelligence">;
    readonly ISSUES_REPORTING: NavItem$1<"issues-reporting">;
    readonly EDUCATION: NavItem$1<"education">;
};
/**
 * These are the nav sections that we use besides the app sections.
 * Home is the "root" section, which is displayed by default.
 */
declare const NAV_SECTIONS: {
    HOME: NavItem$1<"home">;
    SETTINGS: NavItem$1<"settings">;
    HELP: NavItem$1<"help">;
};
/**
 * These setting items are typically only available to organization admins.
 * They will be rendered if the API provides their key and URL.
 */
declare const SETTINGS_ITEMS: {
    readonly USERS: NavItem$1<"users">;
    readonly GROUPS: NavItem$1<"groups">;
    readonly ROLES: NavItem$1<"roles">;
    readonly ACTIVATIONS: NavItem$1<"activations">;
    readonly CONFIGURATION: NavItem$1<"configuration">;
    readonly ACTIVITY_LOGS: NavItem$1<"activityLog">;
    readonly ORGANIZATION: NavItem$1<"organization">;
    readonly GOVMAPS: NavItem$1<"govMaps">;
    readonly NOTIFICATION_SETTINGS: NavItem$1<"notificationSettings">;
    readonly SECURITY_SETTINGS: NavItem$1<"securitySettings">;
    readonly ORG_STRUCTURE: NavItem$1<"orgStructure">;
};
declare const SETTINGS_SECTIONS: {
    readonly USERS: {
        readonly key: "users";
        readonly label: () => string;
    };
    readonly ORGANIZATION: {
        readonly key: "organization";
        readonly label: () => string;
    };
};
/**
 * These are links that are provided by the API.
 * They will be rendered if the API provides their key and URL.
 */
declare const LINKS: {
    readonly SUPPORT: NavItem$1<"support">;
    readonly LAUNCHPAD: NavItem$1<"launchpad">;
    readonly LOGIN: NavItem$1<"login">;
    readonly LOGOUT: NavItem$1<"logout">;
    readonly NOTIFICATION_PREFERENCES: NavItem$1<"notification-preferences">;
    readonly PROFILE: NavItem$1<"profile">;
    readonly PROFILE_SETTINGS: NavItem$1<"profile-settings">;
    readonly DOCUMENTATION: NavItem$1<"documentation">;
    readonly RESOURCES_SUPPORT: NavItem$1<"resources_support">;
    readonly DILIGENT_CONNECT: NavItem$1<"community">;
    readonly DOWNLOADS: NavItem$1<"downloads">;
    readonly MARKETPLACE: NavItem$1<"toolkits">;
    readonly GROUPS: NavItem$1<"groups">;
};
/**
 * These are help items that belong to specific apps.
 * Each help item uses the same icon and label, but have different URLs from the API.
 * In practice we'll only display one of these at a time.
 */
declare const APP_HELP_ITEMS: {
    readonly HOMEPAGE: NavItem$1<"homepage">;
    readonly STRATEGY: NavItem$1<"strategy">;
    readonly PROJECTS: NavItem$1<"projects">;
    readonly MISSION_CONTROL: NavItem$1<"mission_control">;
    readonly ROBOTS: NavItem$1<"robots">;
    readonly RESULTS: NavItem$1<"results">;
    readonly REPORTS: NavItem$1<"reports">;
    readonly LAUNCHPAD: NavItem$1<"launchpad">;
};
declare const NAV_STATE: {
    Disabled: string;
    PanelExpanded: string;
    PanelCollapsed: string;
    DialogOpen: string;
    DialogClosed: string;
};
declare const TOGGLE_MODAL_EVENT_NAME: "atlas-gn:toggle-modal";
declare const OPEN_EVENT_NAME: "atlas-gn:open";
declare const CLOSE_EVENT_NAME: "atlas-gn:close";
declare const DISPLAY_MODE_CHANGE_EVENT_NAME: "atlas-gn:display-mode-change";
declare const GLOBAL_NAV_DISPLAY_MODES: readonly ["panel", "dialog", "dynamic"];

declare const SHORTCUT_SECTIONS: {
    readonly BASIC: "basic";
    readonly BUBBLY: "bubbly";
    readonly DEFAULT: "default";
    readonly PRESENTATION: "presentation";
    readonly TEXT_EDITOR: "text_editor";
    readonly SCRIPT_EDITOR: "script_editor";
    readonly SCHEDULER: "scheduler";
    readonly TABLE: "table";
};
declare const sectionOrder: {
    readonly default: readonly ["basic", "table", "bubbly"];
    readonly projects: readonly ["basic", "text_editor", "scheduler"];
    readonly results: readonly ["basic", "presentation", "text_editor"];
    readonly robotics: readonly ["basic", "script_editor"];
    readonly storyboards: readonly ["basic", "presentation", "text_editor"];
};

type KeyPropOf$1<T extends {
    [key: string]: {
        key: string;
    };
}> = T[keyof T]["key"];
type AppKey$1 = KeyPropOf$1<typeof APPS>;
type SectionKey = KeyPropOf$1<typeof APP_SECTIONS>;
type NavSectionKey = KeyPropOf$1<typeof NAV_SECTIONS>;
type SettingsKey = KeyPropOf$1<typeof SETTINGS_ITEMS>;
type SettingsSectionKey = KeyPropOf$1<typeof SETTINGS_SECTIONS>;
type LinkKey = KeyPropOf$1<typeof LINKS>;
type HelpKey = KeyPropOf$1<typeof APP_HELP_ITEMS>;
type ShortcutAppKey = keyof typeof sectionOrder;
type ShortcutSectionKey = (typeof SHORTCUT_SECTIONS)[keyof typeof SHORTCUT_SECTIONS];
type NavStateKey$1 = (typeof NAV_STATE)[keyof typeof NAV_STATE];
type LifecycleStatusType = "beta" | "retiring" | "new" | "renamed";
interface AppLifecycleStatus {
    type: LifecycleStatusType;
    label: string;
    startDate?: string;
    endDate?: string;
}
interface GlobalNavData {
    appSwitcherProps: AppSwitcherProps;
    currentOrgSubscriptionType: "internal" | "training" | "free";
    customerName: string;
    userFullName: string;
    locale: string;
    links: Links;
    enableProfile: boolean;
    highbondDomain: string;
    membershipPermissions: MembershipPermissions;
}
interface AppSwitcherProps {
    apps: App[];
    customerName: string;
    initialOrganizationId: number;
    organizations: Organization[];
    launchpadUrl: string;
    productTitle: string;
    resourceLinks: ResourceLinks;
}
interface App {
    id: number;
    title: string;
    key: AppKey$1;
    url: string;
    disabled?: boolean;
    lifecycleStatus?: AppLifecycleStatus;
}
interface Organization {
    id: number;
    logo: string | null;
    customerName: string | null;
    name: string;
    launchpad: string;
    subdomain: string;
    regionCode: string;
    subscriptionStatusMessage: string;
    dataTestId?: string;
}
interface ResourceLinks {
    launchpad: string;
    community: string;
    academy: string;
}
type Links = Record<LinkKey, string> & {
    help: AppHelpLinks;
};
type AppHelpLinks = Record<HelpKey, string>;
type HelpLinks = AppHelpLinks;
type OrgSettingsLinks = Record<SettingsKey, string | undefined>;
interface MembershipPermissions {
    isGroupReadOnly: boolean;
    canUpdateOrg: boolean;
    isOrgAdmin: boolean;
}
type ToggleModalEventDetails$1 = {
    open: boolean;
    type: "menu" | "panel" | "dialog";
    close?: () => void;
    originalEvent?: MouseEvent | KeyboardEvent;
};
type DisplayModeChangeEventDetails$1 = {
    oldState: NavStateKey$1;
    newState: NavStateKey$1;
};
/** Detail for {@link REORDER_APPS_EVENT_NAME} from `atlas-gn-app-switcher`. */
interface ReorderAppsEventDetail {
    favoriteAppIds: number[];
    nonFavoriteAppIds: number[];
}
type LocaleKey = (typeof allLocales)[number];
type GlobalNavDisplayMode = (typeof GLOBAL_NAV_DISPLAY_MODES)[number];
declare global {
    interface DocumentEventMap {
        [TOGGLE_MODAL_EVENT_NAME]: CustomEvent<ToggleModalEventDetails$1>;
        [DISPLAY_MODE_CHANGE_EVENT_NAME]: CustomEvent<DisplayModeChangeEventDetails$1>;
    }
}

interface RoutedNavLinkProps extends NavLinkProps {
    label: string;
    tooltip?: string;
    disableActiveState?: boolean;
}
/**
 * This component is a wrapper around `react-router`'s `NavLink` component.
 * It ensures that the GlobalNav's Link component can be used easily with the `react-router` library.
 *
 * It accepts all the same props as `NavLink` from `react-router`, but also requires a `label` prop,
 * which will be rendered by the GlobalNav's `NavLink` component.
 *
 * @example
 * ```tsx
 * <RoutedNavLink to="/home" label="Home">
 *   <HomeIcon slot="icon" />
 * </RoutedNavLink>
 *
 * <RoutedNavLink to="/settings" label="Settings">
 *   {({ isActive }) => (
 *     <SettingsIcon slot="icon" isActive={isActive} />
 *   )}
 * </RoutedNavLink>
 * ```
 */
declare function RoutedNavLink({ label, tooltip, children, disableActiveState, ...navLinkProps }: RoutedNavLinkProps): react_jsx_runtime.JSX.Element;

type IconSize = "sm" | "md" | "lg" | "xl" | "2xl";
type IconVariant = "filled" | "outlined";
declare abstract class Icon extends LitElement {
    size: IconSize;
    variant: IconVariant;
    _renderedIcon?: TemplateResult;
    static properties: {
        size: {
            type: StringConstructor;
            reflect: boolean;
        };
        variant: {
            type: StringConstructor;
            reflect: boolean;
        };
        _renderedIcon: {
            state: boolean;
        };
    };
    constructor();
    abstract loadIcon(size: IconSize, variant: IconVariant): void;
    render(): TemplateResult<2>;
    protected willUpdate(_changedProperties: PropertyValues<this>): void;
    connectedCallback(): void;
    get sizeValue(): string;
    get viewBox(): string;
    static define(name: string, icon: CustomElementConstructor): void;
    static styles: lit.CSSResult;
}

declare class WrappedIcon$4 extends Icon {
    loadIcon(size: IconSize, variant: IconVariant): void;
}
declare global {
    interface HTMLElementTagNameMap {
        "dil-external-link-icon": WrappedIcon$4;
    }
}

declare class WrappedIcon$3 extends Icon {
    loadIcon(size: IconSize, variant: IconVariant): void;
}
declare global {
    interface HTMLElementTagNameMap {
        "dil-expand-down-icon": WrappedIcon$3;
    }
}

declare class WrappedIcon$2 extends Icon {
    loadIcon(size: IconSize, variant: IconVariant): void;
}
declare global {
    interface HTMLElementTagNameMap {
        "dil-expand-right-icon": WrappedIcon$2;
    }
}

declare class WrappedIcon$1 extends Icon {
    loadIcon(size: IconSize, variant: IconVariant): void;
}
declare global {
    interface HTMLElementTagNameMap {
        "dil-expand-left-icon": WrappedIcon$1;
    }
}

declare class WrappedIcon extends Icon {
    loadIcon(size: IconSize, variant: IconVariant): void;
}
declare global {
    interface HTMLElementTagNameMap {
        "dil-expand-up-icon": WrappedIcon;
    }
}

declare abstract class NavItem extends LitElement {
    label: string;
    tooltip?: string;
    isCurrent: boolean;
    isHighlighted: boolean;
    static properties: {
        label: {
            type: StringConstructor;
            reflect: boolean;
            attribute: boolean;
        };
        tooltip: {
            type: StringConstructor;
            reflect: boolean;
            attribute: boolean;
        };
        isCurrent: {
            type: BooleanConstructor;
            reflect: boolean;
            attribute: string;
        };
        isHighlighted: {
            type: BooleanConstructor;
            reflect: boolean;
            attribute: string;
        };
    };
    constructor();
    protected renderContents(): lit.TemplateResult<1>;
    protected renderExpandLeftIcon: () => lit.TemplateResult<1>;
    protected renderExpandRightIcon: () => lit.TemplateResult<1>;
    protected renderExpandUpIcon: () => lit.TemplateResult<1>;
    protected renderExpandDownIcon: () => lit.TemplateResult<1>;
    protected get itemClasses(): {
        item: boolean;
        transition: boolean;
        current: boolean;
        highlighted: boolean;
    };
    static shadowRootOptions: ShadowRootInit;
    static styles: lit.CSSResult[];
}

declare class NavLink$1 extends NavItem {
    as: "link" | "button" | "span";
    url: string;
    target: "_blank" | "_self";
    variant: "primary" | "secondary";
    isDisabled: boolean;
    showExpandIcon: boolean;
    showExternalIcon: boolean;
    static properties: {
        as: {
            type: StringConstructor;
            reflect: boolean;
            attribute: boolean;
        };
        url: {
            type: StringConstructor;
            reflect: boolean;
            attribute: boolean;
        };
        target: {
            type: StringConstructor;
            reflect: boolean;
            attribute: boolean;
        };
        variant: {
            type: StringConstructor;
            reflect: boolean;
            attribute: boolean;
        };
        isDisabled: {
            type: BooleanConstructor;
            reflect: boolean;
            attribute: string;
        };
        showExpandIcon: {
            type: BooleanConstructor;
            reflect: boolean;
            attribute: string;
        };
        showExternalIcon: {
            type: BooleanConstructor;
            reflect: boolean;
            attribute: string;
        };
        label: {
            type: StringConstructor;
            reflect: boolean;
            attribute: boolean;
        };
        tooltip: {
            type: StringConstructor;
            reflect: boolean;
            attribute: boolean;
        };
        isCurrent: {
            type: BooleanConstructor;
            reflect: boolean;
            attribute: string;
        };
        isHighlighted: {
            type: BooleanConstructor;
            reflect: boolean;
            attribute: string;
        };
    };
    constructor();
    render(): lit.TemplateResult<1> | undefined;
    private renderLink;
    private renderButton;
    private renderSpan;
    protected renderContents(): lit.TemplateResult<1>;
    protected renderTrailingIcon(): lit.TemplateResult<1> | undefined;
    private get ariaCurrentValue();
    private get linkClasses();
}
declare const NAV_LINK_TAG: "atlas-gn-nav-link";
declare global {
    interface HTMLElementTagNameMap {
        [NAV_LINK_TAG]: NavLink$1;
    }
}

declare class AINavLink$1 extends NavLink$1 {
    protected renderContents(): lit.TemplateResult<1>;
    protected renderContextMenuSlot(): lit.TemplateResult<1>;
    static styles: lit.CSSResult[];
}
declare const AI_NAV_LINK_TAG: "atlas-gn-ai-nav-link";
declare global {
    interface HTMLElementTagNameMap {
        [AI_NAV_LINK_TAG]: AINavLink$1;
    }
}

declare class NavSection$1 extends NavItem {
    isOpen: boolean;
    expandStart: boolean;
    static properties: {
        isOpen: {
            type: BooleanConstructor;
            reflect: boolean;
            attribute: string;
        };
        expandStart: {
            type: BooleanConstructor;
            reflect: boolean;
            attribute: string;
        };
        label: {
            type: StringConstructor;
            reflect: boolean;
            attribute: boolean;
        };
        tooltip: {
            type: StringConstructor;
            reflect: boolean;
            attribute: boolean;
        };
        isCurrent: {
            type: BooleanConstructor;
            reflect: boolean;
            attribute: string;
        };
        isHighlighted: {
            type: BooleanConstructor;
            reflect: boolean;
            attribute: string;
        };
    };
    constructor();
    render(): lit.TemplateResult<1>;
    private renderExpandIcon;
    protected handleClick: (e: Event) => void;
    protected get sectionClasses(): {
        current: boolean;
        item: boolean;
        transition: boolean;
        highlighted: boolean;
    };
    protected dispatchToggleEvent(newState: boolean): void;
    protected handleKeydown: (e: KeyboardEvent) => void;
    static styles: lit.CSSResult[];
}
declare const NAV_SECTION_TAG: "atlas-gn-nav-section";
declare global {
    interface HTMLElementTagNameMap {
        [NAV_SECTION_TAG]: NavSection$1;
    }
    interface DocumentEventMap {
        [OPEN_EVENT_NAME]: CustomEvent<void>;
        [CLOSE_EVENT_NAME]: CustomEvent<void>;
    }
}

declare class AINavSection$1 extends NavSection$1 {
    childCount: number;
    static properties: {
        childCount: {
            type: NumberConstructor;
            reflect: boolean;
            attribute: string;
        };
        isOpen: {
            type: BooleanConstructor;
            reflect: boolean;
            attribute: string;
        };
        expandStart: {
            type: BooleanConstructor;
            reflect: boolean;
            attribute: string;
        };
        label: {
            type: StringConstructor;
            reflect: boolean;
            attribute: boolean;
        };
        tooltip: {
            type: StringConstructor;
            reflect: boolean;
            attribute: boolean;
        };
        isCurrent: {
            type: BooleanConstructor;
            reflect: boolean;
            attribute: string;
        };
        isHighlighted: {
            type: BooleanConstructor;
            reflect: boolean;
            attribute: string;
        };
    };
    constructor();
    render(): lit.TemplateResult<1>;
    private renderLabelWithChildCount;
    private renderAddButtonSlot;
    protected handleClick: (e: Event) => void;
    protected handleKeydown: (e: KeyboardEvent) => void;
    private renderViewAllSlot;
    static styles: lit.CSSResult[];
}
declare const AI_NAV_SECTION_TAG: "atlas-gn-ai-nav-section";
declare global {
    interface HTMLElementTagNameMap {
        [AI_NAV_SECTION_TAG]: AINavSection$1;
    }
}

declare class AINavSettingsItems$1 extends LitElement {
    render(): lit.TemplateResult<1>;
    static styles: lit.CSSResult;
}
declare const AI_NAV_SETTINGS_ITEMS_TAG: "atlas-gn-ai-nav-settings-items";
declare global {
    interface HTMLElementTagNameMap {
        [AI_NAV_SETTINGS_ITEMS_TAG]: AINavSettingsItems$1;
    }
}

type KeyPropOf<T extends {
    [key: string]: {
        key: string;
    };
}> = T[keyof T]["key"];
type AppKey = KeyPropOf<typeof APPS>;
type NavStateKey = (typeof NAV_STATE)[keyof typeof NAV_STATE];
type ToggleModalEventDetails = {
    open: boolean;
    type: "menu" | "panel" | "dialog";
    close?: () => void;
    originalEvent?: MouseEvent | KeyboardEvent;
};
type DisplayModeChangeEventDetails = {
    oldState: NavStateKey;
    newState: NavStateKey;
};
declare global {
    interface DocumentEventMap {
        [TOGGLE_MODAL_EVENT_NAME]: CustomEvent<ToggleModalEventDetails>;
        [DISPLAY_MODE_CHANGE_EVENT_NAME]: CustomEvent<DisplayModeChangeEventDetails>;
    }
}

declare class AppIcon$1 extends LitElement {
    appKey: AppKey | null;
    size: IconSize$1;
    _icon: (size?: IconSize$1) => TemplateResult;
    static properties: {
        appKey: {
            type: StringConstructor;
            reflect: boolean;
            attribute: string;
        };
        size: {
            type: StringConstructor;
            reflect: boolean;
            attribute: string;
        };
        _icon: {
            state: boolean;
        };
    };
    constructor();
    willUpdate(_oldProps: PropertyValueMap<AppIcon$1> | Map<PropertyKey, AppIcon$1>): void;
    render(): TemplateResult;
    static styles: lit.CSSResult[];
}
declare const APP_ICON_TAG: "atlas-gn-app-icon";
declare global {
    interface HTMLElementTagNameMap {
        [APP_ICON_TAG]: AppIcon$1;
    }
}

declare class NavTree$1 extends LitElement {
    label: string;
    isOpen: boolean;
    isCurrent: boolean;
    level: number;
    static properties: {
        label: {
            type: StringConstructor;
            reflect: boolean;
            attribute: boolean;
        };
        isOpen: {
            type: BooleanConstructor;
            reflect: boolean;
            attribute: string;
        };
        isCurrent: {
            type: BooleanConstructor;
            reflect: boolean;
            attribute: string;
        };
        level: {
            type: NumberConstructor;
            reflect: boolean;
        };
    };
    private detailsRef;
    constructor();
    render(): lit.TemplateResult<1>;
    handleClick: (e: Event) => void;
    protected updateSubtrees(): void;
    static styles: lit.CSSResult[];
    private get subTrees();
}
declare const NAV_TREE_TAG: "atlas-gn-nav-tree";
declare global {
    interface HTMLElementTagNameMap {
        [NAV_TREE_TAG]: NavTree$1;
    }
    interface DocumentEventMap {
        [OPEN_EVENT_NAME]: CustomEvent<void>;
        [CLOSE_EVENT_NAME]: CustomEvent<void>;
    }
}

declare class NavTreeNode$1 extends LitElement {
    label: string;
    isCurrent: boolean;
    level: number;
    static properties: {
        label: {
            type: StringConstructor;
            reflect: boolean;
            attribute: boolean;
        };
        isCurrent: {
            type: BooleanConstructor;
            reflect: boolean;
            attribute: string;
        };
        level: {
            type: NumberConstructor;
            reflect: boolean;
        };
    };
    constructor();
    render(): lit.TemplateResult<1>;
    static styles: lit.CSSResult[];
}
declare const NAV_TREE_NODE_TAG: "atlas-gn-nav-tree-node";
declare global {
    interface HTMLElementTagNameMap {
        [NAV_TREE_NODE_TAG]: NavTreeNode$1;
    }
}

declare class NavTreeRoot$1 extends LitElement {
    render(): lit.TemplateResult<1>;
    static styles: lit.CSSResult[];
}
declare const NAV_TREE_ROOT_TAG: "atlas-gn-nav-tree-root";
declare global {
    interface HTMLElementTagNameMap {
        [NAV_TREE_ROOT_TAG]: NavTreeRoot$1;
    }
}

declare const NavLink: _lit_react.ReactWebComponent<NavLink$1, {}>;
declare const NavSection: _lit_react.ReactWebComponent<NavSection$1, {
    onOpen: EventName<CustomEvent<void>>;
    onClose: EventName<CustomEvent<void>>;
}>;
declare const NavTreeRoot: _lit_react.ReactWebComponent<NavTreeRoot$1, {}>;
declare const NavTree: _lit_react.ReactWebComponent<NavTree$1, {
    onOpen: EventName<CustomEvent<void>>;
    onClose: EventName<CustomEvent<void>>;
}>;
declare const NavTreeNode: _lit_react.ReactWebComponent<NavTreeNode$1, {}>;
declare const AppIcon: _lit_react.ReactWebComponent<AppIcon$1, {}>;
declare const AINavLink: _lit_react.ReactWebComponent<AINavLink$1, {}>;
declare const AINavSection: _lit_react.ReactWebComponent<AINavSection$1, {
    onOpen: EventName<CustomEvent<void>>;
    onClose: EventName<CustomEvent<void>>;
}>;
declare const AINavSettingsItems: _lit_react.ReactWebComponent<AINavSettingsItems$1, {}>;

export { AINavLink, AINavSection, AINavSettingsItems, APPS$1 as APPS, APP_HELP_ITEMS$1 as APP_HELP_ITEMS, APP_NAVIGATION, APP_SECTIONS$1 as APP_SECTIONS, type App, type AppHelpLinks, AppIcon, type AppKey$1 as AppKey, type AppLifecycleStatus, type AppSwitcherProps, BACK_TO_OLD_NAVIGATION, BACK_TO_OLD_NAVIGATION_EVENT_NAME, BOARDS_CLOUD_CUSTOMER_ADMIN_DEMO_URL, CHANGE_ORG_EVENT_NAME, CLOSE_EVENT_NAME$1 as CLOSE_EVENT_NAME, CONFIGURATION_EVENT_NAME, DISPLAY_MODE_CHANGE_EVENT_NAME$1 as DISPLAY_MODE_CHANGE_EVENT_NAME, type DisplayModeChangeEventDetails$1 as DisplayModeChangeEventDetails, FORCED_DIALOG_THRESHOLD, GLOBAL_NAV_DISPLAY_MODES$1 as GLOBAL_NAV_DISPLAY_MODES, GLOBAL_NAV_MODE_DIALOG, GLOBAL_NAV_MODE_DYNAMIC, GLOBAL_NAV_MODE_PANEL, type GlobalNavData, type GlobalNavDisplayMode, HELP_ITEMS, type HelpKey, type HelpLinks, LINKS$1 as LINKS, type LifecycleStatusType, type LinkKey, type Links, type LocaleKey, MINIMUM_APP_COUNT_SEARCH, MINIMUM_ORG_COUNT_SEARCH, type MembershipPermissions, NAV_SECTIONS$1 as NAV_SECTIONS, NAV_STATE$1 as NAV_STATE, NavLink, NavSection, type NavSectionKey, type NavStateKey$1 as NavStateKey, NavTree, NavTreeNode, NavTreeRoot, OPEN_EVENT_NAME$1 as OPEN_EVENT_NAME, OPEN_SECTION_EVENT_NAME, OPEN_SHORTCUTS_EVENT_NAME, type OrgSettingsLinks, type Organization, PLATFORM_DOMAINS, REORDER_APPS_EVENT_NAME, type ReorderAppsEventDetail, type ResourceLinks, RoutedNavLink, type RoutedNavLinkProps, SETTINGS_GROUPS, SETTINGS_ITEMS$1 as SETTINGS_ITEMS, SETTINGS_SECTIONS$1 as SETTINGS_SECTIONS, type SectionKey, type SettingsKey, type SettingsSectionKey, type ShortcutAppKey, type ShortcutSectionKey, TOGGLE_FAVORITE_APP_EVENT_NAME, TOGGLE_MODAL_EVENT_NAME$1 as TOGGLE_MODAL_EVENT_NAME, TRAILING_LINKS, type ToggleModalEventDetails$1 as ToggleModalEventDetails };
