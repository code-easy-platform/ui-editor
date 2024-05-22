import { useRef, createElement } from 'react';
import { useDrag } from 'react-use-drag-and-drop';

import { TExternalDraggableElement } from 'ui-editor/src';


interface IHtmlProps {
  tag: string;
  
}
export const Html = ({ tag }: IHtmlProps) => {
  const htmlRef = useRef<HTMLElement>(null);


  useDrag<TExternalDraggableElement>({
    id: tag,
    element: htmlRef,
    data: { id: tag },
  });

  return createElement(tag, { ref: htmlRef, style: { border: 'thin solid' } }, "Button")
};
