"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M13.8461 17.6534L12.7923 16.5688L16.6116 12.7495H4.5V11.2496H16.6116L12.7923 7.4303L13.8461 6.3457L19.5 11.9995L13.8461 17.6534Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M23.0769 29.3788L21.5855 27.8981L28.4808 21.0028H7.5V18.9088H28.4808L21.5684 11.9963L23.0597 10.5156L32.4999 19.9558L23.0769 29.3788Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M27.6923 35.2261L26.0615 33.6454L34.6539 25.0531H9V22.7839H34.6539L26.0308 14.1608L27.6614 12.5801L38.9999 23.9185L27.6923 35.2261Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M11.8719 13.7121L11.0978 12.9541L13.5097 10.5422H4.41675V9.45894H13.5097L11.0978 7.04706L11.8719 6.28906L15.5834 10.0006L11.8719 13.7121Z", fill: "currentColor" }))],
];
export default createIconComponent("ArrowRightIcon", iconSizes, ...variants);
//# sourceMappingURL=ArrowRight.js.map