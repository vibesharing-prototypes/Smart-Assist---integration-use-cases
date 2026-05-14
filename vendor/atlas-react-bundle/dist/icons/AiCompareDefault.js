"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.71509 3.11501H10.7151V1H12.2151V22.23H10.7151V20.115H3.71509V3.11501ZM7.46509 7.11501H10.7151V4.61501H5.21509V18.615H10.7151V16.115H7.46509V14.615H10.7151V12.365H7.46509V10.865H10.7151V8.61501H7.46509V7.11501Z", fill: "currentColor" }),
            React.createElement("path", { d: "M20.7151 15L19.2151 13.385V4.61499H13.7151V3.11499H20.7151V15Z", fill: "currentColor" }),
            React.createElement("path", { d: "M17.4651 7.11499H13.7151V8.61499H17.4651V7.11499Z", fill: "currentColor" }),
            React.createElement("path", { d: "M18.9651 16.75L17.4651 13.75L15.9651 16.75L12.9651 18.25L15.9651 19.75L17.4651 22.75L18.9651 19.75L21.9651 18.25L18.9651 16.75Z", fill: "currentColor" }),
            React.createElement("path", { d: "M17.4651 10.865H13.7151V12.365H17.4651V10.865Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.215 2.08496H18.115V5.61499H6.45007V33.55H18.115V37.0849H20.215V2.08496ZM18.115 18.5352V14.3851H12.5V12.2852H18.115V7.71498H8.55007V31.45H18.115V26.8851H12.5V24.7852H18.115V20.6351H12.5V18.5352H18.115Z", fill: "currentColor" }),
            React.createElement("path", { d: "M31.665 28.1401L29.165 23.1401L26.665 28.1401L21.665 30.6401L26.665 33.1402L29.165 38.1402L31.665 33.1402L36.665 30.6401L31.665 28.1401Z", fill: "currentColor" }),
            React.createElement("path", { d: "M29.165 18.5352H22.915V20.6351H29.165V18.5352Z", fill: "currentColor" }),
            React.createElement("path", { d: "M22.915 12.2852H29.165V14.3851H22.915V12.2852Z", fill: "currentColor" }),
            React.createElement("path", { d: "M34.385 24.35V5.61499H22.915V7.71498H32.285V22.25L34.385 24.35Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24.1501 2.5H21.8501V6.8501H7.8501V40.1501H21.8501V44.5H24.1501V2.5ZM21.8501 22.3501V17.1501H15V14.8501H21.8501V9.15009H10.1501V37.8501H21.8501V32.1501H15V29.8501H21.8501V24.6501H15V22.3501H21.8501Z", fill: "currentColor" }),
            React.createElement("path", { d: "M38 33.77L35 27.77L32 33.77L26 36.77L32 39.77L35 45.77L38 39.77L44 36.77L38 33.77Z", fill: "currentColor" }),
            React.createElement("path", { d: "M35 22.3501H27.5V24.6501H35V22.3501Z", fill: "currentColor" }),
            React.createElement("path", { d: "M27.5 14.8501H35V17.1501H27.5V14.8501Z", fill: "currentColor" }),
            React.createElement("path", { d: "M41.15 30.0001V6.8501H27.5V9.15009H38.85V27.7001L41.15 30.0001Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.135 1.04004H9.03503V2.78516H3.20007V16.8002H9.03503V18.54H10.135V1.04004ZM9.03503 9.23999V7.21498H6.25V6.11499H9.03503V3.88515H4.30008V15.7001H9.03503V13.465H6.25V12.365H9.03503V10.34H6.25V9.23999H9.03503Z", fill: "currentColor" }),
            React.createElement("path", { d: "M15.835 14.0701L14.585 11.5701L13.335 14.0701L10.835 15.3201L13.335 16.5701L14.585 19.0701L15.835 16.5701L18.335 15.3201L15.835 14.0701Z", fill: "currentColor" }),
            React.createElement("path", { d: "M14.585 9.23999H11.46V10.34H14.585V9.23999Z", fill: "currentColor" }),
            React.createElement("path", { d: "M11.46 6.11499H14.585V7.21498H11.46V6.11499Z", fill: "currentColor" }),
            React.createElement("path", { d: "M17.215 12.5002V2.78516H11.46V3.88515H16.115V11.4001L17.215 12.5002Z", fill: "currentColor" }))],
];
export default createIconComponent("AiCompareDefaultIcon", iconSizes, ...variants);
//# sourceMappingURL=AiCompareDefault.js.map