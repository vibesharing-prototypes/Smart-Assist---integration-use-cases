"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M19.6084 9.34219L16.4807 12.4699L19.6219 15.611L6.86689 17.134L8.38982 4.37901L11.531 7.52016L14.6587 4.39245L19.6084 9.34219ZM17.4871 9.34219L14.6587 6.51377L11.5311 9.6413L9.56892 7.67908L8.57066 15.4302L16.3218 14.4319L14.3596 12.4697L17.4871 9.34219Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M32.824 15.4253L27.4679 20.7813L32.7032 26.0166L11.3011 28.6986L13.9831 7.2965L19.2183 12.5317L24.5744 7.1757L32.824 15.4253ZM29.8624 15.4253L24.5744 10.1373L19.2183 15.4933L15.6292 11.9042L13.6785 26.3212L28.0955 24.3705L24.5063 20.7813L29.8624 15.4253Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M39.4746 18.4257L32.9611 24.9392L39.2434 31.2215L13.475 34.5258L16.7793 8.75739L23.0616 15.0397L29.5751 8.52617L39.4746 18.4257ZM36.2654 18.4253L29.5755 11.7354L23.0619 18.2489L18.5633 13.7503L16.0506 31.9501L34.2505 29.4374L29.7519 24.9388L36.2654 18.4253Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M15.9866 7.66671L13.6453 10.008L16.1451 12.5077L5.84004 14.1599L7.49217 3.85482L9.99194 6.35458L12.3332 4.01332L15.9866 7.66671ZM14.4545 7.66671L12.3332 5.54539L9.99208 7.8865L8.26851 6.16293L7.12727 12.8726L13.837 11.7314L12.1134 10.0078L14.4545 7.66671Z", fill: "currentColor" }))],
];
export default createIconComponent("ResizeSouthWestIcon", iconSizes, ...variants);
//# sourceMappingURL=ResizeSouthWest.js.map