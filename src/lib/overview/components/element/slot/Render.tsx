import { MouseEvent, RefObject, useRef } from 'react';
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
  onDragOver: (data: TDraggableElement, monitor: TMonitor, element: TElement<'slot-content'>, parents: TParentElement[], elementRef: RefObject<HTMLElement>, droppableId: string) => void;
  onDragLeave: (data: TDraggableElement, monitor: TMonitor, element: TElement<'slot-content'>, parents: TParentElement[], elementRef: RefObject<HTMLElement>, droppableId: string) => void;

  onMouseLeave: (event: MouseEvent) => void;
  onMouseOver: (event: MouseEvent, element: TElement<'slot-content'>, htmlElement: HTMLElement | null) => void;
}
export const Render = ({ element, parents, paddingLeft, onMouseOver, onMouseLeave, onDragLeave, onDragOver, onDrop }: IRenderProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  const name = useObserverValue(element.name);


  const [content = [], currentSlotContent] = useSlotContent(element, parents);
  const { hoveredId } = useHoverBar();


  const isHovered = useMatchEffect({
    value: hoveredId,
    matchWidthValue: currentSlotContent?.id,
  }, [hoveredId, currentSlotContent]);


  const droppableId = useRef({ id: uuid() });
  useDrop({
    element: elementRef,
    id: droppableId.current.id,
    drop: (data, monitor) => currentSlotContent ? onDrop(data, monitor, currentSlotContent, parents, elementRef, droppableId.current.id) : undefined,
    hover: (data, monitor) => currentSlotContent ? onDragOver(data, monitor, currentSlotContent, parents, elementRef, droppableId.current.id) : undefined,
    leave: (data, monitor) => currentSlotContent ? onDragLeave(data, monitor, currentSlotContent, parents, elementRef, droppableId.current.id) : undefined,
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
          hover={isHovered}
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
