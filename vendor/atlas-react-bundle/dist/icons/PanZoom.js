"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M3.5 20.5V15H5V17.9462L8.35 14.5963L9.40375 15.65L6.05375 19H9V20.5H3.5ZM15.65 9.40375L14.5962 8.35L17.9462 5H15V3.5H20.5V9H19V6.05375L15.65 9.40375Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M5.83301 34.1654V25.2016H7.92717V30.5799L13.9955 24.5116L15.4868 26.0029L9.41842 32.0712H14.7968V34.1654H5.83301ZM26.0209 15.4687L24.5297 13.9774L30.5809 7.9262H25.2026V5.83203H34.1663V14.7958H32.0722V9.41745L26.0209 15.4687Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M7 41V30.3655H9.2695V37.1L16.8425 29.527L18.473 31.1575L10.9 38.7305H17.6345V41H7ZM31.1885 18.4425L29.5575 16.8115L37.1 9.2695H30.3655V7H41V17.6345H38.7305V10.9L31.1885 18.4425Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M3.41699 16.5846V13.0013H4.50033V14.7273L7.14616 12.0815L7.92012 12.8555L5.27428 15.5013H7.00033V16.5846H3.41699ZM12.8545 7.92109L12.0805 7.14714L14.7264 4.5013H13.0003V3.41797H16.5837V7.0013H15.5003V5.27526L12.8545 7.92109Z", fill: "currentColor" }))],
];
export default createIconComponent("PanZoomIcon", iconSizes, ...variants);
//# sourceMappingURL=PanZoom.js.map