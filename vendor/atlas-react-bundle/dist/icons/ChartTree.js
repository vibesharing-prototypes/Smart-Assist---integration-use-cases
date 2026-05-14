"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M3 21.5V18.4355H11.7644V21.5H3ZM3 16.5968V12.3065H10.3549V16.5968H3ZM3 10.4677V2.50001L16.0547 2.5V10.4677L3 10.4677ZM13.1739 21.5V18.4355H16.0547V21.5H13.1739ZM17.7097 21.5V19.898H22V21.5H17.7097ZM17.7097 18.4355V14.1453H22V18.4355H17.7097ZM17.7097 12.3065V2.50001H22V12.3065H17.7097Z", fill: "currentColor" }),
            React.createElement("path", { d: "M11.7644 12.3065V16.5968H16.0547V12.3065H11.7644Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M5 37V32.0001H19.2998V37H5ZM5 29V22.0001H17V29H5ZM5 19V6.00001L26.2997 6V18.9999L5 19ZM21.5996 37V32.0001H26.2997V37H21.5996ZM29.0001 37V34.3862H36V37H29.0001ZM29.0001 32.0001V25.0002H36V32.0001H29.0001ZM29.0001 22.0001V6.00001H36V22.0001H29.0001Z", fill: "currentColor" }),
            React.createElement("path", { d: "M19.2998 22.0001V29H26.2997V22.0001H19.2998Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M5 43V36.8711H22.5288V43H5ZM5 33.1935V24.613H19.7097V33.1935H5ZM5 20.9354V5.00002L31.1093 5V20.9354L5 20.9354ZM25.3479 43V36.8711H31.1093V43H25.3479ZM34.4194 43V39.796H43V43H34.4194ZM34.4194 36.8711V28.2905H43V36.8711H34.4194ZM34.4194 24.613V5.00002H43V24.613H34.4194Z", fill: "currentColor" }),
            React.createElement("path", { d: "M22.5288 24.613V33.1935H31.1093V24.613H22.5288Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M3 18V15.5807H9.91926V18H3ZM3 14.129V10.742H8.80647V14.129H3ZM3 9.2903V3.00001L13.3063 3V9.2903L3 9.2903ZM11.0321 18V15.5807H13.3063V18H11.0321ZM14.6129 18V16.7353H18V18H14.6129ZM14.6129 15.5807V12.1936H18V15.5807H14.6129ZM14.6129 10.742V3.00001H18V10.742H14.6129Z", fill: "currentColor" }),
            React.createElement("path", { d: "M9.91926 10.742V14.129H13.3063V10.742H9.91926Z", fill: "currentColor" }))],
];
export default createIconComponent("ChartTreeIcon", iconSizes, ...variants);
//# sourceMappingURL=ChartTree.js.map