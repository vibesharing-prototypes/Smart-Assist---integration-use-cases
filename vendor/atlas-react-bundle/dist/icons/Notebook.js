"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.11538 14.483V17.5938H3V19.1322H5.12109V21H20.121V2H5.12109V3.86771L3 3.86771V5.36769H5.11537L5.11538 8.51693H3V10.0169H5.11537L5.11538 12.9446H3V14.483H5.11538ZM6.62107 19.5H18.6211V3.49998H12.6211H6.62107V19.5Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.2734 29.5161V32.3559H31.5298V7.09961H11.2734V9.93945H8.40283V11.9395H11.2734V15.7983H8.40283V17.7983H11.2734V21.6572H8.40283V23.6572H11.2734V27.5161H8.40283V29.5161H11.2734ZM29.4358 30.262H13.3674V9.19357H29.4358V30.262Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.8896 35.7754V39.4072H38.1973V9.09961H13.8896V12.7603H10.5728V14.7603H13.8896V19.7651H10.5728V21.7651H13.8896V26.7705H10.5728V28.7705H13.8896V33.7754H10.5728V35.7754H13.8896ZM35.9281 37.138H16.1588V11.3688H35.9281V37.138Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.6062 12.855V15.3109H4V16.5255H5.61055V18H17V3H5.61055V4.47451L4 4.47451V5.65871H5.6062L5.6062 8.14496H4V9.32915H5.6062L5.6062 11.6405H4V12.855H5.6062ZM6.74948 16.8158H15.8611V4.18419H11.3053H6.74948V16.8158Z", fill: "currentColor" }))],
];
export default createIconComponent("NotebookIcon", iconSizes, ...variants);
//# sourceMappingURL=Notebook.js.map