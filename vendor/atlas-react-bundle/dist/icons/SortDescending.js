"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M11.6538 18.6884L6 13.0346L7.05382 11.9808L11.6538 16.5654L16.2538 11.9808L17.3077 13.0346L11.6538 18.6884ZM11.6538 12.7077L6 7.05383L7.05382 6L11.6538 10.5846L16.2538 6L17.3077 7.05383L11.6538 12.7077Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M20.423 30.1303L11 20.7072L12.4743 19.2329L20.423 27.1838L28.3717 19.2329L29.8461 20.7072L20.423 30.1303ZM20.423 19.8974L11 10.4743L12.4743 9L20.423 16.9509L28.3717 9L29.8461 10.4743L20.423 19.8974Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M24.3077 36.3461L13 25.0384L14.6 23.4384L24.3077 33.1654L34.0154 23.4384L35.6153 25.0384L24.3077 36.3461ZM24.3077 23.9076L13 12.5999L14.6 11L24.3077 20.7269L34.0154 11L35.6153 12.5999L24.3077 23.9076Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M9.71152 15.407L5 10.6955L5.77402 9.92148L9.71152 13.867L13.649 9.92148L14.423 10.6955L9.71152 15.407ZM9.71152 9.48554L5 4.77402L5.77402 4L9.71152 7.94552L13.649 4L14.423 4.77402L9.71152 9.48554Z", fill: "currentColor" }))],
];
export default createIconComponent("SortDescendingIcon", iconSizes, ...variants);
//# sourceMappingURL=SortDescending.js.map