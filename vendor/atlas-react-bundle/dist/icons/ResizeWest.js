"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M19.2595 15.4992L14.8362 15.4992L14.8362 19.9414L4.74023 11.9992L14.8362 4.05691L14.8362 8.49916L19.2595 8.49916L19.2595 15.4992ZM17.7595 13.9992L17.7595 9.99916L13.3365 9.99916L13.3365 7.22416L7.14973 11.9992L13.3365 16.7742L13.3365 13.9992L17.7595 13.9992Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M32.3023 25.8326L24.7278 25.8326L24.7278 33.2363L7.69775 19.9992L24.7278 6.76216L24.7278 14.1659L32.3023 14.1659L32.3023 25.8326ZM30.2082 23.7384L30.2082 16.2601L22.6336 16.2601L22.6336 11.1842L11.0598 19.9992L22.6336 28.8142L22.6336 23.7384L30.2082 23.7384Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M38.8847 31.0003L29.6732 31.0003L29.6732 39.8848L9.11572 24.0003L29.6732 8.11576L29.6732 17.0003L38.8847 17.0003L38.8847 31.0003ZM36.6157 28.7308L36.6157 19.2698L27.4042 19.2698L27.4042 12.9078L12.7582 24.0003L27.4042 35.0928L27.4042 28.7308L36.6157 28.7308Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { d: "M15.8832 12.5839L12.5722 12.5839L12.5722 16.1191L4.11719 10.0006L12.5722 3.88206L12.5722 7.41726L15.8832 7.41726L15.8832 12.5839ZM14.7999 11.5006L14.7999 8.5006L11.4891 8.5006L11.4891 6.0631L5.9376 10.0006L11.4891 13.9381L11.4891 11.5006L14.7999 11.5006Z", fill: "currentColor" }))],
];
export default createIconComponent("ResizeWestIcon", iconSizes, ...variants);
//# sourceMappingURL=ResizeWest.js.map