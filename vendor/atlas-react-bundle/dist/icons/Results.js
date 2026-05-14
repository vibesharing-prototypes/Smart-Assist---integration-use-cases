"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M2.5 20.5V19H21.5V20.5H2.5ZM3.5 17.6153V11.5H5.99998V17.6153H3.5ZM8.32693 17.6153V6.5H10.8269V17.6153H8.32693ZM13.1635 17.6153V9.5H15.6634V17.6153H13.1635ZM18 17.6153V3.5H20.5V17.6153H18Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M4.1665 33.9633V31.8693H35.8331V33.9633H4.1665ZM5.83317 29.1556V19.1663H9.5938V29.1556H5.83317ZM14.002 29.1556V10.833H17.7626V29.1556H14.002ZM22.2039 29.1556V15.833H25.9645V29.1556H22.2039ZM30.4058 29.1556V5.83301H34.1664V29.1556H30.4058Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M5 40.6345V38.3653H42.9999V40.6345H5ZM7 34.8653V23H11.2692V34.8653H7ZM16.8769 34.8653V13H21.1461V34.8653H16.8769ZM26.8038 34.8653V19H31.073V34.8653H26.8038ZM36.7307 34.8653V7H40.9999V34.8653H36.7307Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M2.4165 16.5836V15.5003H17.5831V16.5836H2.4165ZM3.4165 14.1798V9.41699H4.99982V14.1798H3.4165ZM7.27227 14.1798V5.41699H8.85557V14.1798H7.27227ZM11.136 14.1798V7.91699H12.7193V14.1798H11.136ZM14.9998 14.1798V3.41699H16.5831V14.1798H14.9998Z", fill: "currentColor" }))],
];
export default createIconComponent("ResultsIcon", iconSizes, ...variants);
//# sourceMappingURL=Results.js.map