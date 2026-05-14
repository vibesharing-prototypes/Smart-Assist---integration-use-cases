"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M7.33655 21.5094L11.3558 14.2498L3.5 13.2979L15.125 2.49023H16.6827L12.6153 9.75943L20.5 10.7018L8.87498 21.5094H7.33655ZM11.5307 16.9211L17.1327 11.8114L10.2346 10.9902L12.4731 7.07476L6.86725 12.1941L13.7403 13.0287L11.5307 16.9211Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M12.3517 35.8665L19.2705 23.6262L5.8335 22.0397L25.5183 4.13379H27.6806L20.6817 16.3902L34.1667 17.9607L14.4926 35.8665H12.3517ZM18.2201 29.4372L29.4115 19.5279L17.3399 18.1145L21.8037 10.5289L10.5716 20.482L22.6187 21.9179L18.2201 29.4372Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M14.8962 44.0501L23.3308 29.277L7 27.3732L30.8077 5.9502H33.1422L24.6115 20.7425L40.9999 22.6271L17.2115 44.0501H14.8962ZM21.2653 37.0656L35.8077 24.3386L20.9769 22.6155L26.7732 12.8769L12.1614 25.6732L26.973 27.4232L21.2653 37.0656Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M6.28054 17.5908L9.29656 11.7912L3.41675 10.8312L12.6042 2.4082H13.7356L10.6795 8.21587L16.5834 9.16781L7.39589 17.5908H6.28054ZM8.94231 14.663L14.2357 9.86329L9.0706 9.03316L11.0819 5.31195L5.76446 10.1406L10.9295 10.9819L8.94231 14.663Z", fill: "currentColor" }))],
];
export default createIconComponent("LightningIcon", iconSizes, ...variants);
//# sourceMappingURL=Lightning.js.map