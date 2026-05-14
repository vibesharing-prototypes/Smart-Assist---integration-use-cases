"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M2.5 19.5V4.5H21.5V19.5H2.5ZM17.0961 9.01155H20V5.99998H17.0961V9.01155ZM17.0961 13.4885H20V10.5115H17.0961V13.4885ZM3.99998 18H15.5961V5.99998H3.99998V18ZM17.0961 18H20V14.9884H17.0961V18Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M4.16675 32.4999V7.5H35.8333V32.4999H4.16675ZM28.1496 15.2222H33.7394V9.59396H28.1496V15.2222ZM28.1496 22.6838H33.7394V17.3162H28.1496V22.6838ZM6.26071 30.406H26.0556V9.59396H6.26071V30.406ZM28.1496 30.406H33.7394V24.7777H28.1496V30.406Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M5 38.9999V9H42.9999V38.9999H5ZM33.573 18.3885H40.7307V11.2692H33.573V18.3885ZM33.573 27.3423H40.7307V20.6577H33.573V27.3423ZM7.2692 36.7307H31.3038V11.2692H7.2692V36.7307ZM33.573 36.7307H40.7307V29.6115H33.573V36.7307Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M2.41675 16.5836V4.41699H17.5834V16.5836H2.41675ZM14.1635 8.11412H16.5001V5.50031H14.1635V8.11412ZM14.1635 11.8032H16.5001V9.19741H14.1635V11.8032ZM3.50006 15.5003H13.0802V5.50031H3.50006V15.5003ZM14.1635 15.5003H16.5001V12.8865H14.1635V15.5003Z", fill: "currentColor" }))],
];
export default createIconComponent("ToolbarRightIcon", iconSizes, ...variants);
//# sourceMappingURL=ToolbarRight.js.map