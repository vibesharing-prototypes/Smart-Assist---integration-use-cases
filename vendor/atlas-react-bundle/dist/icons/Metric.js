"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M3.55383 17.5488L2.5 16.4949L9.3519 9.59305L13.3519 13.5931L18.9654 8.04878H16V6.54883H21.5V12.0488H20V9.1026L13.3519 15.7507L9.3519 11.7507L3.55383 17.5488Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M5.65841 29.2475L4.16699 27.7561L15.5077 16.3939L22.3155 23.2017L32.3422 13.2561H26.9319V11.1621H35.8336V20.0638H33.7567V14.7646L22.2984 26.2336L15.4907 19.4259L5.65841 29.2475Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M6.63075 36.0967L5 34.4659L18.5615 20.916L26.8153 29.1698L39.25 16.8121H32.4769V14.543H42.9999V25.066H40.7615V18.4736L26.7846 32.4698L18.5307 24.2159L6.63075 36.0967Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M3.19101 14.2695L2.41699 13.4954L7.81441 8.09805L10.9811 11.2647L15.7423 6.54032H13.0003V5.45703H17.5836V10.0403H16.5003V7.31434L10.9811 12.8127L7.81441 9.64607L3.19101 14.2695Z", fill: "currentColor" }))],
];
export default createIconComponent("MetricIcon", iconSizes, ...variants);
//# sourceMappingURL=Metric.js.map