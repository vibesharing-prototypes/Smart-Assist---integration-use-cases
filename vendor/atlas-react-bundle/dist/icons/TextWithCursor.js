"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M14.452 19.84V5.40514H8.88935V3.02275H22.397V5.40514H16.8344V19.84H14.452ZM4 21V2H5.13966V21H4Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M22.084 31.9892V10.1248H13.6118V6.98926H33.6919V10.1248H25.2196V31.9892H22.084Z", fill: "currentColor" }),
            React.createElement("path", { d: "M6.91943 32.8225V5.51172H9.01339V32.8225H6.91943Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M26.1923 39.4901V13.0094H15.9038V9.49023H39.9999V13.0094H29.7114V39.4901H26.1923Z", fill: "currentColor" }),
            React.createElement("path", { d: "M8.35889 40.4901V7.95312H10.6281V40.4901H8.35889Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M10.9539 16.5273V5.54246H6.72076V3.72948H17V5.54246H12.7669V16.5273H10.9539ZM3 17.41V2.95117H3.86727V17.41H3Z", fill: "currentColor" }))],
];
export default createIconComponent("TextWithCursorIcon", iconSizes, ...variants);
//# sourceMappingURL=TextWithCursor.js.map