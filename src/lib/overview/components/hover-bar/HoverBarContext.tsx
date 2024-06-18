import { createContext, useEffect, useRef } from "react";
import { IObservable } from 'react-observing';


interface HoverBarContextProps {
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
  const store = useRef<HoverBarContextProps>({ onHover, id });


  useEffect(() => {
    store.current.id = id;
  }, [id]);

  useEffect(() => {
    store.current.onHover = onHover;
  }, [onHover]);


  return (
    <HoverBarContext.Provider value={store.current}>
      {children}
    </HoverBarContext.Provider>
  );
}
