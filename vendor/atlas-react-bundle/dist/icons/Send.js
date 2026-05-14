"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M3.5 19.2499V4.75L20.7114 11.9999L3.5 19.2499ZM4.99997 16.9999L16.85 11.9999L4.99997 6.99995V10.6923L10.423 11.9999L4.99997 13.3076V16.9999Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M5.8335 32.0825V7.91602L34.5192 19.9993L5.8335 32.0825ZM7.92745 28.8796L29.0984 19.9993L7.92745 11.057V17.7749L17.0107 19.9993L7.92745 22.1787V28.8796Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M7 38.4998V9.5L41.4229 23.9999L7 38.4998ZM9.2692 34.9845L35.5268 23.9999L9.2692 12.9038V21.3038L20.196 23.9999L9.2692 26.6152V34.9845Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M3.41699 15.3749V4.625L16.9265 9.99996L3.41699 15.3749ZM4.5003 13.7708L13.9586 9.99996L4.5003 6.22912V8.66023L8.51949 9.99996L4.5003 11.3397V13.7708Z", fill: "currentColor" }))],
];
export default createIconComponent("SendIcon", iconSizes, ...variants);
//# sourceMappingURL=Send.js.map