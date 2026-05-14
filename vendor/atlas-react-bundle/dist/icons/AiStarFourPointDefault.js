"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M13.9382 10.0625L12.0007 6.1875L10.0591 10.0625L6.18823 12L10.0591 13.9375L12.0007 17.8125L13.9382 13.9375L17.8132 12L13.9382 10.0625Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M23.2308 16.7708L20.0016 10.3125L16.7655 16.7708L10.3141 20L16.7655 23.2292L20.0016 29.6875L23.2308 23.2292L29.6891 20L23.2308 16.7708Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M27.8773 20.125L24.0023 12.375L20.119 20.125L12.3773 24L20.119 27.875L24.0023 35.625L27.8773 27.875L35.6273 24L27.8773 20.125Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M11.6154 8.38542L10.0009 5.15625L8.3828 8.38542L5.1571 10L8.3828 11.6146L10.0009 14.8438L11.6154 11.6146L14.8446 10L11.6154 8.38542Z", fill: "currentColor" }))],
];
export default createIconComponent("AiStarFourPointDefaultIcon", iconSizes, ...variants);
//# sourceMappingURL=AiStarFourPointDefault.js.map