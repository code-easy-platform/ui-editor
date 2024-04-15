import { TComponent, TDropFunctionProps, TElement, TStyle } from './types';
import { IObservable } from 'react-observing';

export interface IUiEditorContextProps {
    styles: IObservable<TStyle[]>;
    value: IObservable<TElement[]>;
    components: IObservable<TComponent[]>;
    onDragEnd: () => void;
    onDragStart: () => void;
    onRemove: (element: TElement) => void;
    onDuplicate: (element: TElement) => void;
    onKeyDown: (event: KeyboardEvent) => void;
    onDrop: (props: TDropFunctionProps) => void;
    onAddSlotContent: (element: TElement, referenceComponent: TElement<'component'>) => void;
}
export declare const UiEditorContextProvider: ({ children, ...props }: React.PropsWithChildren<IUiEditorContextProps>) => import("react/jsx-runtime").JSX.Element;
export declare const useUiEditorContext: () => IUiEditorContextProps;
