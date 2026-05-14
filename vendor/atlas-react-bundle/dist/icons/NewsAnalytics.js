"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M2.5 20.5V3.5H21.5V20.5H2.5ZM3.99998 19H20V4.99998H3.99998V19ZM6.38463 16.6153H17.6153V15.1154H6.38463V16.6153ZM6.38463 12.75H10.0769V7.38463H6.38463V12.75ZM12.2692 12.75H17.6153V11.25H12.2692V12.75ZM12.2692 8.88458H17.6153V7.38463H12.2692V8.88458Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M4.16675 34.1672V5.83398H35.8333V34.1672H4.16675ZM6.26071 32.0733H33.7394V7.92794H6.26071V32.0733ZM10.827 27.5689H29.1731V25.475H10.827V27.5689ZM10.827 21.0027H16.874V12.4323H10.827V21.0027ZM21.0129 21.0027H29.1731V18.9088H21.0129V21.0027ZM21.0129 14.5262H29.1731V12.4323H21.0129V14.5262Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M5 40.9999V7H42.9999V40.9999H5ZM7.2692 38.7307H40.7307V9.2692H7.2692V38.7307ZM13.1039 33.0076H34.8961V30.7384H13.1039V33.0076ZM13.1039 25.0538H20.2961V14.9923H13.1039V25.0538ZM25.5538 25.0538H34.8961V22.7846H25.5538V25.0538ZM25.5538 17.2615H34.8961V14.9923H25.5538V17.2615Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M2.41675 16.5826V3.41602H17.5834V16.5826H2.41675ZM3.50006 15.4993H16.5001V4.49933H3.50006V15.4993ZM5.3206 13.1788H14.6795V12.0955H5.3206V13.1788ZM5.3206 10.291H8.56416V6.31987H5.3206V10.291ZM10.2244 10.291H14.6795V9.20768H10.2244V10.291ZM10.2244 7.40316H14.6795V6.31987H10.2244V7.40316Z", fill: "currentColor" }))],
];
export default createIconComponent("NewsAnalyticsIcon", iconSizes, ...variants);
//# sourceMappingURL=NewsAnalytics.js.map