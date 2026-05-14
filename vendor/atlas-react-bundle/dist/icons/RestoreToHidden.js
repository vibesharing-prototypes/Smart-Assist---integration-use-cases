"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M3 22V9.19225H2V3H21V9.19225H20V22H3ZM4.49998 20.5H18.5V9.19225H4.49998V20.5ZM3.49998 7.6923H19.5V4.49998H3.49998V7.6923Z", fill: "currentColor" }),
            React.createElement("path", { d: "M10.4908 18.5367V13.4338L8.58043 15.3442L7.49998 14.2638L11.2638 10.5L15.0275 14.2638L13.9471 15.3442L12.0367 13.4338V18.5367H10.4908Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M6.57389 35.6353V13.8832H4.90723V3.96875H36.5738V13.8832H34.9071V35.6353H6.57389ZM8.66785 33.5414H32.8132V13.8832H8.66785V33.5414ZM7.00118 11.7893H34.4799V6.06271H7.00118V11.7893Z", fill: "currentColor" }),
            React.createElement("path", { d: "M20.7405 17.0281L14.7299 23.0388L16.1593 24.4683L19.6935 20.934L19.6935 29.0217H21.7874L21.7874 20.934L25.3217 24.4683L26.7511 23.0388L20.7405 17.0281Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M25.1227 20.5017L18.0098 27.7191L19.5401 29.2271L24.0186 24.6828L24.0924 34.7902L26.3615 34.7736L26.2877 24.6662L30.8321 29.1447L32.3401 27.6145L25.1227 20.5017Z", fill: "currentColor" }),
            React.createElement("path", { d: "M8.17481 42.8202V16.4741H6.1748V4.82031H44.1747V16.4741H42.1747V42.8202H8.17481ZM10.444 40.551H39.9055V16.4741H10.444V40.551ZM8.444 14.2049H41.9055V7.08951H8.444V14.2049Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M2.84211 18V7.21454H2V2H18V7.21454H17.1579V18H2.84211ZM4.10525 16.7369H15.8948V7.21454H4.10525V16.7369ZM3.26314 5.95142H16.7369V3.26314H3.26314V5.95142Z", fill: "currentColor" }),
            React.createElement("path", { d: "M9.15019 15.0836V10.7864L7.54142 12.3951L6.63157 11.4853L9.80108 8.31578L12.9706 11.4853L12.0607 12.3951L10.452 10.7864V15.0836H9.15019Z", fill: "currentColor" }))],
];
export default createIconComponent("RestoreToHiddenIcon", iconSizes, ...variants);
//# sourceMappingURL=RestoreToHidden.js.map