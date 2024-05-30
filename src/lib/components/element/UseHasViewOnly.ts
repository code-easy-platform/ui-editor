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
    const revercedParents = [...parents].reverse();

    for (let index = 0; index < revercedParents.length; index++) {
      const parentElement = revercedParents[index];

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
