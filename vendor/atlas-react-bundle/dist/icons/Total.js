"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M6.5 19.5V18.0962L12.798 12L6.5 5.90375V4.5H17.5V6.625H9.9385L15.4385 12L9.9385 17.3848H17.5V19.5H6.5Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M10.8333 32.5V30.5042L21.6399 20L10.8333 9.49583V7.5H29.1666V10.6358H15.8587L25.4316 20L15.8587 29.3804H29.1666V32.5H10.8333Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M13 39V36.8115L26.154 24L13 11.1885V9H35V12.519H18.6075L30.3385 24L18.6075 35.5H35V39H13Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M6.41675 15.5827V14.2879L10.5401 9.99935L6.41675 5.71081V4.41602H13.5834V5.68685H8.13633L12.2405 9.99935L8.13633 14.32H13.5834V15.5827H6.41675Z", fill: "currentColor" }))],
];
export default createIconComponent("TotalIcon", iconSizes, ...variants);
//# sourceMappingURL=Total.js.map