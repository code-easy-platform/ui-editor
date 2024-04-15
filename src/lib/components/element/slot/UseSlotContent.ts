import { useSelectorValue } from 'react-observing';

import { useUiEditorContext } from '../../../UiEditorContext';
import { TElement } from '../../../types';


export const useSlotContent = (element: TElement<'slot'>, parents: TElement[]): [] | [TElement[], TElement<'slot-content'>] => {
  const { onAddSlotContent } = useUiEditorContext();


  return useSelectorValue(({ get }) => {
    const referenceComponent = parents
      .filter(parent => get(parent.type) === 'component')
      .find(parent => get((parent as TElement<'component'>).referenceComponentId) === get(element.componentId)) as TElement<'component'> | undefined;

    if (!referenceComponent) return [];

    const currentSlot = get(referenceComponent.slots)?.find(slot => get(slot.referenceSlotId) === get(element.id));
    if (!currentSlot) {
      onAddSlotContent(element, referenceComponent);
      return [];
    }

    return [get(currentSlot.children), currentSlot];
  }, [parents, element, onAddSlotContent]);
}
