import { TMonitor } from 'react-use-drag-and-drop';
import { TElement, TParentElement } from '../types';

export declare const getCanDrop: (monitor: TMonitor, element: TElement<"html" | "slot" | "component" | "text" | "slot-content">, parents: TParentElement[], elementRef: React.RefObject<HTMLElement>, droppableId: string) => boolean;
export declare const getDropPosition: (monitor: TMonitor, element: TElement<'component' | 'html' | 'slot' | "text" | 'slot-content'>, elementRef: React.RefObject<HTMLElement>) => {
    isOverCurrentStart: boolean;
    isOverCurrentEnd: boolean;
    isOverEnd: boolean;
    isOverStart: boolean;
} | null;
export declare const getInsertBarPosition: (monitor: TMonitor, element: TElement<'component' | 'html' | 'slot' | "text" | 'slot-content'>, elementRef: React.RefObject<HTMLElement>) => {
    isHorizontal: boolean;
    left: number;
    width: number;
    height: number;
    top: number;
} | null;
