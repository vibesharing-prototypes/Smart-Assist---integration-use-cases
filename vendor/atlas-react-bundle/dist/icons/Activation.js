"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M10.9251 13.9246L16.2443 8.63042L15.1751 7.56122L10.9251 11.8112L8.80012 9.68622L7.74629 10.74L10.9251 13.9246ZM1.38477 20.2304V18.7304H22.6155V20.2304H1.38477ZM2.50012 17.7304V3.73047H21.5001V17.7304H2.50012ZM4.00012 16.2304H20.0001V5.23042H4.00012V16.2304Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M18.2253 22.8982L26.7915 14.3673L25.2915 12.8844L18.2196 19.9678L14.6836 16.4261L13.1922 17.9004L18.2253 22.8982ZM2.30762 33.7176V31.6236H37.6921V33.7176H2.30762ZM4.16653 29.551V6.21777H35.8331V29.551H4.16653ZM6.26049 27.457H33.7392V8.31173H6.26053L6.26049 27.457Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M21.8805 27.2926L31.9805 17.2311L30.3498 15.6311L21.8703 24.1311L17.6305 19.8811L15.9998 21.4811L21.8805 27.2926ZM2.76904 40.4617V38.1925H45.2305V40.4617H2.76904ZM4.99984 35.4618V7.46191H42.9997V35.4618H4.99984ZM7.26904 33.1926H40.7305V9.73107H7.26904V33.1926Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M9.10394 11.5212L13.4116 7.2135L12.5623 6.385L9.10394 9.84333L7.41644 8.15583L6.55908 8.99236L9.10394 11.5212ZM1.32031 16.3593V15.276H18.6792V16.3593H1.32031ZM2.41644 14.276V3.60938H17.5831V14.276H2.41644ZM3.49977 13.1927H16.4998V4.69267H3.49977V13.1927Z", fill: "currentColor" }))],
];
export default createIconComponent("ActivationIcon", iconSizes, ...variants);
//# sourceMappingURL=Activation.js.map