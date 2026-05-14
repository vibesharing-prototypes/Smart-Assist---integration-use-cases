"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M7.0459 12.3503L12.3497 17.6541L22.6035 7.40025L21.5497 6.33105L12.3497 15.5311L8.09972 11.2811L7.0459 12.3503Z", fill: "currentColor" }),
            React.createElement("path", { d: "M10.9346 11.2964L12.0038 12.3503L16.9538 7.40026L15.8846 6.34644L10.9346 11.2964Z", fill: "currentColor" }),
            React.createElement("path", { d: "M6.69982 17.6541L1.396 12.3503L2.4652 11.2964L6.7152 15.5464L7.0614 15.2003L8.1152 16.2541L6.69982 17.6541Z", fill: "currentColor" }),
            React.createElement("path", { d: "M7.0459 12.3503L12.3497 17.6541L22.6035 7.40025L21.5497 6.33105L12.3497 15.5311L8.09972 11.2811L7.0459 12.3503Z", fill: "currentColor" }),
            React.createElement("path", { d: "M10.9346 11.2964L12.0038 12.3503L16.9538 7.40026L15.8846 6.34644L10.9346 11.2964Z", fill: "currentColor" }),
            React.createElement("path", { d: "M6.69982 17.6541L1.396 12.3503L2.4652 11.2964L6.7152 15.5464L7.0614 15.2003L8.1152 16.2541L6.69982 17.6541Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M11.1797 20.5836L19.9745 29.3784L37.1262 12.2268L35.6348 10.7375L19.9745 26.3871L12.6711 19.0836L11.1797 20.5836Z", fill: "currentColor" }),
            React.createElement("path", { d: "M17.8975 20.1862L19.3974 21.6776L28.8483 12.2268L27.3483 10.7354L17.8975 20.1862Z", fill: "currentColor" }),
            React.createElement("path", { d: "M11.6966 29.3784L2.89111 20.5836L4.39107 19.0922L11.7052 26.3956L12.2821 25.8186L13.7735 27.3101L11.6966 29.3784Z", fill: "currentColor" }),
            React.createElement("path", { d: "M11.1797 20.5836L19.9745 29.3784L37.1262 12.2268L35.6348 10.7375L19.9745 26.3871L12.6711 19.0836L11.1797 20.5836Z", fill: "currentColor" }),
            React.createElement("path", { d: "M17.8975 20.1862L19.3974 21.6776L28.8483 12.2268L27.3483 10.7354L17.8975 20.1862Z", fill: "currentColor" }),
            React.createElement("path", { d: "M11.6966 29.3784L2.89111 20.5836L4.39107 19.0922L11.7052 26.3956L12.2821 25.8186L13.7735 27.3101L11.6966 29.3784Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M14.5461 35.2499L4 24.7231L5.63075 23.0923L14.5461 31.9885L15.2385 31.2961L16.8692 32.9268L14.5461 35.2499Z", fill: "currentColor" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23.7964 35.2499L13.2695 24.7231L14.9003 23.0923L23.7964 31.9885L42.7848 13.0193L44.4156 14.6308L23.7964 35.2499Z", fill: "currentColor" }),
            React.createElement("path", { d: "M23.1038 26.6923L21.4731 25.0615L33.5346 13L35.1653 14.6307L23.1038 26.6923Z", fill: "currentColor" }),
            React.createElement("path", { d: "M14.5461 35.2499L4 24.7231L5.63075 23.0923L14.5461 31.9885L15.2385 31.2961L16.8692 32.9268L14.5461 35.2499Z", fill: "currentColor" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23.7964 35.2499L13.2695 24.7231L14.9003 23.0923L23.7964 31.9885L42.7848 13.0193L44.4156 14.6308L23.7964 35.2499Z", fill: "currentColor" }),
            React.createElement("path", { d: "M23.1038 26.6923L21.4731 25.0615L33.5346 13L35.1653 14.6307L23.1038 26.6923Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M7.10107 10.6038L10.3543 13.8361L17.1283 7.06211L16.3543 6.29611L10.3543 12.3169L7.8751 9.83778L7.10107 10.6038Z", fill: "currentColor" }),
            React.createElement("path", { d: "M9.2998 9.12142L10.0658 9.89544L12.8991 7.06211L12.1331 6.28809L9.2998 9.12142Z", fill: "currentColor" }),
            React.createElement("path", { d: "M6.10426 13.857L2.85107 10.6038L3.61707 9.82976L6.09624 12.3089L6.38474 12.0204L7.15874 12.7945L6.10426 13.857Z", fill: "currentColor" }),
            React.createElement("path", { d: "M7.10107 10.6038L10.3543 13.8361L17.1283 7.06211L16.3543 6.29611L10.3543 12.3169L7.8751 9.83778L7.10107 10.6038Z", fill: "currentColor" }),
            React.createElement("path", { d: "M9.2998 9.12142L10.0658 9.89544L12.8991 7.06211L12.1331 6.28809L9.2998 9.12142Z", fill: "currentColor" }),
            React.createElement("path", { d: "M6.10426 13.857L2.85107 10.6038L3.61707 9.82976L6.09624 12.3089L6.38474 12.0204L7.15874 12.7945L6.10426 13.857Z", fill: "currentColor" }))],
];
export default createIconComponent("MessageReadBySomeIcon", iconSizes, ...variants);
//# sourceMappingURL=MessageReadBySome.js.map