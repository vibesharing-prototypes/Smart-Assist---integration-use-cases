"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M2.5 17.5V6.5H21.5V17.5H2.5ZM3.99998 16H20V7.99998H16.75V11.6153H15.25V7.99998H12.75V11.6153H11.25V7.99998H8.74995V11.6153H7.25V7.99998H3.99998V16Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M4.16699 29.1663V10.833H35.8336V29.1663H4.16699ZM6.26095 27.0723H33.7396V12.927H28.1199V19.3586H26.026V12.927H21.0472V19.3586H18.9533V12.927H13.9746V19.3586H11.8807V12.927H6.26095V27.0723Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M5 34.9999V13H42.9999V34.9999H5ZM7.2692 32.7307H40.7307V15.2692H33.8653V23.2307H31.5961V15.2692H25.1346V23.2307H22.8654V15.2692H16.4038V23.2307H14.1346V15.2692H7.2692V32.7307Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M2.41699 14.5836V5.41699H17.5836V14.5836H2.41699ZM3.5003 13.5003H16.5003V6.50031H13.792V9.67976H12.7087V6.50031H10.542V9.67976H9.45866V6.50031H7.29195V9.67976H6.20866V6.50031H3.5003V13.5003Z", fill: "currentColor" }))],
];
export default createIconComponent("ScaleIcon", iconSizes, ...variants);
//# sourceMappingURL=Scale.js.map