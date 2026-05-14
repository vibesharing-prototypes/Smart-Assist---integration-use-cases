"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M11.9995 13.6538L7.5957 9.25H16.4033L11.9995 13.6538Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M19.9998 24.4241L12.6602 17.1016H27.3395L19.9998 24.4241Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M24 29.3081L15.1924 20.5312H32.8076L24 29.3081Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M10.0002 11.7122L6.49707 8.20898H13.5034L10.0002 11.7122Z", fill: "currentColor" }))],
];
export default createIconComponent("CaretDownIcon", iconSizes, ...variants);
//# sourceMappingURL=CaretDown.js.map