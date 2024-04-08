import { MouseEvent, RefObject } from 'react';
import { TMonitor } from 'react-use-drag-and-drop';

import { TDraggableElement, TElement } from '../../../types';


interface IEditProps {
  element: TElement<'component'>;
  parents: TElement[];

  onDrop: (data: TDraggableElement, monitor: TMonitor, element: TElement<'component'>, parents: TElement[], elementRef: RefObject<HTMLElement>, droppableId: string) => void;
  onDragOver: (data: TDraggableElement, monitor: TMonitor, element: TElement<'component'>, parents: TElement[], elementRef: RefObject<HTMLElement>, droppableId: string) => void;
  onDragLeave: (data: TDraggableElement, monitor: TMonitor, element: TElement<'component'>, parents: TElement[], elementRef: RefObject<HTMLElement>, droppableId: string) => void;

  onMouseLeave: (event: MouseEvent) => void;
  onSelect: (event: MouseEvent, element: TElement<'component'>) => void;
  onDoubleClick: (event: React.MouseEvent, element: TElement<'component'>) => void;
  onMouseOver: (event: MouseEvent, element: TElement<'component'>, htmlElement: HTMLElement | null) => void;

  onHoverBar: (element: TElement<'component'>, htmlElement: HTMLElement | null) => void;
  onSelectBar: (element: TElement<'component'>, htmlElement: HTMLElement | null) => void;
}
export const Edit = ({ element, parents }: IEditProps) => {

  return (
    <>
      Edit component
    </>
  );
};
