"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M10.2789 17.5V16H13.7115V17.5H10.2789ZM6.40385 12.75V11.25H17.5865V12.75H6.40385ZM3.5 7.99998V6.5H20.5V7.99998H3.5Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M17.1316 29.1663V27.0723H22.8527V29.1663H17.1316ZM10.6732 21.0466V18.9527H29.311V21.0466H10.6732ZM5.8335 12.927V10.833H34.1667V12.927H5.8335Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M20.5577 35.9999V33.7307H27.423V35.9999H20.5577ZM12.8077 26.1346V23.8654H35.173V26.1346H12.8077ZM7 16.2692V14H40.9999V16.2692H7Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M8.2327 14.0836V13.0003H11.7599V14.0836H8.2327ZM5.33687 10.542V9.45866H14.6557V10.542H5.33687ZM3.41699 7.00031V5.91699H16.5836V7.00031H3.41699Z", fill: "currentColor" }))],
];
export default createIconComponent("FilterListIcon", iconSizes, ...variants);
//# sourceMappingURL=FilterList.js.map