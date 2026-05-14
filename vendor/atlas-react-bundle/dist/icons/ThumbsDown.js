"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantFilled, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M17.7884 2.9043V14.9042L11.1538 21.5004L9.79425 20.1408L11.0077 14.9042H2.5V11.1197L5.97692 2.9043H17.7884ZM16.2885 4.40427H6.99035L3.99998 11.4139V13.4043H12.9038L11.65 18.885L16.2885 14.2658V4.40427ZM17.7884 14.9042V13.4043H21V4.40427H17.7884V2.9043H22.5V14.9042H17.7884Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M28.6921 4.17383V24.0156L17.6793 35.1673L15.7402 33.4654L17.7627 24.0156H3.14941V17.8042L8.98916 4.17383H28.6921ZM26.5981 6.26778H10.3513L5.24337 18.3394V21.9217H20.3481L18.2861 31.6375L26.5981 23.1267V6.26778ZM28.6921 24.0156V21.9217H34.3096V6.26778H28.6921V4.17383H36.4036V24.0156H28.6921Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M34.6576 5.80762V29.5229L21.4692 42.9998L19.3385 41.2959L21.7654 29.5229H3.96924V22.1268L11.0038 5.80762H34.6576ZM32.3884 8.07682H12.4422L6.23839 22.796V27.2537H24.523L22.0653 39.2614L32.3884 28.5614V8.07682ZM34.6576 29.5229V27.2537H41.5576V8.07682H34.6576V5.80762H43.8268V29.5229H34.6576Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M14.8239 2.58594V12.6067L9.25335 18.0827L8.03704 16.8663L9.06908 12.6067H2.0835V9.34875L4.98093 2.58594H14.8239ZM13.4697 3.91925H5.86712L3.41681 9.61477V11.2734H10.7534L9.68764 15.7574L13.4697 12.0539V3.91925ZM14.8239 12.6067L14.803 11.2734H17.4168V3.91925H14.803V2.58594H18.7501V12.6067H14.8239Z", fill: "currentColor" }))],
    [VariantFilled, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M2.5 14.9043V11.1198L5.977 2.9043H17.173V14.9043L10.5385 21.5003L9.179 20.1408L10.3925 14.9043H2.5ZM18.673 14.9043V2.9043H22.5V14.9043H18.673Z", fill: "currentColor" }))],
    [VariantFilled, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M3.10986 24.0155V17.8213L8.94945 4.17383H28.9069V24.0155L17.8836 35.1672L15.9444 33.4934L17.9669 24.0155H3.10986ZM31.0007 24.0155V4.17383H36.4432V24.0155H31.0007Z", fill: "currentColor" }))],
    [VariantFilled, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M3.89795 29.5231V22.1576L10.9324 5.80762H35.6594V29.5231L22.4519 42.9996L20.3209 41.3461L22.7479 29.5231H3.89795ZM37.9284 29.5231V5.80762H43.8979V29.5231H37.9284Z", fill: "currentColor" }))],
    [VariantFilled, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M1.8335 12.0866V9.62034L4.68933 2.91992H15.061V12.0866L9.36558 17.7499L8.29516 17.1378L9.20225 12.0866H1.8335ZM16.1443 12.0866V2.91992H19.0002V12.0866H16.1443Z", fill: "currentColor" }))],
];
export default createIconComponent("ThumbsDownIcon", iconSizes, ...variants);
//# sourceMappingURL=ThumbsDown.js.map