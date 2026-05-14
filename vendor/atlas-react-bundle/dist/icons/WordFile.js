"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M4.46875 21.2187V2.21875H14.2188L19.4687 7.4687V21.2187H4.46875ZM13.4688 8.2187V3.71873H5.96872V19.7187H17.9687V8.2187H13.4688Z", fill: "currentColor" }),
            React.createElement("path", { d: "M9.39453 17.691L7.99316 10.5328H9.20898L10.0879 15.4498L11.1621 10.5328H12.5732L13.6035 15.5328L14.5068 10.5328H15.6982L14.2725 17.691H13.0127L11.8408 12.3395L10.6787 17.691H9.39453Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M7.5 35.8326V4.16602H24.1731L32.4999 12.4928V35.8326H7.5ZM23.1261 13.4779V6.25997H9.59396V33.7386H30.406V13.4779H23.1261Z", fill: "currentColor" }),
            React.createElement("path", { d: "M16.2812 30.8326L14.0391 19.3795H15.9844L17.3906 27.2466L19.1094 19.3795H21.3672L23.0156 27.3795L24.4609 19.3795H26.3672L24.0859 30.8326H22.0703L20.1953 22.2701L18.3359 30.8326H16.2812Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M9 42.9999V5H29.2615L38.9999 14.7384V42.9999H9ZM28.1269 15.7615V7.2692H11.2692V40.7307H36.7307V15.7615H28.1269Z", fill: "currentColor" }),
            React.createElement("path", { d: "M19.1426 37.6666L16.3398 23.3502H18.7715L20.5293 33.1841L22.6777 23.3502H25.5L27.5605 33.3502L29.3672 23.3502H31.75L28.8984 37.6666H26.3789L24.0352 26.9634L21.7109 37.6666H19.1426Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M4.46436 17.0122V2.98828H11.6609L15.5359 6.86329V17.0122H4.46436ZM11.1073 7.41687V4.09542H5.57149V15.9051H14.4287V7.41687H11.1073Z", fill: "currentColor" }),
            React.createElement("path", { d: "M8.21344 14.7677L7.19189 9.54968H8.07818L8.71887 13.134L9.50193 9.54968H10.5306L11.2816 13.1945L11.9401 9.54968H12.8086L11.7693 14.7677H10.8509L9.99668 10.8667L9.14955 14.7677H8.21344Z", fill: "currentColor" }))],
];
export default createIconComponent("WordFileIcon", iconSizes, ...variants);
//# sourceMappingURL=WordFile.js.map