import { createContext, useEffect, useRef } from "react";
import { IObservable } from 'react-observing';


interface SelectBarContextProps {
  id: IObservable<undefined | string>;
  onSelect: (id: string | undefined) => void;
}
export const SelectBarContext = createContext({} as SelectBarContextProps);

interface ISelectBarContextProviderProps {
  children: React.ReactNode;
  id: IObservable<string | undefined>;
  onSelect: (id: string | undefined) => void;
}
export const SelectBarContextProvider = ({ children, id, onSelect }: ISelectBarContextProviderProps) => {
  const store = useRef<SelectBarContextProps>({ onSelect, id });


  useEffect(() => {
    store.current.id = id;
  }, [id]);

  useEffect(() => {
    store.current.onSelect = onSelect;
  }, [onSelect]);


  return (
    <SelectBarContext.Provider value={store.current}>
      {children}
    </SelectBarContext.Provider>
  );
}
