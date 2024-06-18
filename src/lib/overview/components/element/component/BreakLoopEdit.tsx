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

  onHoverBar: (element: TElement<'component'>, htmlElement: HTMLElement | null) => void;
  onSelectBar: (element: TElement<'component'>, htmlElement: HTMLElement | null) => void;
}
export const BreakLoopEdit = ({ element, paddingLeft, onHoverBar, onSelectBar, onMouseLeave, onMouseOver, onSelect }: IBreakLoopEditProps) => {
  const elementRef = useRef<HTMLDivElement>(null);


  const { selectedId } = useSelectBar();
  const { hoveredId } = useHoverBar();


  const name = useObserverValue(element.name);


  useMatchEffect({
    value: hoveredId,
    matchWidthValue: element?.id,
    effect: () => onHoverBar(element, elementRef.current),
  }, [hoveredId, element]);

  useMatchEffect({
    value: selectedId,
    matchWidthValue: element?.id,
    effect: () => onSelectBar(element, elementRef.current),
  }, [selectedId, element]);


  return (
    <div
      ref={elementRef}
      onMouseLeave={onMouseLeave}
      onClick={e => onSelect(e, element)}
      onMouseOver={e => onMouseOver(e, element, elementRef.current)}
    >
      <Item label={name + '(Infinity loop)'} paddingLeft={paddingLeft} />
    </div>
  );
};
