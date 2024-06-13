import { useMemo } from 'react';
import { useObserverValue } from 'react-observing';

import { useUiOverviewContext } from '../../../UiOverviewContext';
import { TElement, TParentElement } from '../../../types';


interface IEditProps {
  element: TElement<'text'>;
  parents: TParentElement[];
}
export const View = ({ element }: IEditProps) => {
  const { onExpressionToValue } = useUiOverviewContext();

  const text = useObserverValue(element.text);

  return useMemo(() => {
    return onExpressionToValue(text, 'text', 'textContent', element);
  }, [text, onExpressionToValue, element]);
};
