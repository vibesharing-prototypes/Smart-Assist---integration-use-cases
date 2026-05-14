"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M6.69982 17.6541L1.396 12.3503L2.4652 11.2964L6.7152 15.5464L7.0614 15.2003L8.1152 16.2541L6.69982 17.6541ZM12.3498 17.6541L7.046 12.3503L8.09982 11.2811L12.3498 15.5311L21.5498 6.33105L22.6036 7.40025L12.3498 17.6541ZM12.0036 12.3503L10.9344 11.2964L15.8844 6.34643L16.9536 7.40025L12.0036 12.3503Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M11.6966 29.3784L2.89111 20.5836L4.39107 19.0922L11.7052 26.3956L12.2821 25.8186L13.7735 27.3101L11.6966 29.3784ZM19.9744 29.3784L11.1796 20.5836L12.671 19.0836L19.9744 26.3871L35.6347 10.7375L37.1261 12.2268L19.9744 29.3784ZM19.3974 21.6776L17.8974 20.1862L27.3483 10.7354L28.8483 12.2268L19.3974 21.6776Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M14.5461 35.2499L4 24.7231L5.63075 23.0923L14.5461 31.9885L15.2385 31.2961L16.8692 32.9268L14.5461 35.2499ZM23.7962 35.2499L13.2693 24.7231L14.9001 23.0923L23.7962 31.9885L42.7846 13.0193L44.4154 14.6307L23.7962 35.2499ZM23.1038 26.6923L21.4731 25.0615L33.5345 13L35.1653 14.6307L23.1038 26.6923Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M6.10426 13.857L2.85107 10.6038L3.61707 9.82975L6.09624 12.3089L6.38474 12.0204L7.15874 12.7945L6.10426 13.857ZM10.3543 13.8361L7.10107 10.6038L7.8751 9.83777L10.3543 12.3169L16.3543 6.29611L17.1283 7.06211L10.3543 13.8361ZM10.0658 9.89544L9.29978 9.12142L12.1331 6.28809L12.8991 7.06211L10.0658 9.89544Z", fill: "currentColor" }))],
];
export default createIconComponent("MessageDeliveredIcon", iconSizes, ...variants);
//# sourceMappingURL=MessageDelivered.js.map