import { TElement } from './Element';


export type TDraggableElement = {
  element: TElement;
  parents: TElement<'html' | 'slot'>[] | null;
}

export type TDropFunctionProps = {
  element: TElement;
  from: {
    position: number;
    element: null | 'root' | TElement<'html' | 'slot'>;
  };
  to: {
    position: number;
    element: 'root' | TElement<'html' | 'slot'>;
  }
}
