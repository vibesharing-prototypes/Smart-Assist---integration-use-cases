"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M3.5 17.6344V16.1345H20.5V17.6344H3.5ZM3.5 12.7498V11.2499H20.5V12.7498H3.5ZM3.5 7.86521V6.36523H20.5V7.86521H3.5Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M5.8335 29.3914V27.2974H34.1667V29.3914H5.8335ZM5.8335 21.0473V18.9534H34.1667V21.0473H5.8335ZM5.8335 12.7033V10.6094H34.1667V12.7033H5.8335Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M7 35.2689V32.9997H40.9999V35.2689H7ZM7 25.1343V22.8651H40.9999V25.1343H7ZM7 14.9997V12.7305H40.9999V14.9997H7Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M3.41675 14.1957V13.1124H16.5834V14.1957H3.41675ZM3.41675 10.5418V9.45854H16.5834V10.5418H3.41675ZM3.41675 6.888V5.80469H16.5834V6.888H3.41675Z", fill: "currentColor" }))],
];
export default createIconComponent("MenuIcon", iconSizes, ...variants);
//# sourceMappingURL=Menu.js.map