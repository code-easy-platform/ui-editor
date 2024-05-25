import { useSelectorValue } from 'react-observing';

import { useUiEditorContext } from '../../../UiEditorContext';
import { TElement } from '../../../types';


export const useSlotRender = (element: TElement<'slot'>, parents: TElement[]): boolean => {
  const { components: componentsObservable } = useUiEditorContext();


  return useSelectorValue(({ get }) => {
    const components = get(componentsObservable);
    const reverseParents = parents.reverse();

    const ownerIndex = reverseParents.findIndex((parent) => {
      if (get(parent.type) !== 'component') return false;

      return get(element.componentId) === get((parent as TElement<'component'>).referenceComponentId)
    });
    const owner = reverseParents.at(ownerIndex);
    if (!owner) return false;


    const ownerIsViewOnly = reverseParents.slice(ownerIndex + 1).some(parent => {
      if (get(parent.type) === 'component') return true;
      return false;
    });

    if (ownerIsViewOnly) return false;

    return components.some(component => get(component.id) === get(element.componentId));
  }, [parents, element, componentsObservable]);
}
