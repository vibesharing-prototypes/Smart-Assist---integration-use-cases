"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M4.5 20.75V4.5H12.5961L12.9961 6.5H18.5V15.5H12.4039L12.0039 13.5H5.99997V20.75H4.5ZM13.65 14H17V7.99998H11.75L11.35 5.99998H5.99997V12H13.25L13.65 14Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M8.16699 33.5833V6.5H21.3165L22.0451 9.95729H31.5002V24.3482H21.8251L21.099 20.908H10.261V33.5833H8.16699ZM23.6029 22.2543H29.4063V12.0513H20.2674L19.5387 8.59396H10.261V18.814H22.8742L23.6029 22.2543Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M10 40.4999V8H25.573L26.4845 12.2231H37.9999V29.1268H26.6808L25.7739 24.9345H12.2692V40.4999H10ZM28.6346 26.8577H35.7307V14.4923H24.5307L23.6192 10.2692H12.2692V22.6654H27.723L28.6346 26.8577Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M3.41699 16.791V3.41602H9.66374L10.1637 5.41602H14.5836V12.5826H10.3369L9.83687 10.5826H4.5003V16.791H3.41699ZM11.167 11.4993H13.5003V6.49933H9.33364L8.83364 4.49933H4.5003V9.49933H10.667L11.167 11.4993Z", fill: "currentColor" }))],
];
export default createIconComponent("FlagIcon", iconSizes, ...variants);
//# sourceMappingURL=Flag.js.map