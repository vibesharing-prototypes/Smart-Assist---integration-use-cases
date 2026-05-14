"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M7.5 18.0965V5.9043L17.0768 12.0004L7.5 18.0965ZM8.99998 15.3504L14.2692 12.0004L8.99998 8.6504V15.3504Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M12.1665 29.0976V8.77734L28.1279 18.9375L12.1665 29.0976ZM14.2605 25.2708L24.2434 18.9375L14.2605 12.6042V25.2708Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M14 37.0797V12.6953L33.1536 24.8875L14 37.0797ZM16.2692 32.9375L28.9691 24.8875L16.2692 16.8375V32.9375Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M6.4165 14.7474V5.25391L13.7305 10.0007L6.4165 14.7474ZM7.49982 12.7507L11.7658 10.0007L7.49982 7.25066V12.7507Z", fill: "currentColor" }))],
];
export default createIconComponent("PlayIcon", iconSizes, ...variants);
//# sourceMappingURL=Play.js.map