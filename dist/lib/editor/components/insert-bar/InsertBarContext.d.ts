import { IObservable } from 'react-observing';

interface IEventData {
    top: number;
    left: number;
    width: number;
    height: number;
    isVisible: boolean;
    isHorizontal?: boolean;
}
export interface IInsertBarContextProps {
    hideInsertBar: () => void;
    showInsertBar: (data: IEventData) => void;
    observables: {
        observableTop: IObservable<number>;
        observableLeft: IObservable<number>;
        observableWidth: IObservable<number>;
        observableHeight: IObservable<number>;
        observableIsVisible: IObservable<boolean>;
        observableIsHorizontal: IObservable<boolean | undefined>;
    };
}
export declare const InsertBarContext: import('react').Context<IInsertBarContextProps>;
interface IInsertBarContextProviderProps {
    children: React.ReactNode;
}
export declare const InsertBarContextProvider: ({ children }: IInsertBarContextProviderProps) => import("react/jsx-runtime").JSX.Element;
export {};
