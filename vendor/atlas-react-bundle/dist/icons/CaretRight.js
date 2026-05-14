"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M9.25 15.4033V6.5957L13.6538 10.9995L9.25 15.4033Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M16.083 28.3395V13.6602L23.4227 20.9998L16.083 28.3395Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M19.5 33.8066V16.1914L28.3076 24.999L19.5 33.8066Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M8.20801 13.5024V6.49609L11.7112 9.99926L8.20801 13.5024Z", fill: "currentColor" }))],
];
export default createIconComponent("CaretRightIcon", iconSizes, ...variants);
//# sourceMappingURL=CaretRight.js.map