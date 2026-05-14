"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantFilled, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M7.21153 21.5004V9.50042L13.8461 2.9043L15.2057 4.2639L13.9923 9.50042H22.5V13.285L19.023 21.5004H7.21153ZM8.7115 20.0004H18.0096L21 12.9908V11.0004H12.0961L13.35 5.51962L8.7115 10.1389V20.0004ZM7.21153 9.50042V11.0004H3.99998V20.0004H7.21153V21.5004H2.5V9.50042H7.21153Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M10.8609 35.1663V15.3245L21.8737 4.17285L23.8127 5.87473L21.7903 15.3245H36.4036V21.536L30.5638 35.1663H10.8609ZM12.9549 33.0724H29.2017L34.3096 21.0008V17.4185H19.2049L21.2669 7.70269L12.9549 16.2134V33.0724ZM10.8609 15.3245V17.4185H5.24337V33.0724H10.8609V35.1663H3.14941V15.3245H10.8609Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M13.1384 42.9998V19.2845L26.3268 5.80762L28.4575 7.51147L26.0306 19.2845H43.8268V26.6806L36.7922 42.9998H13.1384ZM15.4076 40.7306H35.3538L41.5576 26.0114V21.5537H23.273L25.7307 9.54602L15.4076 20.246V40.7306ZM13.1384 19.2845V21.5537H6.23844V40.7306H13.1384V42.9998H3.96924V19.2845H13.1384Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M6.00977 18.0836V8.06285L11.5803 2.58691L12.7966 3.80325L11.7645 8.06285H18.7501V11.3208L15.8527 18.0836H6.00977ZM7.36391 16.7503H14.9665L17.4168 11.0548V9.39616H10.0803L11.146 4.91218L7.36391 8.61573V16.7503ZM6.00977 8.06285L6.0306 9.39616H3.41681V16.7503H6.0306V18.0836H2.0835V8.06285H6.00977Z", fill: "currentColor" }))],
    [VariantFilled, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M7.827 21.5003V9.5003L14.4615 2.9043L15.821 4.2638L14.6075 9.5003H22.5V13.2848L19.023 21.5003H7.827ZM2.5 21.5003V9.5003H6.327V21.5003H2.5Z", fill: "currentColor" }))],
    [VariantFilled, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M10.6461 35.1662V15.3245L21.6694 4.17285L23.6086 5.8466L21.5861 15.3245H36.4432V21.5187L30.6036 35.1662H10.6461ZM3.10986 35.1662V15.3245H8.55236V35.1662H3.10986Z", fill: "currentColor" }))],
    [VariantFilled, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M12.1364 42.9996V19.2841L25.3439 5.80762L27.4749 7.46112L25.0479 19.2841H43.8979V26.6496L36.8634 42.9996H12.1364ZM3.89795 42.9996V19.2841H9.86745V42.9996H3.89795Z", fill: "currentColor" }))],
    [VariantFilled, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M5.77266 17.7509V8.58423L11.4681 2.9209L12.5385 3.53298L11.6314 8.58423H19.0002V11.0505L16.1443 17.7509H5.77266ZM1.8335 17.7509V8.58423H4.68933V17.7509H1.8335Z", fill: "currentColor" }))],
];
export default createIconComponent("ThumbsUpIcon", iconSizes, ...variants);
//# sourceMappingURL=ThumbsUp.js.map