"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M6 9.83398L3.67969 10.7041L7.19043 20.0693L12.0449 18.249H16.3096L6.31543 21.999L1.75 9.8291L6 8.23438V9.83398ZM20.5 3.23438V16.2344H7.5V3.23438H20.5ZM9 4.73438V14.7344H19V4.73438H9ZM15.085 8.64941L17.25 9.73438L15.085 10.8193L14 12.9844L12.915 10.8193L10.75 9.73438L12.915 8.64941L14 6.48438L15.085 8.64941Z", fill: "url(#paint0_linear_34216_474)" }),
            React.createElement("defs", null,
                React.createElement("linearGradient", { id: "paint0_linear_34216_474", x1: "2.61207", y1: "9.56744", x2: "19.6561", y2: "23.0647", gradientUnits: "userSpaceOnUse" },
                    React.createElement("stop", { stopColor: "#BE0C1E" }),
                    React.createElement("stop", { offset: "0.5", stopColor: "#AB48DA" }),
                    React.createElement("stop", { offset: "1", stopColor: "#4069FE" }))))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M10 16.39L6.13283 17.8402L11.9841 33.4489L20.0749 30.415H27.1826L10.5257 36.665L2.91669 16.3818L10 13.724V16.39ZM34.1667 5.39062V27.0573H12.5V5.39062H34.1667ZM15 7.89062V24.5573H31.6667V7.89062H15ZM25.1416 14.4157L28.75 16.224L25.1416 18.0322L23.3334 21.6406L21.5251 18.0322L17.9167 16.224L21.5251 14.4157L23.3334 10.8073L25.1416 14.4157Z", fill: "url(#paint0_linear_34216_476)" }),
            React.createElement("defs", null,
                React.createElement("linearGradient", { id: "paint0_linear_34216_476", x1: "4.35347", y1: "15.9457", x2: "32.7601", y2: "38.4412", gradientUnits: "userSpaceOnUse" },
                    React.createElement("stop", { stopColor: "#BE0C1E" }),
                    React.createElement("stop", { offset: "0.5", stopColor: "#AB48DA" }),
                    React.createElement("stop", { offset: "1", stopColor: "#4069FE" }))))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M12 19.668L7.35938 21.4082L14.3809 40.1387L24.0898 36.498H32.6191L12.6309 43.998L3.5 19.6582L12 16.4688V19.668ZM41 6.46875V32.4688H15V6.46875H41ZM18 9.46875V29.4688H38V9.46875H18ZM30.1699 17.2988L34.5 19.4688L30.1699 21.6387L28 25.9688L25.8301 21.6387L21.5 19.4688L25.8301 17.2988L28 12.9688L30.1699 17.2988Z", fill: "url(#paint0_linear_34216_478)" }),
            React.createElement("defs", null,
                React.createElement("linearGradient", { id: "paint0_linear_34216_478", x1: "5.22414", y1: "19.1349", x2: "39.3121", y2: "46.1294", gradientUnits: "userSpaceOnUse" },
                    React.createElement("stop", { stopColor: "#BE0C1E" }),
                    React.createElement("stop", { offset: "0.5", stopColor: "#AB48DA" }),
                    React.createElement("stop", { offset: "1", stopColor: "#4069FE" }))))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M4.99998 8.19499L3.06639 8.92008L5.992 16.7244L10.0374 15.2075H13.5913L5.26284 18.3325L1.45831 8.19092L4.99998 6.86198V8.19499ZM17.0833 2.69531V13.5286H6.24998V2.69531H17.0833ZM7.49998 3.94531V12.2786H15.8333V3.94531H7.49998ZM12.5708 7.20784L14.375 8.11198L12.5708 9.01611L11.6666 10.8203L10.7625 9.01611L8.95831 8.11198L10.7625 7.20784L11.6666 5.40365L12.5708 7.20784Z", fill: "url(#paint0_linear_34216_480)" }),
            React.createElement("defs", null,
                React.createElement("linearGradient", { id: "paint0_linear_34216_480", x1: "2.1767", y1: "7.97287", x2: "16.38", y2: "19.2206", gradientUnits: "userSpaceOnUse" },
                    React.createElement("stop", { stopColor: "#BE0C1E" }),
                    React.createElement("stop", { offset: "0.5", stopColor: "#AB48DA" }),
                    React.createElement("stop", { offset: "1", stopColor: "#4069FE" }))))],
];
export default createIconComponent("AiSmartBuilderIcon", iconSizes, ...variants);
//# sourceMappingURL=AiSmartBuilder.js.map