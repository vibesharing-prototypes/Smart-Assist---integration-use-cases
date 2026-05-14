"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M2.5 14.8847V13.3848H10.0096V14.8847H2.5ZM2.5 10.8847V9.38477H13.9808V10.8847H2.5ZM2.5 6.88472V5.38477H13.9808V6.88472H2.5ZM15.2212 19.5001V12.529L20.5096 16.0193L15.2212 19.5001Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M4.8335 24.2709V22.177H17.0674V24.2709H4.8335ZM4.8335 17.4974V15.4034H23.827V17.4974H4.8335ZM4.8335 10.7346V8.64062H23.827V10.7346H4.8335ZM26.4862 32.1662V20.5028L34.8494 26.3478L26.4862 32.1662Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M6 28.4041V26.1349H20.5115V28.4041H6ZM6 20.2118V17.9426H28.7077V20.2118H6ZM6 12.0387V9.76953H28.7077V12.0387H6ZM32.2538 38.0002V23.9772L42.0191 31.0079L32.2538 38.0002Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M2.41699 11.6536V10.5703H8.00833V11.6536H2.41699ZM2.41699 8.5286V7.44531H10.9843V8.5286H2.41699ZM2.41699 5.4036V4.32031H10.9843V5.4036H2.41699ZM12.1846 15.5831V9.9405L16.5916 12.7658L12.1846 15.5831Z", fill: "currentColor" }))],
];
export default createIconComponent("PlayAllIcon", iconSizes, ...variants);
//# sourceMappingURL=PlayAll.js.map