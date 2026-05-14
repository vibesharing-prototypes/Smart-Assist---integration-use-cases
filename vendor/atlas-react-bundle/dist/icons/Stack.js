"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M6.3077 14V15.5H2.5V2.5H15.5V6.3077H14V3.99998H3.99998V14H6.3077ZM8.5 21.5V8.5H21.5V21.5H8.5ZM9.99998 20H20V9.99998H9.99998V20Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M10.9189 23.7396V25.8336H4.16675V4.16699H25.8333V10.9191H23.7394V6.26095H6.26071V23.7396H10.9189ZM14.1667 35.8336V14.167H35.8333V35.8336H14.1667ZM16.2607 33.7396H33.7394V16.261H16.2607V33.7396Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M13.3462 28.7307V30.9999H5V5H30.9999V13.3462H28.7307V7.2692H7.2692V28.7307H13.3462ZM17 42.9999V17H42.9999V42.9999H17ZM19.2692 40.7307H40.7307V19.2692H19.2692V40.7307Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M5.7565 11.5003V12.5836H2.41675V2.41699H12.5834V5.75674H11.5001V3.50031H3.50006V11.5003H5.7565ZM7.41675 17.5836V7.41699H17.5834V17.5836H7.41675ZM8.50006 16.5003H16.5001V8.50031H8.50006V16.5003Z", fill: "currentColor" }))],
];
export default createIconComponent("StackIcon", iconSizes, ...variants);
//# sourceMappingURL=Stack.js.map