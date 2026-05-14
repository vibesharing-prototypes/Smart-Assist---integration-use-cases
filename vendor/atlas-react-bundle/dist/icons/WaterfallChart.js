"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M3.5 19.5V14.1442H5.9615V19.5H3.5ZM8.3365 13.7115V9.31725H10.8078V13.7115H8.3365ZM13.1827 8.8845V4.5H15.6538V8.8845H13.1827ZM18.0288 19.5V4.5H20.5V19.5H18.0288Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M5.83325 32.5V23.8729H9.5745V32.5H5.83325ZM14.0353 22.6946V15.67H17.7649V22.6946H14.0353ZM22.2362 14.4808V7.5H25.9658V14.4808H22.2362ZM30.437 32.5V7.5H34.1666V32.5H30.437Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M7 39V28.827H11.273V39H7ZM16.927 27.1385V18.8885H21.169V27.1385H16.927ZM26.8425 17.181V9H31.0845V17.181H26.8425ZM36.7575 39V9H41V39H36.7575Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M3.41675 15.5827V11.8696H4.968V15.5827H3.41675ZM7.2805 11.5089V8.26372H8.83987V11.5089H7.2805ZM11.1524 7.6531V4.41602H12.7115V7.6531H11.1524ZM15.024 15.5827V4.41602H16.5834V15.5827H15.024Z", fill: "currentColor" }))],
];
export default createIconComponent("WaterfallChartIcon", iconSizes, ...variants);
//# sourceMappingURL=WaterfallChart.js.map