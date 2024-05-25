import { MouseEvent, RefObject, useEffect, useMemo, useRef } from 'react';
import { useObserverValue, useSelectorValue } from 'react-observing';
import { TMonitor, useDrag, useDrop } from 'react-use-drag-and-drop';

import { TDraggableElement, TElement, TParentElement } from '../../../types';
import { useUiEditorContext } from '../../../UiEditorContext';
import { getCustomDragLayer, uuid } from '../../../helpers';
import { useSelectBar } from '../../select-bar';
import { useInsertBar } from '../../insert-bar';
import { useHoverBar } from '../../hover-bar';
import { Element } from '..';


interface IEditProps {
  element: TElement<'component'>;
  parents: TParentElement[];

  onDrop: (data: TDraggableElement, monitor: TMonitor, element: TElement<'component'>, parents: TParentElement[], elementRef: RefObject<HTMLElement>, droppableId: string) => void;
  onDragOver: (data: TDraggableElement, monitor: TMonitor, element: TElement<'component'>, parents: TParentElement[], elementRef: RefObject<HTMLElement>, droppableId: string) => void;
  onDragLeave: (data: TDraggableElement, monitor: TMonitor, element: TElement<'component'>, parents: TParentElement[], elementRef: RefObject<HTMLElement>, droppableId: string) => void;

  onMouseLeave: (event: MouseEvent) => void;
  onSelect: (event: MouseEvent, element: TElement<'component'>) => void;
  onDoubleClick: (event: React.MouseEvent, element: TElement<'component'>) => void;
  onMouseOver: (event: MouseEvent, element: TElement<'component'>, htmlElement: HTMLElement | null) => void;

  onHoverBar: (element: TElement<'component'>, htmlElement: HTMLElement | null) => void;
  onSelectBar: (element: TElement<'component'>, htmlElement: HTMLElement | null) => void;
}
export const Edit = ({ element, parents, onMouseOver, onMouseLeave, onSelect, onDragLeave, onDragOver, onDrop, onHoverBar, onSelectBar, onDoubleClick }: IEditProps) => {
  const elementRef = useRef<HTMLDivElement>(null);


  const { onDragStart, onDragEnd, components } = useUiEditorContext();
  const { hideInsertBar } = useInsertBar();
  const { selectedId } = useSelectBar();
  const { hoveredId } = useHoverBar();


  const id = useObserverValue(element.id);
  const children = useSelectorValue(({ get }) => {
    const component = get(components).find(component => get(component.id) === get(element.referenceComponentId));
    if (!component) return [];

    return get(component.content);
  }, [components, element]);


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


  const elementChildren = useMemo(() => {
    if (!children || children.length === 0) return null;

    return children.map(child => (
      <Element
        element={child}
        key={child.id.value}
        parents={[...parents, element]}
      />
    ));
  }, [children, parents, element]);


  const { isDragging, preview } = useDrag<TDraggableElement>({
    id,
    element: elementRef,
    data: { element, parents },
    start: () => { onDragStart() },
    end: () => { hideInsertBar(); onDragEnd(); },
  }, [id, element, parents, hideInsertBar, onDragStart, onDragEnd]);
  useEffect(() => {
    preview(
      () => getCustomDragLayer('name dynamic here'),
      (customDragLayer) => customDragLayer.remove(),
    );
  }, [preview]);

  const droppableId = useRef({ id: uuid() });
  useDrop({
    element: elementRef,
    id: droppableId.current.id,
    drop: (data, monitor) => onDrop(data, monitor, element, parents, elementRef, droppableId.current.id),
    hover: (data, monitor) => onDragOver(data, monitor, element, parents, elementRef, droppableId.current.id),
    leave: (data, monitor) => onDragLeave(data, monitor, element, parents, elementRef, droppableId.current.id),
  }, [element, parents, onDrop, onDragOver, onDragLeave]);


  return (
    <div
      ref={elementRef}
      onMouseLeave={onMouseLeave}
      onClick={e => onSelect(e, element)}
      onDoubleClick={e => onDoubleClick(e, element)}
      onMouseOver={e => onMouseOver(e, element, elementRef.current)}
      style={{ cursor: 'default', userSelect: 'none', pointerEvents: 'all', opacity: isDragging ? 0.5 : undefined }}
    >{elementChildren}</div>
  );
};
