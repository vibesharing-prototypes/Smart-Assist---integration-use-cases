"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M12 10.2885L8.34615 13.9423L9.39998 14.9961L11.25 13.1461V17.5961H12.75V13.1461L14.6 14.9961L15.6538 13.9423L12 10.2885ZM4.99997 7.90383V19H19V7.90383H4.99997ZM3.5 20.5V6.3577L5.8577 3.5H18.1326L20.5 6.37695V20.5H3.5ZM5.39035 6.40385H18.6L17.423 4.99998H6.5673L5.39035 6.40385Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M20.0001 16.725L13.9895 22.7249L15.4189 24.1651L18.9532 20.6309V28.7185H21.0471V20.6309L24.5813 24.1651L26.0107 22.7249L20.0001 16.725ZM7.92745 12.4857V32.0733H32.0728V12.4857H7.92745ZM5.8335 34.1672V10.5797L9.56004 5.83398H30.4071L34.1667 10.6118V34.1672H5.8335ZM8.5952 10.3917H31.3612L29.3655 7.92794H10.6017L8.5952 10.3917Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M24 19.8154L16.8346 26.9615L18.3538 28.5L22.8654 23.9884V34.0961H25.1346V23.9884L29.6461 28.5L31.1653 26.9615L24 19.8154ZM9.2692 14.5692V38.7307H38.7307V14.5692H9.2692ZM7 40.9999V12.6846L11.35 7H36.5998L40.9999 12.7231V40.9999H7ZM10.0807 12.3H37.85L35.4345 9.2692H12.5154L10.0807 12.3Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M10.0003 8.48972L7.28878 11.2012L8.0628 11.9753L9.45866 10.5794V13.9128H10.5419V10.5794L11.9378 11.9753L12.7118 11.2012L10.0003 8.48972ZM4.5003 6.9192V15.4993H15.5003V6.9192H4.5003ZM3.41699 16.5826V5.4641L5.46508 3.41602H14.5275L16.5836 5.48014V16.5826H3.41699ZM4.61728 5.83589H15.3753L14.1028 4.49933H5.88974L4.61728 5.83589Z", fill: "currentColor" }))],
];
export default createIconComponent("UnarchiveIcon", iconSizes, ...variants);
//# sourceMappingURL=Unarchive.js.map