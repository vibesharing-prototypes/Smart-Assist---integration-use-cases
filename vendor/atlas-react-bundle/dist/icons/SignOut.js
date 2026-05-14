"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M3.5 20.5V3.5H12.0096V4.99998H4.99997V19H12.0096V20.5H3.5ZM16.2308 16.2692L15.1923 15.1846L17.6269 12.75H9.09613V11.25H17.6269L15.1923 8.81538L16.2308 7.7308L20.5 12L16.2308 16.2692Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M5.8335 34.1672V5.83398H19.999V7.92794H7.92745V32.0733H19.999V34.1672H5.8335ZM27.5813 26.6031L26.0878 25.1053L30.1455 21.0476H15.1604V18.9537H30.1113L26.0536 14.8959L27.5365 13.3874L34.1667 20.023L27.5813 26.6031Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M7 40.9999V7H23.9884V9.2692H9.2692V38.7307H23.9884V40.9999H7ZM33.4154 31.6153L31.7654 30.0038L36.6346 25.1346H18.1923V22.8654H36.573L31.7039 17.9962L33.3346 16.3654L40.9999 24.0404L33.4154 31.6153Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M3.41699 16.5826V3.41602H10.0083V4.49933H4.5003V15.4993H10.0083V16.5826H3.41699ZM13.6926 12.8903L12.9106 12.1323L14.5019 10.541H8.08043V9.45768H14.5019L12.9106 7.86633L13.6926 7.10835L16.5836 9.99933L13.6926 12.8903Z", fill: "currentColor" }))],
];
export default createIconComponent("SignOutIcon", iconSizes, ...variants);
//# sourceMappingURL=SignOut.js.map