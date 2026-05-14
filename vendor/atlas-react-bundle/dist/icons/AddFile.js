"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M11.25 17.75H12.75V14.75H15.75V13.25H12.75V10.25H11.25V13.25H8.25V14.75H11.25V17.75ZM4.5 21.5V2.5H14.25L19.5 7.74995V21.5H4.5ZM13.5 8.49995V3.99998H5.99997V20H18V8.49995H13.5Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M18.953 29.7075H21.0469V24.5216H26.2499V22.4277H21.0469V17.2247H18.953V22.4277H13.75V24.5216H18.953V29.7075ZM7.5 35.8336V4.16699H24.1731L32.4999 12.4938V35.8336H7.5ZM23.1261 13.4789V6.26095H9.59396V33.7396H30.406V13.4789H23.1261Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M22.8654 35.723H25.1346V29.3884H31.4999V27.1192H25.1346V20.7539H22.8654V27.1192H16.5V29.3884H22.8654V35.723ZM9 42.9999V5H29.2615L38.9999 14.7384V42.9999H9ZM28.1269 15.7615V7.2692H11.2692V40.7307H36.7307V15.7615H28.1269Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M10.4587 14.792H11.5419V12.542H13.792V11.4587H11.5419V9.20866H10.4587V11.4587H8.20866V12.542H10.4587V14.792ZM5.41699 17.5836V2.41699H13.2087L16.5836 5.79195V17.5836H5.41699ZM12.417 6.58362V3.50031H6.5003V16.5003H15.5003V6.58362H12.417Z", fill: "currentColor" }))],
];
export default createIconComponent("AddFileIcon", iconSizes, ...variants);
//# sourceMappingURL=AddFile.js.map