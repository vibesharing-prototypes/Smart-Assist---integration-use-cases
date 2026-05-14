import React from "react";
import { type IconSizes, type IconVariants } from "./utils/constants.js";
type SizeType = Exclude<IconSizes, "sm">;
declare const _default: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement> & {
    variant?: IconVariants | undefined;
    size?: SizeType | undefined;
    slot?: string;
}, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default _default;
