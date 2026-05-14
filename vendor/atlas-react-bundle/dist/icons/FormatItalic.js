"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M6 18.25V16.4423H9.8173L13.0577 6.80765H9.2404V5H18.3942V6.80765H14.8846L11.6442 16.4423H15.1538V18.25H6Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M10 31.2585V28.6517H15.8323L21.6218 11.6068H15.2768V9H30.1271V11.6068H24.4017L18.6228 28.6517H24.8503V31.2585H10Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M12 37.8153V34.9307H18.6808L25.8616 13.8845H18.2577V11H35.8345V13.8845H29.0384L21.8769 34.9307H29.5768V37.8153H12Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M5 15.375V13.9519H8.18108L10.9647 5.42304H7.70033V4H15.4952V5.42304H12.4038L9.62015 13.9519H12.7948V15.375H5Z", fill: "currentColor" }))],
];
export default createIconComponent("FormatItalicIcon", iconSizes, ...variants);
//# sourceMappingURL=FormatItalic.js.map