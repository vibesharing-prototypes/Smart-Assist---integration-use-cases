"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantFilled, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M4.5 21.5V2.5H14.25L19.5 7.74995V21.5H4.5ZM13.5 8.49995V3.99998H5.99997V20H18V8.49995H13.5Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M7.5 35.8326V4.16602H24.1731L32.4999 12.4928V35.8326H7.5ZM23.1261 13.4779V6.25997H9.59396V33.7386H30.406V13.4779H23.1261Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M9 42.9999V5H29.2615L38.9999 14.7384V42.9999H9ZM28.1269 15.7615V7.2692H11.2692V40.7307H36.7307V15.7615H28.1269Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M4.41675 17.5826V2.41602H12.2084L15.5834 5.79097V17.5826H4.41675ZM11.4167 6.58264V3.49933H5.50006V16.4993H14.5001V6.58264H11.4167Z", fill: "currentColor" }))],
    [VariantFilled, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M4.5 21.5V2.5H14.25L19.5 7.74995V21.5H4.5ZM13.5 8.49995H18L13.5 3.99998V8.49995Z", fill: "currentColor" }))],
    [VariantFilled, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M7.5 35.8326V4.16602H24.1731L32.4999 12.4928V35.8326H7.5ZM23.1261 13.4779H30.406L23.1261 6.25997V13.4779Z", fill: "currentColor" }))],
    [VariantFilled, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M9 42.9999V5H29.2615L38.9999 14.7384V42.9999H9ZM28.1269 15.7615H36.7307L28.1269 7.2692V15.7615Z", fill: "currentColor" }))],
    [VariantFilled, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M4.41675 17.5826V2.41602H12.2084L15.5834 5.79097V17.5826H4.41675ZM11.4167 6.58264H14.5001L11.4167 3.49933V6.58264Z", fill: "currentColor" }))],
];
export default createIconComponent("FileIcon", iconSizes, ...variants);
//# sourceMappingURL=File.js.map