"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M4 6.69338V7.9355H5.9179V6.69338H4Z", fill: "currentColor" }),
            React.createElement("path", { d: "M5.25539 3.96675L6.60606 5.30968L7.49871 4.42687L6.14081 3.08393L5.25539 3.96675Z", fill: "currentColor" }),
            React.createElement("path", { d: "M8.89784 2V3.89676H10.1538V2H8.89784Z", fill: "currentColor" }),
            React.createElement("path", { d: "M11.5529 4.42687L12.4384 5.30968L13.7963 3.96675L12.9036 3.08393L11.5529 4.42687Z", fill: "currentColor" }),
            React.createElement("path", { d: "M13.1338 6.69338V7.9355H15.0517V6.69338H13.1338Z", fill: "currentColor" }),
            React.createElement("path", { d: "M10.1723 21H20V11.3388H12.5962V12.7553H18.5677V19.5835H10.8921L7.45277 15.1542L10.3192 16.6978V6.01794H8.87228V14.1972L5.55413 12.3921L4.40283 13.6016L10.1723 21Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M5.80176 10.8654V12.9615H9.03822V10.8654H5.80176Z", fill: "currentColor" }),
            React.createElement("path", { d: "M7.92023 6.26421L10.1995 8.5304L11.7058 7.04066L9.41437 4.77444L7.92023 6.26421Z", fill: "currentColor" }),
            React.createElement("path", { d: "M14.0669 2.94531V6.1461H16.1863V2.94531H14.0669Z", fill: "currentColor" }),
            React.createElement("path", { d: "M18.5474 7.04066L20.0415 8.5304L22.333 6.26421L20.8266 4.77444L18.5474 7.04066Z", fill: "currentColor" }),
            React.createElement("path", { d: "M21.215 10.8654V12.9615H24.4514V10.8654H21.215Z", fill: "currentColor" }),
            React.createElement("path", { d: "M33.2997 36.9405H16.5519L6.48145 23.8828L8.24315 21.9512L14.2827 25.0751V10.0923H16.3852V28.5975L10.4289 25.529L17.6224 34.8465H31.2058V21.9832H20.3597V19.8892H33.2997V36.9405Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M9.03125 11.5935V13.8058H12.4471V11.5935H9.03125Z", fill: "currentColor" }),
            React.createElement("path", { d: "M11.2672 6.73726L13.6728 9.12909L15.2626 7.55676L12.8441 5.16491L11.2672 6.73726Z", fill: "currentColor" }),
            React.createElement("path", { d: "M17.7546 3.23438V6.61261H19.9915V3.23438H17.7546Z", fill: "currentColor" }),
            React.createElement("path", { d: "M22.4835 7.55676L24.0604 9.12909L26.4789 6.73726L24.8891 5.16491L22.4835 7.55676Z", fill: "currentColor" }),
            React.createElement("path", { d: "M25.299 11.5935V13.8058H28.7148V11.5935H25.299Z", fill: "currentColor" }),
            React.createElement("path", { d: "M40.3861 43.9399H20.5323L8.44775 28.2707L10.4131 26.0746L17.8093 29.7861V11.4785H20.0785V33.4783L12.3592 29.5899L21.7054 41.6707H38.1169V25.7477H24.8477V23.4785H40.3861V43.9399Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M4 5.62587V6.6351H5.5583V5.62587H4Z", fill: "currentColor" }),
            React.createElement("path", { d: "M5.02001 3.41049L6.11742 4.50162L6.8427 3.78433L5.7394 2.69319L5.02001 3.41049Z", fill: "currentColor" }),
            React.createElement("path", { d: "M7.9795 1.8125V3.35362H8.99997V1.8125H7.9795Z", fill: "currentColor" }),
            React.createElement("path", { d: "M10.1368 3.78433L10.8562 4.50162L11.9595 3.41049L11.2342 2.69319L10.1368 3.78433Z", fill: "currentColor" }),
            React.createElement("path", { d: "M11.4212 5.62587V6.6351H12.9795V5.62587H11.4212Z", fill: "currentColor" }),
            React.createElement("path", { d: "M9.01503 17.25H17V9.40031H10.9844V10.5512H15.8363V16.0991H9.59986L6.80537 12.5003L9.13437 13.7545V5.07708H7.95873V11.7228L5.26273 10.2561L4.3273 11.2388L9.01503 17.25Z", fill: "currentColor" }))],
];
export default createIconComponent("ManualIcon", iconSizes, ...variants);
//# sourceMappingURL=Manual.js.map