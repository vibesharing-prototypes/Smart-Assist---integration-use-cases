"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M3.5 16.5V7.5H20.5V16.5H3.5ZM4.99997 15H19V8.99998H4.99997V15Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M5.8335 27.4999V12.5H34.1667V27.4999H5.8335ZM7.92745 25.406H32.0728V14.594H7.92745V25.406Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M7 32.9999V15H40.9999V32.9999H7ZM9.2692 30.7307H38.7307V17.2692H9.2692V30.7307Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M3.41675 13.5836V6.41699H16.5834V13.5836H3.41675ZM4.50006 12.5003H15.5001V7.50031H4.50006V12.5003Z", fill: "currentColor" }))],
];
export default createIconComponent("HorizontalIcon", iconSizes, ...variants);
//# sourceMappingURL=Horizontal.js.map