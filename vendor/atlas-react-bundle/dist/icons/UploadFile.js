"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M11.25 18.3845H12.75V13.95L14.6 15.8L15.6538 14.7308L12 11.077L8.34625 14.7308L9.4155 15.7845L11.25 13.95V18.3845ZM4.5 21.5V2.5H14.25L19.5 7.75V21.5H4.5ZM13.5 8.5V4H6V20H18V8.5H13.5Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M18.9979 30.5966H21.0917V22.5174L24.5363 25.9724L26.0108 24.4895L20 18.5578L14.0342 24.5345L15.5063 25.9982L18.9979 22.5174V30.5966ZM7.5 35.8337V4.16699H24.1729L32.5 12.4941V35.8337H7.5ZM23.1263 13.4791V6.26116H9.59417V33.7395H30.4058V13.4791H23.1263Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M22.946 36.6885H25.2155V26.5805L29.5655 30.95L31.1655 29.35L24 22.327L16.9155 29.4305L18.496 31.0115L22.946 26.5805V36.6885ZM9 43V5H29.2615L39 14.7385V43H9ZM28.127 15.7615V7.2695H11.2695V40.7305H36.7305V15.7615H28.127Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M10.4587 14.4874H11.542V11.1462L12.9378 12.542L13.7118 11.776L11.0003 9.06449L8.28887 11.776L9.05491 12.5499L10.4587 11.1462V14.4874ZM5.41699 17.5837V2.41699H13.2087L16.5837 5.79199V17.5837H5.41699ZM12.417 6.58366V3.50033H6.50033V16.5003H15.5003V6.58366H12.417Z", fill: "currentColor" }))],
];
export default createIconComponent("UploadFileIcon", iconSizes, ...variants);
//# sourceMappingURL=UploadFile.js.map