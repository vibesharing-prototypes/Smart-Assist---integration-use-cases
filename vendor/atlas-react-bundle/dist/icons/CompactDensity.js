"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M4.99997 15.125H19V12.75H4.99997V15.125ZM4.99997 11.25H19V8.87498H4.99997V11.25ZM4.99997 7.375H19V4.99998H4.99997V7.375ZM3.5 20.5V3.5H20.5V20.5H3.5ZM4.99997 19H19V16.625H4.99997V19Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M7.92745 25.5071H32.0728V21.0466H7.92745V25.5071ZM7.92745 18.9527H32.0728V14.4815H7.92745V18.9527ZM7.92745 12.3875H32.0728V7.92697H7.92745V12.3875ZM5.8335 34.1663V5.83301H34.1667V34.1663H5.8335ZM7.92745 32.0723H32.0728V27.6011H7.92745V32.0723Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M9.2692 30.7884H38.7307V25.1346H9.2692V30.7884ZM9.2692 22.8654H38.7307V17.1923H9.2692V22.8654ZM9.2692 14.9231H38.7307V9.2692H9.2692V14.9231ZM7 40.9999V7H40.9999V40.9999H7ZM9.2692 38.7307H38.7307V33.0576H9.2692V38.7307Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M4.5003 12.8545H15.5003V10.542H4.5003V12.8545ZM4.5003 9.45866H15.5003V7.14614H4.5003V9.45866ZM4.5003 6.06283H15.5003V4.50031H4.5003V6.06283ZM3.41699 16.5836V3.41699H16.5836V16.5836H3.41699ZM4.5003 15.5003H15.5003V13.9378H4.5003V15.5003Z", fill: "currentColor" }))],
];
export default createIconComponent("CompactDensityIcon", iconSizes, ...variants);
//# sourceMappingURL=CompactDensity.js.map