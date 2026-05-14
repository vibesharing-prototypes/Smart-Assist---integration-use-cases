"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M11.25 19.5V7.37303L5.55382 13.0692L4.5 12L12 4.5L19.5 12L18.4461 13.0692L12.75 7.37303V19.5H11.25Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M18.953 32.4999V11.4935L8.97433 21.4721L7.5 20L20 7.5L32.4999 20L31.0256 21.4721L21.0469 11.4935V32.4999H18.953Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M22.8654 38.9999V13.3153L10.6 25.5807L9 24L23.9999 9L38.9999 24L37.3999 25.5807L25.1346 13.3153V38.9999H22.8654Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M9.45842 15.5826V6.4977L5.19077 10.7653L4.41675 9.99933L10.0001 4.41602L15.5834 9.99933L14.8094 10.7653L10.5417 6.4977V15.5826H9.45842Z", fill: "currentColor" }))],
];
export default createIconComponent("ArrowUpIcon", iconSizes, ...variants);
//# sourceMappingURL=ArrowUp.js.map