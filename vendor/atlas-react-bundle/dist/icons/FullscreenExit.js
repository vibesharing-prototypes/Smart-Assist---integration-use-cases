"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M6.70662 20.5V17.2885H3.49512V15.7885H8.20662V20.5H6.70662ZM15.7931 20.5V15.7885H20.5046V17.2885H17.2931V20.5H15.7931ZM3.49512 8.2115V6.7115H6.70662V3.5H8.20662V8.2115H3.49512ZM15.7931 8.2115V3.5H17.2931V6.7115H20.5046V8.2115H15.7931Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M11.4432 34.1673V28.5498H5.82568V26.4557H13.5373V34.1673H11.4432ZM26.4636 34.1673V26.4557H34.1749V28.5498H28.5574V34.1673H26.4636ZM5.82568 13.5457V11.4515H11.4432V5.83398H13.5373V13.5457H5.82568ZM26.4636 13.5457V5.83398H28.5574V11.4515H34.1749V13.5457H26.4636Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M13.8907 41V34.1H6.99072V31.8305H16.1602V41H13.8907ZM31.8407 41V31.8305H41.0097V34.1H34.1097V41H31.8407ZM6.99072 16.1695V13.9H13.8907V7H16.1602V16.1695H6.99072ZM31.8407 16.1695V7H34.1097V13.9H41.0097V16.1695H31.8407Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M6.08885 16.5827V13.9064H3.4126V12.8231H7.17218V16.5827H6.08885ZM12.8276 16.5827V12.8231H16.5872V13.9064H13.9109V16.5827H12.8276ZM3.4126 7.1756V6.09227H6.08885V3.41602H7.17218V7.1756H3.4126ZM12.8276 7.1756V3.41602H13.9109V6.09227H16.5872V7.1756H12.8276Z", fill: "currentColor" }))],
];
export default createIconComponent("FullscreenExitIcon", iconSizes, ...variants);
//# sourceMappingURL=FullscreenExit.js.map