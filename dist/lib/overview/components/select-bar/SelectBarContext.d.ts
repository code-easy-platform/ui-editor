import { IObservable } from 'react-observing';
import { TElement, TParentElement } from '../../types';

export type TGetPosition = () => {
    top: number;
    left: number;
    width: number;
    height: number;
};
interface SelectBarContextProps {
    playgroundSize: IObservable<{
        width: number;
        height: number;
    } | undefined>;
    documentHorizontalScroll: IObservable<number>;
    documentVerticalScroll: IObservable<number>;
    element: IObservable<undefined | TElement>;
    parents: IObservable<undefined | TParentElement[]>;
    getPosition: IObservable<undefined | TGetPosition>;
    id: IObservable<undefined | string>;
    onSelect: (id: string | undefined) => void;
}
export declare const SelectBarContext: import('react').Context<SelectBarContextProps>;
interface ISelectBarContextProviderProps {
    children: React.ReactNode;
    id: IObservable<string | undefined>;
    onSelect: (id: string | undefined) => void;
}
export declare const SelectBarContextProvider: ({ children, id, onSelect }: ISelectBarContextProviderProps) => import("react/jsx-runtime").JSX.Element;
export {};
