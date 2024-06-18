import { useCallback, useRef } from 'react';
import { TMonitor, useDrop } from 'react-use-drag-and-drop';
import { useObserverValue } from 'react-observing';

import { TDraggableElement, TExternalDraggableElement } from './types';
import { getParentToRemoveChildren, uuid } from './helpers';
import { useUiOverviewContext } from './UiOverviewContext';
import { useSelectBar } from './components/select-bar';
import { useHoverBar } from './components/hover-bar';
import { InsertBar } from './components/insert-bar';
import { Element } from './components/element';


export const UiOverviewContent = () => {
  const frameDocumentRef = useRef<HTMLDivElement>(null);
  const droppableId = useRef({ id: uuid() });

  const { value, onDrop, onKeyDown } = useUiOverviewContext();
  const { select } = useSelectBar();
  const { hover } = useHoverBar();


  const content = useObserverValue(value);


  const handleDrop = useCallback((data: TDraggableElement | TExternalDraggableElement | undefined, _: TMonitor) => {
    if (!data) return;

    if (Object.keys(data).includes('id')) {
      const droppedData = data as TExternalDraggableElement;

      onDrop({
        element: droppedData.id,
        from: {
          position: -1,
          element: null,
        },
        to: {
          element: 'root',
          position: value.value.length,
        },
      });
    } else {
      const droppedData = data as TDraggableElement;

      const parentToRemoveTheElement = getParentToRemoveChildren(droppedData.parents || []);
      const elementFrom = !parentToRemoveTheElement ? 'root' : parentToRemoveTheElement;
      const indexToRemove = parentToRemoveTheElement?.children.value?.findIndex(child => child.id.value === droppedData.element.id.value) ?? -1;

      onDrop({
        element: droppedData.element,
        from: {
          element: elementFrom,
          position: indexToRemove,
        },
        to: {
          element: 'root',
          position: value.value.length,
        },
      });

      select(droppedData.element.id.value);
    }
  }, [value, select]);


  const handleClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    select(undefined);
  }, [select]);


  const [{ isDraggingOver }] = useDrop<TDraggableElement>({
    drop: handleDrop,
    element: frameDocumentRef,
    id: droppableId.current.id,
    leave: () => hover(undefined),
  }, [handleDrop]);


  return (
    <div
      tabIndex={0}
      onKeyDown={onKeyDown}
      onClick={handleClick}
      ref={frameDocumentRef}
      className='flex-1 h-full w-full outline-none'
    >
      {content.map((element) => (
        <Element
          parents={[]}
          paddingLeft={4}
          element={element}
          key={element.id.value}
        />
      ))}

      {content.length === 0 && (
        <p>
          Drag and drop here to start
        </p>
      )}

      {isDraggingOver && <InsertBar />}
    </div>
  );
}
