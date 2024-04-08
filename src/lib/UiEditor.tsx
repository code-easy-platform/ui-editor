import { IObservable } from 'react-observing';

import { InsertBarContextProvider } from './components/insert-bar';
import { TComponent, TElement, TStyle } from './types';
import { UIEditorContent } from './UiEditorContent';
import { SelectBarContextProvider } from './components/select-bar';
import { HoverBarContextProvider } from './components/hover-bar';


interface IUIEditorProps {
  styles: IObservable<TStyle[]>;
  value: IObservable<TElement[]>;
  components: IObservable<TComponent[]>;

  onKeyDown: (event: KeyboardEvent) => void
}
export const UIEditor = (props: IUIEditorProps) => {
  return (
    <InsertBarContextProvider>
      <SelectBarContextProvider>
        <HoverBarContextProvider>
          <UIEditorContent {...props} />
        </HoverBarContextProvider>
      </SelectBarContextProvider>
    </InsertBarContextProvider>
  );
}
