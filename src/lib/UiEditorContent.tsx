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

  const { updateSelectBarGetPosition, updateSelectBarScroll, select } = useSelectBar();
  const { value, styles, onDrop, onKeyDown } = useUiEditorContext();
  const { showInsertBar, hideInsertBar } = useInsertBar();
  const { updateHoverBarScroll, hover } = useHoverBar();


  const [frameDocumentRef, setFrameDocumentRef] = useState<Document | null>(null);
  const content = useObserverValue(value);


  const handleDrop = useCallback((data: TDraggableElement | undefined, _: TMonitor) => {
    hideInsertBar();
    if (!data) return;

    const parent = data.parents?.slice(-1).at(0);

    onDrop({
      element: data.element,
      from: !parent ? null : {
        element: parent
      },
      to: {
        element: 'root',
        position: value.value.length,
      },
    });
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

  const handleClick = useCallback(() => updateSelectBarGetPosition(undefined), [updateSelectBarGetPosition]);

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
      onClick={handleClick}
      draggingHover={isDraggingOver || isDraggingOverCurrent}
    >
      <ContentFrame onRef={setFrameDocumentRef} onScroll={handleScroll} onKeyDown={onKeyDown}>
        <SelectBarWrapper />
        <HoverBarWrapper />
        <InsertBar />

        {content.map((element) => (
          <Element
            parents={[]}
            element={element}
            key={element.id.value}
          />
        ))}
      </ContentFrame>
    </CustomFrame>
  );
}
