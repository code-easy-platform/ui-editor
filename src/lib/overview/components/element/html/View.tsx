import { useMemo } from 'react';
import { useObserverValue } from 'react-observing';

import { TElement, TParentElement } from '../../../types';
import { Element } from '../';


interface IEditProps {
  element: TElement<'html'>;
  parents: TParentElement[];
}
export const View = ({ element, parents }: IEditProps) => {
  const children = useObserverValue(element.children);


  const elementChildren = useMemo(() => {
    if (!children || children.length === 0) return null;

    return children.map(child => (
      <Element
        element={child}
        key={child.id.value}
        parents={[...parents, element]}
      />
    ));
  }, [children, parents, element]);


  return elementChildren;
};
