"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M11.25 12.75H5.5V11.25H11.25V5.5H12.7499V11.25H18.5V12.75H12.7499V18.5H11.25V12.75Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M18.9528 21.0472H9.1665V18.9533H18.9528V9.16699H21.0468V18.9533H30.8331V21.0472H21.0468V30.8336H18.9528V21.0472Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M22.8654 25.1346H11V22.8654H22.8654V11H25.1345V22.8654H36.9999V25.1346H25.1345V36.9999H22.8654V25.1346Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M9.45817 10.542H5.4165V9.45866H9.45817V5.41699H10.5415V9.45866H14.5831V10.542H10.5415V14.5836H9.45817V10.542Z", fill: "currentColor" }))],
];
export default createIconComponent("AddIcon", iconSizes, ...variants);
//# sourceMappingURL=Add.js.map