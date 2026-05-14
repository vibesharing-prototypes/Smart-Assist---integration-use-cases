"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M6.40002 18.6534L5.34619 17.5995L10.9462 11.9995L5.34619 6.39953L6.40002 5.3457L12 10.9457L17.6 5.3457L18.6538 6.39953L13.0538 11.9995L18.6538 17.5995L17.6 18.6534L12 13.0534L6.40002 18.6534Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M10.5256 30.9491L9.05127 29.4748L18.5256 20.0004L9.05127 10.526L10.5256 9.05176L19.9999 18.5261L29.4743 9.05176L30.9486 10.526L21.4743 20.0004L30.9486 29.4748L29.4743 30.9491L19.9999 21.4748L10.5256 30.9491Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M12.5462 37.0539L10.9463 35.4539L22.4001 24.0001L10.9463 12.5462L12.5462 10.9463L24.0001 22.4001L35.4539 10.9463L37.0539 12.5462L25.6 24.0001L37.0539 35.4539L35.4539 37.0539L24.0001 25.6L12.5462 37.0539Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M6.0626 14.7111L5.28857 13.9371L9.22607 9.99961L5.28857 6.06211L6.0626 5.28809L10.0001 9.22559L13.9376 5.28809L14.7116 6.06211L10.7741 9.99961L14.7116 13.9371L13.9376 14.7111L10.0001 10.7736L6.0626 14.7111Z", fill: "currentColor" }))],
];
export default createIconComponent("CloseIcon", iconSizes, ...variants);
//# sourceMappingURL=Close.js.map