"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M4.5 22.4994V8.4995H8.86535V9.99948H5.99997V20.9995H18V9.99948H15.1346V8.4995H19.5V22.4995L4.5 22.4994ZM11.25 15.7495V4.7187L9.39998 6.56873L8.34615 5.4995L12 1.8457L15.6538 5.4995L14.6 6.56873L12.75 4.7187V15.7495H11.25Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M7.5 37.499V13.574H15.3675V15.6679H9.59396V35.4051H30.406V15.6679H24.5983V13.574H32.4999V37.499H7.5ZM18.9359 25.7021V7.1145L15.3675 10.6829L13.8654 9.18296L19.9829 3.07617L26.0897 9.18296L24.5983 10.6829L21.0298 7.1145V25.7021H18.9359Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M9 45.0008V15.9356H18.7961V18.2048H11.2692V42.7317H36.7307V18.2048H29.1423V15.9356H38.9999V45.0009L9 45.0008ZM22.8346 30.5163V8.08941L18.2615 12.6625L16.6115 11.0318L23.9692 3.69336L31.3076 11.0318L29.6769 12.6625L25.1038 8.08941V30.5163H22.8346Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M4.4165 18.5832V7.41656H7.88763V8.49989H5.49982V17.4999H14.4998V8.49989H12.112V7.41658H15.5831V18.5832H4.4165ZM9.45817 12.7915V3.78674L8.06232 5.1826L7.2883 4.41658L9.99982 1.70508L12.7113 4.41658L11.9373 5.1826L10.5415 3.78674V12.7915H9.45817Z", fill: "currentColor" }))],
];
export default createIconComponent("ExportIcon", iconSizes, ...variants);
//# sourceMappingURL=Export.js.map