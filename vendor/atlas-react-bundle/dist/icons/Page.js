"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M7.25 16.75H13.75V15.25H7.25V16.75ZM7.25 12.75H16.75V11.25H7.25V12.75ZM7.25 8.74995H16.75V7.25H7.25V8.74995ZM3.5 20.5V3.5H20.5V20.5H3.5ZM4.99997 19H19V4.99998H4.99997V19Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M12.0215 27.9334H22.7586V25.8394H12.0215V27.9334ZM12.0215 21.0466H27.9787V18.9527H12.0215V21.0466ZM12.0215 14.1598H27.9787V12.0659H12.0215V14.1598ZM5.8335 34.1663V5.83301H34.1667V34.1663H5.8335ZM7.92745 32.0723H32.0728V7.92697H7.92745V32.0723Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M14.3885 33.5307H27.2153V31.2615H14.3885V33.5307ZM14.3885 25.1346H33.6115V22.8654H14.3885V25.1346ZM14.3885 16.7384H33.6115V14.4692H14.3885V16.7384ZM7 40.9999V7H40.9999V40.9999H7ZM9.2692 38.7307H38.7307V9.2692H9.2692V38.7307Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M6.20841 13.792H11.7917V12.7087H6.20841V13.792ZM6.20841 10.542H13.7917V9.45866H6.20841V10.542ZM6.20841 7.29195H13.7917V6.20866H6.20841V7.29195ZM3.41675 16.5836V3.41699H16.5834V16.5836H3.41675ZM4.50006 15.5003H15.5001V4.50031H4.50006V15.5003Z", fill: "currentColor" }))],
];
export default createIconComponent("PageIcon", iconSizes, ...variants);
//# sourceMappingURL=Page.js.map