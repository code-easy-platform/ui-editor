import { useCallback } from 'react';
import { useObserverValue } from 'react-observing';
import { TMonitor } from 'react-use-drag-and-drop';

import { getCanDrop, getDropPosition, getInsertBarPosition } from '../../helpers';
import { useUiEditorContext } from '../../UiEditorContext';
import { TDraggableElement, TElement } from '../../types';
import { useInsertBar } from '../insert-bar';
import { useSelectBar } from '../select-bar';
import { useHoverBar } from '../hover-bar';
import { Component } from './component';
import { Html } from './html';
import { Slot } from './slot';


interface IElementProps {
  element: TElement;
  parents: TElement[];
}
export const Element = ({ element, parents }: IElementProps) => {
  const type = useObserverValue(element.type);

  const { select, updateSelectBarGetPosition } = useSelectBar();
  const { hover, updateHoverBarGetPosition } = useHoverBar();
  const { showInsertBar, hideInsertBar } = useInsertBar();
  const { onDrop, value } = useUiEditorContext();


  const handleSelect = useCallback((event: React.MouseEvent, element: TElement) => {
    event.stopPropagation();
    event.preventDefault();

    select(element.id.value);
  }, [select]);

  const handleDoubleClick = useCallback((event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();

    select(undefined);
    hover(undefined);
  }, [select, hover]);

  const handleMouseOver = useCallback((event: React.MouseEvent, element: TElement) => {
    event.stopPropagation();

    hover(element.id.value);
  }, [hover]);

  const handleMouseLeave = useCallback((event: React.MouseEvent) => {
    event.stopPropagation();

    hover(undefined);
  }, [hover]);


  const handleHoverBar = useCallback((_: TElement, htmlElement: HTMLElement | null) => {
    updateHoverBarGetPosition(() => ({
      top: htmlElement?.offsetTop || 0,
      left: htmlElement?.offsetLeft || 0,
      width: htmlElement?.getBoundingClientRect().width || 0,
      height: htmlElement?.getBoundingClientRect().height || 0,
    }));
  }, [updateHoverBarGetPosition]);

  const handleSelectBar = useCallback((_: TElement, htmlElement: HTMLElement | null) => {
    updateSelectBarGetPosition(() => ({
      top: htmlElement?.offsetTop || 0,
      left: htmlElement?.offsetLeft || 0,
      width: htmlElement?.getBoundingClientRect().width || 0,
      height: htmlElement?.getBoundingClientRect().height || 0,
    }));
  }, [updateSelectBarGetPosition]);


  const handleDragOver = useCallback((_: TDraggableElement, monitor: TMonitor, element: TElement, parents: TElement[], elementRef: React.RefObject<HTMLElement>, droppableId: string) => {
    const canDrop = getCanDrop(monitor, element, parents, elementRef, droppableId);
    if (!canDrop) return hover(undefined);

    hover(element.id.value);

    const insertBarPosition = getInsertBarPosition(monitor, element, elementRef);
    if (!insertBarPosition) return hideInsertBar();

    showInsertBar({
      isVisible: true,
      top: insertBarPosition.top,
      left: insertBarPosition.left,
      width: insertBarPosition.width,
      height: insertBarPosition.height,
      isHorizontal: insertBarPosition.isHorizontal,
    });
  }, [showInsertBar, hover, hideInsertBar]);

  const handleDrop = useCallback((data: TDraggableElement, monitor: TMonitor, elementDropTarget: TElement, elementDropTargetParents: TElement[], elementRef: React.RefObject<HTMLElement>, droppableId: string) => {
    const canDrop = getCanDrop(monitor, elementDropTarget, elementDropTargetParents, elementRef, droppableId);
    if (!canDrop) return;

    const dropPosition = getDropPosition(monitor, elementDropTarget, elementRef);
    if (!dropPosition) return;

    const isDropToParent = dropPosition.isOverStart || dropPosition.isOverEnd;
    if (!isDropToParent && elementDropTarget.type.value === 'component') return;

    const parentToRemoveTheElement = data.parents?.slice(-1).at(0);

    const elementFrom = !parentToRemoveTheElement ? 'root' : parentToRemoveTheElement;
    const indexToRemove = (elementFrom === 'root' ? value : elementFrom.children).value?.findIndex(child => child.id.value === data.element.id.value) ?? -1;

    if (isDropToParent) {
      const parent = elementDropTargetParents.slice(-1).at(0) as TElement<'html' | 'slot'> | undefined;
      const indexToAdd = (parent ? parent.children : value).value?.findIndex(child => child.id.value === elementDropTarget.id.value) ?? -1;

      onDrop({
        element: data.element,
        from: {
          element: elementFrom,
          position: indexToRemove,
        },
        to: {
          element: parent ? parent : 'root',
          position: dropPosition.isOverStart ? indexToAdd : indexToAdd + 1,
        }
      });
    } else {
      const indexToAdd = (elementDropTarget as TElement<'html' | 'slot'>).children.value?.length || -1;

      onDrop({
        element: data.element,
        from: {
          element: elementFrom,
          position: indexToRemove,
        },
        to: {
          element: elementDropTarget as TElement<'html' | 'slot'>,
          position: dropPosition.isOverStart ? indexToAdd : indexToAdd + 1,
        }
      });
    }
  }, [select, onDrop]);


  if (type === 'component') return (
    <Component
      parents={parents}
      element={element as TElement<'component'>}

      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={() => undefined}
      onDoubleClick={handleDoubleClick}

      onSelect={handleSelect}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}

      onHoverBar={handleHoverBar}
      onSelectBar={handleSelectBar}
    />
  );

  if (type === 'slot') return (
    <Slot
      parents={parents}
      element={element as TElement<'slot'>}

      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={() => undefined}

      onSelect={handleSelect}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}

      onHoverBar={handleHoverBar}
      onSelectBar={handleSelectBar}
    />
  );

  return (
    <Html
      parents={parents}
      element={element as TElement<'html'>}

      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={() => undefined}

      onSelect={handleSelect}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}

      onHoverBar={handleHoverBar}
      onSelectBar={handleSelectBar}
    />
  );
};
