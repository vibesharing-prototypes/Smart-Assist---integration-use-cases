"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M14.4442 11.6192L13.375 10.55L16.95 6H8.825L7.32502 4.50003H20.0499L14.4442 11.6192ZM19.8038 21.9269L13.5 15.623V19.5H10.5V12.6231L2.07312 4.19615L3.12695 3.12695L20.873 20.8731L19.8038 21.9269Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M23.8258 19.6925L22.3365 18.1925L29.1068 9.59425H13.7383L11.6443 7.50029H33.4165L23.8258 19.6925ZM33.4573 36.4382L22.5 25.4915V32.5002H17.5V20.4916L3.56204 6.543L5.05346 5.05371L34.9465 34.9468L33.4573 36.4382Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M28.4422 23.8273L26.8307 22.1965L35.4422 11.2697H15.9039L13.6347 9.00048H40.0998L28.4422 23.8273ZM40.4192 43.6619L26.9999 30.2618V39.0004H21V24.262L4.33855 7.58123L5.9693 5.96973L42.0307 42.0311L40.4192 43.6619Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M11.5577 9.4535L10.7917 8.66667L13.3958 5.5H7.625L6.54169 4.41669H15.7291L11.5577 9.4535ZM16.024 17.5641L10.5833 12.1233V15.5833H9.41669V10.9567L2.43594 3.97596L3.20996 3.20996L16.79 16.79L16.024 17.5641Z", fill: "currentColor" }))],
];
export default createIconComponent("FilterOffIcon", iconSizes, ...variants);
//# sourceMappingURL=FilterOff.js.map