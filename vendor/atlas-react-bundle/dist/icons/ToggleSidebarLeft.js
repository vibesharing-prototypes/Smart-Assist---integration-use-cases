"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M9 12H6V11H9V12Z", fill: "currentColor" }),
            React.createElement("path", { d: "M9 10H6V9H9V10Z", fill: "currentColor" }),
            React.createElement("path", { d: "M9 8H6V7H9V8Z", fill: "currentColor" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.5 4.5C19.6046 4.5 20.5 5.39543 20.5 6.5V17.5C20.5 18.6046 19.6046 19.5 18.5 19.5H5.5C4.39543 19.5 3.5 18.6046 3.5 17.5V6.5C3.5 5.39543 4.39543 4.5 5.5 4.5H18.5ZM5.5 6C5.22386 6 5 6.22386 5 6.5V17.5L5.00977 17.6006C5.04966 17.7961 5.20392 17.9503 5.39941 17.9902L5.5 18H10V6H5.5ZM11.5 18H18.5L18.6006 17.9902C18.8286 17.9437 19 17.7417 19 17.5V6.5C19 6.22386 18.7761 6 18.5 6H11.5V18Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M14 21H9V19H14V21Z", fill: "currentColor" }),
            React.createElement("path", { d: "M14 17H9V15H14V17Z", fill: "currentColor" }),
            React.createElement("path", { d: "M14 13H9V11H14V13Z", fill: "currentColor" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M32.3926 6.87793C33.1088 6.87793 33.7226 7.13297 34.2334 7.64355C34.7441 8.15429 34.9999 8.76817 35 9.48438V30.6035C35 31.3199 34.7442 31.9335 34.2334 32.4443C33.7226 32.9552 33.109 33.2109 32.3926 33.2109H7.27344C6.55718 33.2109 5.94338 32.9551 5.43262 32.4443C4.92204 31.9336 4.66699 31.3197 4.66699 30.6035V9.48438C4.66709 8.76817 4.92188 8.15429 5.43262 7.64355C5.94337 7.13283 6.55721 6.878 7.27344 6.87793H32.3926ZM18 31.1172H32.3926C32.5209 31.1172 32.6391 31.0637 32.7461 30.957C32.8527 30.8501 32.9062 30.7318 32.9062 30.6035V9.48438C32.9061 9.35625 32.8526 9.23863 32.7461 9.13184C32.6391 9.02517 32.5209 8.97168 32.3926 8.97168H18V31.1172ZM7.27344 8.97168C7.14525 8.97177 7.02774 9.02529 6.9209 9.13184C6.81435 9.23866 6.76086 9.3562 6.76074 9.48438V30.6035C6.76074 30.7318 6.81423 30.8501 6.9209 30.957C7.02773 31.0635 7.14527 31.1171 7.27344 31.1172H16V8.97168H7.27344Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M17.75 22H10.25V20H17.75V22Z", fill: "currentColor" }),
            React.createElement("path", { d: "M17.75 18H10.25V16H17.75V18Z", fill: "currentColor" }),
            React.createElement("path", { d: "M17.75 14H10.25V12H17.75V14Z", fill: "currentColor" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M39.1152 8C39.8996 8 40.5772 8.28418 41.1465 8.85352C41.7158 9.42285 42 10.1004 42 10.8848V37.1152C42 37.8996 41.7158 38.5772 41.1465 39.1465C40.5772 39.7158 39.8996 40 39.1152 40H8.88477C8.10043 40 7.42285 39.7158 6.85352 39.1465C6.28418 38.5772 6 37.8996 6 37.1152V10.8848C6 10.1004 6.28418 9.42285 6.85352 8.85352C7.42285 8.28418 8.10043 8 8.88477 8H39.1152ZM22 37.7305H39.1152C39.2689 37.7305 39.4098 37.6661 39.5381 37.5381C39.6661 37.4098 39.7305 37.2689 39.7305 37.1152V10.8848C39.7305 10.7311 39.6661 10.5902 39.5381 10.4619C39.4098 10.3339 39.2689 10.2695 39.1152 10.2695H22V37.7305ZM8.88477 10.2695C8.7311 10.2695 8.59025 10.3339 8.46191 10.4619C8.33391 10.5902 8.26953 10.7311 8.26953 10.8848V37.1152C8.26953 37.2689 8.33391 37.4098 8.46191 37.5381C8.59025 37.6661 8.7311 37.7305 8.88477 37.7305H19.75V10.2695H8.88477Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M7 11H5V10H7V11Z", fill: "currentColor" }),
            React.createElement("path", { d: "M7 9H5V8H7V9Z", fill: "currentColor" }),
            React.createElement("path", { d: "M7 7H5V6H7V7Z", fill: "currentColor" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16 4C16.5523 4 17 4.44772 17 5V14C17 14.5523 16.5523 15 16 15H4C3.44772 15 3 14.5523 3 14V5C3 4.44772 3.44772 4 4 4H16ZM9 14H16V5H9V14ZM4 14H8V5H4V14Z", fill: "currentColor" }))],
];
export default createIconComponent("ToggleSidebarLeftIcon", iconSizes, ...variants);
//# sourceMappingURL=ToggleSidebarLeft.js.map