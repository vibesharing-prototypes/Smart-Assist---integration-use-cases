"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M7.09613 8.90383H8.90383V7.09613H7.09613V8.90383ZM7.09613 12.9038H8.90383V11.0961H7.09613V12.9038ZM7.09613 16.9038H8.90383V15.0961H7.09613V16.9038ZM3.5 20.5V3.5H15.7884L20.5 8.21153V20.5H3.5ZM4.99997 19H19V8.99998H15V4.99998H4.99997V19Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M11.81 14.4173H14.4168V11.8104H11.81V14.4173ZM11.81 21.304H14.4168V18.6972H11.81V21.304ZM11.81 28.1908H14.4168V25.5839H11.81V28.1908ZM5.8335 34.1672V5.83398H26.3591L34.1667 13.6417V34.1672H5.8335ZM7.92745 32.0733H32.0728V14.8147H25.186V7.92794H7.92745V32.0733Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M14.1615 17.0461H17.0461V14.1615H14.1615V17.0461ZM14.1615 25.4423H17.0461V22.5577H14.1615V25.4423ZM14.1615 33.8384H17.0461V30.9538H14.1615V33.8384ZM7 40.9999V7H31.6576L40.9999 16.3423V40.9999H7ZM9.2692 38.7307H38.7307V17.6654H30.3346V9.2692H9.2692V38.7307Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M6.07994 7.4192H7.41969V6.07945H6.07994V7.4192ZM6.07994 10.6692H7.41969V9.32945H6.07994V10.6692ZM6.07994 13.9192H7.41969V12.5795H6.07994V13.9192ZM3.4165 16.5826V3.41602H12.8235L16.5831 7.17562V16.5826H3.4165ZM4.49982 15.4993H15.4998V7.99933H11.9998V4.49933H4.49982V15.4993Z", fill: "currentColor" }))],
];
export default createIconComponent("SummarizeIcon", iconSizes, ...variants);
//# sourceMappingURL=Summarize.js.map