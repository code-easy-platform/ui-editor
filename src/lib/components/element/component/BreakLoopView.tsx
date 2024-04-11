import { TElement } from '../../../types';


interface IBreakLoopViewProps {
  element: TElement;
}
export const BreakLoopView = ({ element }: IBreakLoopViewProps) => {
  //const baseParentName = useObserverValue(element.baseParent.name);

  return (
    <div style={{ cursor: 'default', userSelect: 'none', pointerEvents: 'none', outline: 'none', border: '2px solid orange' }}>
      This component "<b style={{ fontWeight: 'bold', outline: 'none', pointerEvents: 'none' }}>{'baseParentName'}</b>" introduces a infinite loop.
    </div>
  );
};
