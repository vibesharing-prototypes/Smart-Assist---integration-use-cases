"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M5.5 20.2499V3.5H18.5V20.2499L12 17.4583L5.5 20.2499ZM6.99997 17.95L12 15.8L17 17.95V4.99998H6.99997V17.95Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M9.16675 33.7499V5.72656H30.8333V33.7499L20 29.1025L9.16675 33.7499ZM11.2607 30.5428L20 26.8184L28.7394 30.5428V7.82052H11.2607V30.5428Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M11 40.4998V6.80762H36.9999V40.4998L23.9999 34.9261L11 40.4998ZM13.2692 37.0268L23.9999 32.4729L34.7307 37.0268V9.07682H13.2692V37.0268Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M5.41675 16.3753V3.41699H14.5834V16.3753L10.0001 14.5489L5.41675 16.3753ZM6.50006 14.7711L10.0001 13.3753L13.5001 14.7711V4.50031H6.50006V14.7711Z", fill: "currentColor" }))],
];
export default createIconComponent("BookmarkIcon", iconSizes, ...variants);
//# sourceMappingURL=Bookmark.js.map