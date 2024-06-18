import { IObservable } from 'react-observing';
import { TComponent, TDropFunctionProps, TElement, TElementTypesDefault } from './types';

export type TValueParseFunction<D = any> = (value: any, ownerName: string, type: 'attribute' | 'textContent' | 'style', element: TElement<TElementTypesDefault, D>) => any;
export interface IUiOverviewContextProps<D = any> {
    value: IObservable<TElement[]>;
    components: IObservable<TComponent[]>;
    onDragEnd: () => void;
    onDragStart: () => void;
    onDrop: (props: TDropFunctionProps<D>) => void;
    onKeyDown: (event: KeyboardEvent | React.KeyboardEvent) => void;
}
export declare function UiOverviewContextProvider({ children, ...props }: React.PropsWithChildren<IUiOverviewContextProps<any>>): import("react/jsx-runtime").JSX.Element;
export declare const useUiOverviewContext: () => IUiOverviewContextProps<any>;
