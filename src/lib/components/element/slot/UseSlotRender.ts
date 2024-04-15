import { useSelectorValue } from 'react-observing';

import { useUiEditorContext } from '../../../UiEditorContext';
import { TElement } from '../../../types';


export const useSlotRender = (element: TElement<'slot'>, parents: TElement[]): boolean => {
  const { components: componentsObservable } = useUiEditorContext();


  return useSelectorValue(({ get }) => {
    const components = get(componentsObservable);
    
    return components.some(component => get(component.id) === get(element.componentId));
  }, [parents, element, componentsObservable]);
}
