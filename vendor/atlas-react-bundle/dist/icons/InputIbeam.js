"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M9.25 20.5V19H11.25V5H9.25V3.5H14.75V5H12.75V19H14.75V20.5H9.25Z", fill: "currentColor" }),
            React.createElement("path", { d: "M9.9357 12.75V11.25H14.0643V12.75H9.9357Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M15.5664 34.1673V32.0732H18.9618V7.92815H15.5664V5.83398H24.4339V7.92815H21.0556V32.0732H24.4339V34.1673H15.5664Z", fill: "currentColor" }),
            React.createElement("path", { d: "M16.721 21.0477V18.9536H23.3081V21.0477H16.721Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M18.769 41V38.7305H22.8805V9.2695H18.769V7H29.2305V9.2695H25.15V38.7305H29.2305V41H18.769Z", fill: "currentColor" }),
            React.createElement("path", { d: "M20.6568 25.1345V22.8655H27.4867V25.1345L20.6568 25.1345Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M7.7085 16.5846V15.5013H9.4585V4.5013H7.7085V3.41797H12.2918V4.5013H10.5418V15.5013H12.2918V16.5846H7.7085Z", fill: "currentColor" }),
            React.createElement("path", { d: "M8.05817 10.543V9.45964H12.0004V10.543H8.05817Z", fill: "currentColor" }))],
];
export default createIconComponent("InputIbeamIcon", iconSizes, ...variants);
//# sourceMappingURL=InputIbeam.js.map