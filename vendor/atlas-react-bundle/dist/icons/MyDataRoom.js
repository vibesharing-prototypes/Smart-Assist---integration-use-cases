"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M7.01766 20.9218L1.96191 12.1719L7.01766 3.42188H17.1292L22.1849 12.1719L17.1292 20.9218H7.01766ZM7.87916 19.4219H16.2677L20.4369 12.1719L16.2677 4.92183H7.87916L3.68494 12.1719L7.87916 19.4219Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M11.4262 34.1666L3 19.5833L11.4262 5H28.2788L36.705 19.5833L28.2788 34.1666H11.4262ZM12.6143 32.0726H27.0908L34.2596 19.5833L27.0904 7.09396H12.6143L5.40375 19.5833L12.6143 32.0726Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M14.1115 41.9999L4 24.5L14.1115 7H34.3345L44.4461 24.5L34.3345 41.9999H14.1115ZM15.3884 39.7308H33.0577L41.7923 24.5L33.057 9.26915H15.3884L6.60375 24.5L15.3884 39.7308Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M5.87981 16.5833L2 9.79165L5.87981 3H13.6394L17.5192 9.79165L13.6394 16.5833H5.87981ZM6.5144 15.5H13.0048L16.2708 9.79165L13.0048 4.08329H6.5144L3.24837 9.79165L6.5144 15.5Z", fill: "currentColor" }))],
];
export default createIconComponent("MyDataRoomIcon", iconSizes, ...variants);
//# sourceMappingURL=MyDataRoom.js.map