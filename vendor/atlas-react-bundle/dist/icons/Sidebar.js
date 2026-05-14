"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M4.99997 19H7.99998V4.99998H4.99997V19ZM9.49995 19H19V4.99998H9.49995V19ZM3.5 20.5V3.5H20.5V20.5H3.5Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M7.92745 32.0723H13.4745V7.92697H7.92745V32.0723ZM15.5685 32.0723H32.0728V7.92697H15.5685V32.0723ZM5.8335 34.1663V5.83301H34.1667V34.1663H5.8335Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M9.2692 38.7307H16.2538V9.2692H9.2692V38.7307ZM18.523 38.7307H38.7307V9.2692H18.523V38.7307ZM7 40.9999V7H40.9999V40.9999H7Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M4.50006 15.5003H7.00006V4.50031H4.50006V15.5003ZM8.08337 15.5003H15.5001V4.50031H8.08337V15.5003ZM3.41675 16.5836V3.41699H16.5834V16.5836H3.41675Z", fill: "currentColor" }))],
];
export default createIconComponent("SidebarIcon", iconSizes, ...variants);
//# sourceMappingURL=Sidebar.js.map