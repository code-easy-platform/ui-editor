import { useSelectorValue } from 'react-observing';

import { TElement } from '../../types';


/**
 * 
 * @param element Current element
 * @param parents Current element parents
 * @returns If it has or not view only
 */
export const useHasViewOnly = (element: TElement, parents: TElement[]) => {
  return useSelectorValue(({ get }) => {
    return parents.some(parent => {
      return (
        get(parent.type) === 'component'
        // Para permitir que o slot seja editável ou esteja em modo view pode ser possível olhar para o parent que é um componente que está renderizando ele, o parente que renderiza um slot em modo view(que aceita drop dentro) deverá ver junto com o referenceId uma prop slots, ali dentro terá o id do slot em questão
      );
    });
  }, [parents, element]);
}
