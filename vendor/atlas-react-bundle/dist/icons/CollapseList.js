"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M7.40002 21.6534L6.34619 20.5995L12 14.9457L17.6538 20.5995L16.6 21.6534L12 17.0534L7.40002 21.6534ZM12 9.05335L6.34619 3.39953L7.40002 2.3457L12 6.9457L16.6 2.3457L17.6538 3.39953L12 9.05335Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M12.2097 35.9828L10.7354 34.5191L20.0003 25.2542L29.2652 34.5191L27.7909 35.9828L20.0003 28.2028L12.2097 35.9828ZM20.0003 14.7285L10.7354 5.46355L12.2097 3.98926L20.0003 11.7798L27.7909 3.98926L29.2652 5.46355L20.0003 14.7285Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M14.5771 43.1157L12.9771 41.5349L24.0001 30.5119L35.0231 41.5349L33.4232 43.1157L24.0001 33.7118L14.5771 43.1157ZM24.0001 17.458L12.9771 6.43496L14.5771 4.83496L24.0001 14.2581L33.4232 4.83496L35.0231 6.43496L24.0001 17.458Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M6.02077 17.7323L5.26758 16.9791L9.99993 12.2259L14.7323 16.9791L13.9791 17.7323L9.99993 13.774L6.02077 17.7323ZM9.99993 7.77395L5.26758 3.02077L6.02077 2.26758L9.99993 6.22591L13.9791 2.26758L14.7323 3.02077L9.99993 7.77395Z", fill: "currentColor" }))],
];
export default createIconComponent("CollapseListIcon", iconSizes, ...variants);
//# sourceMappingURL=CollapseList.js.map