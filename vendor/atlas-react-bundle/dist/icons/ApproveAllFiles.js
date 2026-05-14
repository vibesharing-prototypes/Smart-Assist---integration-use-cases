"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M13.0986 15.9326L18.6204 10.6288L17.4913 9.54423L13.0826 13.7788L10.8763 11.6596L9.76313 12.7288L13.0986 15.9326ZM6.38357 20V1H16.5343L22 6.24995V20H6.38357ZM15.7535 6.99995V2.49998H7.94519V18.5H20.4384V6.99995H15.7535Z", fill: "currentColor" }),
            React.createElement("path", { d: "M3 22.9999V8.30774H4.56162V21.5H15.1728V22.9999H3Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M21.2247 24.8193L27.909 18.135L26.5421 16.7681L21.2053 22.1049L18.5344 19.4341L17.187 20.7815L21.2247 24.8193ZM13.0959 29.9452V6H25.3836L32 12.6164V29.9452H13.0959ZM24.4384 13.5616V7.89039H14.9863V28.0548H30.1096V13.5616H24.4384Z", fill: "currentColor" }),
            React.createElement("path", { d: "M9 33.726V15.2098H10.8904V31.8357H23.7354V33.726H9Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M24.8822 29.9104L33.0196 21.773L31.3555 20.109L24.8586 26.6059L21.6071 23.3545L19.9667 24.9949L24.8822 29.9104ZM14.9863 36.1507V7H29.9453L38 15.0547V36.1507H14.9863ZM28.7946 16.2054V9.30134H17.2877V33.8494H35.6987V16.2054H28.7946Z", fill: "currentColor" }),
            React.createElement("path", { d: "M10 40.7534V18.2119H12.3013V38.4521H27.9388V40.7534H10Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M10.4963 12.4612L13.5016 9.45594L12.887 8.84139L10.4876 11.2408L9.28673 10.04L8.68089 10.6459L10.4963 12.4612ZM6.84154 14.7659V4H12.3661L15.3409 6.97476V14.7659H6.84154ZM11.9412 7.39973V4.84993H7.69146V13.916H14.491V7.39973H11.9412Z", fill: "currentColor" }),
            React.createElement("path", { d: "M5 16.4658V8.14076H5.84993V15.6158H11.6251V16.4658H5Z", fill: "currentColor" }))],
];
export default createIconComponent("ApproveAllFilesIcon", iconSizes, ...variants);
//# sourceMappingURL=ApproveAllFiles.js.map