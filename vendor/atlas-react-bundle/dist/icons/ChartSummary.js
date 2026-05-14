"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3 11.0016V3H11.019V11.0016H3ZM4.6462 4.64657H9.37278V9.35507H4.6462V4.64657Z", fill: "currentColor" }),
            React.createElement("path", { d: "M13.0498 3V11.0016H20.9997V3H13.0498Z", fill: "currentColor" }),
            React.createElement("path", { d: "M12.948 21V12.9766H21V21H12.948Z", fill: "currentColor" }),
            React.createElement("path", { d: "M3 21V12.9766H10.9963V21H3Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M4.37012 5.0293H18.686V19.1958H4.37012V5.0293ZM6.72996 7.36451V16.8606H16.3262V7.36451H6.72996Z", fill: "currentColor" }),
            React.createElement("path", { d: "M22.2364 5.0293V19.2544H36.3696V5.0293H22.2364Z", fill: "currentColor" }),
            React.createElement("path", { d: "M22.0554 37.0293V22.7656H36.3701V37.0293H22.0554Z", fill: "currentColor" }),
            React.createElement("path", { d: "M4.37012 37.0293V22.7656H18.5858V37.0293H4.37012Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M5.37012 5.0293H22.2222V21.8247H5.37012V5.0293ZM7.85883 7.50965V19.3443H19.7334V7.50965H7.85883Z", fill: "currentColor" }),
            React.createElement("path", { d: "M26.5863 5.0293V21.9217H43.3696V5.0293H26.5863Z", fill: "currentColor" }),
            React.createElement("path", { d: "M26.3714 43.0293V26.0911H43.3701V43.0293H26.3714Z", fill: "currentColor" }),
            React.createElement("path", { d: "M5.37012 43.0293V26.0911H22.2512V43.0293H5.37012Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3 9.66804V3H9.68248V9.66804H3ZM4.37184 4.37214H8.31065V8.29589H4.37184V4.37214Z", fill: "currentColor" }),
            React.createElement("path", { d: "M11.3748 3V9.66804H17.9998V3H11.3748Z", fill: "currentColor" }),
            React.createElement("path", { d: "M11.29 18V11.3139H18V18H11.29Z", fill: "currentColor" }),
            React.createElement("path", { d: "M3 18V11.3139H9.66359V18H3Z", fill: "currentColor" }))],
];
export default createIconComponent("ChartSummaryIcon", iconSizes, ...variants);
//# sourceMappingURL=ChartSummary.js.map