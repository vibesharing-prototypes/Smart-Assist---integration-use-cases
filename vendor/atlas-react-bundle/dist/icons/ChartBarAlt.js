"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M2.5 20.5V19H21.5V20.5H2.5ZM3.5 17.6153V11.5H5.99998V17.6153H3.5ZM8.32693 17.6153V6.5H10.8269V17.6153H8.32693ZM13.1635 17.6153V9.5H15.6634V17.6153H13.1635ZM18 17.6153V3.5H20.5V17.6153H18Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M4.16675 34.9642V32.8703H35.8333V34.9642H4.16675ZM5.83342 30.1565V20.1673H9.59404V30.1565H5.83342ZM14.0022 30.1565V11.834H17.7628V30.1565H14.0022ZM22.2041 30.1565V16.834H25.9648V30.1565H22.2041ZM30.406 30.1565V6.83398H34.1667V30.1565H30.406Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M5 41.6345V39.3653H42.9999V41.6345H5ZM7 35.8653V24H11.2692V35.8653H7ZM16.8769 35.8653V14H21.1461V35.8653H16.8769ZM26.8038 35.8653V20H31.073V35.8653H26.8038ZM36.7307 35.8653V8H40.9999V35.8653H36.7307Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M2.41675 16.5826V15.4993H17.5834V16.5826H2.41675ZM3.41675 14.1788V9.41602H5.00006V14.1788H3.41675ZM7.27252 14.1788V5.41602H8.85581V14.1788H7.27252ZM11.1363 14.1788V7.91602H12.7196V14.1788H11.1363ZM15.0001 14.1788V3.41602H16.5834V14.1788H15.0001Z", fill: "currentColor" }))],
];
export default createIconComponent("ChartBarAltIcon", iconSizes, ...variants);
//# sourceMappingURL=ChartBarAlt.js.map