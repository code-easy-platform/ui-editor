import { MouseEvent, RefObject, useRef, useState } from 'react';
import { TMonitor, useDrop } from 'react-use-drag-and-drop';
import { useObserverValue } from 'react-observing';

import { TDraggableElement, TElement, TParentElement } from '../../../types';
import { useMatchEffect } from '../UseMatchEffect';
import { useSlotContent } from './UseSlotContent';
import { useHoverBar } from '../../hover-bar';
import { uuid } from '../../../helpers';
import { Item } from '../../item/Item';
import { Element } from '..';


interface IRenderProps {
  paddingLeft: number;
  element: TElement<'slot'>;
  parents: TParentElement[];

  onDrop: (data: TDraggableElement, monitor: TMonitor, element: TElement<'slot-content'>, parents: TParentElement[], elementRef: RefObject<HTMLElement>, droppableId: string) => void;
  onDragLeave: (data: TDraggableElement, monitor: TMonitor, element: TElement<'slot-content'>, parents: TParentElement[], elementRef: RefObject<HTMLElement>, droppableId: string) => null;
  onDragOver: (data: TDraggableElement, monitor: TMonitor, element: TElement<'slot-content'>, parents: TParentElement[], elementRef: RefObject<HTMLElement>, droppableId: string) => 'start' | 'end' | 'center' | null;

  onMouseLeave: (event: MouseEvent) => void;
  onMouseOver: (event: MouseEvent, element: TElement<'slot-content'>, htmlElement: HTMLElement | null) => void;
}
export const Render = ({ element, parents, paddingLeft, onMouseOver, onMouseLeave, onDragLeave, onDragOver, onDrop }: IRenderProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  const [dropPositionAt, setDropPositionAt] = useState<'start' | 'end' | 'center' | null>(null);
  const name = useObserverValue(element.name);


  const [content = [], currentSlotContent] = useSlotContent(element, parents);
  const { hoveredId } = useHoverBar();


  const isHovered = useMatchEffect({
    value: hoveredId,
    matchWidthValue: currentSlotContent?.id,
  });


  const droppableId = useRef({ id: uuid() });
  const [{ isDraggingOver }] = useDrop({
    element: elementRef,
    id: droppableId.current.id,
    drop: (data, monitor) => currentSlotContent ? onDrop(data, monitor, currentSlotContent, parents, elementRef, droppableId.current.id) : null,
    hover: (data, monitor) => setDropPositionAt(currentSlotContent ? onDragOver(data, monitor, currentSlotContent, parents, elementRef, droppableId.current.id) : null),
    leave: (data, monitor) => setDropPositionAt(currentSlotContent ? onDragLeave(data, monitor, currentSlotContent, parents, elementRef, droppableId.current.id) : null),
  }, [currentSlotContent, parents, onDrop, onDragOver, onDragLeave]);


  return (
    <>
      <div
        ref={elementRef}
        onMouseLeave={onMouseLeave}
        onMouseOver={e => currentSlotContent ? onMouseOver(e, currentSlotContent, elementRef.current) : undefined}
      >
        <Item
          label={name}
          select={false}
          dragging={false}
          hover={isHovered}
          dragOver={isDraggingOver}
          insertBarAt={dropPositionAt}
          paddingLeft={paddingLeft + 8}
        />
      </div>

      {currentSlotContent && content.length > 0 && content.map((contentItem) => (
        <Element
          key={contentItem.id.value}
          element={contentItem}
          paddingLeft={paddingLeft + 16}
          parents={[...parents, currentSlotContent]}
        />
      ))}
    </>
  );
};
