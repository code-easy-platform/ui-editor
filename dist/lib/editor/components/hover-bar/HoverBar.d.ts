/// <reference types="react" />
interface HoverBarProps {
    color?: string;
    zIndex?: number;
    height?: number;
    width?: number;
    left?: number;
    top?: number;
}
export declare const HoverBar: import('react').MemoExoticComponent<({ children, zIndex, top, left, width, height, color }: React.PropsWithChildren<HoverBarProps>) => import("react/jsx-runtime").JSX.Element>;
export {};
