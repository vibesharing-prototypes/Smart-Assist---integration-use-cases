"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M13.25 18.5V5.5H18.5V18.5H13.25ZM5.5 18.5V5.5H10.7499V18.5H5.5ZM14.75 17H17V6.99998H14.75V17ZM6.99997 17H9.25V6.99998H6.99997V17Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M22.19 29.8326V8.16602H30.8331V29.8326H22.19ZM9.1665 29.8326V8.16602H17.8203V29.8326H9.1665ZM24.284 27.7386H28.7391V10.26H24.284V27.7386ZM11.2605 27.7386H15.7263V10.26H11.2605V27.7386Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M26.6923 37.9999V12H36.9999V37.9999H26.6923ZM11 37.9999V12H21.3268V37.9999H11ZM28.9614 35.7307H34.7307V14.2692H28.9614V35.7307ZM13.2692 35.7307H19.0577V14.2692H13.2692V35.7307Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M11.2082 15.5826V4.41602H15.5831V15.5826H11.2082ZM4.4165 15.5826V4.41602H8.79146V15.5826H4.4165ZM12.2915 14.4993H14.4998V5.49933H12.2915V14.4993ZM5.49982 14.4993H7.70817V5.49933H5.49982V14.4993Z", fill: "currentColor" }))],
];
export default createIconComponent("PauseIcon", iconSizes, ...variants);
//# sourceMappingURL=Pause.js.map