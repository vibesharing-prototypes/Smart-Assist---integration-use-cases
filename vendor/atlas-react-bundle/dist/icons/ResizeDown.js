"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.81512 10.3111H3.5L3.5 4.84961L20.5 4.84961V10.3111H14.1849V12.4524H16.916L12 19.1519L7.08401 12.4524H9.81512V10.3111ZM19.4064 5.94412V9.26711L13.0925 9.26562V9.26711H13.0898L13.0925 13.6705H14.6082L12 17.2334L9.3918 13.6705H10.9076L10.9053 9.26562L4.55356 9.26711V5.94412L19.4064 5.94412Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.6517 17.4091H6.97021L6.97022 9.03711L33.0298 9.03711V17.4091H23.3502L23.3502 20.692H27.5367L20.0009 30.9619L12.4651 20.692H16.6517V17.4091ZM31.3534 10.7149V15.8088L21.6712 15.8105L21.6755 22.5593L23.9991 22.5593L20.0009 28.0209L16.0027 22.5593L18.3263 22.5593L18.3224 15.8105L8.58524 15.8088L8.58524 10.7149L31.3534 10.7149Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.9469 20.8635H8.22949L8.22949 10.7305L39.7705 10.7305V20.8635H28.0544V24.8368H33.1216L24.0007 37.2668L14.8797 24.8368H19.9469V20.8635ZM37.7414 12.7612V18.9265L26.0275 18.926L26.0215 18.9265L26.0275 27.0968H28.8398L24.0007 33.7073L19.1615 27.0968H21.9738L21.9683 18.926L10.1842 18.9265L10.1842 12.7612L37.7414 12.7612Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.28191 8.67166H3.31592L3.31592 4.37695L16.6841 4.37695V8.67166H11.7181L11.7181 10.3556H13.8658L10 15.6238L6.13426 10.3556H8.28191V8.67166ZM15.8241 5.23763V7.85071L10.8568 7.85156L10.8591 11.3134L12.051 11.3134L10 14.1152L7.94902 11.3134L9.14096 11.3134L9.13893 7.85156L4.1444 7.85071L4.1444 5.23763L15.8241 5.23763Z", fill: "currentColor" }))],
];
export default createIconComponent("ResizeDownIcon", iconSizes, ...variants);
//# sourceMappingURL=ResizeDown.js.map