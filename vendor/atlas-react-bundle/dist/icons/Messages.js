"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M6.23081 17.1153V14.7307H18.6058L18.9231 15.0481V5.99998H21.3077V20.6537L17.7693 17.1153H6.23081ZM2.69238 16.2691V2.5H16.9231V12.7307H6.23081L2.69238 16.2691ZM15.4231 11.2308V3.99998H4.19236V11.9231L4.88471 11.2308H15.4231Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M10.3847 28.5249V24.1446H30.6036L31.1325 24.6735V9.99931H35.5128V34.4051L29.6325 28.5249H10.3847ZM4.4873 27.1146V4.16602H28.2052V21.2172H10.3847L4.4873 27.1146ZM26.1112 19.1233V6.25997H6.58126V20.2772L7.73522 19.1233H26.1112Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M12.4616 34.2306V28.7307H36.4808L37.1155 29.3654V12H42.6154V41.2767L35.5693 34.2306H12.4616ZM5.38477 32.5383V5H33.8462V25.4615H12.4616L5.38477 32.5383ZM31.577 23.1923V7.2692H7.65397V24.577L9.03867 23.1923H31.577Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M6.19226 14.2621V12.275H15.1714L15.4358 12.5394V5.99933H17.423V16.8775L14.8076 14.2621H6.19226ZM2.5769 13.3903V2.41602H13.9358V10.775H5.19226L2.5769 13.3903ZM12.8525 9.69164V3.49933H3.66022V10.2686L4.23717 9.69164H12.8525Z", fill: "currentColor" }))],
];
export default createIconComponent("MessagesIcon", iconSizes, ...variants);
//# sourceMappingURL=Messages.js.map