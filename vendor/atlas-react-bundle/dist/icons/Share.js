"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M7.19118 14.7171V6.33479H18.7717L15.6144 3.17741L16.8093 1.98242L22 7.173L16.8093 12.3743L15.6144 11.1965L18.7717 8.01121H8.86759V14.7171H7.19118ZM3 21.1436V3.04634H4.67644V19.4671H18.0882V14.7171H19.7647V21.1436H3Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M12.8063 23.6737V11.5798H30.1547L25.2433 6.66842L26.7433 5.18555L34.1845 12.6268L26.7433 20.1011L25.2433 18.6268L30.1547 13.6737H14.9003V23.6737H12.8063ZM6.15039 33.46V6.06696H8.24435V31.3661H29.0564V23.6737H31.1503V33.46H6.15039Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M15.5476 29.3748V15.1056H36.413L30.3976 9.09019L32.0283 7.49023L40.7783 16.2402L32.0283 25.0401L30.3976 23.4402L36.413 17.3748H17.8168V29.3748H15.5476ZM7.31689 41.2401V8.12488H9.58609V38.9709H35.0476V29.3748H37.3168V41.2401H7.31689Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M6.30883 12.249V5.6314H15.4514L12.9587 3.13873L13.9021 2.19531L18 6.29315L13.9021 10.3995L12.9587 9.46963L15.4514 6.95489H7.63232V12.249H6.30883ZM3 17.3226V3.03525H4.32351V15.9991H14.9118V12.249H16.2353V17.3226H3Z", fill: "currentColor" }))],
];
export default createIconComponent("ShareIcon", iconSizes, ...variants);
//# sourceMappingURL=Share.js.map