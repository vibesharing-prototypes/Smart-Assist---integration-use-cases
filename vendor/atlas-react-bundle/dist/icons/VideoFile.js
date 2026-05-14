"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M8.25 17.8077H13.8654V15.7692L15.7884 16.7807V13.2192L13.8654 14.2308V12.1923H8.25V17.8077ZM4.5 21.5V2.5H14.25L19.5 7.74995V21.5H4.5ZM13.5 8.49995V3.99998H5.99997V20H18V8.49995H13.5Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M13.688 29.6788H23.1538V26.0784L26.3589 27.8433V22.1553L23.1538 23.9203V20.3199H13.688V29.6788ZM7.5 35.8326V4.16602H24.1731L32.4999 12.4928V35.8326H7.5ZM23.1261 13.4779V6.25997H9.59396V33.7386H30.406V13.4779H23.1261Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M16.3884 35.6153H27.8115V31.173L31.6576 33.3384V26.6615L27.8115 28.8269V24.3846H16.3884V35.6153ZM9 42.9999V5H29.2615L38.9999 14.7384V42.9999H9ZM28.1269 15.7615V7.2692H11.2692V40.7307H36.7307V15.7615H28.1269Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M7.20841 14.3391H11.3879V12.7654L12.8238 13.775V10.7237L11.3879 11.7333V10.1596H7.20841V14.3391ZM4.41675 17.5826V2.41602H12.2084L15.5834 5.79097V17.5826H4.41675ZM11.4167 6.58264V3.49933H5.50006V16.4993H14.5001V6.58264H11.4167Z", fill: "currentColor" }))],
];
export default createIconComponent("VideoFileIcon", iconSizes, ...variants);
//# sourceMappingURL=VideoFile.js.map