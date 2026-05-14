"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M15 12H18V11H15V12Z", fill: "currentColor" }),
            React.createElement("path", { d: "M15 10H18V9H15V10Z", fill: "currentColor" }),
            React.createElement("path", { d: "M15 8H18V7H15V8Z", fill: "currentColor" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.5 4.5C4.39543 4.5 3.5 5.39543 3.5 6.5V17.5C3.5 18.6046 4.39543 19.5 5.5 19.5H18.5C19.6046 19.5 20.5 18.6046 20.5 17.5V6.5C20.5 5.39543 19.6046 4.5 18.5 4.5H5.5ZM18.5 6C18.7761 6 19 6.22386 19 6.5V17.5L18.9902 17.6006C18.9503 17.7961 18.7961 17.9503 18.6006 17.9902L18.5 18H14V6H18.5ZM12.5 18H5.5L5.39941 17.9902C5.17145 17.9437 5 17.7417 5 17.5V6.5C5 6.22386 5.22386 6 5.5 6H12.5V18Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M25.667 21H30.667V19H25.667V21Z", fill: "currentColor" }),
            React.createElement("path", { d: "M25.667 17H30.667V15H25.667V17Z", fill: "currentColor" }),
            React.createElement("path", { d: "M25.667 13H30.667V11H25.667V13Z", fill: "currentColor" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.27441 6.87793C6.5582 6.87793 5.94435 7.13297 5.43359 7.64355C4.92286 8.15429 4.66709 8.76817 4.66699 9.48438V30.6035C4.66699 31.3199 4.9228 31.9335 5.43359 32.4443C5.94443 32.9552 6.55803 33.2109 7.27441 33.2109H32.3936C33.1098 33.2109 33.7236 32.9551 34.2344 32.4443C34.745 31.9336 35 31.3197 35 30.6035V9.48438C34.9999 8.76817 34.7451 8.15429 34.2344 7.64355C33.7236 7.13283 33.1098 6.878 32.3936 6.87793H7.27441ZM21.667 31.1172H7.27441C7.14608 31.1172 7.02784 31.0637 6.9209 30.957C6.81427 30.8501 6.76074 30.7318 6.76074 30.6035V9.48438C6.76086 9.35625 6.81442 9.23863 6.9209 9.13184C7.02784 9.02517 7.14608 8.97168 7.27441 8.97168H21.667V31.1172ZM32.3936 8.97168C32.5217 8.97177 32.6393 9.02529 32.7461 9.13184C32.8526 9.23866 32.9061 9.3562 32.9062 9.48438V30.6035C32.9062 30.7318 32.8528 30.8501 32.7461 30.957C32.6393 31.0635 32.5217 31.1171 32.3936 31.1172H23.667V8.97168H32.3936Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M30.25 22H37.75V20H30.25V22Z", fill: "currentColor" }),
            React.createElement("path", { d: "M30.25 18H37.75V16H30.25V18Z", fill: "currentColor" }),
            React.createElement("path", { d: "M30.25 14H37.75V12H30.25V14Z", fill: "currentColor" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.88477 8C8.10043 8 7.42285 8.28418 6.85352 8.85352C6.28418 9.42285 6 10.1004 6 10.8848V37.1152C6 37.8996 6.28418 38.5772 6.85352 39.1465C7.42285 39.7158 8.10043 40 8.88477 40H39.1152C39.8996 40 40.5772 39.7158 41.1465 39.1465C41.7158 38.5772 42 37.8996 42 37.1152V10.8848C42 10.1004 41.7158 9.42285 41.1465 8.85352C40.5772 8.28418 39.8996 8 39.1152 8H8.88477ZM26 37.7305H8.88477C8.7311 37.7305 8.59025 37.6661 8.46191 37.5381C8.33392 37.4098 8.26953 37.2689 8.26953 37.1152V10.8848C8.26953 10.7311 8.33392 10.5902 8.46191 10.4619C8.59025 10.3339 8.7311 10.2695 8.88477 10.2695H26V37.7305ZM39.1152 10.2695C39.2689 10.2695 39.4098 10.3339 39.5381 10.4619C39.6661 10.5902 39.7305 10.7311 39.7305 10.8848V37.1152C39.7305 37.2689 39.6661 37.4098 39.5381 37.5381C39.4098 37.6661 39.2689 37.7305 39.1152 37.7305H28.25V10.2695H39.1152Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M13 11H15V10H13V11Z", fill: "currentColor" }),
            React.createElement("path", { d: "M13 9H15V8H13V9Z", fill: "currentColor" }),
            React.createElement("path", { d: "M13 7H15V6H13V7Z", fill: "currentColor" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4 4C3.44771 4 3 4.44772 3 5V14C3 14.5523 3.44771 15 4 15H16C16.5523 15 17 14.5523 17 14V5C17 4.44772 16.5523 4 16 4H4ZM11 14H4V5H11V14ZM16 14H12V5H16V14Z", fill: "currentColor" }))],
];
export default createIconComponent("ToggleSidebarRightIcon", iconSizes, ...variants);
//# sourceMappingURL=ToggleSidebarRight.js.map