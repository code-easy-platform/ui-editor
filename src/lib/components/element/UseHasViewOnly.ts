import { useMemo } from 'react';
import { selector, useObserverValue } from 'react-observing';

import { TElement } from '../../types';


/**
 * 
 * @param element Current element
 * @param parents Current element parents
 * @returns If it has or not view only
 */
export const useHasViewOnly = (element: TElement, parents: TElement[]) => {
  return useObserverValue(useMemo(() => {
    return selector(({ get }) => {
      for (let index = 0; index < parents.length; index++) {
        const element = parents[index];
        if (get(element.type) !== 'component') return false;


        //if (get(parent.referenceId) === element.baseParent.id.value) return false;
      }
      return false;

      //return parents.some(parent => (get(parent.type) === 'component' && parent.referenceId.value === element.baseParent.id.value));
    })
  }, [element, parents]));
}
