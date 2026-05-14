"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M12.8731 10.1581L11.2405 8.52547L11.6348 7.5735H10.2693L8.13855 5.4428H19.5577V7.5581H13.9789L12.8731 10.1581ZM19.5693 21.6773L11.4328 13.5312L9.2789 18.5966H6.96553L9.8155 11.9139L2.22705 4.33508L3.28088 3.28125L20.6231 20.6235L19.5693 21.6773Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M21.0318 17.3811L18.6377 15.004L19.7798 12.2785H15.8972L12.69 9.07133H32.5959V12.1909H23.2359L21.0318 17.3811ZM32.8972 36.1288L18.9923 22.1908L15.2444 30.9943H11.829L16.6067 19.8116L3.71143 6.94308L5.18576 5.46875L34.3715 34.6545L32.8972 36.1288Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M24.9847 21.1277L22.3079 18.4817L23.9694 14.5277H18.3462L14.7041 10.8856H39.1154V14.3854H27.8462L24.9847 21.1277ZM39.6462 43.3546L22.754 26.4124L18.1616 37.1932H14.3271L20.0771 23.7471L4.4541 8.16245L6.05405 6.5625L41.2462 41.7547L39.6462 43.3546Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M10.2065 8.2151L9.26265 7.27123L9.59121 6.47792H8.4533L7.36521 5.38983H15.6312V6.65258H10.878L10.2065 8.2151ZM15.8075 17.3769L9.15205 10.7135L7.44051 14.6846H6.07519L8.20017 9.76158L2.56396 4.1334L3.33799 3.35938L16.5815 16.6029L15.8075 17.3769Z", fill: "currentColor" }))],
];
export default createIconComponent("ClearFormatIcon", iconSizes, ...variants);
//# sourceMappingURL=ClearFormat.js.map