"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M4.46875 21.2187V2.21875H14.2188L19.4687 7.4687V21.2187H4.46875ZM13.4688 8.2187V3.71873H5.96872V19.7187H17.9687V8.2187H13.4688Z", fill: "currentColor" }),
            React.createElement("path", { d: "M9.33496 18.2187L11.3418 14.4833L9.52051 11.0605H10.9072L12.084 13.3603L13.2363 11.0605H14.6084L12.7871 14.537L14.7939 18.2187H13.3633L12.0596 15.7431L10.7559 18.2187H9.33496Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M7.46875 35.3853V3.71875H24.1418L32.4687 12.0456V35.3853H7.46875ZM23.0948 13.0306V5.81271H9.56271V33.2914H30.3747V13.0306H23.0948Z", fill: "currentColor" }),
            React.createElement("path", { d: "M14.9775 30.3853L18.5898 23.6617L15.3115 17.5005H17.8076L19.9258 21.6402L22 17.5005H24.4697L21.1914 23.7584L24.8037 30.3853H22.2285L19.8818 25.9293L17.5352 30.3853H14.9775Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M8.96875 42.7187V4.71875H29.2303L38.9687 14.4572V42.7187H8.96875ZM28.0956 15.4802V6.98795H11.2379V40.4495H36.6995V15.4802H28.0956Z", fill: "currentColor" }),
            React.createElement("path", { d: "M18.2329 37.3853L22.6479 29.1675L18.6411 21.6373H21.6919L24.2808 26.6968L26.8159 21.6373H29.8345L25.8276 29.2857L30.2427 37.3853H27.0952L24.2271 31.939L21.3589 37.3853H18.2329Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M4.55176 17.2193V3.19531H11.7483L15.6233 7.07032V17.2193H4.55176ZM11.1947 7.6239V4.30245H5.6589V16.1121H14.5161V7.6239H11.1947Z", fill: "currentColor" }),
            React.createElement("path", { d: "M7.98291 14.9093L9.5304 12.029L8.12599 9.38959H9.1953L10.1027 11.163L10.9913 9.38959H12.0493L10.6449 12.0704L12.1924 14.9093H11.0892L10.0839 13.0004L9.07858 14.9093H7.98291Z", fill: "currentColor" }))],
];
export default createIconComponent("ExcelFileIcon", iconSizes, ...variants);
//# sourceMappingURL=ExcelFile.js.map