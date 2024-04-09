import { createContext, useContext } from 'react';
import { IObservable } from 'react-observing';

import { TComponent, TElement, TStyle } from './types';


type TDropProps = {
  element: TElement;
  from: {
    parents: TElement[] | null;
  };
  to: null | {
    parents: TElement[];
    element: TElement;
  }
}

export interface IUiEditorContextProps {
  styles: IObservable<TStyle[]>;
  value: IObservable<TElement[]>;
  components: IObservable<TComponent[]>;

  onDragEnd: () => void;
  onDragStart: () => void;
  onDrop: (props: TDropProps) => void;
  onKeyDown: (event: KeyboardEvent) => void
}

const UiEditorContext = createContext({} as IUiEditorContextProps);

export const UiEditorContextProvider = ({ children, ...props }: React.PropsWithChildren<IUiEditorContextProps>) => {
  return (
    <UiEditorContext.Provider value={props}>
      {children}
    </UiEditorContext.Provider>
  );
}

export const useUiEditorContext = () => {
  return useContext(UiEditorContext);
}
