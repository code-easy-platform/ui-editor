import { useContext } from "react"

import { IInsertBarContextProps, InsertBarContext } from "./InsertBarContext";


export const useInsertBar = (): IInsertBarContextProps => {
  return useContext(InsertBarContext);
}
