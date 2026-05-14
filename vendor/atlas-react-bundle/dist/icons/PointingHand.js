"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M9.66128 21.0056L2.73828 12.5556L4.16703 11.2306L8.26128 13.9363V2.99609H9.76128V16.7958L6.26503 14.4998L10.3805 19.5056H19.7613V9.50559H21.2613V21.0056H9.66128ZM12.0978 13.0056V6.50559H13.5978V13.0056H12.0978ZM15.9343 13.0056V7.60184H17.4343V13.0056H15.9343Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M16.0772 34.9987L4.69678 21.1354L6.97136 18.8654L13.6368 23.2338V5H15.7309V27.205L8.43803 22.3908L17.1068 32.9046H33.2093V16.2379H35.3034V34.9987H16.0772ZM20.1722 21.6654V10.4433H22.2659V21.6654H20.1722ZM26.7072 21.6654V12.6762H28.8014V21.6654H26.7072Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M19.2773 41.9958L5.71582 25.4923L8.38082 22.7308L16.2848 27.8883V6.00781H18.5543V32.1768L8.92332 25.8073L20.4118 39.7268H40.0153V19.7268H42.2848V41.9958H19.2773ZM24.2118 25.9958V12.2963H26.4808V25.9958H24.2118ZM32.1388 25.9958V15.2193H34.4078V25.9958H32.1388Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M8.8219 17.5886L2.55273 10.0678L3.61836 8.96365L7.28023 10.9893V2.41406H8.36357V12.7889L4.32503 10.4797L9.33794 16.5053H16.3632V7.00531H17.4469V17.5886H8.8219ZM10.3107 10.0886V5.00531H11.394V10.0886H10.3107ZM13.3411 10.0886V6.08552H14.4244V10.0886H13.3411Z", fill: "currentColor" }))],
];
export default createIconComponent("PointingHandIcon", iconSizes, ...variants);
//# sourceMappingURL=PointingHand.js.map