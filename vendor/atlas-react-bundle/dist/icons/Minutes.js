"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M7.62117 9.665V4.70975H8.84815L9.58502 8.08986L10.3151 4.70975H11.5455V9.665H10.785V5.76434L9.97711 9.665H9.18616L8.38508 5.76434V9.665H7.62117Z", fill: "currentColor" }),
            React.createElement("path", { d: "M4.5 21.5V2.5H14.25L19.5 7.74995V21.5H4.5ZM13.5 8.49995V3.99998H5.99997V20H18V8.49995H13.5Z", fill: "currentColor" }),
            React.createElement("path", { d: "M7.53174 18.8662V17.3662H13.2186V18.8662H7.53174ZM7.53174 15.5344V14.0344H16.4683V15.5344H7.53174ZM7.53174 11.9287V10.4287H16.4683V11.9287H7.53174Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M12.4026 15.2208V7.30865H14.3617L15.5383 12.7058L16.7041 7.30865H18.6686V15.2208H17.4543V8.99255L16.1644 15.2208H14.9014L13.6223 8.99255V15.2208H12.4026Z", fill: "currentColor" }),
            React.createElement("path", { d: "M7.5 35.8326V4.16602H24.1731L32.4999 12.4928V35.8326H7.5ZM23.1261 13.4779V6.25997H9.59396V33.7386H30.406V13.4779H23.1261Z", fill: "currentColor" }),
            React.createElement("path", { d: "M12.3838 30.9612V28.9116H22.3959V30.9612H12.3838ZM12.3838 25.0838V23.0342H28.1171V25.0838H12.3838ZM12.3838 18.6872V16.6376H28.1171V18.6872H12.3838Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M14.4834 18.0548V8.78798H16.778L18.156 15.1091L19.5214 8.78798H21.8223V18.0548H20.4V10.7602L18.8892 18.0548H17.4101L15.912 10.7602V18.0548H14.4834Z", fill: "currentColor" }),
            React.createElement("path", { d: "M9 42.9999V5H29.2615L38.9999 14.7384V42.9999H9ZM28.1269 15.7615V7.2692H11.2692V40.7307H36.7307V15.7615H28.1269Z", fill: "currentColor" }),
            React.createElement("path", { d: "M14.3546 37.7366V35.687H26.6273V37.7366H14.3546ZM14.3544 29.8096V27.76H33.6401V29.8096H14.3544ZM14.3546 21.7732V19.7236H33.6403V21.7732H14.3546Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M6.74174 7.95839V4.84294H7.51317L7.97645 6.96808L8.43548 4.84294H9.20903V7.95839H8.73087V5.50598L8.22297 7.95839H7.72568L7.22203 5.50598V7.95839H6.74174Z", fill: "currentColor" }),
            React.createElement("path", { d: "M4.46436 17.0122V2.98828H11.6609L15.5359 6.86329V17.0122H4.46436ZM11.1073 7.41687V4.09542H5.57149V15.9051H14.4287V7.41687H11.1073Z", fill: "currentColor" }),
            React.createElement("path", { d: "M6.70209 15.0682V13.9611H10.8996V15.0682H6.70209ZM6.70209 12.609V11.5019H13.2982V12.609H6.70209ZM6.70209 9.94764V8.84051H13.2982V9.94764H6.70209Z", fill: "currentColor" }))],
];
export default createIconComponent("MinutesIcon", iconSizes, ...variants);
//# sourceMappingURL=Minutes.js.map