import { createContext, useContext } from 'react';
import { IObservable } from 'react-observing';

import { TComponent, TDropFunctionProps, TElement, TElementTypesDefault, TStyle } from './types';


export type TValueParseFunction<D = any> = <A extends any = any, B extends any = A>(value: A, ownerName: string, type: 'attribute' | 'textContent' | 'style', element: TElement<TElementTypesDefault, D>) => B;

export interface IUiEditorContextProps<D = any> {
  styles: IObservable<TStyle[]>;
  value: IObservable<TElement[]>;
  components: IObservable<TComponent[]>;

  onExpressionToValue: TValueParseFunction<D>;
  onValueToExpression: TValueParseFunction<D>;

  onDragEnd: () => void;
  onDragStart: () => void;
  onKeyDown: (event: KeyboardEvent) => void
  onDrop: (props: TDropFunctionProps<D>) => void;
  onRemove: (element: TElement<TElementTypesDefault, D>) => void;
  onDuplicate: (element: TElement<TElementTypesDefault, D>) => void;
  onAddSlotContent: (element: TElement<'slot', D>, referenceComponent: TElement<'component', D>) => void;
}

const UiEditorContext = createContext({} as IUiEditorContextProps<any>);

export function UiEditorContextProvider({ children, ...props }: React.PropsWithChildren<IUiEditorContextProps<any>>) {
  return (
    <UiEditorContext.Provider value={props}>
      {children}
    </UiEditorContext.Provider>
  );
}

export const useUiEditorContext = () => {
  return useContext(UiEditorContext);
}
