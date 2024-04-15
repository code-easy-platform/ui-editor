import { useSelectorValue } from 'react-observing';

import { TElement } from '../../../types';


/**
 * 
 * @param element Current element
 * @param parents Current element parents
 * @returns If it has or not a infinity loop through components
 */
export const useHasInfinityLoop = (element: TElement<'component'>, parents: TElement[]) => {

  /* This can prevent all types of loop in components */
  return useSelectorValue(({ get }) => {
    return parents.some(parentItem => {
      if (get(parentItem.type) !== 'component') return false;

      return get((parentItem as TElement<'component'>).referenceComponentId) === get(element.referenceComponentId)
    });
  }, [element, parents]);
}
