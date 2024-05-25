import { useSelectorValue } from 'react-observing';

import { TElement, TParentElement } from '../../types';


/**
 * 
 * @param element Current element
 * @param parents Current element parents
 * @returns If it has or not view only
 */
export const useHasViewOnly = (element: TElement, parents: TParentElement[]) => {

  const isViewOnly = useSelectorValue(({ get }) => {
    for (let index = parents.length - 1; index >= 0; index--) {
      const parentElement = parents[index];

      if (get(parentElement.type) === 'slot-content') {
        return false;
      }

      if (get(parentElement.type) === 'component') {
        return true;
      }
    }

    return false;
  }, [parents, element]);

  return isViewOnly;
}
