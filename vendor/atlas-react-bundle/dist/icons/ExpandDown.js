"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M12 16.7076L6.34619 11.0538L7.40002 10L12 14.6L16.6 10L17.6538 11.0538L12 16.7076Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M20.0002 26.9144L10.5771 17.4914L12.0686 16L20.0002 23.9487L27.9318 16.0171L29.4232 17.5085L20.0002 26.9144Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M24 31.9383L12.6924 20.6307L14.3231 19L24 28.7077L33.6769 19.0307L35.3077 20.6615L24 31.9383Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M10.0001 13.4855L5.28857 8.77402L6.0626 8L10.0001 11.9375L13.9376 8L14.7116 8.77402L10.0001 13.4855Z", fill: "currentColor" }))],
];
export default createIconComponent("ExpandDownIcon", iconSizes, ...variants);
//# sourceMappingURL=ExpandDown.js.map