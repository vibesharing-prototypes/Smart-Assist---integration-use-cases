"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M5.15376 19.0008H6.39028L15.65 9.74111L14.4134 8.50456L5.15376 17.7642V19.0008ZM18.8576 8.65651L15.4826 5.31234L17.8653 2.92969L21.2248 6.28924L18.8576 8.65651ZM3.65381 20.5007V17.1258L14.398 6.38154L17.773 9.75649L7.02873 20.5007H3.65381Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M8.1838 32.0731H9.9968L27.4253 14.6552L25.6016 12.8315L8.1838 30.26V32.0731ZM31.8803 13.1467L27.1016 8.38507L30.4915 5.00586L35.251 9.76536L31.8803 13.1467ZM6.08984 34.167V29.3989L25.6208 9.86794L30.3889 14.636L10.8579 34.167H6.08984ZM26.5108 13.73L25.6016 12.8315L27.4253 14.6552L26.5108 13.73Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M9.57677 38.7299H11.6037L33.7152 16.6376L31.6691 14.5915L9.57677 36.703V38.7299ZM38.5267 15.0069L33.2998 9.78008L37.019 6.08008L42.2266 11.2877L38.5267 15.0069ZM7.30762 40.9991V35.7915L31.7191 11.38L36.9267 16.5876L12.5152 40.9991H7.30762ZM32.6922 15.5953L31.6691 14.5915L33.7152 16.6376L32.6922 15.5953Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M4.37821 15.7493H5.47115L13 8.22046L11.9071 7.1275L4.37821 14.6564V15.7493ZM15.8189 7.31663L12.8189 4.30065L14.7212 2.39844L17.7291 5.4064L15.8189 7.31663ZM3.04492 17.0826V14.0827L11.8943 5.23331L14.8942 8.23327L6.04486 17.0826H3.04492Z", fill: "currentColor" }))],
];
export default createIconComponent("EditIcon", iconSizes, ...variants);
//# sourceMappingURL=Edit.js.map