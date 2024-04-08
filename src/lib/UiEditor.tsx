import { IObservable } from 'react-observing';
import { DragAndDropProvider } from "react-use-drag-and-drop";

import { InsertBarContextProvider } from './components/insert-bar';
import { SelectBarContextProvider } from './components/select-bar';
import { HoverBarContextProvider } from './components/hover-bar';
import { TComponent, TElement, TStyle } from './types';
import { UIEditorContent } from './UiEditorContent';


interface IUIEditorProps {
  styles: IObservable<TStyle[]>;
  value: IObservable<TElement[]>;
  components: IObservable<TComponent[]>;

  onKeyDown: (event: KeyboardEvent) => void
  onHover: (id: string | undefined) => void;
  onSelect: (id: string | undefined) => void;

  hoveredId: IObservable<string | undefined>;
  selectedId: IObservable<string | undefined>;
}
export const UIEditor = (props: IUIEditorProps) => {
  return (
    <DragAndDropProvider>
      <InsertBarContextProvider>
        <SelectBarContextProvider id={props.selectedId} onSelect={props.onSelect}>
          <HoverBarContextProvider id={props.hoveredId} onHover={props.onHover}>
            <UIEditorContent {...props} />
          </HoverBarContextProvider>
        </SelectBarContextProvider>
      </InsertBarContextProvider>
    </DragAndDropProvider>
  );
}
