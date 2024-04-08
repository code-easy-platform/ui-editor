import { createContext, useRef } from "react";
import { IObservable, observe } from 'react-observing';


export type TGetPosition = () => {
  top: number;
  left: number;
  width: number;
  height: number;
};

interface HoverBarContextProps {
  playgroundSize: IObservable<{ width: number, height: number } | undefined>;
  documentHorizontalScroll: IObservable<number>;
  documentVerticalScroll: IObservable<number>;

  getPosition: IObservable<undefined | TGetPosition>;
}
export const HoverBarContext = createContext({} as HoverBarContextProps);

interface IHoverBarContextProviderProps {
  children: React.ReactNode;
}
export const HoverBarContextProvider = ({ children }: IHoverBarContextProviderProps) => {
  const store = useRef<HoverBarContextProps>({
    documentHorizontalScroll: observe(0),
    playgroundSize: observe(undefined),
    documentVerticalScroll: observe(0),

    getPosition: observe(undefined),
  });

  return (
    <HoverBarContext.Provider value={store.current}>
      {children}
    </HoverBarContext.Provider>
  );
}
