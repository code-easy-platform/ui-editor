import { TElement } from './Element';


export type TExternalDraggableElement = {
  id: string;
}

export type TDraggableElement<E extends "html" | "component" | "slot" = "html" | "component" | "slot", D = any> = {
  element: TElement<E, D>;
  parents: TElement<'html' | 'slot' | 'slot-content' | 'component', D>[] | null;
}

export type TDropFunctionProps<D = any> = {
  element: TElement<"html" | "component" | "slot", D> | string;
  from: {
    position: number;
    element: null | 'root' | TElement<'html' | 'slot-content', D>;
  };
  to: {
    position: number;
    element: 'root' | TElement<'html' | 'slot-content', D>;
  }
}
