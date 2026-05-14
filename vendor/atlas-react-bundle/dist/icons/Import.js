"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M3.5 20.4999V7.49997H8.86535V8.99995H4.99997V19H19V8.99995H15.1346V7.49997H20.5V20.4999H3.5ZM12 15.6538L8.34615 11.9999L9.39998 10.9461L11.25 12.7808V0.75H12.75V12.7808L14.6 10.9461L15.6538 11.9999L12 15.6538Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M5.8335 34.1665V12.5H15.3847V14.5939H7.92745V32.0726H32.0728V14.5939H24.6155V12.5H34.1667V34.1665H5.8335ZM20.0001 26.0277L13.8655 19.8931L15.3676 18.4017L18.9532 21.9893V1.25H21.0471V21.9893L24.6433 18.4017L26.1347 19.8931L20.0001 26.0277Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M7 40.9998V14.9999H18.8268V17.2691H9.2692V38.7306H38.7307V17.2691H29.1731V14.9999H40.9999V40.9998H7ZM24 31.196L16.6116 23.8076L18.2615 22.1768L22.8654 26.7999V1.5H25.1346V26.7999L29.7577 22.1768L31.3884 23.8076L24 31.196Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M3.4165 16.5833V6.41664H7.63763V7.49996H4.49982V15.5H15.4998V7.49996H12.362V6.41664H16.5831V16.5833H3.4165ZM9.99982 12.7115L7.2883 9.99996L8.06232 9.22594L9.45817 10.6298V1.625H10.5415V10.6298L11.9373 9.22594L12.7113 9.99996L9.99982 12.7115Z", fill: "currentColor" }))],
];
export default createIconComponent("ImportIcon", iconSizes, ...variants);
//# sourceMappingURL=Import.js.map