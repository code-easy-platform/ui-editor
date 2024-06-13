import { IObservable } from 'react-observing';
import { TStyle } from '../../types';

interface ICustomFrameProps {
    resetBody: boolean;
    draggingHover: boolean;
    children: React.ReactNode;
    styles: IObservable<TStyle[]>;
}
export declare const CustomFrame: ({ children, styles, draggingHover, resetBody }: ICustomFrameProps) => import("react/jsx-runtime").JSX.Element;
export {};
