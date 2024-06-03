import { IObservable } from 'react-observing';
import { TComponent, TDropFunctionProps, TElement, TStyle } from './types';

export interface IUiEditorContextProps<D = any> {
    styles: IObservable<TStyle[]>;
    value: IObservable<TElement[]>;
    components: IObservable<TComponent[]>;
    onDragEnd: () => void;
    onDragStart: () => void;
    onRemove: (element: TElement) => void;
    onDuplicate: (element: TElement) => void;
    onKeyDown: (event: KeyboardEvent) => void;
    onDrop: (props: TDropFunctionProps) => void;
    onAddSlotContent: (element: TElement<'slot', D>, referenceComponent: TElement<'component', D>) => void;
}
export declare function UiEditorContextProvider({ children, ...props }: React.PropsWithChildren<IUiEditorContextProps<any>>): import("react/jsx-runtime").JSX.Element;
export declare const useUiEditorContext: () => IUiEditorContextProps<any>;
