"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M3.5 21.5V8.69225H2.5V2.5H21.5V8.69225H20.5V21.5H3.5ZM4.99998 20H19V8.69225H4.99998V20ZM3.99998 7.1923H20V3.99998H3.99998V7.1923ZM9.1923 13.4326H14.8077V12H9.1923V13.4326Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M5.83317 35.8336V14.0815H4.1665V4.16699H35.8331V14.0815H34.1664V35.8336H5.83317ZM7.92713 33.7396H32.0725V14.0815H7.92713V33.7396ZM6.26046 11.9875H33.7391V6.26095H6.26046V11.9875ZM15.3203 21.982H24.6793V20.0003H15.3203V21.982Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M7 42.9999V16.6538H5V5H42.9999V16.6538H40.9999V42.9999H7ZM9.2692 40.7307H38.7307V16.6538H9.2692V40.7307ZM7.2692 14.3846H40.7307V7.2692H7.2692V14.3846ZM18.3846 26.1345H29.6153V24H18.3846V26.1345Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M3.41699 17.5836V7.74387H2.41699V2.41699H17.5836V7.74387H16.5836V17.5836H3.41699ZM4.5003 16.5003H15.5003V7.74387H4.5003V16.5003ZM3.5003 6.66058H16.5003V3.50031H3.5003V6.66058ZM8.16058 11.0275H11.84V10.0003H8.16058V11.0275Z", fill: "currentColor" }))],
];
export default createIconComponent("AssetManagerIcon", iconSizes, ...variants);
//# sourceMappingURL=AssetManager.js.map