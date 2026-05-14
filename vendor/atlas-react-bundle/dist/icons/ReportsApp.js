"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M2.8674 20.0965L8.59618 12.0965H13.627L20.3461 4.25237V20.0965H2.8674ZM3.76155 14.983L2.56543 14.1215L6.64428 8.40424H11.6847L16.2885 3.02539L17.4231 4.00807L12.3539 9.90422H7.39426L3.76155 14.983ZM5.79618 18.5965H18.8462V8.29649L14.2962 13.5965H9.34618L5.79618 18.5965Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M4.77876 33.4938L14.3267 20.1606H22.7113L33.91 7.08697V33.4938H4.77876ZM6.11093 24.4864L4.43359 23.2706L11.0564 14.0068H19.4293L27.0511 5.12109L28.6322 6.49393L20.3866 16.1007H12.1034L6.11093 24.4864ZM8.86518 31.3998H31.816V12.7332L23.6408 22.2545H15.3737L8.86518 31.3998Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M5.73434 40.1922L17.1919 24.1923H27.2534L40.6918 8.50398V40.1922H5.73434ZM7.23804 29.0923L5.41504 27.7654L13.2573 16.8077H23.2881L32.4034 6.19238L34.1149 7.68078L24.3419 19.0769H14.3919L7.23804 29.0923ZM10.1611 37.923H38.4226V14.623L28.2573 26.4615H18.3265L10.1611 37.923Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M2.70184 16.2467L7.20499 10.0801H11.2098L16.4549 3.70998V16.2467H2.70184ZM3.57197 12.1522L2.7002 11.5176L5.74507 7.33654H9.75788L13.1778 3.1875L14.0191 3.8814L10.2739 8.41985H6.28672L3.57197 12.1522ZM4.85082 15.1634H15.3717V6.74675L11.7258 11.1634H7.74665L4.85082 15.1634Z", fill: "currentColor" }))],
];
export default createIconComponent("ReportsAppIcon", iconSizes, ...variants);
//# sourceMappingURL=ReportsApp.js.map