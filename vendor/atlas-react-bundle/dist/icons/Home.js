"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M5.99997 18.9996H9.34615V13.0573H14.6538V18.9996H18V9.99964L12 5.48042L5.99997 9.99964V18.9996ZM4.5 20.4996V9.24967L12 3.60547L19.5 9.24967V20.4996H13.1538V14.5573H10.8461V20.4996H4.5Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M9.59396 32.0727H15.7799V21.9659H24.22V32.0727H30.406V16.4637L20 8.62185L9.59396 16.4602V32.0727ZM7.5 34.1667V15.4168L20 6.00977L32.4999 15.4168V34.1667H22.126V24.0599H17.8739V34.1667H7.5Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M11.2692 38.731H19.0577V26.481H28.9422V38.731H36.7307V19.6349L23.9999 10.0388L11.2692 19.6285V38.731ZM9 41.0002V18.5003L23.9999 7.21191L38.9999 18.5003V41.0002H26.673V28.7502H21.3268V41.0002H9Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M5.50006 15.5H7.78854V10.5481H12.2116V15.5H14.5001V8.25003L10.0001 4.85901L5.50006 8.25003V15.5ZM4.41675 16.5833V7.70838L10.0001 3.50488L15.5834 7.70838V16.5833H11.1283V11.6314H8.87185V16.5833H4.41675Z", fill: "currentColor" }))],
];
export default createIconComponent("HomeIcon", iconSizes, ...variants);
//# sourceMappingURL=Home.js.map