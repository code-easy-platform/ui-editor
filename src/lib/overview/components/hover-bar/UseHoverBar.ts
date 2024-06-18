import { useCallback, useContext } from "react"

import { HoverBarContext } from "./HoverBarContext";


export const useHoverBar = () => {
  const context = useContext(HoverBarContext);


  const handleHover = useCallback((id: string | undefined) => {
    if (context.id.value !== id) context.onHover(id);
  }, [context.id]);


  return {
    hover: handleHover,
    hoveredId: context.id,
  };
}
