"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M7.40002 15.7076L6.34619 14.6538L12 9L17.6538 14.6538L16.6 15.7076L12 11.1076L7.40002 15.7076Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M12.0686 25.9144L10.5771 24.423L20.0002 15L29.4232 24.4059L27.9318 25.8973L20.0002 17.9657L12.0686 25.9144Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M14.3231 30.9383L12.6924 29.3076L24 18L35.3077 29.2768L33.6769 30.9076L24 21.2307L14.3231 30.9383Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M6.0626 12.4855L5.28857 11.7115L10.0001 7L14.7116 11.7115L13.9376 12.4855L10.0001 8.54802L6.0626 12.4855Z", fill: "currentColor" }))],
];
export default createIconComponent("ExpandUpIcon", iconSizes, ...variants);
//# sourceMappingURL=ExpandUp.js.map