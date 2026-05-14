"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M12 21.6533L6.34619 15.9995L7.41539 14.9303L12 19.4957L16.5846 14.9303L17.6538 15.9995L12 21.6533Z", fill: "currentColor" }),
            React.createElement("path", { d: "M6.34621 7.99953L7.43081 9.05335L12 4.50335L16.5693 9.05335L17.6539 7.99953L12 2.3457L6.34621 7.99953Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M20.0002 36.0896L10.5771 26.6665L12.0942 25.1495L20.0002 33.0234L27.9062 25.1495L29.4232 26.6665L20.0002 36.0896Z", fill: "currentColor" }),
            React.createElement("path", { d: "M10.5772 13.3332L12.1027 14.8417L20.0002 6.97632L27.8977 14.8417L29.4232 13.3332L20.0002 3.91016L10.5772 13.3332Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M24 43.3077L12.6924 32L14.3539 30.3385L24 39.9462L33.6462 30.3385L35.3077 32L24 43.3077Z", fill: "currentColor" }),
            React.createElement("path", { d: "M12.6924 16L14.3539 17.6615L24 8.05383L33.6462 17.6615L35.3077 16L24 4.69238L12.6924 16Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M10.0001 17.7112L5.5386 13.2496L6.3046 12.4836L10.0001 16.1631L13.6956 12.4836L14.4616 13.2496L10.0001 17.7112Z", fill: "currentColor" }),
            React.createElement("path", { d: "M5.53857 6.74961L6.29657 7.52363L10.0001 3.83613L13.7036 7.52363L14.4616 6.74961L10.0001 2.28809L5.53857 6.74961Z", fill: "currentColor" }))],
];
export default createIconComponent("SortIcon", iconSizes, ...variants);
//# sourceMappingURL=Sort.js.map