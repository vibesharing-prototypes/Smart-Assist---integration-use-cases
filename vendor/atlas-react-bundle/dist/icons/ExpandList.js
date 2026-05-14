"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M12 21.6534L6.34619 15.9995L7.41539 14.9303L12 19.4957L16.5846 14.9303L17.6538 15.9995L12 21.6534ZM7.43079 9.05335L6.34619 7.99953L12 2.3457L17.6538 7.99953L16.5692 9.05335L12 4.50335L7.43079 9.05335Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M20.0002 36.0896L10.5771 26.6665L12.0942 25.1495L20.0002 33.0234L27.9062 25.1495L29.4232 26.6665L20.0002 36.0896ZM12.1027 14.8417L10.5771 13.3332L20.0002 3.91016L29.4232 13.3332L27.8976 14.8417L20.0002 6.97632L12.1027 14.8417Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M24 43.3077L12.6924 32L14.3539 30.3385L24 39.9462L33.6462 30.3385L35.3077 32L24 43.3077ZM14.3539 17.6615L12.6924 16L24 4.69238L35.3077 16L33.6462 17.6615L24 8.05383L14.3539 17.6615Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M10.0001 17.7121L5.53857 13.2506L6.30457 12.4846L10.0001 16.1641L13.6956 12.4846L14.4616 13.2506L10.0001 17.7121ZM6.29657 7.5246L5.53857 6.75058L10.0001 2.28906L14.4616 6.75058L13.7036 7.5246L10.0001 3.8371L6.29657 7.5246Z", fill: "currentColor" }))],
];
export default createIconComponent("ExpandListIcon", iconSizes, ...variants);
//# sourceMappingURL=ExpandList.js.map