"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M3.5 17.5V16H15.7115V17.5H3.5ZM19.4461 16.548L14.8789 12L19.4461 7.46155L20.5 8.51538L16.9865 12L20.5 15.4942L19.4461 16.548ZM3.5 12.75V11.25H12.7884V12.75H3.5ZM3.5 7.99998V6.5H15.7115V7.99998H3.5Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M5.8335 29.1672V27.0733H26.186V29.1672H5.8335ZM32.6924 27.3328L25.311 19.9835L32.6753 12.6567L34.1667 14.1481L28.2939 19.9835L34.1838 25.8414L32.6924 27.3328ZM5.8335 21.0027V18.9088H21.3142V21.0027H5.8335ZM5.8335 12.9279V10.834H26.186V12.9279H5.8335Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M7 34.9999V32.7307H31.423V34.9999H7ZM39.3999 32.6499L30.6807 23.9692L39.3691 15.3193L40.9999 16.95L33.9422 23.9692L41.0307 31.0191L39.3999 32.6499ZM7 25.0538V22.7846H25.5768V25.0538H7ZM7 15.2692V13H31.423V15.2692H7Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M3.4165 14.0826V12.9993H12.7594V14.0826H3.4165ZM15.8091 13.6227L12.1697 9.99933L15.8091 6.38397L16.5831 7.158L13.7177 9.99933L16.5831 12.8487L15.8091 13.6227ZM3.4165 10.541V9.45768H10.8235V10.541H3.4165ZM3.4165 6.99933V5.91602H12.7594V6.99933H3.4165Z", fill: "currentColor" }))],
];
export default createIconComponent("MenuBackIcon", iconSizes, ...variants);
//# sourceMappingURL=MenuBack.js.map