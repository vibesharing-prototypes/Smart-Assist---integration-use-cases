"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M7.2114 14.259L9.38835 11.2205H13.9557L7.2114 5.91664V14.259ZM12.9672 21.1627L9.4864 13.6705L5.71143 18.9416V2.83594L18.2883 12.7205H11.7941L15.2402 20.0993L12.9672 21.1627Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M11.6135 25.0859L15.8507 19.1479H24.433L11.6135 9.07299V25.0859ZM21.7983 35.2332L15.9351 22.6392L9.51953 31.6103V4.76758L30.4809 21.2418H19.4372L25.1979 33.636L21.7983 35.2332Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M13.6925 30.894L19.1425 23.244H30.0233L13.6925 10.4133V30.894ZM26.2694 42.2554L19.1964 27.0786L11.4233 37.9554V5.74414L36.577 25.5132H23.1925L30.1155 40.4439L26.2694 42.2554Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M6.17609 12.154L8.11521 9.68441H11.9005L6.17609 5.01451V12.154ZM10.8476 17.3029L8.09275 11.4135L5.09277 15.1186V2.69727L14.9068 10.7677H9.53665L12.2834 16.6251L10.8476 17.3029Z", fill: "currentColor" }))],
];
export default createIconComponent("MouseDefaultIcon", iconSizes, ...variants);
//# sourceMappingURL=MouseDefault.js.map