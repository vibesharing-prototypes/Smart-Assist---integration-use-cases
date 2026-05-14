"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M17.5 11.7809L6.00005 11.7809L6.00005 13.2808L17.5 13.2808L17.5 11.7809Z", fill: "currentColor" }),
            React.createElement("path", { d: "M6.09622 8.65383L7.15004 9.70765L11.75 5.10765L16.35 9.70765L17.4039 8.65383L11.75 3L6.09622 8.65383Z", fill: "currentColor" }),
            React.createElement("path", { d: "M6.09622 16.3455L7.15004 15.2916L11.75 19.8916L16.35 15.2916L17.4039 16.3455L11.75 21.9993L6.09622 16.3455Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M19.425 36.3366L10.002 26.9136L11.519 25.3966L19.425 33.2705L27.331 25.3966L28.848 26.9136L19.425 36.3366ZM11.5275 15.0888L10.002 13.5803L19.425 4.15723L28.848 13.5803L27.3225 15.0888L19.425 7.22339L11.5275 15.0888Z", fill: "currentColor" }),
            React.createElement("path", { d: "M9.84131 21.2942V19.2002H29.0079V21.2942H9.84131Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M12.4248 22.4082H35.4247V24.6774H12.4248L12.4248 22.4082ZM12.8339 17.3463L23.9185 6.26172L35.0031 17.3463L33.3724 18.977L23.9185 9.52322L14.4647 18.977L12.8339 17.3463Z", fill: "currentColor" }),
            React.createElement("path", { d: "M33.7941 29.2936L35.4248 30.9243L24.1172 42.2319L12.8095 30.9551L14.4403 29.3243L24.1172 39.0012L33.7941 29.2936Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M14.4741 9.23393L5.00016 9.23393L5.00016 10.4696L14.4741 10.4696L14.4741 9.23393Z", fill: "currentColor" }),
            React.createElement("path", { d: "M5.07938 6.65777L5.94755 7.52594L9.73715 3.73634L13.5268 7.52594L14.3949 6.65777L9.73715 2L5.07938 6.65777Z", fill: "currentColor" }),
            React.createElement("path", { d: "M5.07938 12.9943L5.94755 12.1262L9.73715 15.9158L13.5268 12.1262L14.3949 12.9943L9.73715 17.6521L5.07938 12.9943Z", fill: "currentColor" }))],
];
export default createIconComponent("RearrangeYIcon", iconSizes, ...variants);
//# sourceMappingURL=RearrangeY.js.map