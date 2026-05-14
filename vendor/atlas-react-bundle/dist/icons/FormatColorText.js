"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M2.5 24V20.2692H21.5V24H2.5ZM5.86538 17L11.1346 3.5H12.8653L18.1346 17H16.3308L14.9846 13.3808H9.00765L7.63073 17H5.86538ZM9.53458 11.9H14.4269L12.05 5.59998H11.9307L9.53458 11.9Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M4.1665 40.0006V33.7827H35.8331V40.0006H4.1665ZM9.77546 28.3339L18.7605 5.83398H21.239L30.2241 28.3339H27.6408L25.2562 22.1779H14.6857L12.2946 28.3339H9.77546ZM15.4848 20.037H24.4507L20.0831 8.74207H19.8844L15.4848 20.037Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M5 48V40.5385H42.9999V48H5ZM11.7308 34L22.6346 7H25.3653L36.2692 34H33.4231L30.4769 26.5384H17.4269L14.5 34H11.7308ZM18.3384 24.1654H29.5846L24.1 10.1346H23.8615L18.3384 24.1654Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M2.4165 19.9993V16.2237H17.5831V19.9993H2.4165ZM5.65848 12.9993L9.42452 3.41602H10.5751L14.3412 12.9993H13.1088L12.1328 10.4208H7.83955L6.85878 12.9993H5.65848ZM8.19532 9.41602H11.7723L10.0415 4.95766H9.94213L8.19532 9.41602Z", fill: "currentColor" }))],
];
export default createIconComponent("FormatColorTextIcon", iconSizes, ...variants);
//# sourceMappingURL=FormatColorText.js.map