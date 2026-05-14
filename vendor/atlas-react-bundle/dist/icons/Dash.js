"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M4.5 13.7499V12.25H19.5V13.7499H4.5Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M7.5 21.047V18.9531H32.4999V21.047H7.5Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M9 26.1344V23.8652H38.9999V26.1344H9Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M4.41675 10.5423V9.45898H15.5834V10.5423H4.41675Z", fill: "currentColor" }))],
];
export default createIconComponent("DashIcon", iconSizes, ...variants);
//# sourceMappingURL=Dash.js.map