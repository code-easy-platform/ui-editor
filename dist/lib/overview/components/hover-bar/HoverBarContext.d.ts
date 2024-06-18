import { IObservable } from 'react-observing';

interface HoverBarContextProps {
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
