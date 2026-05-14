"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M4 12V3H21V12H4ZM5.49997 10.5H19.5V4.49998H5.49997V10.5Z", fill: "currentColor" }),
            React.createElement("path", { d: "M4.00003 22V13H21V22H4.00003ZM5.5 20.5H19.5V14.5H5.5V20.5Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M5.81299 18.0468V3.04688H34.1462V18.0468H5.81299ZM7.90695 15.9528H32.0523V5.14083H7.90695V15.9528Z", fill: "currentColor" }),
            React.createElement("path", { d: "M5.81299 34.9588V19.9589H34.1462V34.9588H5.81299ZM7.90695 32.8648H32.0523V22.0528H7.90695V32.8648Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M7.47949 22.8886V4.88867H41.4794V22.8886H7.47949ZM9.74869 20.6194H39.2102V7.15787H9.74869V20.6194Z", fill: "currentColor" }),
            React.createElement("path", { d: "M7.47949 43.4352V25.4353H41.4794V43.4352H7.47949ZM9.74869 41.166H39.2102V27.7045H9.74869V41.166Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M4 9.10523V2H17V9.10523H4ZM5.14704 7.92104H15.8529V3.18419H5.14704V7.92104Z", fill: "currentColor" }),
            React.createElement("path", { d: "M4.00002 17V9.89477H17V17H4.00002ZM5.14706 15.8158H15.853V11.079H5.14706V15.8158Z", fill: "currentColor" }))],
];
export default createIconComponent("DefaultDensityIcon", iconSizes, ...variants);
//# sourceMappingURL=DefaultDensity.js.map