"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M7.5 20.5V3.5H16.5V20.5H7.5ZM8.99997 4.99998V19H15V4.99998H8.99997Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M12.4038 34.1663V5.83301H27.6067V34.1663H12.4038ZM14.4978 7.92697V32.0723H25.5127V7.92697H14.4978Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M14.8269 40.9999V7H33.1922V40.9999H14.8269ZM17.0961 9.2692V38.7307H30.923V9.2692H17.0961Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M6.58325 16.5836V3.41699H13.4165V16.5836H6.58325ZM7.66656 4.50031V15.5003H12.3332V4.50031H7.66656Z", fill: "currentColor" }))],
];
export default createIconComponent("VerticalIcon", iconSizes, ...variants);
//# sourceMappingURL=Vertical.js.map