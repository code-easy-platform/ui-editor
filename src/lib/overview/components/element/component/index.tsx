import { MouseEvent, RefObject } from 'react';
import { TMonitor } from 'react-use-drag-and-drop';

import { TDraggableElement, TElement, TParentElement } from '../../../types';
import { useHasInfinityLoop } from './UseHasInfinityLoop';
import { useHasViewOnly } from '../UseHasViewOnly';
import { BreakLoopEdit } from './BreakLoopEdit';
import { Edit } from './Edit';
import { View } from './View';


interface IComponentProps {
  paddingLeft: number;
  element: TElement<'component'>;
  parents: TParentElement[];

  onDrop: (data: TDraggableElement, monitor: TMonitor, element: TElement<'component'>, parents: TParentElement[], elementRef: RefObject<HTMLElement>, droppableId: string) => void;
  onDragOver: (data: TDraggableElement, monitor: TMonitor, element: TElement<'component'>, parents: TParentElement[], elementRef: RefObject<HTMLElement>, droppableId: string) => void;
  onDragLeave: (data: TDraggableElement, monitor: TMonitor, element: TElement<'component'>, parents: TParentElement[], elementRef: RefObject<HTMLElement>, droppableId: string) => void;

  onMouseLeave: (event: MouseEvent) => void;
  onSelect: (event: MouseEvent, element: TElement<'component'>) => void;
  onDoubleClick: (event: React.MouseEvent, element: TElement<'component'>) => void;
  onMouseOver: (event: MouseEvent, element: TElement<'component'>, htmlElement: HTMLElement | null) => void;
}
export const Component = ({ element, parents, paddingLeft, ...rest }: IComponentProps) => {
  const hasInfinityLoop = useHasInfinityLoop(element, parents);
  const hasViewOnly = useHasViewOnly(element, parents);


  if (hasInfinityLoop) {
    /* When infinite loop, when have only view for break loop */
    if (hasViewOnly) return null;

    return <BreakLoopEdit
      element={element}
      paddingLeft={paddingLeft}

      onSelect={rest.onSelect}
      onMouseOver={rest.onMouseOver}
      onMouseLeave={rest.onMouseLeave}
    />;
  }

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
      onDoubleClick={rest.onDoubleClick}

      onSelect={rest.onSelect}
      onMouseOver={rest.onMouseOver}
      onMouseLeave={rest.onMouseLeave}
    />
  );
}
