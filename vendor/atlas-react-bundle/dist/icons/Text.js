"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M10.9425 19.5V6.62495H5.50977V4.5H18.5001V6.62495H13.0674V19.5H10.9425Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M18.4401 32.4999V10.6356H9.18262V7.5H30.8332V10.6356H21.5757V32.4999H18.4401Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M22.25 38.9999V12.5191H11.0193V9H36.9999V12.5191H25.7692V38.9999H22.25Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M9.36872 15.5826V5.68681H5.4248V4.41602H14.5834V5.68681H10.6395V15.5826H9.36872Z", fill: "currentColor" }))],
];
export default createIconComponent("TextIcon", iconSizes, ...variants);
//# sourceMappingURL=Text.js.map