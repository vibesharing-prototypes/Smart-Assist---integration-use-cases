"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M7 14L12 9L17 14H7Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M11.6665 25.3338L19.9998 16.9727L28.3332 25.3338H11.6665Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M14 29.9992L24 19.9492L34 29.9992H14Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M6 12L10 8L14 12H6Z", fill: "currentColor" }))],
];
export default createIconComponent("CaretUpIcon", iconSizes, ...variants);
//# sourceMappingURL=CaretUp.js.map