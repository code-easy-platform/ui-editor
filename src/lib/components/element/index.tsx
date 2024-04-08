import { useObserverValue } from 'react-observing';
import { TElement } from '../../types';
import { Component } from './component';
import { Html } from './html';
import { Slot } from './slot';


interface IElementProps {
  element: TElement;
  parents: TElement[];
}
export const Element = ({ element, parents }: IElementProps) => {
  const type = useObserverValue(element.type);


  if (type === 'component') return (
    <Component
      element={element}
      parents={parents}
    />
  );

  if (type === 'slot') return (
    <Slot
      element={element}
      parents={parents}
    />
  );

  return (
    <Html
      element={element}
      parents={parents}
    />
  );
};
