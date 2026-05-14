"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M3.65381 18.5V5.5H20.6384V18.5H3.65381ZM5.15378 17H8.81536V6.99998H5.15378V17ZM10.3153 17H13.9769V6.99998H10.3153V17ZM15.4768 17H19.1384V6.99998H15.4768V17Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M5.8335 30.8336V9.16699H34.1582V30.8336H5.8335ZM7.92745 28.7396H14.5771V11.261H7.92745V28.7396ZM16.671 28.7396H23.3207V11.261H16.671V28.7396ZM25.4146 28.7396H32.0642V11.261H25.4146V28.7396Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M7 36.9999V11H40.9999V36.9999H7ZM9.2692 34.7307H17.5769V13.2692H9.2692V34.7307ZM19.8461 34.7307H28.1538V13.2692H19.8461V34.7307ZM30.423 34.7307H38.7307V13.2692H30.423V34.7307Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M3.41675 14.5836V5.41699H16.5914V14.5836H3.41675ZM4.50006 13.5003H7.44721V6.50031H4.50006V13.5003ZM8.5305 13.5003H11.4776V6.50031H8.5305V13.5003ZM12.5609 13.5003H15.5081V6.50031H12.5609V13.5003Z", fill: "currentColor" }))],
];
export default createIconComponent("ColumnsIcon", iconSizes, ...variants);
//# sourceMappingURL=Columns.js.map