import { MouseEvent, RefObject } from 'react';
import { TMonitor } from 'react-use-drag-and-drop';
import { TDraggableElement, TElement, TParentElement } from '../../../types';

interface IEditProps {
    paddingLeft: number;
    element: TElement<'text'>;
    parents: TParentElement[];
    onDrop: (data: TDraggableElement, monitor: TMonitor, element: TElement<'text'>, parents: TParentElement[], elementRef: RefObject<HTMLElement>, droppableId: string) => void;
    onDragOver: (data: TDraggableElement, monitor: TMonitor, element: TElement<'text'>, parents: TParentElement[], elementRef: RefObject<HTMLElement>, droppableId: string) => void;
    onDragLeave: (data: TDraggableElement, monitor: TMonitor, element: TElement<'text'>, parents: TParentElement[], elementRef: RefObject<HTMLElement>, droppableId: string) => void;
    onMouseLeave: (event: MouseEvent) => void;
    onSelect: (event: MouseEvent, element: TElement<'text'>) => void;
    onMouseOver: (event: MouseEvent, element: TElement<'text'>, htmlElement: HTMLElement | null) => void;
}
export declare const Edit: ({ element, parents, paddingLeft, onMouseOver, onMouseLeave, onSelect, onDragLeave, onDragOver, onDrop }: IEditProps) => import("react/jsx-runtime").JSX.Element;
export {};
