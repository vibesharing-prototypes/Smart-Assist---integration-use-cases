"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M14 17.6534L8.34619 11.9995L14 6.3457L15.0538 7.39953L10.4538 11.9995L15.0538 16.5995L14 17.6534Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M23.3503 29.4232L13.9102 19.9831L23.3503 10.5322L24.8417 12.0236L16.893 19.9831L24.8417 27.9318L23.3503 29.4232Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M28.0308 35.3074L16.6924 23.969L28.0308 12.6113L29.6615 14.242L19.9538 23.969L29.6615 33.6766L28.0308 35.3074Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M12.0001 14.7111L7.28857 9.99961L12.0001 5.28809L12.7741 6.06211L8.83662 9.99961L12.7741 13.9371L12.0001 14.7111Z", fill: "currentColor" }))],
];
export default createIconComponent("ExpandLeftIcon", iconSizes, ...variants);
//# sourceMappingURL=ExpandLeft.js.map