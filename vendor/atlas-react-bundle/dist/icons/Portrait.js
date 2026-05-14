"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M4.5 21.5V2.5H19.5V21.5H4.5ZM5.99997 20H18V3.99998H5.99997V20Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M7.5 35.8336V4.16699H32.4999V35.8336H7.5ZM9.59396 33.7396H30.406V6.26095H9.59396V33.7396Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M9 42.9999V5H38.9999V42.9999H9ZM11.2692 40.7307H36.7307V7.2692H11.2692V40.7307Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M4.41675 17.5836V2.41699H15.5834V17.5836H4.41675ZM5.50006 16.5003H14.5001V3.50031H5.50006V16.5003Z", fill: "currentColor" }))],
];
export default createIconComponent("PortraitIcon", iconSizes, ...variants);
//# sourceMappingURL=Portrait.js.map