"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M2.5 18.5V3.5H9.79803L11.798 5.5H21.5V18.5H2.5ZM3.99998 17H20V6.99998H11.1846L9.1846 4.99998H3.99998V17ZM12.7962 12.75L11.0269 14.5192L12.0808 15.573L15.6538 12L12.0808 8.42693L11.0269 9.48075L12.7962 11.25H8.34615V12.75H12.7962Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M4.16699 32.4999V7.5H16.7535L19.6808 10.4274H35.8336V32.4999H4.16699ZM6.26095 30.406H33.7396V12.5213H18.8272L15.8999 9.59396H6.26095V30.406ZM22.0944 22.7136L18.9427 25.8653L20.417 27.3396L26.09 21.6666L20.417 15.9936L18.9427 17.4679L22.0944 20.6197H13.9106V22.7136H22.0944Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M5 38.9999V9H20.3576L23.6269 12.2693H42.9999V38.9999H5ZM7.2692 36.7307H40.7307V14.5385H22.7038L19.4346 11.2692H7.2692V36.7307ZM26.9731 27.1345L23.0692 31.0384L24.6692 32.6384L31.3076 26L24.6692 19.3616L23.0692 20.9615L26.9731 24.8654H16.6923V27.1345H26.9731Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M2.41699 15.5826V4.41602H7.83201L9.83201 6.41602H17.5836V15.5826H2.41699ZM3.5003 14.4993H16.5003V7.49933H9.38333L7.38333 5.49933H3.5003V14.4993ZM10.6221 11.541L9.31443 12.8487L10.0885 13.6227L12.7118 10.9993L10.0885 8.37595L9.31443 9.14997L10.6221 10.4577H7.28878V11.541H10.6221Z", fill: "currentColor" }))],
];
export default createIconComponent("MoveFolderIcon", iconSizes, ...variants);
//# sourceMappingURL=MoveFolder.js.map