"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M10 22.2307V20.1153H3V3.11537H10V1H11.5V22.2307L10 22.2307ZM4.49997 17.6153H10V11.0191L4.49997 17.6153ZM13.5 20.1153V11.6153L18.5 17.6153V4.61532H13.5V3.11535H20V20.1153H13.5Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M18.284 37.3083V33.7827H6.1665V5.44945H18.284V1.92383H20.378V37.3083L18.284 37.3083ZM8.26046 29.9772H18.284V18.2335L8.26046 29.9772ZM23.3053 33.7827V19.3062L32.4058 29.9772V7.54337H23.3053V5.44941H34.4998V33.7827H23.3053Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M21.8116 45.2309V41.0002H7V7.00028H21.8116V2.76953H24.0807V45.2309L21.8116 45.2309ZM9.2692 36.6502H21.8116V22.1078L9.2692 36.6502ZM27.35 41.0001V23.4425L38.7307 36.6502V9.26943H27.35V7.00023H40.9999V41.0001H27.35Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M8.33333 18.5262V16.7634H2.5V2.5968H8.33333V0.833984H9.58331V18.5262L8.33333 18.5262ZM3.74998 14.6801H8.33333V9.18326L3.74998 14.6801ZM11.25 16.7634V9.68009L15.4166 14.6801V3.84675H11.25V2.59678H16.6666V16.7634H11.25Z", fill: "currentColor" }))],
];
export default createIconComponent("CompareIcon", iconSizes, ...variants);
//# sourceMappingURL=Compare.js.map