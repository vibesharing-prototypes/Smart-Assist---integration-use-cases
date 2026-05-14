"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M8.41348 16.048H15.5865L12 12.4519L8.41348 16.048ZM4.99997 7.99998H19V4.99998H4.99997V7.99998ZM4.99997 19H19V9.49995H4.99997V19ZM3.5 20.5V3.5H20.5V20.5H3.5Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M14.5077 26.8083H25.4926L20.0001 21.2998L14.5077 26.8083ZM7.92745 13.474H32.0728V7.92697H7.92745V13.474ZM7.92745 32.0723H32.0728V15.568H7.92745V32.0723ZM5.8335 34.1663V5.83301H34.1667V34.1663H5.8335Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M17.7 32.2076H30.2999L24 25.8884L17.7 32.2076ZM9.2692 16.2538H38.7307V9.2692H9.2692V16.2538ZM9.2692 38.7307H38.7307V18.523H9.2692V38.7307ZM7 40.9999V7H40.9999V40.9999H7Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M7.09464 13.1237H12.9055L10.0001 9.96024L7.09464 13.1237ZM4.50006 7.00031H15.5001V4.50031H4.50006V7.00031ZM4.50006 15.5003H15.5001V8.08362H4.50006V15.5003ZM3.41675 16.5836V3.41699H16.5834V16.5836H3.41675Z", fill: "currentColor" }))],
];
export default createIconComponent("ToolbarTopIcon", iconSizes, ...variants);
//# sourceMappingURL=ToolbarTop.js.map