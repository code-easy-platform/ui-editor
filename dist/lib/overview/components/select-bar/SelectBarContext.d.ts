import { IObservable } from 'react-observing';

interface SelectBarContextProps {
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
