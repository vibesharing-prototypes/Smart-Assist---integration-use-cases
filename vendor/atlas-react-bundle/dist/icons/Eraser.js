"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M16.9809 17.9997H21.6924V19.4997H15.4809L16.9809 17.9997ZM4.65398 19.4997L1.604 16.4497L14.6924 2.86133L21.7808 9.94973L12.4809 19.4997H4.65398ZM11.8424 17.9997L19.6924 9.94973L14.7424 4.99973L3.6924 16.3997L5.2924 17.9997H11.8424Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M28.0532 30.4058H36.1708V32.4997H25.9593L28.0532 30.4058ZM7.53618 32.4997L2.87598 27.7604L24.3909 4.86523L35.7091 16.4763L20.4571 32.4997H7.53618ZM19.6131 30.4058L32.8994 16.3801L24.4742 7.74123L5.79256 27.6942L8.45923 30.4058H19.6131Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M33.5154 36.731H43.4154V39.0002H31.2463L33.5154 36.731ZM8.91164 39.0002L3.57324 33.5194L29.2116 5.89648L42.4961 19.7079L24.3423 39.0002H8.91164ZM23.4616 36.731L39.5269 19.5349L29.3116 8.93488L6.73469 33.4502L9.93469 36.731H23.4616Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M13.7757 14.4998H17.7437V15.5831H12.6924L13.7757 14.4998ZM4.81582 15.5831L1.71167 12.4789L12.2228 1.96777L17.7757 7.52061L9.71321 15.5831H4.81582ZM9.2645 14.4998L16.2437 7.52061L12.2228 3.49977L3.24367 12.4789L5.2645 14.4998H9.2645Z", fill: "currentColor" }))],
];
export default createIconComponent("EraserIcon", iconSizes, ...variants);
//# sourceMappingURL=Eraser.js.map