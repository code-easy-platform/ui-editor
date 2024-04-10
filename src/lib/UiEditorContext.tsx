import { createContext, useContext } from 'react';
import { IObservable } from 'react-observing';

import { TComponent, TDropFunctionProps, TElement, TStyle } from './types';


export interface IUiEditorContextProps {
  styles: IObservable<TStyle[]>;
  value: IObservable<TElement[]>;
  components: IObservable<TComponent[]>;

  onDragEnd: () => void;
  onDragStart: () => void;
  onKeyDown: (event: KeyboardEvent) => void
  onDrop: (props: TDropFunctionProps) => void;
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
