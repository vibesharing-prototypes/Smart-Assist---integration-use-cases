"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M15.4998 11.2115L17.2882 13V14.5H12.7498V19.9999L11.9998 20.7499L11.2499 19.9999V14.5H6.71143V13L8.49985 11.2115V3.99998H7.49985V2.5H16.4998V3.99998H15.4998V11.2115ZM8.84983 13H15.1498L13.9998 11.85V3.99998H9.99983V11.85L8.84983 13Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M25.7094 20.0061L28.814 22.9248V25.0188H21.047V34.2025L20 35.2495L18.9531 34.2025V25.0188H11.186V22.9248L14.1667 20.0061V6.92697H12.2971V4.83301H27.579V6.92697H25.7094V20.0061ZM14.0791 22.9248H25.797L23.6154 20.8223V6.92697H16.2607V20.8223L14.0791 22.9248Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M30.777 24.6L34.5769 28.0653V30.3345H25.1347V41.3652L24.0001 42.4998L22.8655 41.3652V30.3345H13.4233V28.0653L17.0002 24.6V8.2692H14.6348V6H33.1424V8.2692H30.777V24.6ZM16.4925 28.0653H31.2847L28.5078 25.4307V8.2692H19.2694V25.4307L16.4925 28.0653Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M12.5831 9.1766L14.4068 11.0003V12.0836H10.5414V16.4169L9.99977 16.9586L9.45813 16.4169V12.0836H5.59277V11.0003L7.41646 9.1766V3.50031H6.41646V2.41699H13.5831V3.50031H12.5831V9.1766ZM7.12477 11.0003H12.8748L11.4998 9.62531V3.50031H8.49977V9.62531L7.12477 11.0003Z", fill: "currentColor" }))],
];
export default createIconComponent("PinIcon", iconSizes, ...variants);
//# sourceMappingURL=Pin.js.map