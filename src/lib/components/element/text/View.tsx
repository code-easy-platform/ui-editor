import { useObserverValue } from 'react-observing';

import { TElement, TParentElement } from '../../../types';


interface IEditProps {
  element: TElement<'text'>;
  parents: TParentElement[];
}
export const View = ({ element }: IEditProps) => {
  const text = useObserverValue(element.text);

  return text;
};
