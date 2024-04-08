import { useCallback, useMemo, useRef, useState } from "react";
import { TMonitor, useDrop } from "react-use-drag-and-drop";
import { observe, set, useObserver } from "react-observing";
import Frame from 'react-frame-component';
import { v4 as uuid } from 'uuid';

import { useEditorProps, useSelectedElement, useFocusBar, useInspector } from "../../../hooks";
import { FocusBarSelectWrapper } from "../../focus-bar/FocusBarSelectWrapper";
import { FocusBarHoverWrapper } from "../../focus-bar/FocusBarHoverWrapper";
import { IDraggableUIElement } from "../../../../../shared/interfaces";
import { Component, Page } from "../../../../../shared/models/project";
import { InsertBar, useInsertBar } from "./components/insert-bar";
import { Element } from './components/ui-element/Element';


export const UIPlayground: React.FC = () => {
  const [playgroundRef, setPlaygroundRef] = useState<Document | null>(null);
  const { focusBarSelect, updateScroll, focusBarHover } = useFocusBar();
  const { showInsertBar, hideInsertBar } = useInsertBar();
  const droppableId = useRef({ id: uuid() });
  const { inspect } = useInspector();

  const selectedElement = useSelectedElement().selectedElement as Page | Component;
  const { project } = useEditorProps();

  const [content] = useObserver(selectedElement?.content || observe([]));
  const [style] = useObserver(selectedElement?.css || observe(''));
  const [baseTheme] = useObserver(project.css || observe(''));


  const handleDrop = useCallback((data: IDraggableUIElement | undefined, _: TMonitor) => {
    hideInsertBar();
    if (!data) return;
    if (!selectedElement) return;

    const droppedData = data.get(selectedElement, selectedElement);
    
    if (droppedData.parent) {
      set(droppedData.parent.content, oldContent => {
        return oldContent.filter(contentItem => contentItem.id.value !== droppedData.element.id.value)
      });
    }

    set(selectedElement.content, oldContent => [...oldContent, droppedData.element]);

    setTimeout(() => inspect(droppedData.element.id.value), 0);
  }, [selectedElement, inspect, hideInsertBar]);

  const handleDragHover = useCallback((_: IDraggableUIElement | undefined, __: TMonitor) => {
    const lastElementChild = playgroundRef?.lastElementChild;
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
  }, [playgroundRef?.lastElementChild, showInsertBar]);

  const handleClick = useCallback(() => focusBarSelect(undefined), [focusBarSelect]);


  const [{ isDraggingOver, isDraggingOverCurrent }] = useDrop<IDraggableUIElement>({
    drop: handleDrop,
    hover: handleDragHover,
    id: droppableId.current.id,
    element: { current: playgroundRef },
    leave: () => { hideInsertBar(); focusBarHover(undefined); },
  }, [handleDrop, handleDragHover, hideInsertBar]);

  const iframeHead = useMemo(() => {
    return (
      <>
        {baseTheme.length > 0 && <style>{baseTheme}</style>}
        {style.length > 0 && <style>{style}</style>}

        <style>
          {[
            `* {`,
            `  outline: none;`,
            `}`,
            '',
            `html${isDraggingOver || isDraggingOverCurrent ? '' : ':hover'} body .frame-content *, html:focus body .frame-content * {`,
            `  outline: thin solid #80808050;`,
            `}`,
            '',
            ...(content.length > 0
              ? []
              : [
                'body:before {',
                '  content: "Drag and drop something here...";',
                '  font-family: sans-serif;',
                '  padding: 4px;',
                '  opacity: .5;',
                '}',
              ]),
            '',
            `[data-focusbar="true"], [data-focusbar="true"] * {`,
            `  outline: none!important;`,
            `}`,
            `body {`,
            `  ${selectedElement instanceof Component ? 'margin:0!important;' : ''}`,
            `}`,
          ].join('\n')}
        </style>
      </>
    );
  }, [baseTheme, content.length, isDraggingOver, isDraggingOverCurrent, style]);


  return (
    <Frame
      tabIndex={-1}
      head={iframeHead}
      mountTarget="body"
      onClick={handleClick}
      onContextMenu={(e: any) => e.preventDefault()}
      className="w-full h-full bg-white border-none outline-none"
      initialContent={`<html tabindex="0"><head></head><body style="min-height: 500px"></body></html>`}
    >
      <PlaygroundFrameContent setPlaygroundRef={setPlaygroundRef} updateScroll={updateScroll}>
        <FocusBarSelectWrapper />
        <FocusBarHoverWrapper />
        <InsertBar />

        {content.map((contentItem) => (
          <Element
            parents={[]}
            element={contentItem}
            key={contentItem.id.value}
          />
        ))}
      </PlaygroundFrameContent>
    </Frame>
  );
}
