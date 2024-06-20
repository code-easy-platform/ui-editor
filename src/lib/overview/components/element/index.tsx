import { useCallback } from 'react';
import { useObserverValue } from 'react-observing';
import { TMonitor } from 'react-use-drag-and-drop';

import { TDraggableElement, TElement, TExternalDraggableElement, TParentElement } from '../../types';
import { useUiOverviewContext } from '../../UiOverviewContext';
import { getCanDrop, getDropPosition } from '../../helpers';
import { useSelectBar } from '../select-bar';
import { useHoverBar } from '../hover-bar';
import { Component } from './component';
import { Html } from './html';
import { Slot } from './slot';
import { Text } from './text';


interface IElementProps {
  element: TElement;
  paddingLeft: number;
  parents: TParentElement[];
}
export const Element = ({ element, parents, paddingLeft }: IElementProps) => {
  const type = useObserverValue(element.type);

  const { onDrop, value } = useUiOverviewContext();
  const { select } = useSelectBar();
  const { hover } = useHoverBar();


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

  const handleMouseOver = useCallback((event: React.MouseEvent, element: TElement<'component' | 'html' | 'slot' | "text" | 'slot-content'>) => {
    event.stopPropagation();

    hover(element.id.value);
  }, [hover]);

  const handleMouseLeave = useCallback((event: React.MouseEvent) => {
    event.stopPropagation();

    hover(undefined);
  }, [hover]);


  const handleDragOver = useCallback((_: TDraggableElement, monitor: TMonitor, elementDropTarget: TElement<"html" | "slot" | "component" | "text" | "slot-content">, elementDropTargetParents: TParentElement[], elementRef: React.RefObject<HTMLElement>, droppableId: string): 'start' | 'end' | 'center' | null => {
    const canDrop = getCanDrop(monitor, elementDropTarget, elementDropTargetParents, elementRef, droppableId);
    if (!canDrop) {
      hover(undefined);
      return null;
    }

    const dropPosition = getDropPosition(monitor, elementDropTarget, elementRef);
    if (!dropPosition) {
      hover(undefined);
      return null;
    }

    hover(element.id.value);

    return dropPosition;
  }, [hover]);

  const handleDrop = useCallback((data: TDraggableElement | TExternalDraggableElement, monitor: TMonitor, elementDropTarget: TElement<"html" | "slot" | "component" | "text" | "slot-content">, elementDropTargetParents: TParentElement[], elementRef: React.RefObject<HTMLElement>, droppableId: string) => {
    const canDrop = getCanDrop(monitor, elementDropTarget, elementDropTargetParents, elementRef, droppableId);
    if (!canDrop) return;

    const dropPosition = getDropPosition(monitor, elementDropTarget, elementRef);
    if (!dropPosition) return;

    const hasChildren = ['html', 'slot-content'].includes(elementDropTarget.type.value) && (elementDropTarget as TElement<'html' | 'slot-content'>).children.value?.length || 0 > 0
    const isDropToParent = dropPosition === 'start' || (dropPosition === 'end' && !hasChildren);
    if (!isDropToParent && elementDropTarget.type.value === 'component') return;


    if (Object.keys(data).includes('id')) {
      const droppedData = data as TExternalDraggableElement;

      if (isDropToParent) {
        const parent = elementDropTargetParents.slice(-1).at(0) as TElement<'html' | 'slot-content'> | undefined;
        const indexToAdd = (parent ? parent.children : value).value?.findIndex(child => child.id.value === elementDropTarget.id.value) ?? -1;

        onDrop({
          element: droppedData.id,
          from: { position: -1, element: null },
          to: {
            element: parent ? parent : 'root',
            position: dropPosition === 'start' ? indexToAdd : indexToAdd + 1,
          }
        });
      } else {
        const indexToAdd = (elementDropTarget as TElement<'html' | 'slot-content'>).children.value?.length || 0;

        onDrop({
          element: droppedData.id,
          from: { position: -1, element: null },
          to: {
            position: dropPosition === 'end' ? 0 : indexToAdd,
            element: elementDropTarget as TElement<'html' | 'slot-content'>,
          },
        });
      }
    } else {
      const droppedData = data as TDraggableElement;

      const parentToRemoveTheElement = droppedData.parents?.slice(-1).at(0);

      const elementFrom = !parentToRemoveTheElement ? 'root' : parentToRemoveTheElement;
      if (elementFrom !== 'root' && (elementFrom.type.value === 'component')) return;
      const indexToRemove = (elementFrom === 'root' ? value : (elementFrom as TElement<'html' | 'slot-content'>).children).value?.findIndex(child => child.id.value === droppedData.element.id.value) ?? -1;


      if (isDropToParent) {
        const parent = elementDropTargetParents.slice(-1).at(0) as TElement<'html' | 'slot-content'> | undefined;
        const indexToAdd = (parent ? parent.children : value).value?.findIndex(child => child.id.value === elementDropTarget.id.value) ?? -1;

        onDrop({
          element: droppedData.element,
          from: {
            position: indexToRemove,
            element: elementFrom as TElement<'html' | 'slot-content'>,
          },
          to: {
            element: parent ? parent : 'root',
            position: dropPosition === 'start' ? indexToAdd : indexToAdd + 1,
          }
        });
      } else {
        const indexToAdd = (elementDropTarget as TElement<'html' | 'slot-content'>).children.value?.length || 0;

        onDrop({
          element: droppedData.element,
          from: {
            position: indexToRemove,
            element: elementFrom as TElement<'html' | 'slot-content'>,
          },
          to: {
            position: hasChildren ? 0 : indexToAdd,
            element: elementDropTarget as TElement<'html' | 'slot-content'>,
          }
        });
      }

      select(droppedData.element.id.value);
    }
  }, [select, onDrop]);


  if (type === 'component') return (
    <Component
      parents={parents}
      paddingLeft={paddingLeft}
      element={element as TElement<'component'>}

      onDrop={handleDrop}
      onDragLeave={() => null}
      onDragOver={handleDragOver}
      onDoubleClick={handleDoubleClick}

      onSelect={handleSelect}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    />
  );

  if (type === 'slot') return (
    <Slot
      parents={parents}
      paddingLeft={paddingLeft}
      element={element as TElement<'slot'>}

      onDrop={handleDrop}
      onDragLeave={() => null}
      onDragOver={handleDragOver}

      onSelect={handleSelect}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    />
  );

  if (type === 'text') return (
    <Text
      parents={parents}
      paddingLeft={paddingLeft}
      element={element as TElement<'text'>}

      onDrop={handleDrop}
      onDragLeave={() => null}
      onDragOver={handleDragOver}

      onSelect={handleSelect}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    />
  );

  return (
    <Html
      parents={parents}
      paddingLeft={paddingLeft}
      element={element as TElement<'html'>}

      onDrop={handleDrop}
      onDragLeave={() => null}
      onDragOver={handleDragOver}

      onSelect={handleSelect}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    />
  );
};
