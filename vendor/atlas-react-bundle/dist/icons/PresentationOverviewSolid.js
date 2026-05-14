"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M3.5 11V3.5H11V11H3.5ZM3.5 20.5V13H11V20.5H3.5ZM13 11V3.5H20.5V11H13ZM13 20.5V13H20.5V20.5H13Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M5.8335 17.5369V4.83398H18.5365V17.5369H5.8335ZM5.8335 33.1672V20.4643H18.5365V33.1672H5.8335ZM21.4638 17.5369V4.83398H34.1667V17.5369H21.4638ZM21.4638 33.1672V20.4643H34.1667V33.1672H21.4638Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M7 23.3653V8H22.3653V23.3653H7ZM7 41.9999V26.6346H22.3653V41.9999H7ZM25.6346 23.3653V8H40.9999V23.3653H25.6346ZM25.6346 41.9999V26.6346H40.9999V41.9999H25.6346Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M3.4165 8.99933V3.41602H8.99982V8.99933H3.4165ZM3.4165 16.5826V10.9993H8.99982V16.5826H3.4165ZM10.9998 8.99933V3.41602H16.5831V8.99933H10.9998ZM10.9998 16.5826V10.9993H16.5831V16.5826H10.9998Z", fill: "currentColor" }))],
];
export default createIconComponent("PresentationOverviewSolidIcon", iconSizes, ...variants);
//# sourceMappingURL=PresentationOverviewSolid.js.map