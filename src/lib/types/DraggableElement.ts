import { TElement, TParentElement } from './Element';


export type TExternalDraggableElement = {
  id: string;
}

export type TDraggableElement<E extends "html" | "component" | "slot" | "text" = "html" | "component" | "slot" | "text", D = any> = {
  element: TElement<E, D>;
  parents: TParentElement<'html' | 'component' | 'slot-content', D>[] | null;
}

export type TDropFunctionProps<D = any> = {
  element: TElement<"html" | "component" | "slot" | "text", D> | string;
  from: {
    position: number;
    element: null | 'root' | TElement<'html' | 'slot-content', D>;
  };
  to: {
    position: number;
    element: 'root' | TElement<'html' | 'slot-content', D>;
  }
}
