"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M15.1594 17.5866L14.0988 16.5259L16.526 14.0987L17.5867 15.1593L15.1594 17.5866ZM9.06062 16.9679L8 15.9072L15.9073 7.99992L16.9679 9.06054L9.06062 16.9679Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M21.5881 28.6124L20.1075 27.1317L24.1529 23.0863L25.6336 24.567L21.5881 28.6124ZM11.2799 27.4377L9.79932 25.957L22.9782 12.7782L24.4588 14.2588L11.2799 27.4377Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M25.8627 34.3347L24.2582 32.7302L29.1127 27.8757L30.7172 29.4802L25.8627 34.3347ZM13.4068 32.8389L11.8022 31.2344L27.6169 15.4198L29.2214 17.0243L13.4068 32.8389Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M11.4311 15.611L10.4783 14.6583L12.6587 12.478L13.6114 13.4307L11.4311 15.611ZM5.95272 15.0553L5 14.1025L12.1029 6.99966L13.0556 7.95238L5.95272 15.0553Z", fill: "currentColor" }))],
];
export default createIconComponent("ResizeIcon", iconSizes, ...variants);
//# sourceMappingURL=Resize.js.map