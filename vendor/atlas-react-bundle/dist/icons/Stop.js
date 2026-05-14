"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M6.5 17.5V6.5H17.5V17.5H6.5ZM7.99997 16H16V7.99998H7.99997V16Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M10.8335 29.1672V10.834H29.1667V29.1672H10.8335ZM12.9275 27.0733H27.0728V12.9279H12.9275V27.0733Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M13 34.9999V13H34.9999V34.9999H13ZM15.2692 32.7307H32.7307V15.2692H15.2692V32.7307Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M5.9165 14.0826V5.91602H14.0831V14.0826H5.9165ZM6.99982 12.9993H12.9998V6.99933H6.99982V12.9993Z", fill: "currentColor" }))],
];
export default createIconComponent("StopIcon", iconSizes, ...variants);
//# sourceMappingURL=Stop.js.map