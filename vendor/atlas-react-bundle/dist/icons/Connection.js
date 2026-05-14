"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M6.12385 16L2 12L6.12385 8L10.2477 12L6.12385 16ZM6.14472 14.3084L8.50376 12.0203L6.14472 9.73207L3.78569 12.0203L6.14472 14.3084Z", fill: "currentColor" }),
            React.createElement("path", { d: "M8.89656 11.3921H14.0745V12.6079H8.89656V11.3921Z", fill: "currentColor" }),
            React.createElement("path", { d: "M16.8761 16L12.7523 12L16.8761 8L21 12L16.8761 16ZM16.897 14.3084L19.256 12.0203L16.897 9.73207L14.538 12.0203L16.897 14.3084Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M12.5881 23.8726L16.3496 20.1111L12.5881 16.3496L8.82664 20.1111L12.5881 23.8726ZM12.5881 25.9956L6.70361 20.1111L12.5881 14.2266L17.7227 19.3611H25.0496V20.8611H17.7227L12.5881 25.9956Z", fill: "currentColor" }),
            React.createElement("path", { d: "M28.3381 16.3496L24.5766 20.1111L28.3381 23.8726L32.0996 20.1111L28.3381 16.3496ZM28.3381 14.2266L34.2227 20.1111L28.3381 25.9956L23.2036 20.8611L15.8766 20.8611L15.8766 19.3611L23.2036 19.3611L28.3381 14.2266Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M10.6381 30.9455L17.4714 24.1122L10.6381 17.2789L3.80482 24.1122L10.6381 30.9455ZM10.6381 33.9198L0.830566 24.1122L10.6381 14.3047L19.3987 23.0653H31.4073V25.1592H19.3987L10.6381 33.9198Z", fill: "currentColor" }),
            React.createElement("path", { d: "M37.8306 17.2791L30.9973 24.1124L37.8306 30.9457L44.6639 24.1124L37.8306 17.2791ZM37.8306 14.3048L47.6382 24.1124L37.8306 33.9199L29.0701 25.1593L17.0615 25.1593V23.0654L29.0701 23.0654L37.8306 14.3048Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M5.25567 13.3158L2 10.1579L5.25567 7L8.51135 10.1579L5.25567 13.3158ZM5.27215 11.9804L7.13455 10.1739L5.27215 8.36743L3.40975 10.1739L5.27215 11.9804Z", fill: "currentColor" }),
            React.createElement("path", { d: "M7.44465 9.67796H11.5325V10.6378H7.44465V9.67796Z", fill: "currentColor" }),
            React.createElement("path", { d: "M13.7443 13.3158L10.4886 10.1579L13.7443 7L17 10.1579L13.7443 13.3158ZM13.7608 11.9804L15.6232 10.1739L13.7608 8.36743L11.8984 10.1739L13.7608 11.9804Z", fill: "currentColor" }))],
];
export default createIconComponent("ConnectionIcon", iconSizes, ...variants);
//# sourceMappingURL=Connection.js.map