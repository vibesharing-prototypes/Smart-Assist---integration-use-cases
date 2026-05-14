"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M10.6733 19.4615V13.5H10.5771C9.32841 13.5 8.26623 13.0621 7.3906 12.1865C6.51496 11.3109 6.07715 10.2487 6.07715 8.99998C6.07715 7.75128 6.51496 6.6891 7.3906 5.81345C8.26623 4.93782 9.32841 4.5 10.5771 4.5H18.2885V5.99998H16.2885V19.4615H14.7886V5.99998H12.1732V19.4615H10.6733Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M17.3246 31.4358V21.0939H16.7584C14.7334 21.0939 13.0109 20.3837 11.5911 18.9631C10.1713 17.5426 9.46143 15.8193 9.46143 13.7933C9.46143 11.7673 10.1713 10.0452 11.5911 8.62713C13.0109 7.20904 14.7334 6.5 16.7584 6.5H29.8138V8.59396H26.2775V31.4358H24.1835V8.59396H19.4186V31.4358H17.3246Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M21.7115 39.923V27.2691H20.7884C18.392 27.2691 16.3539 26.4285 14.6739 24.7472C12.9938 23.0659 12.1538 21.0261 12.1538 18.628C12.1538 16.2298 12.9938 14.1923 14.6739 12.5154C16.3539 10.8385 18.392 10 20.7884 10H36.5766V12.2692H32.2113V39.923H29.9421V12.2692H23.9806V39.923H21.7115Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M8.66344 15.5506V11.5826H8.58331C7.58883 11.5826 6.74299 11.2336 6.04579 10.5355C5.3486 9.83734 5 8.9904 5 7.99462C5 6.99884 5.3486 6.15346 6.04579 5.45847C6.74299 4.7635 7.58883 4.41602 8.58331 4.41602H14.5095V5.49933H12.5095V15.5506H11.4262V5.49933H9.74675V15.5506H8.66344Z", fill: "currentColor" }))],
];
export default createIconComponent("ParagraphIcon", iconSizes, ...variants);
//# sourceMappingURL=Paragraph.js.map