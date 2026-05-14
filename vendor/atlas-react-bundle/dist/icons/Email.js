"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M2.5 19.5V4.5H21.5V19.5H2.5ZM12 12.5576L3.99998 7.44225V18H20V7.44225L12 12.5576ZM12 11L19.8461 5.99998H4.15383L12 11ZM3.99998 7.44225V5.99998V11.8464V7.44225Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M4.16675 32.4999V7.5H35.8333V32.4999H4.16675ZM20 20.4785L6.26071 11.4849V30.406H33.7394V11.4849L20 20.4785ZM20 18.2884L33.4039 9.59396H6.624L20 18.2884ZM6.26071 11.4849V9.59396V18.8252V11.4849Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M5 38.9999V9H42.9999V38.9999H5ZM24 24.3038L7.2692 13.2307V36.7307H40.7307V13.2307L24 24.3038ZM24 21.9192L40.2807 11.2692H7.7692L24 21.9192ZM7.2692 13.2307V11.2692V22.039V13.2307Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M2.41675 15.5826V4.41602H17.5834V15.5826H2.41675ZM10.0001 10.6307L3.50006 6.80539V14.4993H16.5001V6.80539L10.0001 10.6307ZM10.0001 9.24933L16.351 5.49933H3.66994L10.0001 9.24933ZM3.50006 6.80539V5.49933V10.4755V6.80539Z", fill: "currentColor" }))],
];
export default createIconComponent("EmailIcon", iconSizes, ...variants);
//# sourceMappingURL=Email.js.map