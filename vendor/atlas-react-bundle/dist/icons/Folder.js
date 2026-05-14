"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantFilled, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M2.5 19.5V4.5H9.79803L11.798 6.5H21.5V19.5H2.5ZM3.99998 18H20V7.99998H11.1846L9.1846 5.99998H3.99998V18Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M4.16675 32.4999V7.5H16.7532L19.6806 10.4274H35.8333V32.4999H4.16675ZM6.26071 30.406H33.7394V12.5213H18.827L15.8996 9.59396H6.26071V30.406Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M5 38.9999V9H20.3576L23.6269 12.2693H42.9999V38.9999H5ZM7.2692 36.7307H40.7307V14.5385H22.7038L19.4346 11.2692H7.2692V36.7307Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M2.41675 15.5826V4.41602H7.83177L9.83177 6.41602H17.5834V15.5826H2.41675ZM3.50006 14.4993H16.5001V7.49933H9.38308L7.38308 5.49933H3.50006V14.4993Z", fill: "currentColor" }))],
    [VariantFilled, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M2.5 19.5V4.5H9.79803L11.798 6.5H21.5V19.5H2.5Z", fill: "currentColor" }))],
    [VariantFilled, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M4.1665 32.4999V7.5H16.753L19.6803 10.4274H35.8331V32.4999H4.1665Z", fill: "currentColor" }))],
    [VariantFilled, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M5 38.9999V9H20.3576L23.6269 12.2693H42.9999V38.9999H5Z", fill: "currentColor" }))],
    [VariantFilled, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M2.4165 15.5826V4.41602H7.83152L9.83152 6.41602H17.5831V15.5826H2.4165Z", fill: "currentColor" }))],
];
export default createIconComponent("FolderIcon", iconSizes, ...variants);
//# sourceMappingURL=Folder.js.map