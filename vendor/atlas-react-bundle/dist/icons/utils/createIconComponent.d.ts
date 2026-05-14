import React, { type JSX, SVGProps } from "react";
import type { IconSizes, IconVariants } from "./constants.js";
type IconProps<TVariants extends IconVariants, TSizes extends IconSizes> = SVGProps<SVGSVGElement> & {
    variant?: TVariants;
    size?: TSizes;
    slot?: string;
};
export declare const createIconComponent: <TVariants extends IconVariants, TSizes extends IconSizes>(componentName: string, iconSizes: Record<IconSizes, string>, ...variants: [TVariants, TSizes, JSX.Element][]) => React.ForwardRefExoticComponent<Omit<IconProps<TVariants, TSizes>, "ref"> & React.RefAttributes<SVGSVGElement>>;
export declare const warn: (name: string, variant: IconVariants, size: IconSizes) => void;
export {};
