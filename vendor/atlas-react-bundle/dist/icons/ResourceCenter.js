"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M5.42319 20.1931L3.58667 9.19317H20.4135L18.577 20.1931H5.42319ZM6.67509 18.6931H17.3251L18.6001 10.6931H5.40009L6.67509 18.6931ZM9.25012 14.4431H14.7501V12.9431H9.25012V14.4431ZM5.25012 8.00084V6.50087H18.7501V8.00084H5.25012ZM7.25012 5.30857V3.80859H16.7501V5.30857H7.25012Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M9.03841 33.6532L5.97754 15.32H34.0223L30.9614 33.6532H9.03841ZM10.7809 31.5592H29.2189L31.4679 17.414H8.53196L10.7809 31.5592ZM15.6196 23.6639H24.3802V21.57H15.6196V23.6639ZM8.95296 12.9268V10.8328H31.0469V12.9268H8.95296ZM12.2863 8.43966V6.3457H27.7135V8.43966H12.2863Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M10.8461 40.3842L7.1731 18.3844H40.8268L37.1537 40.3842H10.8461ZM12.7307 38.115H35.2691L38.0422 20.6535H9.95765L12.7307 38.115ZM18.8653 28.1535H29.1345V25.8843H18.8653V28.1535ZM10.8653 15.269V12.9998H37.1345V15.269H10.8653ZM14.8653 9.88443V7.61523H33.1345V9.88443H14.8653Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M5.35254 16.3276L3.48877 8.16097H16.5111L14.6474 16.3276H5.35254ZM6.20829 15.2443H13.7916L15.125 9.24427H4.87496L6.20829 15.2443ZM8.20831 12.0359H11.7916V10.9526H8.20831V12.0359ZM4.20831 7.0007V5.91739H15.7916V7.0007H4.20831ZM6.20831 4.75714V3.67383H13.7916V4.75714H6.20831Z", fill: "currentColor" }))],
];
export default createIconComponent("ResourceCenterIcon", iconSizes, ...variants);
//# sourceMappingURL=ResourceCenter.js.map