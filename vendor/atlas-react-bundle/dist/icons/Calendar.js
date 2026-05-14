"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M3.5 21.5001V4.50014H6.69233V2.38477H8.23075V4.50014H15.8077V2.38477H17.3076V4.50014H20.5V21.5001H3.5ZM4.99997 20.0001H19V10.3078H4.99997V20.0001ZM4.99997 8.80787H19V6.00012H4.99997V8.80787Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M5.8335 35.8335V7.09428H11.2609V3.97461H13.5151V7.09428H26.5492V3.97461H28.75V7.09428H34.1667V35.8335H5.8335ZM7.92745 33.7395H32.0728V16.9767H7.92745V33.7395ZM7.92745 14.8828H32.0728V9.18824H7.92745V14.8828Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M7 43.0002V8.26953H13.577V4.76953H16.0962V8.26953H31.9807V4.76953H34.4422V8.26953H40.9999V43.0002H7ZM9.2692 40.731H38.7307V20.2503H9.2692V40.731ZM9.2692 17.9811H38.7307V10.5387H9.2692V17.9811Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M3.41675 17.5831V4.41646H6.57702V2.32031H7.69237V4.41646H12.3398V2.32031H13.4231V4.41646H16.5834V17.5831H3.41675ZM4.50006 16.4998H15.5001V9.25621H4.50006V16.4998ZM4.50006 8.1729H15.5001V5.49977H4.50006V8.1729Z", fill: "currentColor" }))],
];
export default createIconComponent("CalendarIcon", iconSizes, ...variants);
//# sourceMappingURL=Calendar.js.map