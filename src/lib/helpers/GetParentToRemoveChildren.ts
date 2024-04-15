import { TDraggableElement, TElement } from '../types';


export const getParentToRemoveChildren = (parents: TDraggableElement['parents']): TElement<'html' | 'slot-content'> | undefined => {
  let parent: TElement<"html" | "slot" | "slot-content" | "component"> | undefined = undefined;
  let count = 0;


  do {
    count--;
    parent = parents?.slice(count).at(0);
  } while (!parent || !['html', 'slot-content'].includes(parent.type.value));


  return parent as TElement<'html' | 'slot-content'> | undefined;
}
