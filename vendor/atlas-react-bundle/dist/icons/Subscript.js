"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M18.6923 19.5V16.8077H21.5V15.8846H18.6923V15H22.3846V17.6923H19.5769V18.6153H22.3846V19.5H18.6923ZM6.44238 17.6923L10.8462 10.8211L6.77701 4.5H8.74426L11.9597 9.59618H12.0212L15.25 4.5H17.2327L13.1192 10.8211L17.5577 17.6923H15.575L12.0212 12.123H11.9597L8.42503 17.6923H6.44238Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M31.3398 32.4999V28.4188H36.0363V26.8803H31.3398V25.6089H37.3077V29.6901H32.6111V31.2285H37.3077V32.4999H31.3398ZM10.7373 29.4871L18.077 18.0352L11.295 7.5H14.1678L19.7468 16.2586H19.7703L25.3996 7.5H28.2703L21.4423 18.0352L28.8119 29.4871H25.9584L19.7703 19.861H19.7468L13.5908 29.4871H10.7373Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M37.7193 38.9999V34.3461H43.3654V32.4999H37.7193V31.0961H44.7692V35.7499H39.1231V37.5961H44.7692V38.9999H37.7193ZM12.8848 35.3845L21.6924 21.6423L13.554 9H16.7578L23.5847 19.6693H23.5655L30.4693 9H33.6539L25.477 21.6423L34.3039 35.3845H31.1501L23.5655 23.6268H23.5847L16.0385 35.3845H12.8848Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M14.7437 16.5826V13.8391H16.5834V12.9032H14.7437V11.9993H17.4873V14.7429H15.6475V15.6788H17.4873V16.5826H14.7437ZM6.0979 13.7429L9.22609 8.87112L6.33509 4.41602H7.66196L9.96646 8.05866H9.9344L12.3543 4.41602H13.6732L10.7453 8.87112L13.9023 13.7429H12.5834L10.0177 9.7477H10.0498L7.41678 13.7429H6.0979Z", fill: "currentColor" }))],
];
export default createIconComponent("SubscriptIcon", iconSizes, ...variants);
//# sourceMappingURL=Subscript.js.map