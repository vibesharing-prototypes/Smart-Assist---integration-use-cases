"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.5 8.69225V21.5H11.0064V20H4.99998V8.69225H19V11.0264H20.5V8.69225H21.5V2.5H2.5V8.69225H3.5ZM3.99998 7.1923H20V3.99998H3.99998V7.1923Z", fill: "currentColor" }),
            React.createElement("path", { d: "M14.8077 13.4326H9.1923V12H14.8077V13.4326Z", fill: "currentColor" }),
            React.createElement("path", { d: "M11.5961 16.6769L15.5 20.5807L22.223 13.8577L21.1692 12.8038L15.5 18.4731L12.65 15.6231L11.5961 16.6769Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.83268 14.0815V35.8336H18.1581V33.7396H7.92664V14.0815H32.072V18.0778H34.1659V14.0815H35.8326V4.16699H4.16602V14.0815H5.83268ZM6.25997 11.9875H33.7386V6.26095H6.25997V11.9875Z", fill: "currentColor" }),
            React.createElement("path", { d: "M15.3198 21.982H24.6788V20.0003H15.3198V21.982Z", fill: "currentColor" }),
            React.createElement("path", { d: "M19.5332 28.0652L25.8366 34.3686L37.0417 23.1634L35.5502 21.6721L25.8366 31.3857L21.0246 26.5738L19.5332 28.0652Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7 16.6538V42.9999H21.7412V40.7307H9.2692V16.6538H38.7307V21.5246H40.9999V16.6538H42.9999V5H5V16.6538H7ZM7.2692 14.3846H40.7307V7.2692H7.2692V14.3846Z", fill: "currentColor" }),
            React.createElement("path", { d: "M18.3846 26.1345H29.6153V24H18.3846V26.1345Z", fill: "currentColor" }),
            React.createElement("path", { d: "M23.5586 33.8316L31.0008 41.2739L44.4469 27.8278L42.8162 26.1971L31.0008 38.0124L25.1893 32.2009L23.5586 33.8316Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.41602 7.74387V17.5836H9.01023V16.5003H4.49933V7.74387H15.4993V9.00567H16.5826V7.74387H17.5826V2.41699H2.41602V7.74387H3.41602ZM3.49933 6.66058H16.4993V3.50031H3.49933V6.66058Z", fill: "currentColor" }),
            React.createElement("path", { d: "M8.1596 11.0275H11.8391V10.0003H8.1596V11.0275Z", fill: "currentColor" }),
            React.createElement("path", { d: "M9.60156 13.4537L12.8339 16.7069L18.2281 11.3127L17.4541 10.5387L12.8339 15.1589L10.3756 12.6797L9.60156 13.4537Z", fill: "currentColor" }))],
];
export default createIconComponent("AssetInventoryIcon", iconSizes, ...variants);
//# sourceMappingURL=AssetInventory.js.map