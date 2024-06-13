import { MouseEvent, RefObject } from 'react';
import { TMonitor } from 'react-use-drag-and-drop';
import { TDraggableElement, TElement, TParentElement } from '../../../types';

interface IEditProps {
    element: TElement<'slot'>;
    parents: TParentElement[];
    onDrop: (data: TDraggableElement, monitor: TMonitor, element: TElement<'slot'>, parents: TParentElement[], elementRef: RefObject<HTMLElement>, droppableId: string) => void;
    onDragOver: (data: TDraggableElement, monitor: TMonitor, element: TElement<'slot'>, parents: TParentElement[], elementRef: RefObject<HTMLElement>, droppableId: string) => void;
    onDragLeave: (data: TDraggableElement, monitor: TMonitor, element: TElement<'slot'>, parents: TParentElement[], elementRef: RefObject<HTMLElement>, droppableId: string) => void;
    onMouseLeave: (event: MouseEvent) => void;
    onSelect: (event: MouseEvent, element: TElement<'slot'>) => void;
    onMouseOver: (event: MouseEvent, element: TElement<'slot'>, htmlElement: HTMLElement | null) => void;
    onHoverBar: (element: TElement<'slot'>, htmlElement: HTMLElement | null) => void;
    onSelectBar: (element: TElement<'slot'>, htmlElement: HTMLElement | null) => void;
}
export declare const Edit: ({ element, parents, onMouseOver, onMouseLeave, onSelect, onDragLeave, onDragOver, onDrop, onHoverBar, onSelectBar }: IEditProps) => import("react/jsx-runtime").JSX.Element;
export {};
