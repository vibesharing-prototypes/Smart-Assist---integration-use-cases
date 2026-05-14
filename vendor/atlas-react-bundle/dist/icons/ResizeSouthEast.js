"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M9.34171 4.39206L12.4694 7.51977L15.6106 4.37863L17.1335 17.1336L4.37852 15.6107L7.51967 12.4695L4.39196 9.34181L9.34171 4.39206ZM9.34171 6.51338L6.51328 9.34181L9.64081 12.4693L7.67859 14.4316L15.4297 15.4298L14.4315 7.67869L12.4692 9.64092L9.34171 6.51338Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M15.4258 7.17506L20.7818 12.5311L26.0171 7.29586L28.699 28.6979L7.29699 26.0159L12.5322 20.7807L7.17619 15.4246L15.4258 7.17506ZM15.4258 10.1367L10.1378 15.4246L15.4938 20.7807L11.9047 24.3698L26.3217 26.3206L24.371 11.9035L20.7818 15.4927L15.4258 10.1367Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M18.4247 8.5254L24.9382 15.0389L31.2205 8.75662L34.5248 34.525L8.75641 31.2207L15.0387 24.9384L8.52519 18.4249L18.4247 8.5254ZM18.4243 11.7346L11.7344 18.4245L18.2479 24.9381L13.7493 29.4367L31.9492 31.9494L29.4365 13.7495L24.9378 18.2481L18.4243 11.7346Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M7.66671 4.01391L10.008 6.35517L12.5077 3.8554L14.1599 14.1604L3.85482 12.5083L6.35458 10.0086L4.01332 7.66729L7.66671 4.01391ZM7.66671 5.54597L5.54539 7.66729L7.8865 10.0084L6.16293 11.732L12.8726 12.8732L11.7314 6.16351L10.0078 7.88708L7.66671 5.54597Z", fill: "currentColor" }))],
];
export default createIconComponent("ResizeSouthEastIcon", iconSizes, ...variants);
//# sourceMappingURL=ResizeSouthEast.js.map