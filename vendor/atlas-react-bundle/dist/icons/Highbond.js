"use client";
import React from "react";
import { iconSizes, Size2xl, SizeLg, SizeMd, SizeXl, VariantOutlined } from "./utils/constants.js";
import { createIconComponent } from "./utils/createIconComponent.js";
const variants = [
    [VariantOutlined, SizeLg, React.createElement(React.Fragment, null,
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.2853 15.3334L22 4H16.286L11.3341 13.8205C11.1485 14.1808 10.8074 14.2851 10.5669 14.2851C10.3437 14.2851 10.0256 14.1774 9.8439 13.8899L7.71403 9.66662H2L4.8574 15.3334L2 21H7.71403L9.80893 16.8462C9.99453 16.4859 10.3354 16.3815 10.576 16.3815C10.7993 16.3815 11.1174 16.4893 11.2991 16.7768L13.429 21H19.143L16.2853 15.3334Z", fill: "currentColor" }))],
    [VariantOutlined, SizeXl, React.createElement(React.Fragment, null,
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.8565 24.1334L36 6H26.8576L18.9345 21.7129C18.6375 22.2893 18.0919 22.4562 17.707 22.4562C17.35 22.4562 16.841 22.2838 16.5502 21.8238L13.1424 15.0666H4L8.57184 24.1334L4 33.2H13.1424L16.4943 26.5539C16.7913 25.9775 17.3367 25.8104 17.7215 25.8104C18.0788 25.8104 18.5878 25.9828 18.8785 26.4429L22.2863 33.2H31.4288L26.8565 24.1334Z", fill: "currentColor" }))],
    [VariantOutlined, Size2xl, React.createElement(React.Fragment, null,
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M32.5707 29.6668L44 7H32.5719L22.6681 26.6411L22.6684 26.6401C22.2972 27.3606 21.6148 27.5703 21.1338 27.5703C20.6875 27.5703 20.0512 27.3547 19.6878 26.7798L15.4281 18.3332H4L9.7148 29.6668L4 41H15.4281L19.6179 32.6924L19.6176 32.6934C19.9888 31.9729 20.6709 31.763 21.1519 31.763C21.5985 31.763 22.2347 31.9785 22.5982 32.5537L26.8579 41H38.286L32.5707 29.6668Z", fill: "currentColor" }))],
    [VariantOutlined, SizeMd, React.createElement(React.Fragment, null,
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.4283 12.0667L18 3H13.4288L9.46725 10.8564C9.31876 11.1447 9.04594 11.2281 8.85352 11.2281C8.67498 11.2281 8.4205 11.1419 8.27512 10.9119L6.57122 7.5333H2L4.28592 12.0667L2 16.6H6.57122L8.24714 13.277C8.39563 12.9887 8.66835 12.9052 8.86077 12.9052C9.03941 12.9052 9.29389 12.9914 9.43927 13.2215L11.1432 16.6H15.7144L13.4283 12.0667Z", fill: "currentColor" }))],
];
export default createIconComponent("HighbondIcon", iconSizes, ...variants);
//# sourceMappingURL=Highbond.js.map