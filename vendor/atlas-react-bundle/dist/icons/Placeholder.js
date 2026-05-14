"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V20C24 22.2091 22.2091 24 20 24H4C1.79086 24 0 22.2091 0 20V4Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M0 4C0 1.79086 1.79086 0 4 0H36C38.2091 0 40 1.79086 40 4V36C40 38.2091 38.2091 40 36 40H4C1.79086 40 0 38.2091 0 36V4Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M0 4C0 1.79086 1.79086 0 4 0H44C46.2091 0 48 1.79086 48 4V44C48 46.2091 46.2091 48 44 48H4C1.79086 48 0 46.2091 0 44V4Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M0 4C0 1.79086 1.79086 0 4 0H16C18.2091 0 20 1.79086 20 4V16C20 18.2091 18.2091 20 16 20H4C1.79086 20 0 18.2091 0 16V4Z", fill: "currentColor" }))],
];
export default createIconComponent("PlaceholderIcon", iconSizes, ...variants);
//# sourceMappingURL=Placeholder.js.map