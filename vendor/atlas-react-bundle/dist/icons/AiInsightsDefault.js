"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.4299 11.3647C15.8599 11.3647 16.2749 11.2997 16.6699 11.1697C17.0699 11.0397 17.4299 10.8598 17.7549 10.6248L19.8749 12.7498L21.0099 13.8848L22.0649 12.8298L18.8049 9.57477C19.0249 9.24977 19.2049 8.89476 19.3399 8.50476C19.4749 8.11976 19.5449 7.69976 19.5449 7.24976C19.5449 6.09976 19.1449 5.12974 18.3499 4.32974C17.5499 3.53474 16.5749 3.13477 15.4299 3.13477C14.2849 3.13477 13.3099 3.53474 12.5099 4.32974C11.7149 5.12974 11.3149 6.09976 11.3149 7.24976C11.3149 8.39976 11.7149 9.36974 12.5099 10.1697C13.3099 10.9647 14.2799 11.3647 15.4299 11.3647ZM13.5749 5.39474C14.0799 4.88474 14.6999 4.63477 15.4299 4.63477C16.1599 4.63477 16.7799 4.88474 17.2849 5.39474C17.7949 5.89974 18.0449 6.51976 18.0449 7.24976C18.0449 7.97976 17.7949 8.59974 17.2849 9.10474C16.7799 9.61474 16.1599 9.86475 15.4299 9.86475C14.6999 9.86475 14.0799 9.61474 13.5749 9.10474C13.0649 8.59974 12.8149 7.97976 12.8149 7.24976C12.8149 6.51976 13.0649 5.89974 13.5749 5.39474Z", fill: "currentColor" }),
            React.createElement("path", { d: "M3.25 4.99976H9.43V6.74976H3.25V4.99976Z", fill: "currentColor" }),
            React.createElement("path", { d: "M3.25 8.99976H9.43V10.7498H3.25V8.99976Z", fill: "currentColor" }),
            React.createElement("path", { d: "M14.93 12.9998H3.25V14.7498H13.43L14.93 12.9998Z", fill: "currentColor" }),
            React.createElement("path", { d: "M3.25 16.9998H11.43V18.7498H3.25V16.9998Z", fill: "currentColor" }),
            React.createElement("path", { d: "M17.1801 21.4998L15.6801 18.4998L12.6801 16.9998L15.6801 15.4998L17.1801 12.4998L18.6801 15.4998L21.6801 16.9998L18.6801 18.4998L17.1801 21.4998Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M25.8351 18.5501C22.2701 18.5501 19.3701 15.6501 19.3701 12.0851C19.3701 8.52014 22.2701 5.62012 25.8351 5.62012C29.4001 5.62012 32.3001 8.52014 32.3001 12.0851C32.3001 13.4738 31.8601 14.7615 31.1122 15.8162L36.6028 21.3068L35.1179 22.7917L29.6373 17.3111C28.5695 18.09 27.2551 18.5501 25.8351 18.5501ZM25.8351 7.71512C23.4251 7.71512 21.4701 9.67514 21.4701 12.0801C21.4701 14.4851 23.4301 16.4451 25.8351 16.4451C28.2401 16.4451 30.2001 14.4851 30.2001 12.0801C30.2001 9.67514 28.2401 7.71512 25.8351 7.71512Z", fill: "currentColor" }),
            React.createElement("path", { d: "M15.83 8.53491H5.41504V10.6349H15.83V8.53491Z", fill: "currentColor" }),
            React.createElement("path", { d: "M26.13 30.835L28.63 35.835L31.13 30.835L36.13 28.335L31.13 25.835L28.63 20.835L26.13 25.835L21.13 28.335L26.13 30.835Z", fill: "currentColor" }),
            React.createElement("path", { d: "M5.41504 15.2H15.83V17.2999H5.41504V15.2Z", fill: "currentColor" }),
            React.createElement("path", { d: "M19.165 28.5349H5.41504V30.6349H19.165V28.5349Z", fill: "currentColor" }),
            React.createElement("path", { d: "M22.25 23.965L24.35 21.865H5.41504V23.965H22.25Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31.0001 22.1496C26.7801 22.1496 23.3501 18.7196 23.3501 14.4996C23.3501 10.2796 26.7801 6.84961 31.0001 6.84961C35.2201 6.84961 38.6501 10.2796 38.6501 14.4996C38.6501 16.195 38.0965 17.7628 37.1605 19.032L43.817 25.6885L42.1906 27.3149L35.5344 20.6586C34.2649 21.5955 32.6963 22.1496 31.0001 22.1496ZM31.0001 9.14963C28.0501 9.14963 25.6501 11.5496 25.6501 14.4996C25.6501 17.4496 28.0501 19.8496 31.0001 19.8496C33.9501 19.8496 36.3501 17.4496 36.3501 14.4996C36.3501 11.5496 33.9501 9.14963 31.0001 9.14963Z", fill: "currentColor" }),
            React.createElement("path", { d: "M19 10.3496H6.5V12.6497H19V10.3496Z", fill: "currentColor" }),
            React.createElement("path", { d: "M31.3601 36.9995L34.3601 42.9995L37.3601 36.9995L43.3601 33.9995L37.3601 30.9995L34.3601 24.9995L31.3601 30.9995L25.3601 33.9995L31.3601 36.9995Z", fill: "currentColor" }),
            React.createElement("path", { d: "M6.5 18.3496H19V20.6497H6.5V18.3496Z", fill: "currentColor" }),
            React.createElement("path", { d: "M23 34.3496H6.5V36.6497H23V34.3496Z", fill: "currentColor" }),
            React.createElement("path", { d: "M27 28.6497L29.3 26.3496H6.5V28.6497H27Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.915 9.30026C11.12 9.30026 9.65503 7.84028 9.65503 6.04028C9.65503 4.24028 11.115 2.78027 12.915 2.78027C14.715 2.78027 16.175 4.24028 16.175 6.04028C16.175 6.74136 15.9535 7.39086 15.5768 7.9226L18.3055 10.6513L17.5277 11.4292L14.7992 8.70069C14.2671 9.07827 13.6169 9.30026 12.915 9.30026ZM12.915 3.88528C11.725 3.88528 10.755 4.85529 10.755 6.04529C10.755 7.23529 11.725 8.20529 12.915 8.20529C14.105 8.20529 15.075 7.23529 15.075 6.04529C15.075 4.85529 14.105 3.88528 12.915 3.88528Z", fill: "currentColor" }),
            React.createElement("path", { d: "M7.91997 4.24023H2.70996V5.34024H7.91997V4.24023Z", fill: "currentColor" }),
            React.createElement("path", { d: "M13.0651 15.4153L14.3151 17.9153L15.5651 15.4153L18.0651 14.1653L15.5651 12.9153L14.3151 10.4153L13.0651 12.9153L10.5651 14.1653L13.0651 15.4153Z", fill: "currentColor" }),
            React.createElement("path", { d: "M2.70996 7.5752H7.91997V8.67517H2.70996V7.5752Z", fill: "currentColor" }),
            React.createElement("path", { d: "M9.58496 14.2402H2.70996V15.3403H9.58496V14.2402Z", fill: "currentColor" }),
            React.createElement("path", { d: "M11.4 12.0102L12.5 10.9102H2.70996V12.0102H11.4Z", fill: "currentColor" }))],
];
export default createIconComponent("AiInsightsDefaultIcon", iconSizes, ...variants);
//# sourceMappingURL=AiInsightsDefault.js.map