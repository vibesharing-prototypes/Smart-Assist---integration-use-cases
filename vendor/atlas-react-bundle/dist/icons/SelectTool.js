"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M18.4014 11.8418V13.3418L14.4552 13.3418L20.2956 19.1918L19.2514 20.236L13.4014 14.3956L13.4014 18.3418L11.9014 18.3418L11.9014 11.8418L18.4014 11.8418Z", fill: "currentColor" }),
            React.createElement("path", { d: "M3.5 17V15H4.99997V17H3.5Z", fill: "currentColor" }),
            React.createElement("path", { d: "M3.5 13V11H4.99997V13H3.5Z", fill: "currentColor" }),
            React.createElement("path", { d: "M3.5 8.99998V6.99998H4.99997V8.99998H3.5Z", fill: "currentColor" }),
            React.createElement("path", { d: "M6.99998 20.5V19H8.99998V20.5H6.99998Z", fill: "currentColor" }),
            React.createElement("path", { d: "M6.99998 4.99998V3.5H8.99998V4.99998H6.99998Z", fill: "currentColor" }),
            React.createElement("path", { d: "M11 4.99998V3.5H13V4.99998H11Z", fill: "currentColor" }),
            React.createElement("path", { d: "M15 4.99998V3.5H17V4.99998H15Z", fill: "currentColor" }),
            React.createElement("path", { d: "M19 8.99998V6.99998H20.5V8.99998H19Z", fill: "currentColor" }),
            React.createElement("path", { d: "M3.5 4.99998V3.5H4.99997V4.99998H3.5Z", fill: "currentColor" }),
            React.createElement("path", { d: "M20.5 4.99998H19V3.5H20.5V4.99998Z", fill: "currentColor" }),
            React.createElement("path", { d: "M3.5 20.5V19H4.99997V20.5H3.5Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M5.8335 28.5818V25.1865H7.92745V28.5818H5.8335ZM5.8335 21.6844V18.2891H7.92745V21.6844H5.8335ZM5.8335 14.8147V11.4194H7.92745V14.8147H5.8335ZM11.4189 34.1672V32.0733H14.8142V34.1672H11.4189ZM11.4189 7.92794V5.83398H14.8142V7.92794H11.4189ZM18.3164 7.92794V5.83398H21.7117V7.92794H18.3164ZM25.186 7.92794V5.83398H28.5813V7.92794H25.186ZM32.0728 14.8147V11.4194H34.1667V14.8147H32.0728ZM5.8335 7.92794V5.83398H7.92745V7.92794H5.8335ZM34.1667 7.92794H32.0728V5.83398H34.1667V7.92794ZM5.8335 34.1672V32.0733H7.92745V34.1672H5.8335Z", fill: "currentColor" }),
            React.createElement("path", { d: "M29.532 19.4621L29.5251 21.5539L22.4744 21.6121L33.0048 32.1424L31.4924 33.6548L20.9507 23.1131L20.9213 30.1578L18.8128 30.1812L18.8476 19.5052L29.532 19.4621Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M7 34.4461V30.3346H9.2692V34.4461H7ZM7 26.0307V21.9192H9.2692V26.0307H7ZM7 17.6654V13.5538H9.2692V17.6654H7ZM13.5538 40.9999V38.7307H17.6654V40.9999H13.5538ZM13.5538 9.2692V7H17.6654V9.2692H13.5538ZM21.9692 9.2692V7H26.0807V9.2692H21.9692ZM30.3346 9.2692V7H34.4461V9.2692H30.3346ZM38.7307 17.6654V13.5538H40.9999V17.6654H38.7307ZM7 9.2692V7H9.2692V9.2692H7ZM40.9999 9.2692H38.7307V7H40.9999V9.2692ZM7 40.9999V38.7307H9.2692V40.9999H7Z", fill: "currentColor" }),
            React.createElement("path", { d: "M36.2692 24.1177V26.3869L27.8691 26.3869L40.8191 39.3753L39.2384 40.9368L26.2692 27.9868V36.3869L24 36.3869L24 24.1177L36.2692 24.1177Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M16.2135 14.8577L15.4395 15.6317L10.5372 10.7294V14.6317H9.45392L9.45392 8.87207L15.2135 8.87207V9.95536L11.3112 9.95536L16.2135 14.8577Z", fill: "currentColor" }),
            React.createElement("path", { d: "M3.4165 13.8743V12.3743H4.49982V13.8743H3.4165ZM3.4165 10.7493V9.24933H4.49982V10.7493H3.4165ZM3.4165 7.62433V6.12433H4.49982V7.62433H3.4165ZM6.12482 16.5826V15.4993H7.62482V16.5826H6.12482ZM6.12482 4.49933V3.41602H7.62482V4.49933H6.12482ZM9.24982 4.49933V3.41602H10.7498V4.49933H9.24982ZM12.3748 4.49933V3.41602H13.8748V4.49933H12.3748ZM15.4998 7.49933V5.99933H16.5831V7.49933H15.4998ZM3.4165 4.49933V3.41602H4.49982V4.49933H3.4165ZM16.5831 4.49933H15.4998V3.41602H16.5831V4.49933ZM3.4165 16.5826V15.4993H4.49982V16.5826H3.4165Z", fill: "currentColor" }))],
];
export default createIconComponent("SelectToolIcon", iconSizes, ...variants);
//# sourceMappingURL=SelectTool.js.map