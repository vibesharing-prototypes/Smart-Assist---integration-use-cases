"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M3.54423 21.5L2.5 20.4557L9.4558 13.5H4.5V12H12V19.5H10.5V14.5442L3.54423 21.5ZM12 12V4.5H13.5V9.4558L20.4557 2.5L21.5 3.54423L14.5442 10.5H19.5V12H12Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M5.6248 35.8336L4.1665 34.3753L16.4475 22.0942H7.49984V20.0003H19.9998V32.5002H17.9058V23.5525L5.6248 35.8336ZM19.9998 20.0003V7.50033H22.0938V16.448L34.3748 4.16699L35.8331 5.62528L23.552 17.9063H32.4998V20.0003H19.9998Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M6.58075 42.9999L5 41.4192L20.1501 26.2692H9V24H24V38.9999H21.7308V27.8499L6.58075 42.9999ZM24 24V9H26.2691V20.1501L41.4192 5L42.9999 6.58075L27.8499 21.7308H38.9999V24H24Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M3.18252 17.5836L2.4165 16.8176L8.1505 11.0836H4.4165V10.0003H9.99982V15.5836H8.9165V11.8496L3.18252 17.5836ZM9.99982 10.0003V4.41699H11.0831V8.15099L16.8171 2.41699L17.5831 3.18301L11.8491 8.91699H15.5831V10.0003H9.99982Z", fill: "currentColor" }))],
];
export default createIconComponent("CollapseIcon", iconSizes, ...variants);
//# sourceMappingURL=Collapse.js.map