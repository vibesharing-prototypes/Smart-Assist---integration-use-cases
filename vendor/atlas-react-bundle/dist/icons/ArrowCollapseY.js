"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M8.90002 19.6534L7.84619 18.5995L12 14.4457L16.1538 18.5995L15.1 19.6534L12 16.5534L8.90002 19.6534ZM12 9.55335L7.84619 5.39953L8.90002 4.3457L12 7.4457L15.1 4.3457L16.1538 5.39953L12 9.55335Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M14.5686 33.7569L13.0771 32.2655L20.0002 25.3424L26.9232 32.2655L25.4318 33.7569L20.0002 28.3253L14.5686 33.7569ZM20.0002 16.6586L13.0771 9.73556L14.5686 8.24414L20.0002 13.6758L25.4318 8.24414L26.9232 9.73556L20.0002 16.6586Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M17.3231 40.3077L15.6924 38.6769L24 30.3693L32.3077 38.6769L30.6769 40.3077L24 33.6308L17.3231 40.3077ZM24 19.6308L15.6924 11.3231L17.3231 9.69238L24 16.3693L30.6769 9.69238L32.3077 11.3231L24 19.6308Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M7.6876 15.7121L6.91357 14.9381L10.0001 11.8516L13.0866 14.9381L12.3126 15.7121L10.0001 13.3996L7.6876 15.7121ZM10.0001 8.1496L6.91357 5.06308L7.6876 4.28906L10.0001 6.60156L12.3126 4.28906L13.0866 5.06308L10.0001 8.1496Z", fill: "currentColor" }))],
];
export default createIconComponent("ArrowCollapseYIcon", iconSizes, ...variants);
//# sourceMappingURL=ArrowCollapseY.js.map