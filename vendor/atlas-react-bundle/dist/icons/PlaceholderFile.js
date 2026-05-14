"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("rect", { x: "5.75", y: "3.75", width: "12.5", height: "16.5", stroke: "currentColor", strokeWidth: 1.5, strokeDasharray: "6 4" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("rect", { x: "9.75", y: "6.75", width: "20.5", height: "26.5", stroke: "currentColor", strokeWidth: 1.5, strokeDasharray: "6 4" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("rect", { x: "10.75", y: "6.75", width: "26.5", height: "34.5", stroke: "currentColor", strokeWidth: 1.5, strokeDasharray: "6 4" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("rect", { x: "5.75", y: "2.75", width: "9.5", height: "13.5", stroke: "currentColor", strokeWidth: 1.5, strokeDasharray: "6 4" }))],
];
export default createIconComponent("PlaceholderFileIcon", iconSizes, ...variants);
//# sourceMappingURL=PlaceholderFile.js.map