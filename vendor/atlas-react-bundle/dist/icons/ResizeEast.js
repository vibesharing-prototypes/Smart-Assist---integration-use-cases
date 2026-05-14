"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M4.74051 8.50084L9.16376 8.50084L9.16376 4.05859L19.2598 12.0008L9.16376 19.9431L9.16376 15.5008L4.74051 15.5008L4.74051 8.50084ZM6.24051 10.0008L6.24051 14.0008L10.6635 14.0008L10.6635 16.7758L16.8503 12.0008L10.6635 7.22584L10.6635 10.0008L6.24051 10.0008Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M7.69766 14.1674L15.2722 14.1674L15.2722 6.76367L32.3022 20.0008L15.2722 33.2378L15.2722 25.8341L7.69766 25.8341L7.69766 14.1674ZM9.79183 16.2616L9.79183 23.7399L17.3664 23.7399L17.3664 28.8158L28.9402 20.0008L17.3664 11.1858L17.3664 16.2616L9.79183 16.2616Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M9.11528 16.9997L18.3268 16.9997L18.3268 8.11523L38.8843 23.9997L18.3268 39.8842L18.3268 30.9997L9.11528 30.9997L9.11528 16.9997ZM11.3843 19.2692L11.3843 28.7302L20.5958 28.7302L20.5958 35.0922L35.2418 23.9997L20.5958 12.9072L20.5958 19.2692L11.3843 19.2692Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M4.11677 7.41607L7.42781 7.41607L7.42781 3.88086L15.8828 9.9994L7.42781 16.1179L7.42781 12.5827L4.11677 12.5827L4.11677 7.41607ZM5.2001 8.4994L5.2001 11.4994L8.51094 11.4994L8.51094 13.9369L14.0624 9.9994L8.51094 6.0619L8.51094 8.4994L5.2001 8.4994Z", fill: "currentColor" }))],
];
export default createIconComponent("ResizeEastIcon", iconSizes, ...variants);
//# sourceMappingURL=ResizeEast.js.map