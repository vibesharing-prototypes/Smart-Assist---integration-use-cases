"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M4.99997 19H14V14H19V4.99998H4.99997V19ZM3.5 20.5V3.5H20.5V14.6442L14.6442 20.5H3.5ZM7.44233 13.7307V12.2308H12V13.7307H7.44233ZM7.44233 9.74995V8.25H16.5576V9.74995H7.44233Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M7.92745 32.0733H23.7395V23.7399H32.0728V7.92794H7.92745V32.0733ZM5.8335 34.1672V5.83398H34.1667V24.4076L24.4071 34.1672H5.8335ZM12.81 22.4792V20.3852H19.7971V22.4792H12.81ZM12.81 15.8446V13.7507H27.1902V15.8446H12.81Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M9.2692 38.7307H28.7307V28.7307H38.7307V9.2692H9.2692V38.7307ZM7 40.9999V7H40.9999V29.2884L29.2884 40.9999H7ZM15.6154 26.7307V24.4615H23.6346V26.7307H15.6154ZM15.6154 18.7692V16.5H32.3845V18.7692H15.6154Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M4.50006 15.4993H11.5001V11.4993H15.5001V4.49933H4.50006V15.4993ZM3.41675 16.5826V3.41602H16.5834V11.7028L11.7036 16.5826H3.41675ZM6.36869 11.275V10.1916H10.0001V11.275H6.36869ZM6.36869 8.29098V7.20768H13.6314V8.29098H6.36869Z", fill: "currentColor" }))],
];
export default createIconComponent("AnnotationsIcon", iconSizes, ...variants);
//# sourceMappingURL=Annotations.js.map