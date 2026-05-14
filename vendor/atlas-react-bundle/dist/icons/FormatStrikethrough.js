"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M2.5 13.7404V12.2404H21.5V13.7404H2.5ZM10.9423 10.2596V6.62495H5.50963V4.5H18.5V6.62495H13.0673V10.2596H10.9423ZM10.9423 19.5V15.7211H13.0673V19.5H10.9423Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M4.1665 22.6976V20.6036H35.8331V22.6976H4.1665ZM18.44 17.7083V10.6356H9.18255V7.5H30.8331V10.6356H21.5756V17.7083H18.44ZM18.44 32.4999V25.5929H21.5756V32.4999H18.44Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M5 27.1153V24.8462H42.9999V27.1153H5ZM22.25 21.6154V12.5191H11.0193V9H36.9999V12.5191H25.7691V21.6154H22.25ZM22.25 38.9999V30.3461H25.7691V38.9999H22.25Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M2.4165 11.283V10.1997H17.5831V11.283H2.4165ZM9.36844 8.71568V5.68681H5.42452V4.41602H14.5831V5.68681H10.6392V8.71568H9.36844ZM9.36844 15.5826V12.7669H10.6392V15.5826H9.36844Z", fill: "currentColor" }))],
];
export default createIconComponent("FormatStrikethroughIcon", iconSizes, ...variants);
//# sourceMappingURL=FormatStrikethrough.js.map