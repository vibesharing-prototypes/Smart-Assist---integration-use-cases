"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.6895 9.81512V3.5H19.1509V20.5H13.6895V14.1849H11.5482V16.916L4.84863 12L11.5482 7.08401V9.81512H13.6895ZM18.0564 19.4064H14.7334L14.7344 13.0925L14.7334 13.0889L10.3301 13.0925V14.6082L6.76713 12L10.3301 9.3918V10.9076L14.7344 10.9043L14.7334 4.55356H18.0564V19.4064Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M22.5903 16.6521L22.5903 6.9707L30.9623 6.9707L30.9623 33.0303H22.5903L22.5903 23.3507L19.3074 23.3507L19.3074 27.5372L9.0376 20.0014L19.3074 12.4656L19.3074 16.6521H22.5903ZM29.2845 31.3539H24.1907L24.1919 21.676H24.1907V21.673L17.4402 21.676L17.4402 23.9996L11.9785 20.0014L17.4402 16.0032V18.3268L24.1919 18.3242L24.1907 8.58573L29.2846 8.58573L29.2845 31.3539Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M27.1348 19.9459V8.22852H37.2678V39.7695H27.1348V28.0534H23.1614V33.1206L10.7314 23.9997L23.1614 14.8788V19.9459H27.1348ZM35.2371 37.7405H29.0717L29.0732 26.0266H29.0717V26.0199L20.9014 26.0266V28.8388L14.2909 23.9997L20.9014 19.1605V21.9728L29.0732 21.9668L29.0717 10.1832H35.2371V37.7405Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.3286 8.28239L11.3286 3.31641L15.6233 3.31641L15.6233 16.6846H11.3286L11.3286 11.7186L9.64472 11.7186L9.64472 13.8663L4.37646 10.0005L9.64472 6.13475L9.64472 8.28239H11.3286ZM14.7626 15.8246H12.1496L12.1499 10.8596L12.1496 10.8585L8.68686 10.8596L8.68686 12.0515L5.8851 10.0005L8.68686 7.94951V9.14145L12.1499 9.14063L12.1496 4.14489L14.7626 4.14489L14.7626 15.8246Z", fill: "currentColor" }))],
];
export default createIconComponent("ResizeLeftIcon", iconSizes, ...variants);
//# sourceMappingURL=ResizeLeft.js.map