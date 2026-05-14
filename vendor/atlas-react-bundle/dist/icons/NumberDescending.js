"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M14.8805 3.79785L18.0151 6.90168L16.9305 7.9555L15.6305 6.65548V20.2017H14.1306V6.65548L12.8305 7.9555L11.7767 6.90168L14.8805 3.79785Z", fill: "currentColor" }),
            React.createElement("path", { d: "M9.81437 10.7909H8.62207V6.29093H7.12207V5.09863H9.81437V10.7909Z", fill: "currentColor" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.96777 18.8994H9.77139V13.2046H6.35449V16.6215H8.63244V17.7605H6.96777V18.8994ZM7.49345 15.4825H8.63244V14.3435H7.49345V15.4825Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M15.895 17.9774H14.1108V10.2744H11.5488V8.49023H15.895V17.9774Z", fill: "currentColor" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.2017 31.5102H15.7554V21.8179H10.0996V27.4736H14.1362V29.891H11.2017V31.5102ZM11.7188 25.8544H14.1362V23.4371H11.7188V25.8544Z", fill: "currentColor" }),
            React.createElement("path", { d: "M24.7784 6.33008L19.8362 11.2211L21.3618 12.6954L23.7315 10.3257V33.6698H25.8254V10.3257L28.1951 12.6954L29.6694 11.2211L24.7784 6.33008Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M29.8723 7.60547L24.1108 13.3055L25.7723 14.9054L28.7377 11.94V40.4131H31.0069V11.94L33.9723 14.9054L35.5723 13.3055L29.8723 7.60547Z", fill: "currentColor" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.3416 37.8058H18.7695V25.9707H11.9604V32.7798H16.9864V36.0227H13.3416V37.8058ZM13.7435 30.9967H16.9864V27.7538H13.7435V30.9967Z", fill: "currentColor" }),
            React.createElement("path", { d: "M19.0335 21.5804H17.0143V12.215H13.9028V10.1958H19.0335V21.5804Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M12.3718 3.16797L10.1763 5.37949L10.9343 6.15351L11.8301 5.25766V16.7984H12.9134V5.25766L13.8093 6.15351L14.5833 5.37949L12.3718 3.16797Z", fill: "currentColor" }),
            React.createElement("path", { d: "M8.15765 8.66443H7.06589V4.25972H5.59766V3.16797H8.15765V8.66443Z", fill: "currentColor" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.13021 16.8267H8.06096V11.3301H4.82324V14.7937H7.08213V15.8478H5.13021V16.8267ZM5.80207 13.8149H7.08213V12.3089H5.80207V13.8149Z", fill: "currentColor" }))],
];
export default createIconComponent("NumberDescendingIcon", iconSizes, ...variants);
//# sourceMappingURL=NumberDescending.js.map