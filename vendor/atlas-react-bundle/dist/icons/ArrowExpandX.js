"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M20.6041 12.0301L16.4311 16.2031L15.3465 15.1186L18.4349 12.0301L15.3465 8.9416L16.4311 7.85703L20.6041 12.0301ZM8.65413 15.1186L7.56953 16.2031L3.39648 12.0301L7.56953 7.85703L8.65413 8.9416L5.56566 12.0301L8.65413 15.1186Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M34.3396 21.0508L27.3844 28.0059L25.8589 26.4803L31.2884 21.0508L25.8589 15.6213L27.3844 14.0957L34.3396 21.0508ZM14.1408 26.4803L12.6152 28.0059L5.66016 21.0508L12.6152 14.0957L14.1408 15.6213L8.71132 21.0508L14.1408 26.4803Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M41.2078 25.0621L32.8616 33.4082L31.2001 31.7467L37.8848 25.0621L31.2001 18.3775L32.8616 16.716L41.2078 25.0621ZM16.8001 31.7467L15.1386 33.4082L6.79248 25.0621L15.1386 16.716L16.8001 18.3775L10.1155 25.0621L16.8001 31.7467Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M16.7116 9.9834L13.6091 13.0859L12.8511 12.328L15.1956 9.9834L12.8511 7.63883L13.6091 6.88085L16.7116 9.9834ZM7.14912 12.328L6.39112 13.0859L3.28857 9.9834L6.39112 6.88085L7.14912 7.63883L4.80455 9.9834L7.14912 12.328Z", fill: "currentColor" }))],
];
export default createIconComponent("ArrowExpandXIcon", iconSizes, ...variants);
//# sourceMappingURL=ArrowExpandX.js.map