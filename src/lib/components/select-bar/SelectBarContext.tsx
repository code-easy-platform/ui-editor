import { createContext, useRef } from "react";
import { IObservable, observe } from 'react-observing';


export type TGetPosition = () => {
  top: number;
  left: number;
  width: number;
  height: number;
};

interface SelectBarContextProps {
  playgroundSize: IObservable<{ width: number, height: number } | undefined>;
  documentHorizontalScroll: IObservable<number>;
  documentVerticalScroll: IObservable<number>;

  getPosition: IObservable<undefined | TGetPosition>;
}
export const SelectBarContext = createContext({} as SelectBarContextProps);

interface ISelectBarContextProviderProps {
  children: React.ReactNode;
}
export const SelectBarContextProvider = ({ children }: ISelectBarContextProviderProps) => {
  const store = useRef<SelectBarContextProps>({
    documentHorizontalScroll: observe(0),
    playgroundSize: observe(undefined),
    documentVerticalScroll: observe(0),

    getPosition: observe(undefined),
  });

  return (
    <SelectBarContext.Provider value={store.current}>
      {children}
    </SelectBarContext.Provider>
  );
}
