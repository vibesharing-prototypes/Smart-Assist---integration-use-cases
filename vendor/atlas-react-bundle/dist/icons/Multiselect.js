"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M16.2404 19.4514L13.0461 16.2572L14.0904 15.213L16.2153 17.338L20.4654 13.088L21.5096 14.1572L16.2404 19.4514ZM16.2404 11.8361L13.0461 8.64186L14.0904 7.59766L16.2153 9.72266L20.4654 5.47266L21.5096 6.54186L16.2404 11.8361ZM2.5 17.5572V16.0572H11V17.5572H2.5ZM2.5 9.94183V8.44188H11V9.94183H2.5Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M27.1461 31.4715L21.8225 26.1478L23.2808 24.6896L27.1323 28.5133L34.3908 21.244L35.8491 22.744L27.1461 31.4715ZM27.1461 18.7793L21.8225 13.4556L23.2808 11.9973L27.1323 15.821L34.3908 8.55176L35.8491 10.0517L27.1461 18.7793ZM4.1665 28.3936V26.2996H18.3331V28.3936H4.1665ZM4.1665 15.7013V13.6073H18.3331V15.7013H4.1665Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M32.623 37.3959L26.2346 31.0075L27.8153 29.4268L32.623 34.1845L41.4384 25.3498L43.0191 26.9806L32.623 37.3959ZM32.623 22.1652L26.2346 15.7768L27.8153 14.1961L32.623 18.9537L41.4384 10.1191L43.0191 11.7499L32.623 22.1652ZM5 33.7498V31.4806H22V33.7498H5ZM5 18.5191V16.2499H22V18.5191H5Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M13.2835 16.0432L10.7466 13.5063L11.5126 12.7403L13.2626 14.5112L16.8043 10.9695L17.5911 11.7355L13.2835 16.0432ZM13.2835 9.86371L10.7466 7.32687L11.5126 6.56087L13.2835 8.33171L16.8043 4.79004L17.5911 5.55604L13.2835 9.86371ZM2.4165 14.6313V13.548H8.99982V14.6313H2.4165ZM2.4165 8.45185V7.36856H8.99982V8.45185H2.4165Z", fill: "currentColor" }))],
];
export default createIconComponent("MultiselectIcon", iconSizes, ...variants);
//# sourceMappingURL=Multiselect.js.map