"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M3 19V4H17.9999V10.3846L21.5191 6.86543V16.1345L17.9999 12.6153V19H3ZM4.49995 17.5H16.5V5.49998H4.49995V17.5Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M5 32.9999V8H29.9999V18.9402L35.8652 13.0748V27.9144L29.9999 22.049V32.9999H5ZM7.09392 30.906H27.9059V10.094H7.09392V30.906Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M5 38.9999V9H34.9999V22.3077L42.0382 15.2693V32.7114L34.9999 25.673V38.9999H5ZM7.26915 36.7307H32.7307V11.2692H7.26915V36.7307Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M3 15.1666V4H14.1666V8.90385L16.7659 6.30452V12.8621L14.1666 10.2628V15.1666H3ZM4.08329 14.0833H13.0833V5.08331H4.08329V14.0833Z", fill: "currentColor" }))],
];
export default createIconComponent("VideoIcon", iconSizes, ...variants);
//# sourceMappingURL=Video.js.map