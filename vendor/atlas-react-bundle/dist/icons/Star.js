"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantFilled, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M8.84994 16.8253L11.9999 14.9253L15.1499 16.8503L14.3249 13.2503L17.0999 10.8503L13.4499 10.5253L11.9999 7.12535L10.5499 10.5003L6.89994 10.8253L9.67494 13.2503L8.84994 16.8253ZM6.57499 19.9618L8.00767 13.7926L3.22119 9.6446L9.53652 9.09655L11.9999 3.2793L14.4634 9.09655L20.7787 9.6446L15.9922 13.7926L17.4249 19.9618L11.9999 16.6888L6.57499 19.9618Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M14.1238 29.5654L19.9999 26.027L25.876 29.6071L24.3258 22.9084L29.4978 18.4233L22.6815 17.8197L19.9999 11.5099L17.3183 17.778L10.502 18.3817L15.674 22.8913L14.1238 29.5654ZM10.9583 33.936L13.3461 23.6541L5.36865 16.7407L15.8942 15.8273L19.9999 6.13184L24.1056 15.8273L34.6312 16.7407L26.6537 23.6541L29.0415 33.936L19.9999 28.481L10.9583 33.936Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M16.573 36.192L23.9999 31.7228L31.4268 36.242L29.4614 27.7843L35.996 22.1113L27.3768 21.3497L23.9999 13.3921L20.623 21.2997L12.0038 22.0613L18.5384 27.7536L16.573 36.192ZM13.15 40.9226L16.0153 28.5843L6.44238 20.2882L19.073 19.1921L23.9999 7.55762L28.9267 19.1921L41.5574 20.2882L31.9844 28.5843L34.8498 40.9226L23.9999 34.3766L13.15 40.9226Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M7.33345 13.8955L10.0001 12.3121L12.6876 13.8955L11.9793 10.8955L14.2918 8.9163L11.2293 8.64547L10.0001 5.7913L8.77095 8.64547L5.70845 8.9163L8.04178 10.8955L7.33345 13.8955ZM5.68766 16.1342L6.83988 11.3057L3.01782 8.05735L8.03059 7.62147L10.0001 3.06543L11.9696 7.64231L16.9824 8.05735L13.1603 11.3057L14.3126 16.1342L10.0001 13.5733L5.68766 16.1342Z", fill: "currentColor" }))],
    [VariantFilled, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M6.57499 19.9618L8.00767 13.7926L3.22119 9.6446L9.53652 9.09655L11.9999 3.2793L14.4634 9.09655L20.7787 9.6446L15.9922 13.7926L17.4249 19.9618L11.9999 16.6888L6.57499 19.9618Z", fill: "currentColor" }))],
    [VariantFilled, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M10.9583 33.936L13.3461 23.6541L5.36865 16.7407L15.8942 15.8273L19.9999 6.13184L24.1056 15.8273L34.6312 16.7407L26.6537 23.6541L29.0415 33.936L19.9999 28.481L10.9583 33.936Z", fill: "currentColor" }))],
    [VariantFilled, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M13.15 40.9226L16.0153 28.5843L6.44238 20.2882L19.073 19.1921L23.9999 7.55762L28.9267 19.1921L41.5574 20.2882L31.9844 28.5843L34.8498 40.9226L23.9999 34.3766L13.15 40.9226Z", fill: "currentColor" }))],
    [VariantFilled, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M5.68766 16.1342L6.83988 11.3057L3.01782 8.05735L8.03059 7.62147L10.0001 3.06543L11.9696 7.64231L16.9824 8.05735L13.1603 11.3057L14.3126 16.1342L10.0001 13.5733L5.68766 16.1342Z", fill: "currentColor" }))],
];
export default createIconComponent("StarIcon", iconSizes, ...variants);
//# sourceMappingURL=Star.js.map