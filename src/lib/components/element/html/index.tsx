import { MouseEvent, RefObject } from 'react';
import { TMonitor } from 'react-use-drag-and-drop';

import { TDraggableElement, TElement } from '../../../types';
import { useHasViewOnly } from '../UseHasViewOnly';
import { Edit } from './Edit';
import { View } from './View';


interface IHtmlProps {
  element: TElement<'html'>;
  parents: TElement[];

  onDrop: (data: TDraggableElement, monitor: TMonitor, element: TElement<'html'>, parents: TElement[], elementRef: RefObject<HTMLElement>, droppableId: string) => void;
  onDragOver: (data: TDraggableElement, monitor: TMonitor, element: TElement<'html'>, parents: TElement[], elementRef: RefObject<HTMLElement>, droppableId: string) => void;
  onDragLeave: (data: TDraggableElement, monitor: TMonitor, element: TElement<'html'>, parents: TElement[], elementRef: RefObject<HTMLElement>, droppableId: string) => void;

  onMouseLeave: (event: MouseEvent) => void;
  onSelect: (event: MouseEvent, element: TElement<'html'>) => void;
  onMouseOver: (event: MouseEvent, element: TElement<'html'>, htmlElement: HTMLElement | null) => void;

  onHoverBar: (element: TElement<'html'>, htmlElement: HTMLElement | null) => void;
  onSelectBar: (element: TElement<'html'>, htmlElement: HTMLElement | null) => void;
}
export const Html = ({ element, parents, ...rest }: IHtmlProps) => {
  const hasViewOnly = useHasViewOnly(element, parents);


  if (hasViewOnly) return (
    <View
      element={element}
      parents={parents}
    />
  );

  return (
    <Edit
      element={element}
      parents={parents}

      onDrop={rest.onDrop}
      onDragOver={rest.onDragOver}
      onDragLeave={rest.onDragLeave}

      onSelect={rest.onSelect}
      onMouseOver={rest.onMouseOver}
      onMouseLeave={rest.onMouseLeave}

      onHoverBar={rest.onHoverBar}
      onSelectBar={rest.onSelectBar}
    />
  );
}
