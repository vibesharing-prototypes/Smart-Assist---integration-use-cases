"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M3.5 20.5V19H20.5V20.5H3.5ZM11.5 16.625V15.125H20.5V16.625H11.5ZM11.5 12.75V11.25H20.5V12.75H11.5ZM11.5 8.87498V7.375H20.5V8.87498H11.5ZM3.5 4.99998V3.5H20.5V4.99998H3.5ZM3.5 15.4038V8.59618L6.90382 12L3.5 15.4038Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M5.8335 34.1672V32.0733H34.1667V34.1672H5.8335ZM19.1668 27.6021V25.5081H34.1667V27.6021H19.1668ZM19.1668 21.0476V18.9537H34.1667V21.0476H19.1668ZM19.1668 14.4824V12.3885H34.1667V14.4824H19.1668ZM5.8335 7.92794V5.83398H34.1667V7.92794H5.8335ZM5.8335 25.2057V14.7507L11.1176 19.9387L5.8335 25.2057Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M7 40.9999V38.7307H40.9999V40.9999H7ZM23 33.0576V30.7884H40.9999V33.0576H23ZM23 25.1346V22.8654H40.9999V25.1346H23ZM23 17.1923V14.9231H40.9999V17.1923H23ZM7 9.2692V7H40.9999V9.2692H7ZM7 29.9653V17.9539L13.1076 23.8884L7 29.9653Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M3.4165 16.5826V15.4993H16.5831V16.5826H3.4165ZM9.4165 13.5618V12.4785H16.5831V13.5618H9.4165ZM9.4165 10.541V9.45768H16.5831V10.541H9.4165ZM9.4165 7.52016V6.43685H16.5831V7.52016H9.4165ZM3.4165 4.49933V3.41602H16.5831V4.49933H3.4165ZM3.4165 12.5025V7.49616L5.91969 9.99933L3.4165 12.5025Z", fill: "currentColor" }))],
];
export default createIconComponent("FormatIndentIncreaseIcon", iconSizes, ...variants);
//# sourceMappingURL=FormatIndentIncrease.js.map