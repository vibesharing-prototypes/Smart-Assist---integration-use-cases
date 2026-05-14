"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M7.39998 15.6442L10.45 12.6038L12.45 14.6038L16.25 10.8192V12.75H17.75V8.25H13.25V9.74995H15.1808L12.45 12.4808L10.45 10.4808L6.35577 14.6L7.39998 15.6442ZM3.5 20.5V3.5H20.5V20.5H3.5ZM4.99997 19H19V4.99998H4.99997V19Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M12.3335 25.7922L17.4168 20.7249L20.7501 24.0583L27.2865 17.5475V21.0476H29.3804V13.9537H22.2865V16.0476H25.7865L20.7501 21.084L17.4168 17.7507L10.8752 24.3339L12.3335 25.7922ZM5.8335 34.1672V5.83398H34.1667V34.1672H5.8335ZM7.92745 32.0733H32.0728V7.92794H7.92745V32.0733Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M14.8 30.7807L20.9 24.6999L24.9 28.6999L32.8654 20.7653V25.1346H35.1346V16.8654H26.8654V19.1346H31.2346L24.9 25.4692L20.9 21.4692L13.2192 29.2L14.8 30.7807ZM7 40.9999V7H40.9999V40.9999H7ZM9.2692 38.7307H38.7307V9.2692H9.2692V38.7307Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M6.56256 12.7028L8.77089 10.4817L10.2709 11.9817L13.2084 9.05698V10.791H14.2917V7.20768H10.7084V8.29097H12.4424L10.2709 10.4625L8.77089 8.96249L5.79656 11.9368L6.56256 12.7028ZM3.41675 16.5826V3.41602H16.5834V16.5826H3.41675ZM4.50006 15.4993H15.5001V4.49933H4.50006V15.4993Z", fill: "currentColor" }))],
];
export default createIconComponent("ChartIcon", iconSizes, ...variants);
//# sourceMappingURL=Chart.js.map