"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M12 15.7884L7.7308 11.5193L8.78462 10.4347L11.25 12.9V4.5H12.7499V12.9L15.2153 10.4347L16.2692 11.5193L12 15.7884ZM4.5 19.5V14.9808H5.99997V18H18V14.9808H19.5V19.5H4.5Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M20 26.455L13.0257 19.4808L14.5171 17.983L18.953 22.4082V7.5H21.0469V22.4082L25.4828 17.983L26.9742 19.4808L20 26.455ZM7.5 32.4999V24.906H9.59396V30.406H30.406V24.906H32.4999V32.4999H7.5Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M23.9999 31.8307L15.7154 23.5462L17.3462 21.9346L22.8654 27.4347V9H25.1346V27.4347L30.6537 21.9346L32.2845 23.5462L23.9999 31.8307ZM9 38.9999V29.85H11.2692V36.7307H36.7307V29.85H38.9999V38.9999H9Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M10.0003 12.823L6.60933 9.43206L7.38335 8.67406L9.45866 10.7494V3.41602H10.542V10.7494L12.6173 8.67406L13.3913 9.43206L10.0003 12.823ZM4.41699 15.5826V12.9833H5.5003V14.4993H14.5003V12.9833H15.5836V15.5826H4.41699Z", fill: "currentColor" }))],
];
export default createIconComponent("DownloadIcon", iconSizes, ...variants);
//# sourceMappingURL=Download.js.map