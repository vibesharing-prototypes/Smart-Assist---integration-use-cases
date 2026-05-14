"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M9.03277 22.2503L1.95972 11.9042L3.29044 10.6196L7.50007 13.5562V3.7793H9.00004V16.4445L4.94424 13.6041L9.82314 20.7504H19V4.50042H20.5V22.2503H9.03277ZM11.3366 11.7504V1.7793H12.8366V11.7504H11.3366ZM15.1731 11.7504V2.7793H16.6731V11.7504H15.1731Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M16.3882 37.0588L4.61182 19.7533L6.68869 17.8773L13.7218 22.9745V6.27376H15.8158V26.9936L8.52623 21.7746L17.4697 34.9649H33.2944V7.47564H35.3884V37.0588H16.3882ZM20.2571 19.5589V2.94043H22.351V19.5589H20.2571ZM26.7923 19.5589V4.6071H28.8863V19.5589H26.7923Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M19.6957 44.4714L5.57129 23.6676L7.97894 21.5753L16.4289 27.8138V7.5293H18.6981V32.1598L9.63274 25.606L20.852 42.2022H40.1596V8.97155H42.4288V44.4714H19.6957ZM24.3558 23.4714V3.5293H26.625V23.4714H24.3558ZM32.2827 23.4714V5.5293H34.5519V23.4714H32.2827Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M7.52727 18.5416L1.63306 9.91984L2.74199 8.84936L6.25002 11.2965V3.14909H7.49999V13.7035L4.12016 11.3365L8.18591 17.2917H15.8333V3.75003H17.0833V18.5416H7.52727ZM9.44714 9.79165V1.48242H10.6971V9.79165H9.44714ZM12.6442 9.79165V2.31576H13.8942V9.79165H12.6442Z", fill: "currentColor" }))],
];
export default createIconComponent("PanToolIcon", iconSizes, ...variants);
//# sourceMappingURL=PanTool.js.map