
export type TDraggableUIElement = {
  get: (newParent: /* UIElement['parent'] */any, newBaseParent: /* UIElement['baseParent'] */any) => {
    element: /* UIElement */any;
    parent: /* UIElement['parent'] */any | null;
  }
}
