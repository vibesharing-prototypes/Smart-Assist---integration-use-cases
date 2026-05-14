"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.9999 16.1758L21.4999 17.6757V5.50078H11.4883L9.48835 3.50078H7.34992L10.8499 7.00076H19.9999V16.1758ZM17.3768 18.5007L20.6384 21.7623L21.7076 20.7084L5.9999 5.00076H3.9999V5.11095L2.49992 3.60936V3.50078H4.49992L2.67687 1.67773L1.62305 2.73154L2.49992 3.60936V18.5007H17.3768ZM3.9999 5.11095V17.0008H15.8769L3.9999 5.11095Z", fill: "currentColor" }),
            React.createElement("path", { d: "M4.49992 3.50078H2.49992V3.60936L3.9999 5.11095V5.00076H5.9999L4.49992 3.50078Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M33.7393 28.3124L35.8332 30.4063V9.42673H19.4123L16.485 6.49935H11.9509L14.0448 8.59331H15.6068L18.5342 11.5207H33.7393V28.3124ZM29.8355 31.4993L35.2713 36.9352L36.7435 35.4608L9.87604 8.59331H6.92769L4.83355 6.49935H7.78208L4.74362 3.46094L3.26929 4.93523L4.83355 6.49935H4.16666V31.4993H29.8355ZM6.92769 8.59331L27.7415 29.4053H6.26062V8.59331H6.92769Z", fill: "currentColor" }),
            React.createElement("path", { d: "M9.87604 8.59331L7.78208 6.49935H4.83355L6.92769 8.59331H9.87604Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M40.7308 34.588L43 36.8572V11.2689H23.4539L20.1846 7.99962H14.1617L16.4309 10.2688H19.2423L22.5116 13.5381H40.7308V34.588ZM36.327 37.9995L42.8501 44.5226L44.4308 42.9226L11.777 10.2688H8.57986L6.30919 7.99962H9.50782L5.86167 4.35352L4.26172 5.95347L6.30919 7.99962H5.00012V37.9995H36.327ZM8.57986 10.2688L34.0578 35.7303H7.26932V10.2688H8.57986Z", fill: "currentColor" }),
            React.createElement("path", { d: "M11.777 10.2688L9.50782 7.99962H6.30919L8.57986 10.2688H11.777Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.4978 13.3771L17.5834 14.4593V5.41765H9.82379L7.82379 3.41765H6.54177L9.62508 6.50096H16.4978V13.3771ZM14.0642 14.5843L16.8655 17.3855L17.6106 16.6324L5.49618 4.50096H5.50008L4.41676 3.41765H4.41438L2.71006 1.71094L1.93604 2.48494L2.87118 3.41765H2.41676V14.5843H14.0642ZM3.95733 4.50096L2.87118 3.41765H4.41438L5.49618 4.50096H3.95733ZM3.95733 4.50096L12.9809 13.501H3.50008V4.50096H3.95733Z", fill: "currentColor" }),
            React.createElement("path", { d: "M2.87118 3.41765L3.95733 4.50096H5.49618L4.41438 3.41765H2.87118Z", fill: "currentColor" }))],
];
export default createIconComponent("HiddenFolderIcon", iconSizes, ...variants);
//# sourceMappingURL=HiddenFolder.js.map