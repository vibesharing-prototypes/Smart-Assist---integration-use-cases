"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M3.5 20.5V13H4.99997V17.9558L17.9558 4.99998H13V3.5H20.5V11H19V6.04418L6.04418 19H11V20.5H3.5Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M5.8335 34.1663V22.0723H7.92745V30.614L30.6145 7.92697H22.0728V5.83301H34.1667V17.927H32.0728V9.38526L9.38575 32.0723H17.9275V34.1663H5.8335Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M7 40.9999V26.7307H9.2692V37.15L37.15 9.2692H26.7307V7H40.9999V21.2692H38.7307V10.85L10.85 38.7307H21.2692V40.9999H7Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M3.4165 16.5836V11.0003H4.49982V14.7343L14.7338 4.50031H10.9998V3.41699H16.5831V9.00031H15.4998V5.26631L5.26582 15.5003H8.99982V16.5836H3.4165Z", fill: "currentColor" }))],
];
export default createIconComponent("ExpandIcon", iconSizes, ...variants);
//# sourceMappingURL=Expand.js.map