"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M16.3557 17.4663L15.2923 16.4221L18.1269 13.5721H14.5V12.0625H18.1269L15.3019 9.22213L16.3557 8.1779L21 12.8221L16.3557 17.4663ZM6.65382 17.4663L2 12.8221L6.64423 8.1779L7.69803 9.22213L4.87302 12.0625H8.49998V13.5721H4.8634L7.69803 16.4221L6.65382 17.4663Z", fill: "currentColor" }),
            React.createElement("path", { d: "M10.7815 18.5V7H12.2815V18.5H10.7815Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M21.2716 11.6865H19.1777L19.1777 26.9233H21.2716L21.2716 11.6865Z", fill: "currentColor" }),
            React.createElement("path", { d: "M12.1151 13.0564L5.77686 19.3946L12.1151 25.7329L13.5957 24.2522L9.79275 20.4492L14.5928 20.4492L14.5928 18.34L9.79275 18.34L13.5957 14.537L12.1151 13.0564Z", fill: "currentColor" }),
            React.createElement("path", { d: "M25.2053 18.3416V20.4508L29.6983 20.4508L25.8953 24.2538L27.3759 25.7344L33.7141 19.3962L27.3759 13.0579L25.8953 14.5386L29.6983 18.3416L25.2053 18.3416Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M25.1687 13.7178H22.8312L22.8312 34.2815H25.1687V13.7178Z", fill: "currentColor" }),
            React.createElement("path", { d: "M14.7512 15.5871L6.35645 23.9819L14.7512 32.3766L16.5425 30.5854L11.2263 25.2692L18.561 25.2692L18.561 22.6947L11.2263 22.6946L16.5425 17.3784L14.7512 15.5871Z", fill: "currentColor" }),
            React.createElement("path", { d: "M29.6133 22.6974V25.272L36.7733 25.272L31.457 30.5882L33.2483 32.3795L41.6431 23.9847L33.2483 15.5899L31.457 17.3812L36.7733 22.6974L29.6133 22.6974Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M14.2204 13.9093L13.3152 13.0204L15.7281 10.5943H12.6407V9.3093H15.7281L13.3233 6.8914L14.2204 6.00249L18.1738 9.95592L14.2204 13.9093ZM5.9616 13.9093L2 9.95592L5.95343 6.00249L6.85048 6.8914L4.44568 9.3093H7.53314V10.5943H4.43749L6.85048 13.0204L5.9616 13.9093Z", fill: "currentColor" }),
            React.createElement("path", { d: "M9.47502 14.7894V5H10.7519V14.7894H9.47502Z", fill: "currentColor" }))],
];
export default createIconComponent("ScrollArrangeXIcon", iconSizes, ...variants);
//# sourceMappingURL=ScrollArrangeX.js.map