"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.25 19.75V4.25H19.75V19.75H4.25ZM6.03844 8.81289H8.81432V6.03844H6.03844V8.81289ZM15.1857 8.81289H17.9616V6.03844H15.1857V8.81289ZM10.6013 13.3987H13.3987V10.6013H10.6013V13.3987ZM10.6013 17.9616H13.3987V15.1871H10.6013V17.9616ZM15.1871 13.3987H17.9616V10.6013H15.1871V13.3987ZM6.03844 17.9616H8.81289V15.1871H6.03844V17.9616Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.77783 34.1016V8.10156H32.7778V34.1016H6.77783ZM9.08253 16.4599H15.1809V10.0996H9.08253V16.4599ZM24.684 16.4599H30.5954V10.0996H24.684V16.4599ZM16.902 24.1507H22.4766V18.368H16.902V24.1507ZM16.902 31.6872H22.4766V25.736H16.902V31.6872ZM24.684 24.1507H30.5954V18.368H24.684V24.1507ZM9.08253 31.6872H15.1809V25.736H9.08253V31.6872Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.54932 40.4141V7.41406H40.5493V40.4141H7.54932ZM10.822 17.8782H17.9528V10.3661H10.6313L10.822 17.8782ZM30.4603 17.8782H37.2479V10.3661H30.4603V17.8782ZM20.7362 27.5258H27.5238V20.4331H20.7362V27.5258ZM20.7362 37.4408H27.5238V30.1752H20.7362V37.4408ZM30.4603 27.5258H37.2479V20.4331H30.4603V27.5258ZM10.822 37.4408H17.9528V30.1752H10.822V37.4408Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4 17V4H17V17H4ZM5.49998 7.82694H7.82814V5.49998H5.49998V7.82694ZM13.1719 7.82694H15.5V5.49998H13.1719V7.82694ZM9.3269 11.6731H11.6731V9.3269H9.3269V11.6731ZM9.3269 15.5H11.6731V13.1731H9.3269V15.5ZM13.1731 11.6731H15.5V9.3269H13.1731V11.6731ZM5.49998 15.5H7.82694V13.1731H5.49998V15.5Z", fill: "currentColor" }))],
];
export default createIconComponent("ChartHeatIcon", iconSizes, ...variants);
//# sourceMappingURL=ChartHeat.js.map