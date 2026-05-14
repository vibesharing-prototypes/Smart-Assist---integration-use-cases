"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M4.50391 21.9101V2.91016H14.2539L19.5039 8.16011V21.9101H4.50391ZM13.5039 8.91011V4.41013H6.00388V20.4101H18.0039V8.91011H13.5039Z", fill: "currentColor" }),
            React.createElement("path", { d: "M7.53564 19.2763V17.7764H13.2225V19.2763H7.53564ZM7.53564 15.9445V14.4445H16.4722V15.9445H7.53564ZM7.53564 12.3389V10.8389H16.4722V12.3389H7.53564Z", fill: "currentColor" }),
            React.createElement("path", { d: "M7.62912 9.7285L9.27339 5.31074H10.3088L11.9745 9.7285H10.8993L10.5858 8.8715H8.87238L8.58269 9.7285H7.62912ZM9.18621 8.00244H10.2846L9.76207 6.51778H9.7173L9.18621 8.00244Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M7.50391 35.0767V3.41016H24.177L32.5038 11.737V35.0767H7.50391ZM23.13 12.722V5.50412H9.59786V32.9828H30.4099V12.722H23.13Z", fill: "currentColor" }),
            React.createElement("path", { d: "M12.3877 30.2053V28.1557H22.3998V30.2053H12.3877ZM12.3877 24.3279V22.2783H28.1211V24.3279H12.3877ZM12.3877 17.9314V15.8818H28.1211V17.9314H12.3877Z", fill: "currentColor" }),
            React.createElement("path", { d: "M12.3877 14.1371L15.0892 6.87877H16.7903L19.527 14.1371H17.7605L17.2454 12.7291H14.4303L13.9544 14.1371H12.3877ZM14.9459 11.3012H16.7506L15.8921 8.86193H15.8185L14.9459 11.3012Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M9.00391 43.4101V5.41016H29.2654L39.0038 15.1486V43.4101H9.00391ZM28.1308 16.1716V7.67936H11.2731V41.1409H36.7346V16.1716H28.1308Z", fill: "currentColor" }),
            React.createElement("path", { d: "M14.3585 38.1467V36.0972H26.6312V38.1467H14.3585ZM14.3584 30.2197V28.1701H33.644V30.2197H14.3584ZM14.3585 22.1833V20.1337H33.6442V22.1833H14.3585Z", fill: "currentColor" }),
            React.createElement("path", { d: "M14.3309 17.3977L17.1689 9.77275H18.9559L21.8309 17.3977H19.9752L19.434 15.9186H16.4767L15.9767 17.3977H14.3309ZM17.0184 14.4186H18.9142L18.0123 11.8561H17.9351L17.0184 14.4186Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M4.58691 16.9107V2.88672H11.7834L15.6584 6.76173V16.9107H4.58691ZM11.2298 7.31531V3.99386H5.69405V15.8035H14.5513V7.31531H11.2298Z", fill: "currentColor" }),
            React.createElement("path", { d: "M6.82465 14.9667V13.8595H11.0222V14.9667H6.82465ZM6.82465 12.5074V11.4003H13.4207V12.5074H6.82465ZM6.82465 9.84608V8.73895H13.4207V9.84608H6.82465Z", fill: "currentColor" }),
            React.createElement("path", { d: "M6.89365 7.91937L8.10729 4.6586H8.87149L10.101 7.91937H9.30737L9.07595 7.28681H7.8113L7.59748 7.91937H6.89365ZM8.04294 6.64535H8.85368L8.46799 5.54952H8.43494L8.04294 6.64535Z", fill: "currentColor" }))],
];
export default createIconComponent("AgendaFileIcon", iconSizes, ...variants);
//# sourceMappingURL=AgendaFile.js.map