"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M4.5 21.5V2.5H14.25L19.5 7.74995V14.25H18V8.49995H13.5V3.99998H5.99997V20H15.25V21.5H4.5ZM21.95 22.0192L18.75 18.8191V21.4096H17.25V16.25H22.4096V17.7499H19.7942L22.9942 20.95L21.95 22.0192Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M7.5 35.8336V4.16699H23.75L32.4999 12.9169V24.3593H30.406V14.1669H22.5V6.26095H9.59396V33.7396H26.0256V35.8336H7.5ZM36.5833 36.4169L31.0469 30.8805V35.9308H28.953V27.2867H37.5972V29.3806H32.5052L38.0416 34.917L36.5833 36.4169Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M9 42.9999V5H28.5L38.9999 15.4999V29.5961H36.7307V16.9999H27V7.2692H11.2692V40.7307H31.5961V42.9999H9ZM43.9 43.5307L37.1346 36.7653V43.2653H34.8654V32.8654H45.2653V35.1346H38.7153L45.4807 41.9L43.9 43.5307Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M4.4165 17.3121V2.14551H12.2082L15.5831 5.52047V11.9372H14.4998V6.31213H11.4165V3.22882H5.49982V16.2288H12.7082V17.3121H4.4165ZM17.7082 17.7032L15.2915 15.2865V17.2785H14.2082V13.4372H18.0495V14.5205H16.0366L18.4533 16.9372L17.7082 17.7032Z", fill: "currentColor" }))],
];
export default createIconComponent("OpenFileIcon", iconSizes, ...variants);
//# sourceMappingURL=OpenFile.js.map