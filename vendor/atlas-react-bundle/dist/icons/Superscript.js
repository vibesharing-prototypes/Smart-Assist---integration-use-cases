"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M18.6923 8.99998V6.3077H21.5V5.38463H18.6923V4.5H22.3846V7.1923H19.5769V8.11538H22.3846V8.99998H18.6923ZM6.44238 19.5L10.8462 12.6288L6.77701 6.3077H8.74426L11.9597 11.4039H12.0212L15.25 6.3077H17.2327L13.1192 12.6288L17.5577 19.5H15.575L12.0212 13.9307H11.9597L8.42503 19.5H6.44238Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M31.3398 14.391V10.3098H36.0363V8.77138H31.3398V7.5H37.3077V11.5812H32.6111V13.1196H37.3077V14.391H31.3398ZM10.7373 32.4999L18.077 21.048L11.295 10.5128H14.1678L19.7468 19.2714H19.7703L25.3996 10.5128H28.2703L21.4423 21.048L28.8119 32.4999H25.9584L19.7703 22.8738H19.7468L13.5908 32.4999H10.7373Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M37.7193 16.9039V12.25H43.3654V10.4039H37.7193V9H44.7692V13.6539H39.1231V15.5H44.7692V16.9039H37.7193ZM12.8848 38.9999L21.6924 25.2577L13.554 12.6154H16.7578L23.5847 23.2846H23.5655L30.4693 12.6154H33.6539L25.477 25.2577L34.3039 38.9999H31.1501L23.5655 27.2422H23.5847L16.0385 38.9999H12.8848Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M14.7437 7.99933V5.25577H16.5834V4.31987H14.7437V3.41602H17.4873V6.1596H15.6475V7.0955H17.4873V7.99933H14.7437ZM6.0979 15.5826L9.22609 10.7109L6.33509 6.25577H7.66196L9.96646 9.89839H9.9344L12.3543 6.25577H13.6732L10.7453 10.7109L13.9023 15.5826H12.5834L10.0177 11.5874H10.0498L7.41678 15.5826H6.0979Z", fill: "currentColor" }))],
];
export default createIconComponent("SuperscriptIcon", iconSizes, ...variants);
//# sourceMappingURL=Superscript.js.map