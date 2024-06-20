import { TMonitor } from 'react-use-drag-and-drop';
import { TElement, TParentElement } from '../types';

export declare const getCanDrop: (monitor: TMonitor, element: TElement<"html" | "slot" | "component" | "text" | "slot-content">, parents: TParentElement[], elementRef: React.RefObject<HTMLElement>, droppableId: string) => boolean;
export declare const getDropPosition: (monitor: TMonitor, element: TElement<'component' | 'html' | 'slot' | "text" | 'slot-content'>, elementRef: React.RefObject<HTMLElement>) => 'start' | 'end' | 'center' | null;
