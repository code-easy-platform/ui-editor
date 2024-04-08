import { MouseEvent, RefObject } from 'react';
import { TMonitor } from 'react-use-drag-and-drop';

import { TDraggableElement, TElement } from '../../../types';
import { useHasViewOnly } from '../UseHasViewOnly';
import { Edit } from './Edit';
import { View } from './View';


interface IComponentProps {
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
export const Component = ({ element, parents, ...rest }: IComponentProps) => {
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
      onDoubleClick={rest.onDoubleClick}

      onSelect={rest.onSelect}
      onMouseOver={rest.onMouseOver}
      onMouseLeave={rest.onMouseLeave}

      onHoverBar={rest.onHoverBar}
      onSelectBar={rest.onSelectBar}
    />
  );
}
