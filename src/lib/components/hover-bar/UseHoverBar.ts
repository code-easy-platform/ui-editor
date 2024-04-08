import { useCallback, useContext } from "react"
import { set } from 'react-observing';

import { HoverBarContext, TGetPosition } from "./HoverBarContext";


export const useHoverBar = () => {
  const context = useContext(HoverBarContext);


  const handleHover = useCallback((getPosition: TGetPosition) => {
    set(context.getPosition, getPosition);
  }, [context.getPosition]);

  const handleUpdateScroll = useCallback((y: number, x: number) => {
    set(context.documentHorizontalScroll, x);
    set(context.documentVerticalScroll, y);
  }, [context.documentVerticalScroll, context.documentHorizontalScroll]);

  const handleUpdatePlaygroundSize = useCallback((height: number, width: number) => {
    set(context.playgroundSize, { height, width });
  }, [context.playgroundSize]);


  return {
    hoveredId: context.id,
    hover: context.onHover,

    updateHoverBarGetPosition: handleHover,
    updateHoverBarScroll: handleUpdateScroll,
    updateHoverBarPlaygroundSize: handleUpdatePlaygroundSize,

    hoverBarGetPosition: context.getPosition,
    hoverBarPlaygroundSize: context.playgroundSize,
    hoverBarDocumentVerticalScroll: context.documentVerticalScroll,
    hoverBarDocumentHorizontalScroll: context.documentHorizontalScroll,
  };
}
