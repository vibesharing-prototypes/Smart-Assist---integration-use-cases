"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M2.5 19.5V4.5H21.5V19.5H2.5ZM3.99998 18H20V7.99998H3.99998V18Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M4.16675 32.4999V7.5H35.8333V32.4999H4.16675ZM6.26071 30.406H33.7394V13.0064H6.26071V30.406Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M5 38.9999V9H42.9999V38.9999H5ZM7.2692 36.7307H40.7307V15.4115H7.2692V36.7307Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M2.41675 15.5836V4.41699H17.5834V15.5836H2.41675ZM3.50006 14.5003H16.5001V7.00031H3.50006V14.5003Z", fill: "currentColor" }))],
];
export default createIconComponent("WebsiteIcon", iconSizes, ...variants);
//# sourceMappingURL=Website.js.map