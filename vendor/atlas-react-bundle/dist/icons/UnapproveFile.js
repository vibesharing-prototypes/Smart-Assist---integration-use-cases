"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M9.38727 13.5222H14.3083V12.1802H9.38727V13.5222Z", fill: "currentColor" }),
            React.createElement("path", { d: "M4.34766 20.9667V1.9668H14.0977L19.3476 7.21675V20.9667H4.34766ZM13.3477 7.96675V3.46677H5.84763V19.4668H17.8476V7.96675H13.3477Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M15.8142 22.286H23.8808V20.086H15.8142V22.286Z", fill: "currentColor" }),
            React.createElement("path", { d: "M7.34766 35.2994V3.63281H24.0207L32.3476 11.9596V35.2994H7.34766ZM22.9737 12.9447V5.72677H9.44161V33.2054H30.2536V12.9447H22.9737Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M18.7142 26.2667H28.9808V23.4668H18.7142V26.2667Z", fill: "currentColor" }),
            React.createElement("path", { d: "M8.84766 42.4667V4.4668H29.1092L38.8476 14.2052V42.4667H8.84766ZM27.9746 15.2282V6.736H11.1169V40.1975H36.5784V15.2282H27.9746Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M8.07887 11.9605H11.842V10.9342H8.07887V11.9605Z", fill: "currentColor" }),
            React.createElement("path", { d: "M5 17V4H11.6711L15.2632 7.59208V17H5ZM11.1579 8.10524V5.0263H6.0263V15.9737H14.2368V8.10524H11.1579Z", fill: "currentColor" }))],
];
export default createIconComponent("UnapproveFileIcon", iconSizes, ...variants);
//# sourceMappingURL=UnapproveFile.js.map