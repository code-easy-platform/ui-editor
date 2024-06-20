import { TMonitor } from 'react-use-drag-and-drop';

import { TElement, TParentElement } from '../types';


export const getCanDrop = (monitor: TMonitor, element: TElement<"html" | "slot" | "component" | "text" | "slot-content">, parents: TParentElement[], elementRef: React.RefObject<HTMLElement>, droppableId: string) => {
  if (!elementRef.current) return false;

  /* Verify if the current drop action belongs to other droppable area  */
  if (monitor.droppableId !== droppableId) return false;

  const isSomeId = monitor.draggingId === element.id.value;
  if (isSomeId) return false;

  const willIgnore = parents.some(parentItem => monitor.draggingId === parentItem.id.value);
  if (willIgnore) return false;

  return true;
};

export const getDropPosition = (monitor: TMonitor, element: TElement<'component' | 'html' | 'slot' | "text" | 'slot-content'>, elementRef: React.RefObject<HTMLElement>): 'start' | 'end' | 'center' | null => {
  if (!elementRef.current) return null;

  if (element.type.value === 'slot-content') {
    return 'center';
  }

  const allowContent = ['component', 'slot', 'text'].includes(element.type.value) ? false : Array.isArray((element as TElement<'html'>).children.value);

  const targetDomRect = elementRef.current.getBoundingClientRect();

  const dragBreakSize = allowContent ? 5 : targetDomRect.height / 2;
  const draggedTop = monitor.y - targetDomRect.y;


  if ((draggedTop >= 0) && (draggedTop <= dragBreakSize)) {
    return 'start';
  } else if ((draggedTop >= (targetDomRect.height - dragBreakSize) && draggedTop <= targetDomRect.height)) {
    return 'end';
  } else if ((draggedTop >= dragBreakSize) && (draggedTop <= (targetDomRect.height - dragBreakSize))) {
    return 'center';
  }

  return null;
};
