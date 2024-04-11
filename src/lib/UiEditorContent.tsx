import { useCallback, useRef, useState } from 'react';
import { TMonitor, useDrop } from 'react-use-drag-and-drop';
import { useObserverValue } from 'react-observing';

import { SelectBarWrapper, useSelectBar } from './components/select-bar';
import { ContentFrame } from './components/custom-frame/ContentFrame';
import { HoverBarWrapper, useHoverBar } from './components/hover-bar';
import { CustomFrame } from './components/custom-frame/CustomFrame';
import { InsertBar, useInsertBar } from './components/insert-bar';
import { useUiEditorContext } from './UiEditorContext';
import { Element } from './components/element';
import { TDraggableElement } from './types';
import { uuid } from './helpers';


export const UIEditorContent = () => {
  const droppableId = useRef({ id: uuid() });

  const { updateSelectBar, updateSelectBarScroll, select } = useSelectBar();
  const { value, styles, onDrop, onKeyDown } = useUiEditorContext();
  const { showInsertBar, hideInsertBar } = useInsertBar();
  const { updateHoverBarScroll, hover } = useHoverBar();


  const [frameDocumentRef, setFrameDocumentRef] = useState<Document | null>(null);
  const content = useObserverValue(value);


  const handleDrop = useCallback((data: TDraggableElement | undefined, _: TMonitor) => {
    hideInsertBar();
    if (!data) return;

    const parentToRemoveTheElement = data.parents?.slice(-1).at(0);
    const elementFrom = !parentToRemoveTheElement ? 'root' : parentToRemoveTheElement;
    const indexToRemove = parentToRemoveTheElement?.children.value?.findIndex(child => child.id.value === data.element.id.value) ?? -1;

    onDrop({
      element: data.element,
      from: {
        element: elementFrom,
        position: indexToRemove,
      },
      to: {
        element: 'root',
        position: value.value.length,
      },
    });

    select(data.element.id.value);
  }, [value, select, hideInsertBar]);

  const handleDragHover = useCallback((_: TDraggableElement | undefined, __: TMonitor) => {
    const lastElementChild = frameDocumentRef?.lastElementChild;
    if (!lastElementChild) return;

    const targeCoords = lastElementChild.getBoundingClientRect();

    showInsertBar({
      isVisible: true,
      isHorizontal: true,
      left: targeCoords.left,
      width: targeCoords.width,
      height: targeCoords.height,
      top: !lastElementChild ? targeCoords.top : targeCoords.top + targeCoords.height,
    });
  }, [frameDocumentRef?.lastElementChild, showInsertBar]);

  const handleScroll = useCallback((y: number, x: number) => {
    updateSelectBarScroll(y, x);
    updateHoverBarScroll(y, x);
  }, [updateSelectBarScroll, updateHoverBarScroll]);


  const [{ isDraggingOver, isDraggingOverCurrent }] = useDrop<TDraggableElement>({
    drop: handleDrop,
    hover: handleDragHover,
    id: droppableId.current.id,
    element: { current: frameDocumentRef },
    leave: () => { hideInsertBar(); hover(undefined); },
  }, [handleDrop, handleDragHover, hideInsertBar]);


  return (
    <CustomFrame
      styles={styles}
      resetBody={true}
      draggingHover={isDraggingOver || isDraggingOverCurrent}
    >
      <ContentFrame onRef={setFrameDocumentRef} onScroll={handleScroll} onKeyDown={onKeyDown}>
        <InsertBar />
        <HoverBarWrapper />
        <SelectBarWrapper />

        {content.map((element) => (
          <Element
            parents={[]}
            element={element}
            key={element.id.value}
          />
        ))}

        {content.length === 0 && (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: "center", margin: 24, padding: 24, backgroundColor: 'lightgray', borderRadius: 8, outline: 'none' }}>
            <span style={{ fontFamily: 'sans-serif', fontSize: 14, opacity: 0.5, userSelect: 'none', outline: 'none' }}>
              Drag and drop here to start
            </span>
          </div>
        )}
      </ContentFrame>
    </CustomFrame>
  );
}
