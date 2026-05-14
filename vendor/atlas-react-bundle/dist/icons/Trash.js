"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M5.5 20.4998V5.99981H4.5V4.49983H8.99997V3.61523H15V4.49983H19.5V5.99981H18.5V20.4998H5.5ZM6.99997 18.9998H17V5.99981H6.99997V18.9998ZM9.40385 16.9998H10.9038V7.99981H9.40385V16.9998ZM13.0961 16.9998H14.5961V7.99981H13.0961V16.9998Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M9.18379 34.1663V9.39072H7.5V7.29677H14.7521V6.02539H25.2478V7.29677H32.4999V9.39072H30.8161V34.1663H9.18379ZM11.2777 32.0723H28.7222V9.39072H11.2777V32.0723ZM15.8141 28.6151H17.9081V12.8202H15.8141V28.6151ZM22.0918 28.6151H24.1858V12.8202H22.0918V28.6151Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M11.0308 40.9996V10.9035H9V8.63432H17.5538V7.23047H30.4461V8.63432H38.9999V10.9035H36.9691V40.9996H11.0308ZM13.2999 38.7304H34.7V10.9035H13.2999V38.7304ZM19.0615 34.5073H21.3307V15.0766H19.0615V34.5073ZM26.6692 34.5073H28.9384V15.0766H26.6692V34.5073Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M5.41675 16.5832V5.49984H4.41675V4.41653H8.00006V3.5127H12.0001V4.41653H15.5834V5.49984H14.5834V16.5832H5.41675ZM6.50006 15.4998H13.5001V5.49984H6.50006V15.4998ZM8.33662 13.9998H9.41994V6.99984H8.33662V13.9998ZM10.5802 13.9998H11.6635V6.99984H10.5802V13.9998Z", fill: "currentColor" }))],
];
export default createIconComponent("TrashIcon", iconSizes, ...variants);
//# sourceMappingURL=Trash.js.map