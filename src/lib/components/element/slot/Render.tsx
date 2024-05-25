import { MouseEvent, RefObject, useEffect, useRef } from 'react';
import { TMonitor, useDrop } from 'react-use-drag-and-drop';
import { useObserverValue } from 'react-observing';

import { TDraggableElement, TElement, TParentElement } from '../../../types';
import { useSlotContent } from './UseSlotContent';
import { useSelectBar } from '../../select-bar';
import { useHoverBar } from '../../hover-bar';
import { uuid } from '../../../helpers';
import { Element } from '..';


interface IRenderProps {
  element: TElement<'slot'>;
  parents: TParentElement[];

  onDrop: (data: TDraggableElement, monitor: TMonitor, element: TElement<'slot-content'>, parents: TParentElement[], elementRef: RefObject<HTMLElement>, droppableId: string) => void;
  onDragOver: (data: TDraggableElement, monitor: TMonitor, element: TElement<'slot-content'>, parents: TParentElement[], elementRef: RefObject<HTMLElement>, droppableId: string) => void;
  onDragLeave: (data: TDraggableElement, monitor: TMonitor, element: TElement<'slot-content'>, parents: TParentElement[], elementRef: RefObject<HTMLElement>, droppableId: string) => void;

  onMouseLeave: (event: MouseEvent) => void;
  onMouseOver: (event: MouseEvent, element: TElement<'slot'>, htmlElement: HTMLElement | null) => void;

  onHoverBar: (element: TElement<'slot'>, htmlElement: HTMLElement | null) => void;
  onSelectBar: (element: TElement<'slot'>, htmlElement: HTMLElement | null) => void;
}
export const Render = ({ element, parents, onMouseOver, onMouseLeave, onDragLeave, onDragOver, onDrop, onHoverBar, onSelectBar }: IRenderProps) => {
  const elementRef = useRef<HTMLDivElement>(null);


  const [content = [], currentSlotContent] = useSlotContent(element, parents);
  const { selectedId } = useSelectBar();
  const { hoveredId } = useHoverBar();


  // const name = useObserverValue(element.name);
  const id = useObserverValue(element.id);


  useEffect(() => {
    if (hoveredId.value === id) {
      onHoverBar(element, elementRef.current);
    }

    const subscription = hoveredId.subscribe((hoveringId) => {
      if (hoveringId !== id) return;

      onHoverBar(element, elementRef.current);
    });
    return () => subscription.unsubscribe();
  }, [id, hoveredId, element]);

  useEffect(() => {
    if (selectedId.value === id) {
      onSelectBar(element, elementRef.current);
    }

    const subscription = selectedId.subscribe((selectedId) => {
      if (selectedId !== id) return;

      onSelectBar(element, elementRef.current);
    });
    return () => subscription.unsubscribe();
  }, [element, id, selectedId]);


  const droppableId = useRef({ id: uuid() });
  useDrop({
    element: elementRef,
    id: droppableId.current.id,
    drop: (data, monitor) => currentSlotContent ? onDrop(data, monitor, currentSlotContent, parents, elementRef, droppableId.current.id) : undefined,
    hover: (data, monitor) => currentSlotContent ? onDragOver(data, monitor, currentSlotContent, parents, elementRef, droppableId.current.id) : undefined,
    leave: (data, monitor) => currentSlotContent ? onDragLeave(data, monitor, currentSlotContent, parents, elementRef, droppableId.current.id) : undefined,
  }, [currentSlotContent, parents, onDrop, onDragOver, onDragLeave]);


  return (
    <div
      ref={elementRef}
      onMouseLeave={onMouseLeave}
      onMouseOver={e => onMouseOver(e, element, elementRef.current)}
      style={{ cursor: 'default', userSelect: 'none', pointerEvents: 'all',  outline: 'none', }}
    >
      {currentSlotContent && content.length > 0 && content.map((contentItem) => (
        <Element
          key={contentItem.id.value}
          element={contentItem}
          parents={[...parents, currentSlotContent]}
        />
      ))}
      {content.length === 0 && (
        <div
          style={{
            opacity: 0.5,
            display: 'flex',
            minWidth: '40px',
            minHeight: '40px',
            alignItems: 'center',
            pointerEvents: 'none',
            justifyContent: 'center',
            fontFamily: 'sans-serif',
            backgroundColor: '#80808020',
          }}
        >
          Drag and drop something here...
        </div>
      )}
    </div>
  );
};
