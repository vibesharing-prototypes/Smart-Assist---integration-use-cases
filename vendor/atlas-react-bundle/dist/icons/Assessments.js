"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M15.4998 12.2115L17.2882 14V15.5H12.7498V20.9999L11.9998 21.7499L11.2499 20.9999V15.5H6.71143V14L8.49985 12.2115V4.99998H7.49985V3.5H16.4998V4.99998H15.4998V12.2115ZM8.84983 14H15.1498L13.9998 12.85V4.99998H9.99983V12.85L8.84983 14Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M25.7094 21.0061L28.814 23.9248V26.0188H21.047V35.2025L20 36.2495L18.9531 35.2025V26.0188H11.186V23.9248L14.1667 21.0061V7.92697H12.2971V5.83301H27.579V7.92697H25.7094V21.0061ZM14.0791 23.9248H25.797L23.6154 21.8223V7.92697H16.2607V21.8223L14.0791 23.9248Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M30.777 25.6L34.5769 29.0653V31.3345H25.1347V42.3652L24.0001 43.4998L22.8655 42.3652V31.3345H13.4233V29.0653L17.0002 25.6V9.2692H14.6348V7H33.1424V9.2692H30.777V25.6ZM16.4925 29.0653H31.2847L28.5078 26.4307V9.2692H19.2694V26.4307L16.4925 29.0653Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M12.5831 10.1766L14.4068 12.0003V13.0836H10.5414V17.4169L9.99977 17.9586L9.45813 17.4169V13.0836H5.59277V12.0003L7.41646 10.1766V4.50031H6.41646V3.41699H13.5831V4.50031H12.5831V10.1766ZM7.12477 12.0003H12.8748L11.4998 10.6253V4.50031H8.49977V10.6253L7.12477 12.0003Z", fill: "currentColor" }))],
];
export default createIconComponent("AssessmentsIcon", iconSizes, ...variants);
//# sourceMappingURL=Assessments.js.map