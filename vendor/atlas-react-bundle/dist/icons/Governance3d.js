"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M11.25 19.7024V12.5639L4.99997 8.94471V16.0832L11.25 19.7024ZM12.75 19.7024L19 16.0832V8.94471L12.75 12.5639V19.7024ZM12 11.2717L18.175 7.70243L12 4.13318L5.82495 7.70243L12 11.2717ZM3.5 16.9697V7.29666L12 2.41016L20.5 7.29666V16.9697L12 21.8562L3.5 16.9697Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M18.9532 33.3401V20.7268L7.92745 14.3507V26.964L18.9532 33.3401ZM21.0471 33.3401L32.0728 26.964V14.3336L21.0471 20.7268V33.3401ZM20.0001 18.9448L30.8837 12.6242L20.0001 6.33149L9.09945 12.6242L20.0001 18.9448ZM5.8335 28.1937V12.0719L20.0001 3.92773L34.1667 12.0719V28.1937L20.0001 36.3378L5.8335 28.1937Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M22.8654 40.3364V24.771L9.2692 16.9133V32.4787L22.8654 40.3364ZM25.1346 40.3364L38.7307 32.4787V16.8826L25.1346 24.771V40.3364ZM24 22.8557L37.4154 15.048L24 7.29027L10.5538 15.048L24 22.8557ZM7 33.8056V14.4595L24 4.68652L40.9999 14.4595V33.8056L24 43.5786L7 33.8056Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M9.45817 16.3158V10.4504L4.49982 7.58022V13.4456L9.45817 16.3158ZM10.5415 16.3158L15.4998 13.4665V7.60106L10.5415 10.4504V16.3158ZM9.99982 9.49852L15.104 6.56583L9.97898 3.63312L4.89563 6.56583L9.99982 9.49852ZM3.4165 14.0802V6.18602L9.99982 2.38477L16.5831 6.18602V14.0802L9.99982 17.9023L3.4165 14.0802Z", fill: "currentColor" }))],
];
export default createIconComponent("Governance3dIcon", iconSizes, ...variants);
//# sourceMappingURL=Governance3d.js.map