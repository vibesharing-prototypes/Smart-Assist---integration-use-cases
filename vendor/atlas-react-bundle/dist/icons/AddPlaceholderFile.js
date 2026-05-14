"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5 5.66V3H9.2V4.5H6.5V5.66H5ZM19 5.66V3H14.8V4.5H17.5V5.66H19ZM19 9.20667H17.5V14.5267H19V9.20667ZM19 18.0733H17.5V19.2333H14.8V20.7333H19V18.0733ZM9.2 20.7333V19.2333H6.5V18.0733H5V20.7333H9.2ZM5 14.5267H6.5V9.20667H5V14.5267Z", fill: "currentColor" }),
            React.createElement("path", { d: "M11.3396 15.178H12.7051V12.5717H15.3113V11.2063H12.7051V8.6H11.3396V11.2063H8.73333V12.5717H11.3396V15.178Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9 7.91333V5H12.45V6.5H10.5V7.91333H9ZM23.95 5H17.05V6.5H23.95V5ZM28.55 5V6.5H30.5V7.91333H32V5H28.55ZM32 11.7978H30.5V17.6244H32V11.7978ZM32 21.5089H30.5V27.3356H32V21.5089ZM32 31.22H30.5V32.6333H28.55V34.1333H32V31.22ZM23.95 34.1333V32.6333H17.05V34.1333H23.95ZM12.45 34.1333V32.6333H10.5V31.22H9V34.1333H12.45ZM9 27.3356H10.5V21.5089H9V27.3356ZM9 17.6244H10.5V11.7978H9V17.6244Z", fill: "currentColor" }),
            React.createElement("path", { d: "M19.4152 25.0067H21.6584V20.7249H25.9401V18.4817H21.6584V14.2H19.4152V18.4817H15.1334V20.7249H19.4152V25.0067Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10 8.66V6H12.8V7.5H11.5V8.66H10ZM22.1333 6H16.5333V7.5H22.1333V6ZM25.8667 6V7.5H31.4667V6H25.8667ZM35.2 6V7.5H36.5V8.66H38V6H35.2ZM38 12.2067H36.5V17.5267H38V12.2067ZM38 21.0733H36.5V26.3933H38V21.0733ZM38 29.94H36.5V35.26H38V29.94ZM38 38.8067H36.5V39.9667H35.2V41.4667H38V38.8067ZM31.4667 41.4667V39.9667H25.8667V41.4667H31.4667ZM22.1333 41.4667V39.9667H16.5333V41.4667H22.1333ZM12.8 41.4667V39.9667H11.5V38.8067H10V41.4667H12.8ZM10 35.26H11.5V29.94H10V35.26ZM10 26.3933H11.5V21.0733H10V26.3933ZM10 17.5267H11.5V12.2067H10V17.5267Z", fill: "currentColor" }),
            React.createElement("path", { d: "M22.6792 30.3559H25.4101V25.1434H30.6226V22.4125H25.4101V17.1999H22.6792V22.4125H17.4666V25.1434H22.6792V30.3559Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4 4.28V2H7.6V3.5H5.5V4.28H4ZM16 4.28V2H12.4V3.5H14.5V4.28H16ZM16 7.32H14.5V11.88H16V7.32ZM16 14.92H14.5V15.7H12.4V17.2H16V14.92ZM7.6 17.2V15.7H5.5V14.92H4V17.2H7.6ZM4 11.88H5.5V7.32H4V11.88Z", fill: "currentColor" }),
            React.createElement("path", { d: "M9.43388 12.4383H10.6043V10.2043H12.8382V9.03393H10.6043V6.79998H9.43388V9.03393H7.19994V10.2043H9.43388V12.4383Z", fill: "currentColor" }))],
];
export default createIconComponent("AddPlaceholderFileIcon", iconSizes, ...variants);
//# sourceMappingURL=AddPlaceholderFile.js.map