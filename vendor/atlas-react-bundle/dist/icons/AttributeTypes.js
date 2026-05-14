"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M3 21.5768V5.44527H12.929L11.5056 6.86863H4.42336V20.1535H17.7082V13.011L19.1316 11.5877V21.5768H3ZM8.69352 15.8833V12.626L18.3195 3L21.5331 6.22628L11.9052 15.8833H8.69352ZM10.1169 14.46H11.2994L17.2137 8.54563L16.6225 7.95438L15.9893 7.34489L10.1169 13.2173V14.46Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M3.20752 36.3639V8.03064H21.2107L19.1167 10.1246H5.30148V34.2699H29.4468V20.304L31.5408 18.2101V36.3639H3.20752ZM13.2075 26.3639V20.6428L30.0974 3.75293L35.7587 9.40239L18.8485 26.3639H13.2075ZM15.3015 24.2699H17.9703L28.7812 13.459L27.4436 12.1278L26.0387 10.7752L15.3015 21.4953V24.2699Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M3.71973 43.1971V9.19722H25.662L23.3928 11.4664H5.98893V40.9279H35.4504V23.3164L37.7196 21.0472V43.1971H3.71973ZM15.7197 31.1971V24.3318L35.9774 4.07422L42.7811 10.8433L22.4889 31.1971H15.7197ZM17.9889 28.9279H21.5466L34.7735 15.701L32.9889 13.9279L31.1274 12.1356L17.9889 25.2434V28.9279Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M2 18.0163V4.08957H10.5719L9.34309 5.31839H3.22881V16.7875H14.6979V10.6212L15.9268 9.39244V18.0163H2ZM6.91534 13.101V10.2889L15.2257 1.97852L18 4.76383L9.68806 13.101H6.91534ZM8.14415 11.8722H9.16503L14.271 6.76618L13.7606 6.25574L13.2139 5.72955L8.14415 10.7993V11.8722Z", fill: "currentColor" }))],
];
export default createIconComponent("AttributeTypesIcon", iconSizes, ...variants);
//# sourceMappingURL=AttributeTypes.js.map