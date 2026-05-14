"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M9.54993 17.6534L4.21533 12.3188L5.28456 11.2496L9.54993 15.515L18.7153 6.34961L19.7845 7.41881L9.54993 17.6534Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M15.8378 29.2992L7.02588 20.4873L8.52584 18.9981L15.8378 26.31L31.4575 10.6797L32.9574 12.1796L15.8378 29.2992Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M18.9576 35.0844L8.43066 24.5576L10.0614 22.9461L18.9576 31.8422L37.9076 12.873L39.5383 14.5037L18.9576 35.0844Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M8.22903 13.774L5.0127 10.5368L5.75788 9.79167L8.22903 12.242L14.2418 6.25L14.987 7.016L8.22903 13.774Z", fill: "currentColor" }))],
];
export default createIconComponent("MessageReadIcon", iconSizes, ...variants);
//# sourceMappingURL=MessageRead.js.map