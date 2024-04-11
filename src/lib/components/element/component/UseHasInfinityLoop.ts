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
    return false;
    /* if (!get(element.referenceId)) return false;

    return parents
      .map(parentItem => get(parentItem.referenceId))
      .includes(get(element.referenceId)); */
  }, [element, parents]);
}
