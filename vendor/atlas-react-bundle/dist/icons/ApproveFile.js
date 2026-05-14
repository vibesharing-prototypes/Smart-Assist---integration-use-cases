"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M10.95 17.0332L16.2538 11.7294L15.1692 10.6448L10.9346 14.8794L8.81535 12.7602L7.74615 13.8294L10.95 17.0332ZM4.5 21.1005V2.10059H14.25L19.5 7.35054V21.1005H4.5ZM13.5 8.10054V3.60056H5.99997V19.6006H18V8.10054H13.5Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M18.1709 28.3455L27.0726 19.4545L25.6431 18.025L18.1623 25.5165L14.2414 21.5955L12.8312 23.0057L18.1709 28.3455ZM7.5 35.4342V3.76758H24.1731L32.4999 12.0944V35.4342H7.5ZM23.1261 13.0795V5.86154H9.59396V33.3402H30.406V13.0795H23.1261Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M21.7576 33.9081L32.4768 23.2082L30.9884 21.7198L21.7576 30.9698L16.8192 26.0313L15.35 27.5005L21.7576 33.9081ZM9 42.6005V4.60059H29.2615L38.9999 14.339V42.6005H9ZM28.1269 15.362V6.86979H11.2692V40.3313H36.7307V15.362H28.1269Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M9.11196 14.1281L13.4276 9.81241L12.6071 8.99193L9.11998 12.4791L7.41644 10.7547L6.5671 11.5832L9.11196 14.1281ZM4.38281 17.1842V2.01758H12.1745L15.5494 5.39254V17.1842H4.38281ZM11.3828 6.1842V3.10089H5.46613V16.1009H14.4661V6.1842H11.3828Z", fill: "currentColor" }))],
];
export default createIconComponent("ApproveFileIcon", iconSizes, ...variants);
//# sourceMappingURL=ApproveFile.js.map