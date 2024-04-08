import { useMemo } from 'react'
import { selector, useObserverValue } from 'react-observing';

import { toCamelCase } from '../../../helpers';
import { TElement } from '../../../types';


export const useUIElementInlineStyle = (elementStyle: TElement<'html'>['style']) => {

  const stylesObservable = useMemo(() => {
    return selector(({ get }) => {
      const style = get(elementStyle);
      if (!style) return {};


      const result: Record<string, string | number | boolean> = {};

      style.forEach((styleItem) => {
        const name = get(styleItem.name);
        const value = get(styleItem.value);

        if (!name) return;

        result[toCamelCase(name)] = value;
      });

      return result;
    });
  }, [elementStyle]);


  return useObserverValue(stylesObservable);
}
