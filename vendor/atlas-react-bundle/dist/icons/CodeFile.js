"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M5 21V3H14.1L19 7.97365V21H5ZM13.4 8.68418V4.42103H6.39998V19.579H17.6V8.68418H13.4Z", fill: "currentColor" }),
            React.createElement("path", { d: "M10.1593 17.173L7.33332 14.5893L10.1593 12L10.9858 12.7517L8.9755 14.5937L10.9749 16.4257L10.1593 17.173ZM13.8407 17.1787L13.0142 16.427L15.0245 14.585L13.0251 12.753L13.8407 12.0057L16.6667 14.5893L13.8407 17.1787Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M8.84766 37.0885V5.42188H25.5207L33.8476 13.7487V37.0885H8.84766ZM24.4737 14.7338V7.51583H10.9416V34.9945H31.7536V14.7338H24.4737Z", fill: "currentColor" }),
            React.createElement("path", { d: "M12.9709 26.382L18.0978 21.2552L19.5253 22.6827L15.8378 26.382L19.5253 30.0813L18.0978 31.5088L12.9709 26.382ZM23.1584 22.671L24.5978 21.2552L29.7246 26.382L24.5978 31.5088L23.1584 30.093L26.8577 26.382L23.1584 22.671Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M10.3477 43.2538V5.25391H30.6092L40.3476 14.9923V43.2538H10.3477ZM29.4746 16.0154V7.52311H12.6169V40.9846H38.0784V16.0154H29.4746Z", fill: "currentColor" }),
            React.createElement("path", { d: "M15.1565 30.4452L21.3478 24.2539L22.9581 25.8642L18.3831 30.4452L22.9581 35.0261L21.3478 36.6365L15.1565 30.4452ZM27.7565 25.8832L29.3478 24.2539L35.5391 30.4452L29.3478 36.6365L27.7565 35.0071L32.3124 30.4452L27.7565 25.8832Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M5 17V2H12.15L16 6.14471V17H5ZM11.6 6.73682V3.18419H6.09999V15.8158H14.9V6.73682H11.6Z", fill: "currentColor" }),
            React.createElement("path", { d: "M9.05371 13.8108L6.83332 11.6578L9.05371 9.5L9.70314 10.1264L8.12361 11.6614L9.69456 13.188L9.05371 13.8108ZM11.9463 13.8155L11.2969 13.1891L12.8764 11.6541L11.3054 10.1275L11.9463 9.50471L14.1667 11.6578L11.9463 13.8155Z", fill: "currentColor" }))],
];
export default createIconComponent("CodeFileIcon", iconSizes, ...variants);
//# sourceMappingURL=CodeFile.js.map