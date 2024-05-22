import { TElement } from './Element';


export type TExternalDraggableElement = {
  id: string;
}

export type TDraggableElement = {
  element: TElement;
  parents: TElement<'html' | 'slot' | 'slot-content' | 'component'>[] | null;
}

export type TDropFunctionProps = {
  element: TElement | string;
  from: {
    position: number;
    element: null | 'root' | TElement<'html' | 'slot-content'>;
  };
  to: {
    position: number;
    element: 'root' | TElement<'html' | 'slot-content'>;
  }
}
