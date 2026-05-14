"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M8.49987 19.2595V14.8362H4.05762L11.9999 4.74023L19.9421 14.8362H15.4999V19.2595H8.49987ZM9.99987 17.7595H13.9999V13.3365H16.7749L11.9999 7.14973L7.22487 13.3365H9.99987V17.7595Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M14.1664 32.3018V24.7273H6.7627L19.9998 7.69727L33.2369 24.7273H25.8331V32.3018H14.1664ZM16.2606 30.2077H23.7389V22.6331H28.8148L19.9998 11.0593L11.1848 22.6331H16.2606V30.2077Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M16.9997 38.8842V29.6727H8.11523L23.9997 9.11523L39.8842 29.6727H30.9997V38.8842H16.9997ZM19.2692 36.6152H28.7302V27.4037H35.0922L23.9997 12.7577L12.9072 27.4037H19.2692V36.6152Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M7.41656 15.8832V12.5722H3.88135L9.99989 4.11719L16.1184 12.5722H12.5832V15.8832H7.41656ZM8.49989 14.7999H11.4999V11.4891H13.9374L9.99989 5.9376L6.06239 11.4891H8.49989V14.7999Z", fill: "currentColor" }))],
];
export default createIconComponent("ResizeNorthIcon", iconSizes, ...variants);
//# sourceMappingURL=ResizeNorth.js.map