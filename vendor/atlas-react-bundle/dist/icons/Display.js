"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M6.98992 20L12 15.0226L17.0101 20H6.98992ZM3 18.1176V4H21V18.1176H16.7369V16.7059H19.579V5.41175H4.42103V16.7059H7.26315V18.1176H3Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M12.3225 33.425L20.4656 25.299L28.5916 33.425H12.3225ZM4.63232 30.0917V5.0918H36.2989V30.0917H29.205V27.9978H34.205V7.18576H6.72628V27.9978H11.7092V30.0917H4.63232Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M14.4423 39.2577L23.8115 29.9193L33.1499 39.2577H14.4423ZM4.81152 35.2577V5.25781H42.8114V35.2577H34.5422V32.9885H40.5422V7.52701H7.08072V32.9885H13.05V35.2577H4.81152Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M5.5466 17L10 12.6448L14.4534 17H5.5466ZM2 15.3529V3H18V15.3529H14.2105V14.1177H16.7369V4.23528H3.26314V14.1177H5.78946V15.3529H2Z", fill: "currentColor" }))],
];
export default createIconComponent("DisplayIcon", iconSizes, ...variants);
//# sourceMappingURL=Display.js.map