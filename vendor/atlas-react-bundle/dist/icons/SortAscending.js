"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M7.05382 18.7077L6 17.6538L11.6538 12L17.3077 17.6538L16.2538 18.7077L11.6538 14.123L7.05382 18.7077ZM7.05382 12.7077L6 11.6538L11.6538 6L17.3077 11.6538L16.2538 12.7077L11.6538 8.12303L7.05382 12.7077Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M12.4743 30.1623L11 28.688L20.423 19.265L29.8461 28.688L28.3717 30.1623L20.423 22.2115L12.4743 30.1623ZM12.4743 19.8974L11 18.423L20.423 9L29.8461 18.423L28.3717 19.8974L20.423 11.9465L12.4743 19.8974Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M14.6 36.3845L13 34.7846L24.3077 23.4769L35.6153 34.7846L34.0154 36.3845L24.3077 26.6576L14.6 36.3845ZM14.6 23.9076L13 22.3077L24.3077 11L35.6153 22.3077L34.0154 23.9076L24.3077 14.1807L14.6 23.9076Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M5.77402 15.4855L5 14.7115L9.71152 10L14.423 14.7115L13.649 15.4855L9.71152 11.54L5.77402 15.4855ZM5.77402 10.4855L5 9.71152L9.71152 5L14.423 9.71152L13.649 10.4855L9.71152 6.54002L5.77402 10.4855Z", fill: "currentColor" }))],
];
export default createIconComponent("SortAscendingIcon", iconSizes, ...variants);
//# sourceMappingURL=SortAscending.js.map