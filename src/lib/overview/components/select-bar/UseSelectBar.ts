import { useCallback, useContext } from "react"

import { SelectBarContext } from "./SelectBarContext";


export const useSelectBar = () => {
  const context = useContext(SelectBarContext);


  const handleSelect = useCallback((id: string | undefined) => {
    context.onSelect(id);
  }, [context.id]);


  return {
    select: handleSelect,
    selectedId: context.id,
  };
}
