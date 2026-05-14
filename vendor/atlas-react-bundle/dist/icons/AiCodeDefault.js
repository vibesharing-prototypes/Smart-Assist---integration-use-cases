"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M18.535 11.5L17.035 8.5L14.035 7L17.035 5.5L18.535 2.5L20.035 5.5L23.035 7L20.035 8.5L18.535 11.5Z", fill: "currentColor" }),
            React.createElement("path", { d: "M19.65 12.5L21.15 11V19.75H2.65002V5.25H12.5V8H4.11502L4.15002 18.25H19.65V12.5Z", fill: "currentColor" }),
            React.createElement("path", { d: "M11.535 16.75V15.25H16.535V16.75H11.535Z", fill: "currentColor" }),
            React.createElement("path", { d: "M6.78509 16.645L10.4301 13L6.78509 9.35498L5.71509 10.4L8.31509 13L5.74009 15.6L6.78509 16.645Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M28.395 14.165L30.895 19.165L33.395 14.165L38.395 11.665L33.395 9.16504L30.895 4.16504L28.395 9.16504L23.395 11.665L28.395 14.165Z", fill: "currentColor" }),
            React.createElement("path", { d: "M34.8 18.835V32.715H4.78503V8.75H20.835V13.335H6.88504V30.615H32.7V20.935L34.8 18.835Z", fill: "currentColor" }),
            React.createElement("path", { d: "M11.16 27.8249L9.67505 26.3398L14.3501 21.6649L9.88505 17.1999L11.37 15.7148L17.32 21.6649L11.16 27.8249Z", fill: "currentColor" }),
            React.createElement("path", { d: "M19.165 25.615H27.5V27.715H19.165V25.615Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M34.0701 17L37.0701 23L40.0701 17L46.0701 14L40.0701 11L37.0701 5L34.0701 11L28.0701 14L34.0701 17Z", fill: "currentColor" }),
            React.createElement("path", { d: "M41.6501 22.5V39.15H5.8501V10.5H25.0001V16H8.15009V36.85H39.3501V24.8L41.6501 22.5Z", fill: "currentColor" }),
            React.createElement("path", { d: "M13.3151 33.3151L11.6851 31.6851L17.3751 26.0001L11.9351 20.5651L13.5651 18.9351L20.6251 26.0001L13.3151 33.3151Z", fill: "currentColor" }),
            React.createElement("path", { d: "M23 30.8501H33V33.1501H23V30.8501Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M14.1951 7.08496L15.4451 9.58496L16.6951 7.08496L19.1951 5.83496L16.6951 4.58496L15.4451 2.08496L14.1951 4.58496L11.6951 5.83496L14.1951 7.08496Z", fill: "currentColor" }),
            React.createElement("path", { d: "M17.425 9.66504V16.385H2.36499V6.66504H3.465V15.285H16.325V10.765L17.425 9.66504Z", fill: "currentColor" }),
            React.createElement("path", { d: "M2.36499 4.375H10.415V6.66501L2.36499 6.66504V4.375Z", fill: "currentColor" }),
            React.createElement("path", { d: "M5.60007 13.9298L4.82007 13.1548L7.14008 10.8348L4.92508 8.61984L5.70007 7.83984L8.69507 10.8348L5.60007 13.9298Z", fill: "currentColor" }),
            React.createElement("path", { d: "M9.58496 12.7852H13.75V13.8852H9.58496V12.7852Z", fill: "currentColor" }))],
];
export default createIconComponent("AiCodeDefaultIcon", iconSizes, ...variants);
//# sourceMappingURL=AiCodeDefault.js.map