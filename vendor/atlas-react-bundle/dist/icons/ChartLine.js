"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M3.50012 18.1539L2.38477 17.0386L9.53859 9.88477L13.5386 13.8848L20.5809 5.88477L21.6347 6.91934L13.5578 16.1347L9.53859 12.1155L3.50012 18.1539Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M5.55124 30.2572L3.97437 28.6803L15.8974 16.7573L22.5641 23.4411L34.5833 9.80859L36.0576 11.2231L22.5961 26.582L15.8974 19.9111L5.55124 30.2572Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M6.49229 36.3079L4.76929 34.5848L19.0769 20.2772L27.0769 28.308L41.6692 11.7695L43.2692 13.281L27.1154 31.7117L19.0769 23.7233L6.49229 36.3079Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M3.06252 14.7744L2.32056 14.0325L8.03208 8.32096L11.3029 11.571L16.859 5.2793L17.6955 5.97478L11.3814 13.1543L8.03208 9.80488L3.06252 14.7744Z", fill: "currentColor" }))],
];
export default createIconComponent("ChartLineIcon", iconSizes, ...variants);
//# sourceMappingURL=ChartLine.js.map