"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M14.4705 12.663L14.4679 12.6603L14.4732 12.655L12.3138 10.4956L12.3203 8.58915L14.078 10.3469L15.0861 9.33882L11.6185 5.87125L8.15093 9.3388L9.15901 10.3469L10.9167 8.58917L10.9103 11.1082L12.4597 12.6576L10.9076 14.2098L10.914 17.0749L12.3176 17.0749L12.3111 14.8224L14.4705 12.663Z", fill: "currentColor" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2 11.5884L11.5884 21.1768L21.1768 11.5884L11.5884 2L2 11.5884ZM19.1919 11.5884L11.5884 19.1919L3.9849 11.5884L11.5884 3.9849L19.1919 11.5884Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M19.9103 36.5812L3.14111 19.8121L19.9103 3.04297L36.6794 19.8121L19.9103 36.5812ZM19.9103 33.6305L33.7287 19.8121L19.9103 5.99372L6.0919 19.8121L19.9103 33.6305Z", fill: "currentColor" }),
            React.createElement("path", { d: "M18.8635 30.3085V26.364L22.8788 22.1883L18.8635 18.9758V13.6064L15.2342 17.2272L13.7759 15.7796L19.9105 9.64502L26.045 15.7796L24.5868 17.2272L20.9574 13.6064V17.9962L25.4533 22.078L20.9574 26.9116V30.3085H18.8635Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M23.91 43.9069L3.81396 23.8109L23.91 3.71484L44.0061 23.8109L23.91 43.9069ZM23.91 40.6839L40.7831 23.8109L23.91 6.93785L7.03697 23.8109L23.91 40.6839Z", fill: "currentColor" }),
            React.createElement("path", { d: "M22.7492 36.8917V28.9324L27.3991 24.9543L22.7492 19.887V14.5176L19.1199 18.1384L17.6616 16.6907L23.7962 10.5562L29.9308 16.6907L28.4725 18.1384L24.8432 14.5176V19.144L29.9308 24.9543L24.8432 29.77V36.8917H22.7492Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M12.4047 10.8966L12.4025 10.8943L12.4069 10.8899L10.6052 9.0882L10.6106 7.4976L12.0772 8.96414L12.9182 8.12308L10.0251 5.22994L7.13198 8.12306L7.97306 8.96414L9.43958 7.49761L9.4342 9.59931L10.727 10.8921L9.43196 12.1871L9.43734 14.5776L10.6084 14.5776L10.603 12.6982L12.4047 10.8966Z", fill: "currentColor" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2 10L10 18L18 10L10 2L2 10ZM16.3439 10L10 16.3439L3.65608 10L10 3.65608L16.3439 10Z", fill: "currentColor" }))],
];
export default createIconComponent("RiskIcon", iconSizes, ...variants);
//# sourceMappingURL=Risk.js.map