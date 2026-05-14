"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M3.5 4.99998V3.5H20.5V4.99998H3.5ZM9.5 8.87498V7.375H20.5V8.87498H9.5ZM3.5 12.75V11.25H20.5V12.75H3.5ZM9.5 16.625V15.125H20.5V16.625H9.5ZM3.5 20.5V19H20.5V20.5H3.5Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M5.8335 7.92794V5.83398H34.1667V7.92794H5.8335ZM15.8335 14.4824V12.3885H34.1667V14.4824H15.8335ZM5.8335 21.0476V18.9537H34.1667V21.0476H5.8335ZM15.8335 27.6021V25.5081H34.1667V27.6021H15.8335ZM5.8335 34.1672V32.0733H34.1667V34.1672H5.8335Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M7 9.2692V7H40.9999V9.2692H7ZM19 17.1923V14.9231H40.9999V17.1923H19ZM7 25.1346V22.8654H40.9999V25.1346H7ZM19 33.0576V30.7884H40.9999V33.0576H19ZM7 40.9999V38.7307H40.9999V40.9999H7Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M3.4165 4.49933V3.41602H16.5831V4.49933H3.4165ZM7.4165 7.52016V6.43685H16.5831V7.52016H7.4165ZM3.4165 10.541V9.45768H16.5831V10.541H3.4165ZM7.4165 13.5618V12.4785H16.5831V13.5618H7.4165ZM3.4165 16.5826V15.4993H16.5831V16.5826H3.4165Z", fill: "currentColor" }))],
];
export default createIconComponent("FormatAlignRightIcon", iconSizes, ...variants);
//# sourceMappingURL=FormatAlignRight.js.map