import { MouseEvent, RefObject } from 'react';
import { TMonitor } from 'react-use-drag-and-drop';

import { TDraggableElement, TElement, TParentElement } from '../../../types';
import { useHasViewOnly } from '../UseHasViewOnly';
import { useSlotRender } from './UseSlotRender';
import { Render } from './Render';
import { Edit } from './Edit';
import { View } from './View';


interface ISlotProps {
  paddingLeft: number;
  element: TElement<'slot'>;
  parents: TParentElement[];

  onDrop: (data: TDraggableElement, monitor: TMonitor, element: TElement<'slot' | 'slot-content'>, parents: TParentElement[], elementRef: RefObject<HTMLElement>, droppableId: string) => void;
  onDragLeave: (data: TDraggableElement, monitor: TMonitor, element: TElement<'slot' | 'slot-content'>, parents: TParentElement[], elementRef: RefObject<HTMLElement>, droppableId: string) => null;
  onDragOver: (data: TDraggableElement, monitor: TMonitor, element: TElement<'slot' | 'slot-content'>, parents: TParentElement[], elementRef: RefObject<HTMLElement>, droppableId: string) => 'start' | 'end' | 'center' | null;

  onMouseLeave: (event: MouseEvent) => void;
  onSelect: (event: MouseEvent, element: TElement<'slot'>) => void;
  onMouseOver: (event: MouseEvent, element: TElement<'slot' | 'slot-content'>, htmlElement: HTMLElement | null) => void;
}
export const Slot = ({ element, parents, paddingLeft, ...rest }: ISlotProps) => {
  const hasViewOnly = useHasViewOnly(element, parents);
  const isRender = useSlotRender(element, parents);


  if (isRender) return (
    <Render
      element={element}
      parents={parents}
      paddingLeft={paddingLeft}

      onDrop={rest.onDrop}
      onDragOver={rest.onDragOver}
      onDragLeave={rest.onDragLeave}

      onMouseOver={rest.onMouseOver}
      onMouseLeave={rest.onMouseLeave}
    />
  );

  if (hasViewOnly) return (
    <View
      element={element}
      parents={parents}
      paddingLeft={paddingLeft}
    />
  );

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
