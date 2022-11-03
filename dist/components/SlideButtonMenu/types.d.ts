import { SpaceProps } from "styled-system";
import { Dispatch, ElementType, SetStateAction } from "react";
import { PolymorphicComponentProps } from "../../util/polymorphic";
export interface SlideButtonMenuProps extends SpaceProps {
    variant?: typeof slideMenuVariants.DARK | typeof slideMenuVariants.LIGHT;
    activeIndex?: number;
    scale?: typeof slideMenuScales[keyof typeof slideMenuScales];
    disabled?: boolean;
    fullWidth?: boolean;
    menuTitles?: Array<string>;
    customClass?: string;
}
export interface SlideButtonMenuItemProps extends SlideButtonMenuProps {
    isActive?: boolean;
    disabled?: boolean;
    scale?: any;
    customClass?: any;
    setWidth?: Dispatch<SetStateAction<any>>;
    blockOffset?: number;
    itemIndex?: number;
    onAction?: (index: number) => void;
    variant?: any;
    children?: any;
}
export declare type SlideButtonProps<P extends ElementType = "button"> = PolymorphicComponentProps<P, SlideButtonMenuItemProps>;
export declare const slideMenuScales: {
    readonly LG: "lg";
    readonly MD: "md";
    readonly SM: "sm";
};
export declare const slideMenuVariants: {
    readonly DARK: "dark";
    readonly LIGHT: "light";
};
