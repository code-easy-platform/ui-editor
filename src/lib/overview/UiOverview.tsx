import { IObservable } from 'react-observing';
import { DragAndDropProvider } from "react-use-drag-and-drop";

import { IUiOverviewContextProps, UiOverviewContextProvider } from './UiOverviewContext';
import { SelectBarContextProvider } from './components/select-bar';
import { HoverBarContextProvider } from './components/hover-bar';
import { UiOverviewContent } from './UiOverviewContent';


interface IUiOverviewProps<D> extends Pick<IUiOverviewContextProps<D>, 'components' | 'styles' | 'value' | 'onDragStart' | 'onDragEnd' | 'onDrop' | 'onKeyDown' | 'onDuplicate' | 'onRemove' | 'onAddSlotContent' | 'onExpressionToValue' | 'onValueToExpression'> {
  onHover: (id: string | undefined) => void;
  onSelect: (id: string | undefined) => void;
  hoveredId: IObservable<string | undefined>;
  selectedId: IObservable<string | undefined>;
}
export function UiOverview<D = any>({ onSelect, onHover, selectedId, hoveredId, ...props }: IUiOverviewProps<D>) {
  return (
    <DragAndDropProvider>
      <UiOverviewContextProvider {...props}>
        <SelectBarContextProvider id={selectedId} onSelect={onSelect}>
          <HoverBarContextProvider id={hoveredId} onHover={onHover}>
            <UiOverviewContent />
          </HoverBarContextProvider>
        </SelectBarContextProvider>
      </UiOverviewContextProvider>
    </DragAndDropProvider>
  );
}
