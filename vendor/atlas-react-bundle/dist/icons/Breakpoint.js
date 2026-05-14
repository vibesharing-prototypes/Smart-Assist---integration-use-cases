"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M2.5 18.5V17H8.33175V11.25H14.1635V5.5H21.5V7H15.6683V12.75H9.8365V18.5H2.5Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M4.16675 30.8327V28.7385H14.0188V18.9523H23.8709V9.16602H35.8334V11.2602H25.9813V21.0464H16.1292V30.8327H4.16675Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M5 37V34.7305H16.902V22.8655H28.804V11H43V13.2695H31.098V25.1345H19.196V37H5Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M2.41675 15.0827V13.9993H7.27654V9.45768H11.6363V4.91602H17.5834V5.99935H12.7236V10.541H8.36383V15.0827H2.41675Z", fill: "currentColor" }))],
];
export default createIconComponent("BreakpointIcon", iconSizes, ...variants);
//# sourceMappingURL=Breakpoint.js.map