"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M7.36538 16.75H8.86535V10.25H7.36538V16.75ZM11.25 16.75H12.75V7.25H11.25V16.75ZM15.1346 16.75H16.6346V13.25H15.1346V16.75ZM3.5 20.5V3.5H20.5V20.5H3.5ZM4.99997 19H19V4.99998H4.99997V19Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M12.3549 27.9792H14.4488V17.2421H12.3549V27.9792ZM18.9532 27.9792H21.0471V12.022H18.9532V27.9792ZM25.5514 27.9792H27.6454V22.3831H25.5514V27.9792ZM5.8335 34.1672V5.83398H34.1667V34.1672H5.8335ZM7.92745 32.0733H32.0728V7.92794H7.92745V32.0733Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M14.8731 33.6115H17.1423V20.7846H14.8731V33.6115ZM22.8654 33.6115H25.1346V14.3885H22.8654V33.6115ZM30.8577 33.6115H33.1268V27.0385H30.8577V33.6115ZM7 40.9999V7H40.9999V40.9999H7ZM9.2692 38.7307H38.7307V9.2692H9.2692V38.7307Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M6.30456 13.791H7.38787V8.20768H6.30456V13.791ZM9.45842 13.791H10.5417V6.20768H9.45842V13.791ZM12.6122 13.791H13.6956V11.2077H12.6122V13.791ZM3.41675 16.5826V3.41602H16.5834V16.5826H3.41675ZM4.50006 15.4993H15.5001V4.49933H4.50006V15.4993Z", fill: "currentColor" }))],
];
export default createIconComponent("ChartBarIcon", iconSizes, ...variants);
//# sourceMappingURL=ChartBar.js.map