import { useCallback } from 'react';
import { useObserverValue } from 'react-observing';

import { useSelectBar } from '../select-bar';
import { useHoverBar } from '../hover-bar';
import { Component } from './component';
import { TElement } from '../../types';
import { Html } from './html';
import { Slot } from './slot';


interface IElementProps {
  element: TElement;
  parents: TElement[];
}
export const Element = ({ element, parents }: IElementProps) => {
  const type = useObserverValue(element.type);

  const { select } = useSelectBar();
  const { hover } = useHoverBar();


  const handleSelect = useCallback((event: React.MouseEvent, element: TElement) => {
    event.stopPropagation();
    event.preventDefault();

    select(element.id.value);
  }, [select]);

  const handleDoubleClick = useCallback((event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();

    select(undefined);
    hover(undefined);
  }, [select, hover]);

  const handleMouseOver = useCallback((event: React.MouseEvent, element: TElement) => {
    event.stopPropagation();

    hover(element.id.value);
  }, [hover]);

  const handleMouseLeave = useCallback((event: React.MouseEvent) => {
    event.stopPropagation();

    hover(undefined);
  }, [hover]);


  if (type === 'component') return (
    <Component
      parents={parents}
      element={element as TElement<'component'>}

      onDrop={() => { }}
      onDragOver={() => { }}
      onDragLeave={() => { }}
      onDoubleClick={handleDoubleClick}

      onSelect={handleSelect}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}

      onHoverBar={() => { }}
      onSelectBar={() => { }}
    />
  );

  if (type === 'slot') return (
    <Slot
      parents={parents}
      element={element as TElement<'slot'>}

      onDrop={() => { }}
      onDragOver={() => { }}
      onDragLeave={() => { }}

      onSelect={handleSelect}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}

      onHoverBar={() => { }}
      onSelectBar={() => { }}
    />
  );

  return (
    <Html
      parents={parents}
      element={element as TElement<'html'>}

      onDrop={() => { }}
      onDragOver={() => { }}
      onDragLeave={() => { }}

      onSelect={handleSelect}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}

      onHoverBar={() => { }}
      onSelectBar={() => { }}
    />
  );
};
