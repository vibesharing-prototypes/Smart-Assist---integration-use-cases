"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M8.40888 12.6538V5.373L5.57413 8.20775L4.50488 7.15375L9.15863 2.5L13.8126 7.15375L12.7434 8.20775L9.90863 5.373V12.6538H8.40888ZM14.8414 21.5L10.1876 16.8462L11.2569 15.7923L14.0914 18.627V11.3463H15.5914V18.627L18.4261 15.7923L19.4951 16.8462L14.8414 21.5Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M14.0766 20.887V8.16033L8.99122 13.2566L7.5083 11.7824L15.1237 4.16699L22.7391 11.7824L21.2562 13.2566L16.1708 8.16033V20.887H14.0766ZM24.8771 35.8337L17.2616 28.2182L18.7446 26.7441L23.83 31.8403V19.1137H25.9237V31.8403L31.02 26.7441L32.4921 28.2182L24.8771 35.8337Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M16.9293 24.9425V9.3155L10.6098 15.654L9.00977 14.054L18.0638 5L27.1173 14.054L25.5173 15.654L19.1983 9.3155V24.9425H16.9293ZM29.9368 43L20.8828 33.946L22.4828 32.346L28.8023 38.6845V23.0575H31.0713V38.6845L37.4098 32.346L38.9903 33.946L29.9368 43Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M7.09188 10.7118V4.49866L4.68792 6.90262L3.92188 6.12845L7.63333 2.41699L11.345 6.12845L10.579 6.90262L8.175 4.49866V10.7118H7.09188ZM12.369 17.5837L8.6575 13.8722L9.42354 13.098L11.8273 15.502V9.28887H12.9106V15.502L15.3146 13.098L16.0804 13.8722L12.369 17.5837Z", fill: "currentColor" }))],
];
export default createIconComponent("SwapVertIcon", iconSizes, ...variants);
//# sourceMappingURL=SwapVert.js.map