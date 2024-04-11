import { IObservable } from 'react-observing';
import { DragAndDropProvider } from "react-use-drag-and-drop";

import { IUiEditorContextProps, UiEditorContextProvider } from './UiEditorContext';
import { InsertBarContextProvider } from './components/insert-bar';
import { SelectBarContextProvider } from './components/select-bar';
import { HoverBarContextProvider } from './components/hover-bar';
import { UIEditorContent } from './UiEditorContent';


interface IUIEditorProps extends Pick<IUiEditorContextProps, 'components' | 'styles' | 'value' | 'onDragStart' | 'onDragEnd' | 'onDrop' | 'onKeyDown' | 'onDuplicate' | 'onRemove'> {
  onHover: (id: string | undefined) => void;
  onSelect: (id: string | undefined) => void;
  hoveredId: IObservable<string | undefined>;
  selectedId: IObservable<string | undefined>;
}
export const UIEditor = ({ onSelect, onHover, selectedId, hoveredId, ...props }: IUIEditorProps) => {
  return (
    <DragAndDropProvider>
      <UiEditorContextProvider {...props}>
        <InsertBarContextProvider>
          <SelectBarContextProvider id={selectedId} onSelect={onSelect}>
            <HoverBarContextProvider id={hoveredId} onHover={onHover}>
              <UIEditorContent />
            </HoverBarContextProvider>
          </SelectBarContextProvider>
        </InsertBarContextProvider>
      </UiEditorContextProvider>
    </DragAndDropProvider>
  );
}
