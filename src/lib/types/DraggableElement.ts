import { TElement } from './Element';


export type TDraggableElement = {
  get: (newParent: TElement, newBaseParent: TElement) => {
    element: TElement;
    parent: TElement | null;
  }
}

