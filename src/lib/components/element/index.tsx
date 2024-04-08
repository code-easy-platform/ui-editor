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
      parents={parents}
      element={element as TElement<'component'>}
    />
  );

  if (type === 'slot') return (
    <Slot
      parents={parents}
      element={element as TElement<'slot'>}
    />
  );

  return (
    <Html
      parents={parents}
      element={element as TElement<'html'>}

      onDrop={() => { }}
      onDragOver={() => { }}
      onDragLeave={() => { }}

      onSelect={() => { }}
      onMouseOver={() => { }}
      onMouseLeave={() => { }}

      onHoverBar={() => { }}
      onSelectBar={() => { }}
    />
  );
};
