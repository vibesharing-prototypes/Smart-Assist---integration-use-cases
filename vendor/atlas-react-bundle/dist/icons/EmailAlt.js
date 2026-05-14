"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M12 2.5957L21.5 8.25338V21.4995H2.5V8.25338L12 2.5957ZM12 13.6495L19.8 8.9995L12 4.3495L4.19998 8.9995L12 13.6495ZM12 15.4033L3.99998 10.6225V19.9995H20V10.6225L12 15.4033Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M20 4.66016L35.8333 14.0896V36.1664H4.16675V14.0896L20 4.66016ZM20 23.0832L33.4851 15.1131L20 7.03616L6.515 15.1131L20 23.0832ZM20 25.4592L6.26071 17.3224V34.0725H33.7394V17.3224L20 25.4592Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M24 5.19238L42.9999 16.5077V42.9999H5V16.5077L24 5.19238ZM24 27.3L40.473 17.6038L24 7.71538L7.5269 17.6038L24 27.3ZM24 29.823L7.2692 19.9576V40.7307H40.7307V19.9576L24 29.823Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M10.0001 2.49707L17.5834 6.81597V17.5835H2.41675V6.81597L10.0001 2.49707ZM10.0001 11.2294L16.5001 7.50024L10.0001 3.77107L3.50006 7.50024L10.0001 11.2294ZM10.0001 12.5034L3.50006 8.81109V16.5002H16.5001V8.81109L10.0001 12.5034Z", fill: "currentColor" }))],
];
export default createIconComponent("EmailAltIcon", iconSizes, ...variants);
//# sourceMappingURL=EmailAlt.js.map