import { useCallback } from 'react';
import { set, useObserverValue } from 'react-observing';
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
  const { onDrop } = useUiEditorContext();


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

  const handleDrop = useCallback((data: TDraggableElement, monitor: TMonitor, elementDropTarget: TElement, parents: TElement[], elementRef: React.RefObject<HTMLElement>, droppableId: string) => {
    const canDrop = getCanDrop(monitor, elementDropTarget, parents, elementRef, droppableId);
    if (!canDrop) return;

    const dropPosition = getDropPosition(monitor, elementDropTarget, elementRef);
    if (!dropPosition) return;


    const isDropToParent = dropPosition.isOverStart || dropPosition.isOverEnd;
    if (!isDropToParent && elementDropTarget.type.value === 'component') return;

    onDrop({
      element: data.element,
      from: { parents: data.parents },
      to: {
        parents: parents,
        element: elementDropTarget,
      }
    });


    /*const handleRemoveFromOldParent = (oldParent: TElement<'html' | 'slot'>) => {
      set(oldParent.children, oldContent => {
        if (!oldContent) return oldContent;
        return [...oldContent.filter(contentItem => contentItem.id.value !== droppedData.element.id.value)];
      });
    }

    const handleDropToParent = (parentToDrop: TElement<'html' | 'slot'>) => {
      set(parentToDrop.children, oldContent => {
        if (!oldContent) return oldContent;

        const index = oldContent.findIndex(contentItem => contentItem.id.value === elementDropTarget.id.value);
        oldContent.splice(dropPosition.isOverStart ? index : index + 1, 0, droppedData.element)
        return [...oldContent];
      });
    }

    const handleDrop = (elementToDrop: TElement<'html' | 'slot'>) => {
      set(elementToDrop.children, oldContent => {
        if (!oldContent) return oldContent;
        return [...oldContent, droppedData.element];
      });
    }


    const droppedData = data.get();
    if (droppedData.parent) {
      handleRemoveFromOldParent(droppedData.parent);
    }

    if (isDropToParent) {
      const elementDropTargetParent = parents.length === 0 ? 123 : parents[parents.length - 1];
      if (elementDropTargetParent.type.value === 'component') return;

      handleDropToParent(elementDropTargetParent as TElement<'html' | 'slot'>);
    } else {
      handleDrop(elementDropTarget as TElement<'html' | 'slot'>);
    } */
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
