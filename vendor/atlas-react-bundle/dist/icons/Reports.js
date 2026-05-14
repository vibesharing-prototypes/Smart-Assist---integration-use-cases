"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M3.22249 21L9.37695 12.5412H14.7815L22 4.24718V21H3.22249ZM4.08118 15.2856L3 14.5143L7.26897 8.63718H12.666L17.5789 3L18.598 3.87094L13.283 9.96561H7.94385L4.08118 15.2856ZM5.85653 19.6716H20.6503V7.8292L15.3807 13.8697H10.0518L5.85653 19.6716Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M5.36301 35L15.4045 20.902H24.2225L36 7.07863V35H5.36301ZM6.76403 25.476L5 24.1905L11.9652 14.3953H20.7708L28.7866 5L30.4494 6.45157L21.7776 16.6094H13.0663L6.76403 25.476ZM9.66065 32.7859H33.7978V13.0487L25.2 23.1161H16.5056L9.66065 32.7859Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M6.43327 42L18.4183 25.0824H28.943L43 8.49435V42H6.43327ZM8.10546 30.5712L6 29.0285L14.3133 17.2744H24.8232L34.3904 6L36.3751 7.74189L26.0248 19.9312H15.6275L8.10546 30.5712ZM11.5627 39.3431H40.3716V15.6584L30.1097 27.7393H19.7325L11.5627 39.3431Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M2.18736 17L7.37006 9.95102H11.9213L18 3.03931V17H2.18736ZM2.91047 12.238L2 11.5952L5.59492 6.69765H10.1398L14.277 2L15.1352 2.72579L10.6594 7.80468H6.16324L2.91047 12.238ZM4.4055 15.893H16.8634V6.02433L12.4258 11.058H7.93838L4.4055 15.893Z", fill: "currentColor" }))],
];
export default createIconComponent("ReportsIcon", iconSizes, ...variants);
//# sourceMappingURL=Reports.js.map