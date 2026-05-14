"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M3.5 17.5V16H8.87498V17.5H3.5ZM3.5 12.75V11.25H14.6827V12.75H3.5ZM3.5 7.99998V6.5H20.5V7.99998H3.5Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M5.8335 29.1672V27.0733H14.7918V29.1672H5.8335ZM5.8335 21.0476V18.9537H24.4712V21.0476H5.8335ZM5.8335 12.9279V10.834H34.1667V12.9279H5.8335Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M7 34.9999V32.7307H17.75V34.9999H7ZM7 25.1346V22.8654H29.3653V25.1346H7ZM7 15.2692V13H40.9999V15.2692H7Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M3.41675 14.0826V12.9993H7.89589V14.0826H3.41675ZM3.41675 10.541V9.45768H11.7356V10.541H3.41675ZM3.41675 6.99933V5.91602H16.5834V6.99933H3.41675Z", fill: "currentColor" }))],
];
export default createIconComponent("SortFilesIcon", iconSizes, ...variants);
//# sourceMappingURL=SortFiles.js.map