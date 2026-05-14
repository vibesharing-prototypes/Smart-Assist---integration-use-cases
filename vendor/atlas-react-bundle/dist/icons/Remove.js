"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M5.5 12.7499V11.25H18.5V12.7499H5.5Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M9.16699 21.047V18.9531H30.8336V21.047H9.16699Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M11 25.1344V22.8652H36.9999V25.1344H11Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M5.25 10.5413V9.45801H14.75V10.5413H5.25Z", fill: "currentColor" }))],
];
export default createIconComponent("RemoveIcon", iconSizes, ...variants);
//# sourceMappingURL=Remove.js.map