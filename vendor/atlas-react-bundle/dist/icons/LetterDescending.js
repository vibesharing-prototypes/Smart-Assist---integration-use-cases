"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M14.7474 3.79785L17.882 6.90168L16.7974 7.9555L15.4974 6.65548V20.2017H13.9974V6.65548L12.6974 7.9555L11.6436 6.90168L14.7474 3.79785Z", fill: "currentColor" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.13496 10.791L7.49654 9.65723H9.46222L9.82476 10.791H11.1853L9.07021 5.09863H7.88169L5.77441 10.791H7.13496ZM8.47807 6.57948L7.81074 8.67201H9.14718L8.47807 6.57948Z", fill: "currentColor" }),
            React.createElement("path", { d: "M7.87284 17.9139L10.6352 13.8852V13.2046H6.28174V14.1942H9.07217L6.28956 18.2034V18.8996H10.6782V17.9139H7.87284Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M24.7782 6.36035L19.8359 11.2514L21.3615 12.7257L23.7312 10.356V33.7001H25.8252V10.356L28.1948 12.7257L29.6692 11.2514L24.7782 6.36035Z", fill: "currentColor" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.9449 15.8966L11.2355 18.0078H9.33936L12.8841 8.52051H14.5391L18.1034 18.0078H16.2007L15.4879 15.8966H11.9449ZM12.4201 14.4827L13.7121 10.6376L15.0104 14.4827H12.4201Z", fill: "currentColor" }),
            React.createElement("path", { d: "M12.3133 30.1027L17.2497 22.9199V21.8481H10.0869V23.2927H15.0178L10.0669 30.4422V31.5406H17.3762V30.1027H12.3133Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M29.8717 7.60449L24.1102 13.3045L25.7717 14.9044L28.7371 11.939V40.4121H31.0063V11.939L33.9717 14.9044L35.5717 13.3045L29.8717 7.60449Z", fill: "currentColor" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.7147 18.8936L12.8002 21.5468H10.7539L15.0176 10.2184H16.7915L21.0708 21.5468H19.0168L18.1001 18.8936H13.7147ZM14.2484 17.3453L15.9049 12.5395L17.5652 17.3453H14.2484Z", fill: "currentColor" }),
            React.createElement("path", { d: "M13.9589 36.264L20.1798 27.2211V25.9492H11.5062V27.5904H17.6895L11.4569 36.5922V37.897H20.3685V36.264H13.9589Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M12.372 3.16715L10.1765 5.37867L10.9345 6.15269L11.8303 5.25684V16.7976H12.9136V5.25684L13.8095 6.15269L14.5835 5.37867L12.372 3.16715Z", fill: "currentColor" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.16947 7.50461L5.78923 8.66357H4.58496L6.6273 3.16699H7.68056L9.73423 8.66357H8.52619L8.14499 7.50461H6.16947ZM6.46053 6.61746L7.15598 4.49773L7.85319 6.61746H6.46053Z", fill: "currentColor" }),
            React.createElement("path", { d: "M6.46683 15.914L9.19822 11.9312V11.3008H5.06823V12.1879H7.81247L5.06445 16.148V16.7974H9.25484V15.914H6.46683Z", fill: "currentColor" }))],
];
export default createIconComponent("LetterDescendingIcon", iconSizes, ...variants);
//# sourceMappingURL=LetterDescending.js.map