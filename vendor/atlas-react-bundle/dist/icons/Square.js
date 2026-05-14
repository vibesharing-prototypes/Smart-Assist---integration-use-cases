"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M3.5 20.5V3.5H20.5V20.5H3.5Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M5.83331 34.1663V5.83301H34.1666V34.1663H5.83331Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M7 41V7H41V41H7Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M2.91669 17.0837V2.91699H17.0834V17.0837H2.91669Z", fill: "currentColor" }))],
];
export default createIconComponent("SquareIcon", iconSizes, ...variants);
//# sourceMappingURL=Square.js.map