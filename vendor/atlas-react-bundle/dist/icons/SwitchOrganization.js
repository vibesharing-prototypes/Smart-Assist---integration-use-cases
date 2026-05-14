"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M7.15382 19.4903L2.5 14.8365L7.15382 10.1827L8.20765 11.2519L5.37303 14.0865H12.6538V15.5865H5.37303L8.20765 18.4211L7.15382 19.4903ZM16.8461 13.8077L15.7923 12.7385L18.6269 9.90383H11.3462V8.40385H18.6269L15.7923 5.56923L16.8461 4.5L21.5 9.15383L16.8461 13.8077Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M11.7819 32.4839L4.1665 24.8685L11.7819 17.2532L13.2562 18.736L8.16 23.8215H20.8865V25.9155H8.16L13.2562 31.001L11.7819 32.4839ZM28.2177 22.7307L26.7434 21.2478L31.8396 16.1623H19.1131V14.0684H31.8396L26.7434 8.97221L28.2177 7.5L35.8331 15.1154L28.2177 22.7307Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M14.0539 38.9807L5 29.9269L14.0539 20.873L15.6538 22.473L9.3153 28.7923H24.9422V31.0615H9.3153L15.6538 37.3807L14.0539 38.9807ZM33.9461 27.1077L32.3461 25.5077L38.6846 19.1884H23.0577V16.9193H38.6846L32.3461 10.5808L33.9461 9L42.9999 18.0539L33.9461 27.1077Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M6.12802 16.0746L2.4165 12.3631L6.12802 8.65158L6.90205 9.41758L4.49819 11.8215H10.7113V12.9047H4.49819L6.90205 15.3086L6.12802 16.0746ZM13.8716 11.3391L13.0976 10.5731L15.5014 8.1692H9.2883V7.08589H15.5014L13.0976 4.68204L13.8716 3.91602L17.5831 7.62754L13.8716 11.3391Z", fill: "currentColor" }))],
];
export default createIconComponent("SwitchOrganizationIcon", iconSizes, ...variants);
//# sourceMappingURL=SwitchOrganization.js.map