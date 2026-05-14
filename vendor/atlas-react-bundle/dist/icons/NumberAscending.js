"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M14.7472 20.2017L17.8818 17.0979L16.7972 16.044L15.4972 17.3441V3.79785H13.9973V17.3441L12.6972 16.044L11.6434 17.0979L14.7472 20.2017Z", fill: "currentColor" }),
            React.createElement("path", { d: "M9.68107 10.7909H8.48877V6.29093H6.98877V5.09863H9.68107V10.7909Z", fill: "currentColor" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.83447 18.8994H9.63809V13.2046H6.22119V16.6215H8.49914V17.7605H6.83447V18.8994ZM7.36015 15.4825H8.49914V14.3435H7.36015V15.4825Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M15.895 17.9774H14.1108V10.2744H11.5488V8.49023H15.895V17.9774Z", fill: "currentColor" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.2017 31.5102H15.7554V21.8179H10.0996V27.4736H14.1362V29.891H11.2017V31.5102ZM11.7188 25.8544H14.1362V23.4371H11.7188V25.8544Z", fill: "currentColor" }),
            React.createElement("path", { d: "M24.7784 33.6698L19.8362 28.7788L21.3618 27.3045L23.7315 29.6742V6.33008H25.8254V29.6742L28.1951 27.3045L29.6694 28.7788L24.7784 33.6698Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M29.8728 40.4121L24.1113 34.7121L25.7728 33.1122L28.7382 36.0776V7.60449H31.0074V36.0776L33.9728 33.1122L35.5728 34.7121L29.8728 40.4121Z", fill: "currentColor" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.3421 37.8048H18.77V25.9697H11.9609V32.7788H16.9869V36.0217H13.3421V37.8048ZM13.744 30.9957H16.9869V27.7528H13.744V30.9957Z", fill: "currentColor" }),
            React.createElement("path", { d: "M19.034 21.5794H17.0148V12.214H13.9033V10.1948H19.034V21.5794Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M12.3718 16.7974L10.1763 14.5859L10.9343 13.8119L11.8301 14.7077V3.16699H12.9134V14.7077L13.8093 13.8119L14.5833 14.5859L12.3718 16.7974Z", fill: "currentColor" }),
            React.createElement("path", { d: "M8.15765 8.66345H7.06589V4.25875H5.59766V3.16699H8.15765V8.66345Z", fill: "currentColor" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.13021 16.8257H8.06096V11.3291H4.82324V14.7927H7.08213V15.8469H5.13021V16.8257ZM5.80207 13.8139H7.08213V12.3079H5.80207V13.8139Z", fill: "currentColor" }))],
];
export default createIconComponent("NumberAscendingIcon", iconSizes, ...variants);
//# sourceMappingURL=NumberAscending.js.map