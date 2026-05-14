"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M3.55383 17.5478L2.5 16.494L9.3519 9.59208L13.3519 13.5921L18.9654 8.0478H16V6.54785H21.5V12.0478H20V9.10163L13.3519 15.7497L9.3519 11.7497L3.55383 17.5478Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M5.65792 29.2465L4.1665 27.7551L15.5073 16.393L22.315 23.2007L32.3417 13.2551H26.9314V11.1611H35.8331V20.0628H33.7562V14.7636L22.2979 26.2326L15.4902 19.4249L5.65792 29.2465Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M6.63075 35.0957L5 33.4649L18.5615 19.915L26.8153 28.1688L39.25 15.8111H32.4769V13.542H42.9999V24.065H40.7615V17.4726L26.7846 31.4688L18.5307 23.2149L6.63075 35.0957Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M3.19052 15.2695L2.4165 14.4954L7.81392 9.09805L10.9806 12.2647L15.7418 7.54032H12.9998V6.45703H17.5831V11.0403H16.4998V8.31434L10.9806 13.8127L7.81392 10.6461L3.19052 15.2695Z", fill: "currentColor" }))],
];
export default createIconComponent("EquityIcon", iconSizes, ...variants);
//# sourceMappingURL=Equity.js.map