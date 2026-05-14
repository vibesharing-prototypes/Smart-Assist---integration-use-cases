import filterIconProps from "./filterIconProps.js";
import React, { forwardRef, useLayoutEffect, useRef, useState, } from "react";
export const createIconComponent = (componentName, iconSizes, ...variants) => {
    const [defaultVariant, defaultSize, defaultElement] = variants[0];
    const Icon = ({ variant = defaultVariant, size = defaultSize, ...svgProps }, ref) => {
        const [computedSize, setComputedSize] = useState(size);
        const svgRef = useRef(null);
        useLayoutEffect(() => {
            const element = ref && "current" in ref ? ref.current : svgRef.current;
            if (element) {
                const computedStyle = getComputedStyle(element);
                const cssSize = computedStyle.getPropertyValue("--atlas-icon-size");
                if (cssSize && cssSize in iconSizes) {
                    setComputedSize(cssSize);
                }
            }
        }, [ref, svgRef.current]);
        const iconNode = variants.find(([v, s]) => v === variant && s === computedSize)?.[2] || defaultElement;
        const iconSize = iconSizes[computedSize] || "24px";
        const iconSizeNum = parseInt(iconSize, 10);
        // Filter out accidental, unnecessary or invalid SVG attributes
        const svgPropsFiltered = filterIconProps(svgProps);
        return (React.createElement("svg", { ref: ref || svgRef, width: iconSize, height: iconSize, viewBox: `0 0 ${iconSizeNum} ${iconSizeNum}`, ...svgPropsFiltered }, iconNode));
    };
    Icon.displayName = componentName;
    const forwardRefIcon = forwardRef(Icon);
    return forwardRefIcon;
};
export const warn = (name, variant, size) => {
    if (process.env.NODE_ENV === "development") {
        console.warn(`${name} shape with variant '${variant}' and '${size}' size is not defined.`);
    }
};
//# sourceMappingURL=createIconComponent.js.map