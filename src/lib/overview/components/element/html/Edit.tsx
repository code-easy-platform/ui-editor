import { MouseEvent, RefObject, useEffect, useMemo, useRef } from 'react';
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
  onDragOver: (data: TDraggableElement, monitor: TMonitor, element: TElement<'html'>, parents: TParentElement[], elementRef: RefObject<HTMLElement>, droppableId: string) => void;
  onDragLeave: (data: TDraggableElement, monitor: TMonitor, element: TElement<'html'>, parents: TParentElement[], elementRef: RefObject<HTMLElement>, droppableId: string) => void;

  onMouseLeave: (event: MouseEvent) => void;
  onSelect: (event: MouseEvent, element: TElement<'html'>) => void;
  onMouseOver: (event: MouseEvent, element: TElement<'html'>, htmlElement: HTMLElement | null) => void;

  onHoverBar: (element: TElement<'html'>, htmlElement: HTMLElement | null) => void;
  onSelectBar: (element: TElement<'html'>, htmlElement: HTMLElement | null) => void;
}
export const Edit = ({ element, parents, paddingLeft, onMouseOver, onMouseLeave, onSelect, onDragLeave, onDragOver, onDrop, onHoverBar, onSelectBar }: IEditProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  const children = useObserverValue(element.children);
  const name = useObserverValue(element.name);
  const id = useObserverValue(element.id);

  const { onDragStart, onDragEnd } = useUiOverviewContext();
  const { selectedId } = useSelectBar();
  const { hoveredId } = useHoverBar();


  useMatchEffect({
    value: hoveredId,
    matchWidthValue: element?.id,
    effect: () => onHoverBar(element, elementRef.current),
  }, [hoveredId, element]);

  useMatchEffect({
    value: selectedId,
    matchWidthValue: element?.id,
    effect: () => onSelectBar(element, elementRef.current),
  }, [selectedId, element]);


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
  useDrop({
    element: elementRef,
    id: droppableId.current.id,
    drop: (data, monitor) => onDrop(data, monitor, element, parents, elementRef, droppableId.current.id),
    hover: (data, monitor) => onDragOver(data, monitor, element, parents, elementRef, droppableId.current.id),
    leave: (data, monitor) => onDragLeave(data, monitor, element, parents, elementRef, droppableId.current.id),
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
        <Item label={name} paddingLeft={paddingLeft} />
      </div>

      {elementChildren}
    </>
  );
};
