"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.1849 13.6885H20.5V19.15H3.5L3.5 13.6885H9.8151V11.5472L7.08398 11.5472L12 4.84766L16.916 11.5472H14.1849V13.6885ZM4.59363 18.0555L4.59363 14.7325L10.9075 14.7344V14.7325H10.9102L10.9075 10.3291H9.39178L12 6.76616L14.6082 10.3291H13.0924L13.0947 14.7325H19.4464V18.0555H4.59363Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23.3484 22.5898L33.0298 22.5898V30.9619H6.97021L6.97022 22.5898L16.6499 22.5898L16.6499 19.3069H12.4633L19.9991 9.03711L27.5349 19.3069H23.3484V22.5898ZM8.64666 29.2841L8.64666 24.1902L18.3245 24.1914V24.1902H18.3288L18.3245 17.4397H16.0009L19.9991 11.978L23.9973 17.4397L21.6737 17.4397L21.6775 24.1914L31.4148 24.1902L31.4148 29.2841L8.64666 29.2841Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M28.0531 27.1338H39.7705V37.2668L8.22949 37.2668L8.22949 27.1338H19.9456L19.9456 23.1605L14.8784 23.1605L23.9993 10.7305L33.1203 23.1605H28.0531V27.1338ZM10.2586 35.2361L10.2586 29.0708L21.9725 29.0723V29.0708H21.9785L21.9725 20.9005H19.1602L23.9993 14.29L28.8385 20.9005H26.0262L26.0317 29.0723L37.8158 29.0708V35.2361L10.2586 35.2361Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.7182 11.3291L16.6841 11.3291V15.6238L3.31592 15.6238L3.31592 11.3291L8.28192 11.3291L8.28192 9.64521H6.13428L10 4.37695L13.8658 9.64521H11.7182V11.3291ZM4.17591 14.7631L4.17591 12.1501L9.14098 12.1504L9.14321 12.1501L9.14098 8.68735H7.94904L10 5.88559L12.051 8.68735L10.8591 8.68735L10.8611 12.1504L15.8556 12.1501V14.7631H4.17591Z", fill: "currentColor" }))],
];
export default createIconComponent("ResizeUpIcon", iconSizes, ...variants);
//# sourceMappingURL=ResizeUp.js.map