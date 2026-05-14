"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M14 20.5L12.9308 19.4307L16.6269 15.75H5.5V4.5H6.99997V14.25H16.6269L12.9308 10.5538L13.9846 9.48463L19.5 15L14 20.5Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M23.4573 34.1666L21.9573 32.6666L28.4787 26.1431H9.16675V7.5H11.2607V24.0491H28.5065L21.9745 17.5278L23.4659 16.0278L32.5 25.0619L23.4573 34.1666Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M27.723 40.9999L26.0923 39.3692L34.1346 31.3076H10.5V9H12.7692V29.0385H34.1846L26.123 20.9962L27.7538 19.3654L38.4999 30.1115L27.723 40.9999Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M11.5001 16.5826L10.7341 15.8166L13.5017 13.041H4.91675V4.41602H6.00006V11.9577H13.5017L10.7341 9.19004L11.5081 8.42404L15.5834 12.4993L11.5001 16.5826Z", fill: "currentColor" }))],
];
export default createIconComponent("CascadeIcon", iconSizes, ...variants);
//# sourceMappingURL=Cascade.js.map