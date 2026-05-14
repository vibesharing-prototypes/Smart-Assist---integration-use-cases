"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantFilled, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M10.5001 19.5V12.8269L3.9502 4.5H20.05L13.5001 12.8269V19.5H10.5001ZM12.0001 12.3L16.9501 5.99998H7.05012L12.0001 12.3Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M17.5001 32.4999V21.3781L6.5835 7.5H33.4166L22.5 21.3781V32.4999H17.5001ZM20 21.1538L29.1069 9.59396H10.8932L20 21.1538Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M21 38.9999V25.6538L7.90015 9H40.0998L27 25.6538V38.9999H21ZM24 25.7769L35.4422 11.2692H12.5577L24 25.7769Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M9.41679 15.5836V10.6269L4.271 4.41699H15.7292L10.5834 10.6269V15.5836H9.41679ZM10.0001 9.62531L13.3751 5.50031H6.60427L10.0001 9.62531Z", fill: "currentColor" }))],
    [VariantFilled, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M10.5001 19.5V12.8269L3.9502 4.5H20.05L13.5001 12.8269V19.5H10.5001Z", fill: "currentColor" }))],
    [VariantFilled, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M17.5001 32.4999V21.3781L6.5835 7.5H33.4166L22.5 21.3781V32.4999H17.5001Z", fill: "currentColor" }))],
    [VariantFilled, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M21.0003 38.9999V25.6538L7.90039 9H40.1001L27.0002 25.6538V38.9999H21.0003Z", fill: "currentColor" }))],
    [VariantFilled, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M9.41679 15.5836V10.6269L4.271 4.41699H15.7292L10.5834 10.6269V15.5836H9.41679Z", fill: "currentColor" }))],
];
export default createIconComponent("FilterIcon", iconSizes, ...variants);
//# sourceMappingURL=Filter.js.map