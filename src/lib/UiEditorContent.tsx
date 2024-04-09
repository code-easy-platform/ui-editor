import { useCallback, useRef, useState } from 'react';
import { IObservable, useObserverValue } from 'react-observing';
import { TMonitor, useDrop } from 'react-use-drag-and-drop';

import { TComponent, TElement, TStyle, TDraggableElement } from './types';
import { SelectBarWrapper, useSelectBar } from './components/select-bar';
import { ContentFrame } from './components/custom-frame/ContentFrame';
import { HoverBarWrapper, useHoverBar } from './components/hover-bar';
import { CustomFrame } from './components/custom-frame/CustomFrame';
import { InsertBar, useInsertBar } from './components/insert-bar';
import { Element } from './components/element';
import { uuid } from './helpers';


interface IUIEditorContentProps {
  styles: IObservable<TStyle[]>;
  value: IObservable<TElement[]>;
  components: IObservable<TComponent[]>;

  onKeyDown: (event: KeyboardEvent) => void
}
export const UIEditorContent = (props: IUIEditorContentProps) => {
  const droppableId = useRef({ id: uuid() });

  const { updateSelectBarGetPosition, updateSelectBarScroll, select } = useSelectBar();
  const { showInsertBar, hideInsertBar } = useInsertBar();
  const { updateHoverBarScroll, hover } = useHoverBar();


  const [frameDocumentRef, setFrameDocumentRef] = useState<Document | null>(null);
  const content = useObserverValue(props.value);


  const handleDrop = useCallback((data: TDraggableElement | undefined, _: TMonitor) => {
    hideInsertBar();
    if (!data) return;

    /* const droppedData = data.get(selectedElement, selectedElement);

    if (droppedData.parent) {
      set(droppedData.parent.content, oldContent => {
        return oldContent.filter(contentItem => contentItem.id.value !== droppedData.element.id.value)
      });
    }

    set(props.value, oldContent => [...oldContent, droppedData.element]);

    setTimeout(() => select(droppedData.element.id.value), 0); */
  }, [props.value, select, hideInsertBar]);

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
      resetBody={true}
      onClick={handleClick}
      styles={props.styles}
      draggingHover={isDraggingOver || isDraggingOverCurrent}
    >
      <ContentFrame onRef={setFrameDocumentRef} onScroll={handleScroll} onKeyDown={props.onKeyDown}>
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
