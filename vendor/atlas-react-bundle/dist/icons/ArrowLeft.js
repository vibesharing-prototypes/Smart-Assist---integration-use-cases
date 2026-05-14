"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M9.95192 17.6534L4.2981 11.9995L9.95192 6.3457L11.0057 7.4303L7.1865 11.2496H19.7019V12.7495H7.1865L11.0057 16.5688L9.95192 17.6534Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M16.5866 29.4237L7.16357 20.0007L16.6037 10.5605L18.0951 12.0413L11.1827 18.9537H32.8537V21.0476H11.1827L18.078 27.943L16.5866 29.4237Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M19.9038 35.3082L8.59619 24.0005L19.9346 12.6621L21.5653 14.2428L12.9422 22.8659H39.4345V25.1351H12.9422L21.5345 33.7274L19.9038 35.3082Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M7.96006 13.7121L4.24854 10.0006L7.96006 6.28906L8.73408 7.04706L6.3222 9.45894H15.7517V10.5422H6.3222L8.73408 12.9541L7.96006 13.7121Z", fill: "currentColor" }))],
];
export default createIconComponent("ArrowLeftIcon", iconSizes, ...variants);
//# sourceMappingURL=ArrowLeft.js.map