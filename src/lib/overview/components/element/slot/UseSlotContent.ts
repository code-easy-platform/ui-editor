import { useSelectorValue } from 'react-observing';

import { TElement, TParentElement } from '../../../types';


export const useSlotContent = (element: TElement<'slot'>, parents: TParentElement[]): [] | [TElement[], TElement<'slot-content'>] => {
  return useSelectorValue(({ get }) => {
    const referenceComponent = [...parents].reverse()
      .filter(parent => get(parent.type) === 'component')
      .find(parent => get((parent as TElement<'component'>).referenceComponentId) === get(element.componentId)) as TElement<'component'> | undefined;

    if (!referenceComponent) return [];

    const currentSlot = get(referenceComponent.slots)?.find(slot => get(slot.referenceSlotId) === get(element.id));
    if (!currentSlot) return [];

    return [get(currentSlot.children), currentSlot];
  }, [parents, element]);
}
