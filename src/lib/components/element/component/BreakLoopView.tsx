import { useObserverValue } from 'react-observing';
import { TElement } from '../../../types';


interface IBreakLoopViewProps {
  element: TElement<'component'>;
}
export const BreakLoopView = ({ element }: IBreakLoopViewProps) => {
  const name = useObserverValue(element.name);


  return (
    <div style={{ cursor: 'default', userSelect: 'none', pointerEvents: 'none', outline: 'none', border: '2px solid orange' }}>
      This component "<b style={{ fontWeight: 'bold', outline: 'none', pointerEvents: 'none' }}>{name}</b>" introduces a infinite loop.
    </div>
  );
};
