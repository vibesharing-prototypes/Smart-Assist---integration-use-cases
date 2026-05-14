"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M12.25 16.4023H13.75V6.90234H10.25V8.4023H12.25V16.4023ZM20.5 20.1523H3.5V3.15234H20.5V20.1523ZM4.99997 18.6523H19V4.65232H4.99997V18.6523Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M20.6647 27.6315H22.7586V11.6744H17.2694V13.7683H20.6647V27.6315ZM34.1667 33.8196H5.8335V5.48633H34.1667V33.8196ZM7.92745 31.7256H32.0728V7.58029H7.92745V31.7256Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M24.9462 33.2638H27.2153V14.0408H20.8346V16.31H24.9462V33.2638ZM40.9999 40.6522H7V6.65234H40.9999V40.6522ZM9.2692 38.383H38.7307V8.92155H9.2692V38.383Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M9.86686 13.4453H10.9502V5.86198H7.86686V6.94527H9.86686V13.4453ZM16.2418 16.2369H3.0752V3.07031H16.2418V16.2369ZM4.15851 15.1536H15.1585V4.15363H4.15851V15.1536Z", fill: "currentColor" }))],
];
export default createIconComponent("NumberIcon", iconSizes, ...variants);
//# sourceMappingURL=Number.js.map