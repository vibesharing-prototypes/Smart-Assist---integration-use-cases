"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M15 20.5V17.5H11V7.49995H8.49995V10.5H2V3H8.49995V6H15V3H21.5V10.5H15V7.49995H12.5V16H15V13H21.5V20.5H15ZM16.5 9H20V4.49995H16.5V9ZM16.5 19H20V14.5H16.5V19ZM3.49995 9H7V4.49995H3.49995V9Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M25.7457 34.1666V29.0598H19.203V12.1901H14.7713V17.3931H4V5H14.7713V10.0961H25.7457V5H36.4999V17.3931H25.7457V12.1901H21.2969V26.9658H25.7457V21.7628H36.4999V34.1666H25.7457ZM27.8397 15.2991H34.406V7.09396H27.8397V15.2991ZM27.8397 32.0726H34.406V23.8568H27.8397V32.0726ZM6.09396 15.2991H12.6773V7.09396H6.09396V15.2991Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M31.1423 41.9999V35.8076H23.3654V15.4423H17.8884V21.8076H5V7H17.8884V13.1731H31.1423V7H43.9999V21.8076H31.1423V15.4423H25.6346V33.5385H31.1423V27.1731H43.9999V41.9999H31.1423ZM33.4115 19.5385H41.7308V9.26915H33.4115V19.5385ZM33.4115 39.7308H41.7308V29.4423H33.4115V39.7308ZM7.26915 19.5385H15.6192V9.26915H7.26915V19.5385Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M13 16.5833V14.3333H9.25V6.33329H6.58329V8.58329H2V3H6.58329V5.25H13V3H17.5833V8.58329H13V6.33329H10.3333V13.25H13V11H17.5833V16.5833H13ZM14.0833 7.5H16.5V4.08329H14.0833V7.5ZM14.0833 15.5H16.5V12.0833H14.0833V15.5ZM3.08329 7.5H5.5V4.08329H3.08329V7.5Z", fill: "currentColor" }))],
];
export default createIconComponent("FlowsIcon", iconSizes, ...variants);
//# sourceMappingURL=Flows.js.map