"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M8.42001 18.7006L3.97949 12.6032L5.40824 11.2782L7.02001 11.6314V7.19986H8.52001V14.4909L6.35196 13.1656L9.13926 17.2006H18.52V7.20063H20.02V18.7006H8.42001ZM10.8565 10.7006V5.29688H12.3565V10.7006H10.8565ZM14.693 10.7006V5.29688H16.193V10.7006H14.693Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M13.9809 31.1623L6.79297 21.0225L9.06755 18.7525L11.5405 19.3973V12.402H13.6347V23.3686L10.1903 21.7466L15.0105 29.0682H31.113V12.4015H33.2072V31.1623H13.9809ZM18.0759 17.829V8.83984H20.1697V17.829H18.0759ZM24.6109 17.829V8.83984H26.7051V17.829H24.6109Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M16.5924 37.3878L8.4004 25.5509L11.0654 22.7894L13.5999 23.2803V15.1194H15.8694V27.5688L12.2184 26.4821L17.7269 35.1188H37.3304V15.1188H39.5999V37.3878H16.5924ZM21.5269 21.3878V10.6113H23.7959V21.3878H21.5269ZM29.4539 21.3878V10.6113H31.7229V21.3878H29.4539Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M7.74554 15.7512L3.62991 10.256L4.69554 9.1518H6.20388V5.16784H7.28721V10.9514L5.47908 10.6375L8.26158 14.6678H15.2868V5.16784H16.3705V15.7512H7.74554ZM9.23429 8.25117V4.24805H10.3176V8.25117H9.23429ZM12.2647 8.25117V4.24805H13.348V8.25117H12.2647Z", fill: "currentColor" }))],
];
export default createIconComponent("CloseHandIcon", iconSizes, ...variants);
//# sourceMappingURL=CloseHand.js.map