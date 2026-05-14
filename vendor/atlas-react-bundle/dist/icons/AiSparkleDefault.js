"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M17.115 9.2998L18.24 7.0498L20.49 5.9248L18.24 4.7998L17.115 2.5498L15.99 4.7998L13.74 5.9248L15.99 7.0498L17.115 9.2998Z", fill: "currentColor" }),
            React.createElement("path", { d: "M11.565 9.67478L9.24001 5.02478L6.91001 9.67478L2.26501 11.9998L6.91001 14.3248L9.24001 18.9748L11.565 14.3248L16.215 11.9998L11.565 9.67478Z", fill: "currentColor" }),
            React.createElement("path", { d: "M15.99 16.9497L17.115 14.6997L18.24 16.9497L20.49 18.0747L18.24 19.1997L17.115 21.4497L15.99 19.1997L13.74 18.0747L15.99 16.9497Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M28.525 15.5L30.4 11.75L34.15 9.875L30.4 8L28.525 4.25L26.65 8L22.9 9.875L26.65 11.75L28.525 15.5Z", fill: "currentColor" }),
            React.createElement("path", { d: "M19.275 16.125L15.4 8.37496L11.5167 16.125L3.77502 20L11.5167 23.875L15.4 31.625L19.275 23.875L27.025 20L19.275 16.125Z", fill: "currentColor" }),
            React.createElement("path", { d: "M26.65 28.2498L28.525 24.4998L30.4 28.2498L34.15 30.1248L30.4 31.9998L28.525 35.7498L26.65 31.9998L22.9 30.1248L26.65 28.2498Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M34.23 18.5996L36.48 14.0996L40.98 11.8496L36.48 9.59961L34.23 5.09961L31.98 9.59961L27.48 11.8496L31.98 14.0996L34.23 18.5996Z", fill: "currentColor" }),
            React.createElement("path", { d: "M23.13 19.3496L18.48 10.0496L13.82 19.3496L4.53003 23.9996L13.82 28.6496L18.48 37.9496L23.13 28.6496L32.43 23.9996L23.13 19.3496Z", fill: "currentColor" }),
            React.createElement("path", { d: "M31.98 33.8994L34.23 29.3994L36.48 33.8994L40.98 36.1494L36.48 38.3994L34.23 42.8994L31.98 38.3994L27.48 36.1494L31.98 33.8994Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M14.2624 7.75L15.1999 5.875L17.0749 4.9375L15.1999 4L14.2624 2.125L13.3249 4L11.4499 4.9375L13.3249 5.875L14.2624 7.75Z", fill: "currentColor" }),
            React.createElement("path", { d: "M9.63745 8.06248L7.69995 4.18748L5.75828 8.06248L1.88745 9.99998L5.75828 11.9375L7.69995 15.8125L9.63745 11.9375L13.5125 9.99998L9.63745 8.06248Z", fill: "currentColor" }),
            React.createElement("path", { d: "M13.3249 14.1249L14.2624 12.2499L15.1999 14.1249L17.0749 15.0624L15.1999 15.9999L14.2624 17.8749L13.3249 15.9999L11.4499 15.0624L13.3249 14.1249Z", fill: "currentColor" }))],
];
export default createIconComponent("AiSparkleDefaultIcon", iconSizes, ...variants);
//# sourceMappingURL=AiSparkleDefault.js.map