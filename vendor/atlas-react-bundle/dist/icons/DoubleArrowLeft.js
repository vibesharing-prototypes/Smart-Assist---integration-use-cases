"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M11.1249 17.6542L5.47119 12.0004L11.1249 6.34668L12.1787 7.40043L7.59419 12.0004L12.1787 16.6004L11.1249 17.6542ZM17.4749 17.6542L11.8212 12.0004L17.4749 6.34668L18.5287 7.40043L13.9442 12.0004L18.5287 16.6004L17.4749 17.6542Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M18.8067 29.4054L9.38379 19.9825L18.8067 10.5596L20.2809 12.0229L12.33 19.9825L20.2809 27.9312L18.8067 29.4054ZM29.17 29.4054L19.7467 19.9825L29.17 10.5596L30.6334 12.0229L22.6934 19.9825L30.6334 27.9312L29.17 29.4054Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M22.7269 35.2766L11.4194 23.9686L22.7269 12.6611L24.3269 14.2421L14.5999 23.9686L24.3269 33.6766L22.7269 35.2766ZM35.0304 35.2766L23.7229 23.9686L35.0304 12.6611L36.6114 14.2421L26.9039 23.9686L36.6114 33.6766L35.0304 35.2766Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M9.10404 14.711L4.39258 9.99955L9.10404 5.28809L9.87799 6.06204L5.93258 9.99955L9.87799 13.937L9.10404 14.711ZM14.8332 14.711L10.1217 9.99955L14.8332 5.28809L15.6072 6.06204L11.6617 9.99955L15.6072 13.937L14.8332 14.711Z", fill: "currentColor" }))],
];
export default createIconComponent("DoubleArrowLeftIcon", iconSizes, ...variants);
//# sourceMappingURL=DoubleArrowLeft.js.map