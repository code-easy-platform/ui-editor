import { MouseEvent, RefObject, useEffect, useMemo, useRef, useState } from 'react';
import { TMonitor, useDrag, useDrop } from 'react-use-drag-and-drop';
import { useObserverValue } from 'react-observing';

import { useUIElementInlineStyle } from './UseUIElementInlineStyle';
import { useElementAttributes } from './UseElementAttributes';
import { TDraggableElement, TElement } from '../../../types';
import { getCustomDragLayer, uuid } from '../../../helpers';
import { useSelectBar } from '../../select-bar';
import { useInsertBar } from '../../insert-bar';
import { useHoverBar } from '../../hover-bar';
import { DynamicTag } from './DynamicTag';
import { Element } from '..';


interface IEditProps {
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
export const Edit = ({ element, parents, onMouseOver, onMouseLeave, onSelect, onDragLeave, onDragOver, onDrop, onHoverBar, onSelectBar }: IEditProps) => {
  const elementRef = useRef<HTMLElement>(null);

  const [forceEnable, setForceEnable] = useState(false);

  const [elementProps, elementSpecialProps] = useElementAttributes(element.attributes);
  const styles = useUIElementInlineStyle(element.style);
  const children = useObserverValue(element.children);
  const tag = useObserverValue(element.tag);
  const id = useObserverValue(element.id);

  const { hideInsertBar } = useInsertBar();
  const { selectedId, select } = useSelectBar();
  const { hoveredId, hover } = useHoverBar();


  useEffect(() => {
    if (hoveredId.value === id) {
      onHoverBar(element, elementRef.current);
    }

    const subscription = hoveredId.subscribe((hoveringId) => {
      if (hoveringId === undefined) return hover(undefined);
      if (hoveringId !== id) return;

      onHoverBar(element, elementRef.current);
    });
    return () => subscription.unsubscribe();
  }, [id, hoveredId, element, hover]);

  useEffect(() => {
    if (selectedId.value === id) {
      onSelectBar(element, elementRef.current);
    }

    const subscription = selectedId.subscribe((selectedId) => {
      if (selectedId === undefined) return select(undefined);
      if (selectedId !== id) return;

      onSelectBar(element, elementRef.current);
    });
    return () => subscription.unsubscribe();
  }, [element, id, selectedId, select]);


  const elementChildren = useMemo(() => {
    if ((!children || children.length === 0) && Object.keys(elementSpecialProps).includes('text')) {
      return elementSpecialProps.text;
    }

    if (!children || children.length === 0) return null;

    return children.map(child => (
      <Element
        element={child}
        key={child.id.value}
        parents={[...parents, element]}
      />
    ));
  }, [children, parents, element, elementSpecialProps.text]);

  const allowContent = useMemo(() => children !== undefined, [children]);


  const { isDragging, preview } = useDrag<TDraggableElement>({
    id,
    canDrag: true,
    element: elementRef,
    end: () => hideInsertBar(),
    data: {
      get(newParent, newBaseParent) {
        return { element: newParent, parent: newBaseParent };
      },
    },
  }, [id, hideInsertBar]);
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
    <DynamicTag
      readOnly
      tag={tag}
      ref={elementRef}
      children={elementChildren}
      onMouseLeave={onMouseLeave}
      onClick={e => onSelect(e, element)}
      onMouseOver={e => onMouseOver(e, element, elementRef.current)}
      {...(elementProps !== undefined
        ? { ...elementProps, ...(forceEnable ? { disabled: false } : {}) }
        : {}
      )}
      style={{
        ...styles,

        resize: 'none',
        cursor: 'default',
        userSelect: 'none',
        pointerEvents: 'all',

        opacity: isDragging ? 0.5 : typeof styles.opacity === 'number' ? Number(styles.opacity) : undefined,
        minWidth: elementChildren === null && allowContent ? 40 : typeof styles.minWidth === 'number' ? Number(styles.minWidth) : undefined,
        minHeight: elementChildren === null && allowContent ? 40 : typeof styles.minHeight === 'number' ? Number(styles.minHeight) : undefined,
      }}
    />
  );
};
