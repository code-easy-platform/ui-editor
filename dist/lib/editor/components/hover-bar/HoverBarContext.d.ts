import { IObservable } from 'react-observing';
import { TElement } from '../../types';

export type TGetPosition = () => {
    top: number;
    left: number;
    width: number;
    height: number;
};
interface HoverBarContextProps {
    playgroundSize: IObservable<{
        width: number;
        height: number;
    } | undefined>;
    documentHorizontalScroll: IObservable<number>;
    documentVerticalScroll: IObservable<number>;
    element: IObservable<undefined | TElement>;
    getPosition: IObservable<undefined | TGetPosition>;
    id: IObservable<undefined | string>;
    onHover: (id: string | undefined) => void;
}
export declare const HoverBarContext: import('react').Context<HoverBarContextProps>;
interface IHoverBarContextProviderProps {
    children: React.ReactNode;
    id: IObservable<string | undefined>;
    onHover: (id: string | undefined) => void;
}
export declare const HoverBarContextProvider: ({ children, id, onHover }: IHoverBarContextProviderProps) => import("react/jsx-runtime").JSX.Element;
export {};
