import { createContext, useEffect, useRef } from "react";
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

  id: IObservable<undefined | string>;
  onHover: (id: string | undefined) => void;
}
export const HoverBarContext = createContext({} as HoverBarContextProps);

interface IHoverBarContextProviderProps {
  children: React.ReactNode;
  id: IObservable<string | undefined>;
  onHover: (id: string | undefined) => void;
}
export const HoverBarContextProvider = ({ children, id, onHover }: IHoverBarContextProviderProps) => {
  const store = useRef<HoverBarContextProps>({
    documentHorizontalScroll: observe(0),
    playgroundSize: observe(undefined),
    documentVerticalScroll: observe(0),

    getPosition: observe(undefined),
    onHover,
    id,
  });


  useEffect(() => {
    store.current.id = id;
  }, [id]);


  return (
    <HoverBarContext.Provider value={store.current}>
      {children}
    </HoverBarContext.Provider>
  );
}
