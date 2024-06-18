import { useMemo } from 'react';
import { useObserverValue } from 'react-observing';

import { TElement, TParentElement } from '../../../types';
import { Element } from '../';


interface IEditProps {
  paddingLeft: number;
  element: TElement<'html'>;
  parents: TParentElement[];
}
export const View = ({ element, parents, paddingLeft }: IEditProps) => {
  const children = useObserverValue(element.children);


  const elementChildren = useMemo(() => {
    if (!children || children.length === 0) return null;

    return children.map(child => (
      <Element
        element={child}
        key={child.id.value}
        paddingLeft={paddingLeft}
        parents={[...parents, element]}
      />
    ));
  }, [children, parents, element, paddingLeft]);


  return elementChildren;
};
