"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M5 19V14H6.49997V17.5H10V19H5ZM5 10V5H10V6.49998H6.49997V10H5ZM14 19V17.5H17.5V14H19V19H14ZM17.5 10V6.49998H14V5H19V10H17.5Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M8.3335 31.6673V23.475H10.4275V29.5734H16.5258V31.6673H8.3335ZM8.3335 16.5263V8.33398H16.5258V10.4279H10.4275V16.5263H8.3335ZM23.4745 31.6673V29.5734H29.5729V23.475H31.6668V31.6673H23.4745ZM29.5729 16.5263V10.4279H23.4745V8.33398H31.6668V16.5263H29.5729Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M10 38V28.2539H12.2692V35.7308H19.7462V38H10ZM10 19.7461V10H19.7462V12.2692H12.2692V19.7461H10ZM28.2539 38V35.7308H35.7308V28.2539H38V38H28.2539ZM35.7308 19.7461V12.2692H28.2539V10H38V19.7461H35.7308Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M4 16V12H5.08331V14.9167H8V16H4ZM4 8V4H8V5.08331H5.08331V8H4ZM12 16V14.9167H14.9167V12H16V16H12ZM14.9167 8V5.08331H12V4H16V8H14.9167Z", fill: "currentColor" }))],
];
export default createIconComponent("FullscreenIcon", iconSizes, ...variants);
//# sourceMappingURL=Fullscreen.js.map