"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M9.34171 19.6079L12.4694 16.4802L15.6106 19.6214L17.1335 6.8664L4.37852 8.38933L7.51967 11.5305L4.39196 14.6582L9.34171 19.6079ZM9.34171 17.4866L6.51328 14.6582L9.64081 11.5307L7.67859 9.56844L15.4297 8.57018L14.4315 16.3213L12.4692 14.3591L9.34171 17.4866Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M7.17604 24.5747L12.5321 19.2187L7.29684 13.9834L28.6989 11.3014L26.0169 32.7035L20.7817 27.4683L15.4256 32.8243L7.17604 24.5747ZM10.1376 24.5747L15.4256 29.8627L20.7817 24.5067L24.3708 28.0958L26.3215 13.6788L11.9045 15.6295L15.4937 19.2187L10.1376 24.5747Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M8.5254 29.5763L15.0389 23.0628L8.75662 16.7805L34.525 13.4762L31.2207 39.2446L24.9384 32.9623L18.4249 39.4758L8.5254 29.5763ZM11.7346 29.5766L18.4245 36.2666L24.9381 29.7531L29.4367 34.2517L31.9494 16.0518L13.7495 18.5645L18.2481 23.0631L11.7346 29.5766Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M4.01342 12.3333L6.35468 9.99203L3.85491 7.49226L14.16 5.84013L12.5078 16.1452L10.0081 13.6454L7.6668 15.9867L4.01342 12.3333ZM5.54548 12.3333L7.6668 14.4546L10.0079 12.1135L11.7315 13.8371L12.8727 7.12736L6.16302 8.2686L7.88659 9.99218L5.54548 12.3333Z", fill: "currentColor" }))],
];
export default createIconComponent("ResizeNorthEastIcon", iconSizes, ...variants);
//# sourceMappingURL=ResizeNorthEast.js.map