import { MouseEvent, RefObject, useEffect, useMemo, useRef, useState } from 'react';
import { TMonitor, useDrag, useDrop } from 'react-use-drag-and-drop';
import { useObserverValue } from 'react-observing';

import { TDraggableElement, TElement, TParentElement } from '../../../types';
import { useUiOverviewContext } from '../../../UiOverviewContext';
import { getCustomDragLayer, uuid } from '../../../helpers';
import { useMatchEffect } from '../UseMatchEffect';
import { useSelectBar } from '../../select-bar';
import { useHoverBar } from '../../hover-bar';
import { Item } from '../../item/Item';
import { Element } from '..';


interface IEditProps {
  paddingLeft: number;
  element: TElement<'html'>;
  parents: TParentElement[];

  onDrop: (data: TDraggableElement, monitor: TMonitor, element: TElement<'html'>, parents: TParentElement[], elementRef: RefObject<HTMLElement>, droppableId: string) => void;
  onDragLeave: (data: TDraggableElement, monitor: TMonitor, element: TElement<'html'>, parents: TParentElement[], elementRef: RefObject<HTMLElement>, droppableId: string) => null;
  onDragOver: (data: TDraggableElement, monitor: TMonitor, element: TElement<'html'>, parents: TParentElement[], elementRef: RefObject<HTMLElement>, droppableId: string) => 'start' | 'end' | 'center' | null;

  onMouseLeave: (event: MouseEvent) => void;
  onSelect: (event: MouseEvent, element: TElement<'html'>) => void;
  onMouseOver: (event: MouseEvent, element: TElement<'html'>, htmlElement: HTMLElement | null) => void;
}
export const Edit = ({ element, parents, paddingLeft, onMouseOver, onMouseLeave, onSelect, onDragLeave, onDragOver, onDrop }: IEditProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  const [dropPositionAt, setDropPositionAt] = useState<'start' | 'end' | 'center' | null>(null);
  const children = useObserverValue(element.children);
  const name = useObserverValue(element.name);
  const id = useObserverValue(element.id);

  const { onDragStart, onDragEnd } = useUiOverviewContext();
  const { selectedId } = useSelectBar();
  const { hoveredId } = useHoverBar();


  const isHovered = useMatchEffect({
    value: hoveredId,
    matchWidthValue: element?.id,
  });

  const isSelected = useMatchEffect({
    value: selectedId,
    matchWidthValue: element?.id,
  });


  const elementChildren = useMemo(() => {
    if (!children || children.length === 0) return null;

    return children.map(child => (
      <Element
        element={child}
        key={child.id.value}
        paddingLeft={paddingLeft + 8}
        parents={[...parents, element]}
      />
    ));
  }, [children, parents, element, paddingLeft]);


  const { isDragging, preview } = useDrag<TDraggableElement>({
    id,
    element: elementRef,
    data: { element, parents, },
    start: () => { onDragStart() },
    end: () => onDragEnd(),
  }, [id, element, parents, onDragStart, onDragEnd]);
  useEffect(() => {
    preview(
      () => getCustomDragLayer(name),
      (customDragLayer) => customDragLayer.remove(),
    );
  }, [preview, name]);

  const droppableId = useRef({ id: uuid() });
  const [{ isDraggingOver }] = useDrop({
    element: elementRef,
    id: droppableId.current.id,
    drop: (data, monitor) => onDrop(data, monitor, element, parents, elementRef, droppableId.current.id),
    hover: (data, monitor) => setDropPositionAt(onDragOver(data, monitor, element, parents, elementRef, droppableId.current.id)),
    leave: (data, monitor) => setDropPositionAt(onDragLeave(data, monitor, element, parents, elementRef, droppableId.current.id)),
  }, [element, parents, onDrop, onDragOver, onDragLeave]);


  return (
    <>
      <div
        ref={elementRef}
        data-dragging={isDragging}
        className='data-[dragging=true]:opacity-50'

        onMouseLeave={onMouseLeave}
        onClick={e => onSelect(e, element)}
        onMouseOver={e => onMouseOver(e, element, elementRef.current)}
      >
        <Item
          label={name}
          hover={isHovered}
          select={isSelected}
          dragging={isDragging}
          dragOver={isDraggingOver}
          paddingLeft={paddingLeft}
          insertBarAt={dropPositionAt}
        />
      </div>

      {elementChildren}
    </>
  );
};
