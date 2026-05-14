"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M2 19.5V4.5H9.29803L11.298 6.5H21V19.5H2ZM3.49998 18H19.5V7.99998H10.6828L8.6846 5.99998H3.49998V18ZM13.75 15.75H15.25V13.75H17.25V12.25H15.25V10.25H13.75V12.25H11.75V13.75H13.75V15.75Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M3.47119 32.4999V7.5H16.0576L18.985 10.4274H35.1378V32.4999H3.47119ZM5.56515 30.406H33.0438V12.5213H18.1284L15.2041 9.59396H5.56515V30.406ZM22.8515 26.2499H24.9455V22.7136H28.4818V20.6197H24.9455V17.0833H22.8515V20.6197H19.3152V22.7136H22.8515V26.2499Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M4.5 38.9999V9H19.8576L23.1269 12.2693H42.4999V38.9999H4.5ZM6.7692 36.7307H40.2307V14.5385H22.2003L18.9346 11.2692H6.7692V36.7307ZM27.6346 31.4999H29.9038V27.1345H34.2692V24.8654H29.9038V20.5H27.6346V24.8654H23.2693V27.1345H27.6346V31.4999Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M2.91699 15.5836V4.41699H8.33201L10.332 6.41699H18.0836V15.5836H2.91699ZM4.0003 14.5003H17.0003V7.50031H9.88185L7.88333 5.50031H4.0003V14.5003ZM12.7087 13.042H13.792V11.542H15.292V10.4587H13.792V8.95866H12.7087V10.4587H11.2087V11.542H12.7087V13.042Z", fill: "currentColor" }))],
];
export default createIconComponent("AddFolderIcon", iconSizes, ...variants);
//# sourceMappingURL=AddFolder.js.map