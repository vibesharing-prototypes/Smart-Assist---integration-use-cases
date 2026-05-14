"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M11.25 4.5V16.6269L5.55382 10.9308L4.5 12L12 19.5L19.5 12L18.4461 10.9308L12.75 16.6269V4.5H11.25Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M18.953 7.5V28.5064L8.97433 18.5171L7.5 20L20 32.4999L32.4999 20L31.0256 18.5171L21.0469 28.5064V7.5H18.953Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M22.8654 9V34.6846L10.6 22.4L9 24L23.9999 38.9999L38.9999 24L37.3999 22.4L25.1346 34.6846V9H22.8654Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M9.45842 4.41602V13.501L5.19077 9.23333L4.41675 9.99933L10.0001 15.5826L15.5834 9.99933L14.8094 9.23333L10.5417 13.501V4.41602H9.45842Z", fill: "currentColor" }))],
];
export default createIconComponent("ArrowDownIcon", iconSizes, ...variants);
//# sourceMappingURL=ArrowDown.js.map