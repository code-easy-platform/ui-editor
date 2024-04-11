import { set, useSelectorValue } from 'react-observing';

import { TElement } from '../../../types';


export const useSlotContent = (element: TElement, parents: TElement[]) => {
  return useSelectorValue(({ get }) => {










    const baseParentAsUIElement = parents
      .filter(parent => get(parent.type) === 'component');

      console.log(baseParentAsUIElement);

    /* if (!baseParentAsUIElement) return [];

    let currentSlot = get(baseParentAsUIElement.slots).find(slot => get(slot.referenceId) === get(element.id));
    if (!currentSlot) {
      currentSlot = new SlotContent({
        content: [],
        referenceId: element.id.value,
        parent: baseParentAsUIElement,
      });

      set(baseParentAsUIElement.slots, old => [...old, ...(currentSlot ? [currentSlot] : [])]);
    } */

    return [[] as TElement[]] as const;
  }, [parents, element]);
}
