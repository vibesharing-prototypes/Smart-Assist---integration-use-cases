"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M3.5 20.5V3.5H20.5V20.5H15.1346V19H19V6.99998H4.99997V19H8.86535V20.5H3.5ZM11.25 20.5V14.273L9.39998 16.123L8.34615 15.0385L12 11.3846L15.6538 15.0385L14.6 16.123L12.75 14.273V20.5H11.25Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M5.8335 34.1672V5.83398H34.1667V34.1672H24.6155V32.0733H32.0728V10.8553H7.92745V32.0733H15.3847V34.1672H5.8335ZM18.9532 34.1672V23.0219L15.4809 26.4835L13.9895 24.9857L20.0001 18.975L26.0107 24.9857L24.5194 26.4835L21.0471 23.0219V34.1672H18.9532Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M7 40.9999V7H40.9999V40.9999H29.1731V38.7307H38.7307V12.5385H9.2692V38.7307H18.8268V40.9999H7ZM22.8654 40.9999V27.1653L18.4654 31.5461L16.8346 29.9346L24 22.7693L31.1653 29.9346L29.5346 31.5461L25.1346 27.1653V40.9999H22.8654Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M3.4165 16.5826V3.41602H16.5831V16.5826H12.112V15.4993H15.4998V5.99933H4.49982V15.4993H7.88763V16.5826H3.4165ZM9.45817 16.5826V11.3935L8.06232 12.7894L7.2883 12.0314L9.99982 9.31987L12.7113 12.0314L11.9373 12.7894L10.5415 11.3935V16.5826H9.45817Z", fill: "currentColor" }))],
];
export default createIconComponent("OpenInBrowserIcon", iconSizes, ...variants);
//# sourceMappingURL=OpenInBrowser.js.map