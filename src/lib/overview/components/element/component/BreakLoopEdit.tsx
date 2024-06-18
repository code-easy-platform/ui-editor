import { MouseEvent, useRef } from 'react';
import { useObserverValue } from 'react-observing';

import { useMatchEffect } from '../UseMatchEffect';
import { useSelectBar } from '../../select-bar';
import { useHoverBar } from '../../hover-bar';
import { TElement } from '../../../types';
import { Item } from '../../item/Item';


interface IBreakLoopEditProps {
  paddingLeft: number;
  element: TElement<'component'>;

  onMouseLeave: (event: MouseEvent) => void;
  onSelect: (event: MouseEvent, element: TElement<'component'>) => void;
  onMouseOver: (event: MouseEvent, element: TElement<'component'>, htmlElement: HTMLElement | null) => void;
}
export const BreakLoopEdit = ({ element, paddingLeft, onMouseLeave, onMouseOver, onSelect }: IBreakLoopEditProps) => {
  const elementRef = useRef<HTMLDivElement>(null);


  const { selectedId } = useSelectBar();
  const { hoveredId } = useHoverBar();


  const name = useObserverValue(element.name);


  const isHovered = useMatchEffect({
    value: hoveredId,
    matchWidthValue: element?.id,
  }, [hoveredId, element]);

  const isSelected = useMatchEffect({
    value: selectedId,
    matchWidthValue: element?.id,
  }, [selectedId, element]);


  return (
    <div
      ref={elementRef}
      onMouseLeave={onMouseLeave}
      onClick={e => onSelect(e, element)}
      onMouseOver={e => onMouseOver(e, element, elementRef.current)}
    >
      <Item
        hover={isHovered}
        select={isSelected}
        paddingLeft={paddingLeft}
        label={name + '(Infinity loop)'}
      />
    </div>
  );
};
