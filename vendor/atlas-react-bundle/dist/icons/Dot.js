"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M14.4001 12.9996C14.4001 14.3251 13.3256 15.3996 12.0001 15.3996C10.6746 15.3996 9.6001 14.3251 9.6001 12.9996C9.6001 11.6741 10.6746 10.5996 12.0001 10.5996C13.3256 10.5996 14.4001 11.6741 14.4001 12.9996Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M24 20C24 22.2091 22.2091 24 20 24C17.7909 24 16 22.2091 16 20C16 17.7909 17.7909 16 20 16C22.2091 16 24 17.7909 24 20Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M28.8 23.9992C28.8 26.6502 26.6509 28.7992 24 28.7992C21.349 28.7992 19.2 26.6502 19.2 23.9992C19.2 21.3483 21.349 19.1992 24 19.1992C26.6509 19.1992 28.8 21.3483 28.8 23.9992Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10Z", fill: "currentColor" }))],
];
export default createIconComponent("DotIcon", iconSizes, ...variants);
//# sourceMappingURL=Dot.js.map