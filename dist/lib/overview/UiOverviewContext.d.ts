import { IObservable } from 'react-observing';
import { TComponent, TDropFunctionProps, TElement, TElementTypesDefault, TStyle } from './types';

export type TValueParseFunction<D = any> = (value: any, ownerName: string, type: 'attribute' | 'textContent' | 'style', element: TElement<TElementTypesDefault, D>) => any;
export interface IUiOverviewContextProps<D = any> {
    styles: IObservable<TStyle[]>;
    value: IObservable<TElement[]>;
    components: IObservable<TComponent[]>;
    onExpressionToValue: TValueParseFunction<D>;
    onValueToExpression: TValueParseFunction<D>;
    onDragEnd: () => void;
    onDragStart: () => void;
    onKeyDown: (event: KeyboardEvent) => void;
    onDrop: (props: TDropFunctionProps<D>) => void;
    onRemove: (element: TElement<TElementTypesDefault, D>) => void;
    onDuplicate: (element: TElement<TElementTypesDefault, D>) => void;
    onAddSlotContent: (element: TElement<'slot', D>, referenceComponent: TElement<'component', D>) => void;
}
export declare function UiOverviewContextProvider({ children, ...props }: React.PropsWithChildren<IUiOverviewContextProps<any>>): import("react/jsx-runtime").JSX.Element;
export declare const useUiOverviewContext: () => IUiOverviewContextProps<any>;
