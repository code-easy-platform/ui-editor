import { useCallback, useContext } from "react"
import { set } from 'react-observing';

import { SelectBarContext, TGetPosition } from "./SelectBarContext";


export const useSelectBar = () => {
  const context = useContext(SelectBarContext);


  const handleSelect = useCallback((id: string | undefined) => {
    context.onSelect(id);
  }, [context.id]);

  const handleUpdateSelectGetPosition = useCallback((getPosition?: TGetPosition) => {
    set(context.getPosition, () => getPosition);
  }, [context.getPosition]);

  const handleUpdateScroll = useCallback((y: number, x: number) => {
    set(context.documentHorizontalScroll, x);
    set(context.documentVerticalScroll, y);
  }, [context.documentVerticalScroll, context.documentHorizontalScroll]);

  const handleUpdatePlaygroundSize = useCallback((height: number, width: number) => {
    set(context.playgroundSize, { height, width });
  }, [context.playgroundSize]);


  return {
    select: handleSelect,
    selectedId: context.id,

    updateSelectBarScroll: handleUpdateScroll,
    updateSelectBarGetPosition: handleUpdateSelectGetPosition,
    updateSelectBarPlaygroundSize: handleUpdatePlaygroundSize,

    selectBarGetPosition: context.getPosition,
    selectBarPlaygroundSize: context.playgroundSize,
    selectBarDocumentVerticalScroll: context.documentVerticalScroll,
    selectBarDocumentHorizontalScroll: context.documentHorizontalScroll,
  };
}
