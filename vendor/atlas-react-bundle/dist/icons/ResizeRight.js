"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.3101 14.1849L10.3101 20.5L4.84863 20.5L4.84863 3.5L10.3101 3.5L10.3101 9.8151H12.4514L12.4514 7.08399L19.1509 12L12.4514 16.916V14.1849H10.3101ZM5.94314 4.59363L9.26614 4.59363L9.26514 10.9075L9.26614 10.9092L13.6695 10.9075L13.6695 9.39178L17.2324 12L13.6695 14.6082L13.6695 13.0924L9.26514 13.0938L9.26613 19.4464H5.94314L5.94314 4.59363Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17.4096 23.3489V33.0303L9.0376 33.0303V6.9707H17.4096V16.6503H20.6925V12.4638L30.9623 19.9996L20.6925 27.5354V23.3489H17.4096ZM10.7154 8.64715L15.8093 8.64715L15.808 18.325H15.8093V18.329L22.5598 18.325V16.0014L28.0214 19.9996L22.5598 23.9978V21.6742L15.808 21.6777L15.8093 31.4153H10.7154L10.7154 8.64715Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.8654 28.0541L20.8654 39.7715L10.7324 39.7715L10.7324 8.23047L20.8654 8.23047L20.8654 19.9466H24.8387L24.8387 14.8794L37.2687 24.0003L24.8387 33.1212L24.8387 28.0541H20.8654ZM12.7631 10.2595L18.9285 10.2595L18.927 21.9734H18.9285V21.9801L27.0987 21.9734L27.0987 19.1612L33.7092 24.0003L27.0987 28.8395V26.0272H25.2522V26.0332L18.927 26.0332L18.9284 37.8168H12.7631L12.7631 10.2595Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.67166 11.7186V16.6846H4.37695V3.31641H8.67166V8.28235H10.3556V6.1347L15.6238 10.0005L10.3556 13.8662V11.7186H8.67166ZM5.23763 4.1764L7.85071 4.1764L7.85059 9.14141L7.85071 9.14346L11.3134 9.14141V7.94946L14.1152 10.0005L11.3134 12.0515V10.8595L7.85059 10.8613L7.85071 15.8561L5.23763 15.8561L5.23763 4.1764Z", fill: "currentColor" }))],
];
export default createIconComponent("ResizeRightIcon", iconSizes, ...variants);
//# sourceMappingURL=ResizeRight.js.map