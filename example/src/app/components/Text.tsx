import { useRef, createElement } from 'react';
import { useDrag } from 'react-use-drag-and-drop';

import { TExternalDraggableElement } from 'ui-editor/src';


export const Text = () => {
  const htmlRef = useRef<HTMLElement>(null);


  useDrag<TExternalDraggableElement>({
    id: 'text',
    element: htmlRef,
    data: { id: 'text' },
  }, []);


  return createElement('div', { ref: htmlRef, style: { border: 'thin solid', padding: 4 } }, 'text');
};
