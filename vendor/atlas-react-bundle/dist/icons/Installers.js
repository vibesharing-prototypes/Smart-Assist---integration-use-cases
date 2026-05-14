"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M5 7.90375V19H19V7.90375H15.5V15.298L12 13.548L8.5 15.298V7.90375H5ZM3.5 20.5V6.35775L5.85775 3.5H18.1328L20.5 6.377V20.5H3.5ZM5.3905 6.404H18.6L17.4135 5H6.577L5.3905 6.404ZM10 7.90375V12.8558L12 11.8558L14 12.8558V7.90375H10Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M7.92766 12.4847V32.0722H32.0727V12.4847H25.8335V25.2484L20.0002 22.3318L14.1668 25.2484V12.4847H7.92766ZM5.8335 34.1663V10.5788L9.56016 5.83301H30.4072L34.1668 10.6109V34.1663H5.8335ZM8.59516 10.3909H31.3614L29.3493 7.92718H10.6177L8.59516 10.3909ZM16.261 12.4847V21.8488L20.0002 19.9793L23.7393 21.8488V12.4847H16.261Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M9.2695 14.5695V38.7305H38.7305V14.5695H31V30.15L24 26.65L17 30.15V14.5695H9.2695ZM7 41V12.6845L11.35 7H36.6L41 12.723V41H7ZM10.081 12.3H37.85L35.4155 9.2695H12.5345L10.081 12.3ZM19.2695 14.5695V26.473L24 24.1075L28.7305 26.473V14.5695H19.2695Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M4.49984 6.92012V15.5003H15.4998V6.92012H12.5832V12.4153L9.99984 11.1237L7.4165 12.4153V6.92012H4.49984ZM3.4165 16.5837V5.46512L5.46463 3.41699H14.5271L16.5832 5.48116V16.5837H3.4165ZM4.61692 5.83699H15.3748L14.0944 4.50033H5.89734L4.61692 5.83699ZM8.49984 6.92012V10.651L9.99984 9.90095L11.4998 10.651V6.92012H8.49984Z", fill: "currentColor" }))],
];
export default createIconComponent("InstallersIcon", iconSizes, ...variants);
//# sourceMappingURL=Installers.js.map