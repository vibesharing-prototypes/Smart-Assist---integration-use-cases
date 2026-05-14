"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M19.6538 15.1005L18.6 16.1543L14.4462 12.0005L18.6 7.84665L19.6538 8.90047L16.5538 12.0005L19.6538 15.1005ZM9.55384 12.0005L5.40002 16.1543L4.34619 15.1005L7.44619 12.0005L4.34619 8.90047L5.40002 7.84665L9.55384 12.0005Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M32.7564 26.4314L31.265 27.9229L24.3419 20.9998L31.265 14.0768L32.7564 15.5682L27.3248 20.9998L32.7564 26.4314ZM15.6581 20.9998L8.73507 27.9229L7.24365 26.4314L12.6753 20.9998L7.24365 15.5682L8.73507 14.0768L15.6581 20.9998Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M39.3077 31.6769L37.6769 33.3076L29.3693 25L37.6769 16.6923L39.3077 18.3231L32.6308 25L39.3077 31.6769ZM18.6308 25L10.3231 33.3076L8.69238 31.6769L15.3693 25L8.69238 18.3231L10.3231 16.6923L18.6308 25Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M15.7116 12.3119L14.9376 13.0859L11.8511 9.99942L14.9376 6.9129L15.7116 7.68692L13.3991 9.99942L15.7116 12.3119ZM8.14912 9.99942L5.0626 13.0859L4.28857 12.3119L6.60107 9.99942L4.28857 7.68692L5.0626 6.9129L8.14912 9.99942Z", fill: "currentColor" }))],
];
export default createIconComponent("ArrowCollapseXIcon", iconSizes, ...variants);
//# sourceMappingURL=ArrowCollapseX.js.map