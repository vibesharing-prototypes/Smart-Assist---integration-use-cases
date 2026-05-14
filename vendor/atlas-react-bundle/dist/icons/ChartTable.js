"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M3.5 20.5V3.5H21.5V20.5H3.5ZM4.99997 8.25H20V4.99998H4.99997V8.25ZM8.1923 9.74995H4.99997V19H8.1923V9.74995ZM16.8077 9.74995V19H20V9.74995H16.8077ZM15.3077 9.74995H9.69225V19H15.3077V9.74995Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M4.8335 34.1501V5.83398H34.8334V34.1501H4.8335ZM6.92745 13.7677H32.7395V7.92794H6.92745V13.7677ZM12.857 15.8617H6.92745V32.0562H12.857V15.8617ZM26.8099 15.8617V32.0562H32.7395V15.8617H26.8099ZM24.716 15.8617H14.951V32.0562H24.716V15.8617Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M6 40.9691V7H41.9999V40.9691H6ZM8.2692 16.5308H39.7307V9.2692H8.2692V16.5308ZM15.75 18.8H8.2692V38.7H15.75V18.8ZM32.25 18.8V38.7H39.7307V18.8H32.25ZM29.9808 18.8H18.0192V38.7H29.9808V18.8Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M3.41675 16.5826V3.41602H17.5834V16.5826H3.41675ZM4.50006 6.95768H16.5001V4.49933H4.50006V6.95768ZM6.827 8.04097H4.50006V15.4993H6.827V8.04097ZM14.1731 8.04097V15.4993H16.5001V8.04097H14.1731ZM13.0898 8.04097H7.91029V15.4993H13.0898V8.04097Z", fill: "currentColor" }))],
];
export default createIconComponent("ChartTableIcon", iconSizes, ...variants);
//# sourceMappingURL=ChartTable.js.map