"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M9.5 17.6342V16.1345H20.5V17.6342H9.5ZM9.5 12.7497V11.2497H20.5V12.7497H9.5ZM3.5 7.86498V6.36523H20.5V7.86498H3.5Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M15.833 29.391V27.2973H34.1663V29.391H15.833ZM15.833 21.0473V18.9531H34.1663V21.0473H15.833ZM5.83301 12.7031V10.6094H34.1663V12.7031H5.83301Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M19 35.2694V33.0004H41V35.2694H19ZM19 25.1349V22.8659H41V25.1349H19ZM7 15.0004V12.7314H41V15.0004H7Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M8.41699 14.6955V13.6124H16.5837V14.6955H8.41699ZM8.41699 10.5418V9.45844H16.5837V10.5418H8.41699ZM3.41699 6.38781V5.30469H16.5837V6.38781H3.41699Z", fill: "currentColor" }))],
];
export default createIconComponent("SegmentIcon", iconSizes, ...variants);
//# sourceMappingURL=Segment.js.map