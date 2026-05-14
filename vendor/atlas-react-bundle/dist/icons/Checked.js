"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M9.54999 17.6534L4.21539 12.3188L5.28462 11.2496L9.54999 15.515L18.7154 6.34961L19.7846 7.41881L9.54999 17.6534Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M15.8377 29.2992L7.0257 20.4873L8.52565 18.9981L15.8377 26.31L31.4573 10.6797L32.9572 12.1796L15.8377 29.2992Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M18.9577 35.0844L8.43079 24.5576L10.0615 22.9461L18.9577 31.8422L37.9077 12.873L39.5384 14.5037L18.9577 35.0844Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M8.22915 13.774L5.01282 10.5368L5.75801 9.79167L8.22915 12.242L14.242 6.25L14.9872 7.016L8.22915 13.774Z", fill: "currentColor" }))],
];
export default createIconComponent("CheckedIcon", iconSizes, ...variants);
//# sourceMappingURL=Checked.js.map