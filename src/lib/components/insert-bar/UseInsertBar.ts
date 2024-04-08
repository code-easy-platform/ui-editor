import { useContext } from "react"

import { InsertBarContext } from "./InsertBarContext";


export const useInsertBar = () => {
  return useContext(InsertBarContext);
}
