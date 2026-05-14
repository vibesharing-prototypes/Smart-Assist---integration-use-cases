"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M13.7495 15.4033L9.3457 10.9995L13.7495 6.5957V15.4033Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M23.9168 28.3395L16.5771 20.9998L23.9168 13.6602V28.3395Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M28.5 33.8066L19.6924 24.999L28.5 16.1914V33.8066Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M11.7913 13.5024L8.28809 9.99926L11.7913 6.49609V13.5024Z", fill: "currentColor" }))],
];
export default createIconComponent("CaretLeftIcon", iconSizes, ...variants);
//# sourceMappingURL=CaretLeft.js.map