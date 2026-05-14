"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M12.9462 11.9995L8.34619 7.39953L9.40002 6.3457L15.0538 11.9995L9.40002 17.6534L8.34619 16.5995L12.9462 11.9995Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M22.1069 19.9831L14.1582 12.0236L15.6496 10.5322L25.0897 19.9831L15.6496 29.4232L14.1582 27.9318L22.1069 19.9831Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M26.8464 23.969L17.1387 14.242L18.7694 12.6113L30.1078 23.969L18.7694 35.3074L17.1387 33.6766L26.8464 23.969Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M11.1636 9.99961L7.22607 6.06211L8.0001 5.28809L12.7116 9.99961L8.0001 14.7111L7.22607 13.9371L11.1636 9.99961Z", fill: "currentColor" }))],
];
export default createIconComponent("ExpandRightIcon", iconSizes, ...variants);
//# sourceMappingURL=ExpandRight.js.map