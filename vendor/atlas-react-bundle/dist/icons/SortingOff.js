"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M8.40392 12.6538V5.37303L5.5693 8.20765L4.50007 7.15383L9.1539 2.5L13.8077 7.15383L12.7385 8.20765L9.9039 5.37303V12.6538H8.40392ZM14.8366 21.5L10.1827 16.8461L11.2519 15.7923L14.0866 18.6269V11.3462H15.5865V18.6269L18.4212 15.7923L19.4904 16.8461L14.8366 21.5Z", fill: "currentColor" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.5581 21.4419L2.55811 3.44192L3.44199 2.55803L21.442 20.558L20.5581 21.4419Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M14.0685 20.8868V8.16028L8.98299 13.2565L7.50012 11.7822L15.1155 4.16678L22.7308 11.7822L21.2479 13.2565L16.1625 8.16028V20.8868H14.0685ZM24.8687 35.8334L17.2533 28.218L18.7362 26.7437L23.8217 31.8399V19.1134H25.9156V31.8399L31.0118 26.7437L32.484 28.218L24.8687 35.8334Z", fill: "currentColor" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M35.293 36.7072L3.29297 4.70718L4.70718 3.29297L36.7072 35.293L35.293 36.7072Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M16.9194 24.9423V9.31543L10.6001 15.6539L9.00013 14.054L18.054 5.00012L27.1078 14.054L25.5078 15.6539L19.1885 9.31543V24.9423H16.9194ZM29.927 43L20.8732 33.9462L22.4731 32.3462L28.7924 38.6847V23.0578H31.0616V38.6847L37.4 32.3462L38.9808 33.9462L29.927 43Z", fill: "currentColor" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M42.293 43.7072L4.29297 5.70718L5.70718 4.29297L43.7072 42.293L42.293 43.7072Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.6465 17.3539L2.64648 3.35392L3.35359 2.64681L17.3536 16.6468L16.6465 17.3539Z", fill: "currentColor" }),
            React.createElement("path", { d: "M7.08642 10.7118V4.49868L4.68256 6.90253L3.91654 6.12851L7.62806 2.41699L11.3396 6.12851L10.5736 6.90253L8.16973 4.49868V10.7118H7.08642ZM12.3636 17.5836L8.6521 13.8721L9.4181 13.0981L11.822 15.5019V9.28878H12.9053V15.5019L15.3091 13.0981L16.0751 13.8721L12.3636 17.5836Z", fill: "currentColor" }))],
];
export default createIconComponent("SortingOffIcon", iconSizes, ...variants);
//# sourceMappingURL=SortingOff.js.map