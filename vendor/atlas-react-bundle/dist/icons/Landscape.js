"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M3.5 17.5V6.5H20.5V17.5H3.5ZM4.99997 16H19V7.99998H4.99997V16Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M5.8335 29.1663V10.833H34.1667V29.1663H5.8335ZM7.92745 27.0723H32.0728V12.927H7.92745V27.0723Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M7 34.9999V13H40.9999V34.9999H7ZM9.2692 32.7307H38.7307V15.2692H9.2692V32.7307Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M3.41675 14.0836V5.91699H16.5834V14.0836H3.41675ZM4.50006 13.0003H15.5001V7.00031H4.50006V13.0003Z", fill: "currentColor" }))],
];
export default createIconComponent("LandscapeIcon", iconSizes, ...variants);
//# sourceMappingURL=Landscape.js.map