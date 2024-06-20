import { MouseEvent, RefObject } from 'react';
import { TMonitor } from 'react-use-drag-and-drop';

import { TDraggableElement, TElement, TParentElement } from '../../../types';
import { useHasViewOnly } from '../UseHasViewOnly';
import { Edit } from './Edit';


interface ITextProps {
  paddingLeft: number;
  element: TElement<'text'>;
  parents: TParentElement[];

  onDrop: (data: TDraggableElement, monitor: TMonitor, element: TElement<'text'>, parents: TParentElement[], elementRef: RefObject<HTMLElement>, droppableId: string) => void;
  onDragLeave: (data: TDraggableElement, monitor: TMonitor, element: TElement<'text'>, parents: TParentElement[], elementRef: RefObject<HTMLElement>, droppableId: string) => null;
  onDragOver: (data: TDraggableElement, monitor: TMonitor, element: TElement<'text'>, parents: TParentElement[], elementRef: RefObject<HTMLElement>, droppableId: string) => 'start' | 'end' | 'center' | null;

  onMouseLeave: (event: MouseEvent) => void;
  onSelect: (event: MouseEvent, element: TElement<'text'>) => void;
  onMouseOver: (event: MouseEvent, element: TElement<'text'>, htmlElement: HTMLElement | null) => void;
}
export const Text = ({ element, parents, paddingLeft, ...rest }: ITextProps) => {
  const hasViewOnly = useHasViewOnly(element, parents);


  if (hasViewOnly) return null;

  return (
    <Edit
      element={element}
      parents={parents}
      paddingLeft={paddingLeft}

      onDrop={rest.onDrop}
      onDragOver={rest.onDragOver}
      onDragLeave={rest.onDragLeave}

      onSelect={rest.onSelect}
      onMouseOver={rest.onMouseOver}
      onMouseLeave={rest.onMouseLeave}
    />
  );
}
