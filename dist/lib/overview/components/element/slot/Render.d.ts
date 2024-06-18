import { MouseEvent, RefObject } from 'react';
import { TMonitor } from 'react-use-drag-and-drop';
import { TDraggableElement, TElement, TParentElement } from '../../../types';

interface IRenderProps {
    paddingLeft: number;
    element: TElement<'slot'>;
    parents: TParentElement[];
    onDrop: (data: TDraggableElement, monitor: TMonitor, element: TElement<'slot-content'>, parents: TParentElement[], elementRef: RefObject<HTMLElement>, droppableId: string) => void;
    onDragOver: (data: TDraggableElement, monitor: TMonitor, element: TElement<'slot-content'>, parents: TParentElement[], elementRef: RefObject<HTMLElement>, droppableId: string) => void;
    onDragLeave: (data: TDraggableElement, monitor: TMonitor, element: TElement<'slot-content'>, parents: TParentElement[], elementRef: RefObject<HTMLElement>, droppableId: string) => void;
    onMouseLeave: (event: MouseEvent) => void;
    onMouseOver: (event: MouseEvent, element: TElement<'slot-content'>, htmlElement: HTMLElement | null) => void;
    onHoverBar: (element: TElement<'slot'>, htmlElement: HTMLElement | null) => void;
}
export declare const Render: ({ element, parents, paddingLeft, onMouseOver, onMouseLeave, onDragLeave, onDragOver, onDrop, onHoverBar }: IRenderProps) => import("react/jsx-runtime").JSX.Element;
export {};
