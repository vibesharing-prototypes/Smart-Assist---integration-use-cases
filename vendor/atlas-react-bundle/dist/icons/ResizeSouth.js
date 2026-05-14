"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M15.5001 4.74051L15.5001 9.16376L19.9424 9.16376L12.0001 19.2598L4.05788 9.16376L8.50013 9.16376L8.50013 4.74051L15.5001 4.74051ZM14.0001 6.24051L10.0001 6.24051L10.0001 10.6635L7.22513 10.6635L12.0001 16.8503L16.7751 10.6635L14.0001 10.6635L14.0001 6.24051Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M25.8336 7.6962L25.8336 15.2708L33.2373 15.2708L20.0002 32.3008L6.76314 15.2708L14.1669 15.2708L14.1669 7.6962L25.8336 7.6962ZM23.7394 9.79036L16.2611 9.79036L16.2611 17.3649L11.1852 17.3649L20.0002 28.9387L28.8152 17.3649L23.7394 17.3649L23.7394 9.79036Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M30.9998 9.11576L30.9998 18.3273L39.8843 18.3273L23.9998 38.8848L8.11528 18.3273L16.9998 18.3273L16.9998 9.11576L30.9998 9.11576ZM28.7303 11.3848L19.2693 11.3848L19.2693 20.5963L12.9073 20.5963L23.9998 35.2423L35.0923 20.5963L28.7303 20.5963L28.7303 11.3848Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M12.5834 4.11677L12.5834 7.42781L16.1187 7.42781L10.0001 15.8828L3.88157 7.42781L7.41678 7.42781L7.41678 4.11677L12.5834 4.11677ZM11.5001 5.2001L8.50011 5.2001L8.50011 8.51094L6.06261 8.51094L10.0001 14.0624L13.9376 8.51094L11.5001 8.51094L11.5001 5.2001Z", fill: "currentColor" }))],
];
export default createIconComponent("ResizeSouthIcon", iconSizes, ...variants);
//# sourceMappingURL=ResizeSouth.js.map