"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M14.6583 19.6079L11.5306 16.4802L8.38944 19.6214L6.86651 6.8664L19.6215 8.38933L16.4803 11.5305L19.608 14.6582L14.6583 19.6079ZM14.6583 17.4866L17.4867 14.6582L14.3592 11.5307L16.3214 9.56844L8.57028 8.57018L9.56854 16.3213L11.5308 14.3591L14.6583 17.4866Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M24.5742 32.823L19.2182 27.4669L13.983 32.7022L11.3009 11.3001L32.703 13.9821L27.4678 19.2174L32.8238 24.5734L24.5742 32.823ZM24.5742 29.8614L29.8622 24.5734L24.5062 19.2174L28.0953 15.6282L13.6783 13.6775L15.629 28.0945L19.2182 24.5053L24.5742 29.8614Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M29.5753 39.4766L23.0618 32.963L16.7795 39.2453L13.4752 13.4769L39.2436 16.7813L32.9613 23.0635L39.4748 29.5771L29.5753 39.4766ZM29.5757 36.2674L36.2656 29.5774L29.7521 23.0639L34.2507 18.5653L16.0508 16.0526L18.5635 34.2525L23.0622 29.7538L29.5757 36.2674Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M12.3333 15.9861L9.99203 13.6448L7.49226 16.1446L5.84013 5.83955L16.1452 7.49168L13.6454 9.99145L15.9867 12.3327L12.3333 15.9861ZM12.3333 14.454L14.4546 12.3327L12.1135 9.9916L13.8371 8.26802L7.12736 7.12678L8.2686 13.8365L9.99218 12.1129L12.3333 14.454Z", fill: "currentColor" }))],
];
export default createIconComponent("ResizeNorthWestIcon", iconSizes, ...variants);
//# sourceMappingURL=ResizeNorthWest.js.map