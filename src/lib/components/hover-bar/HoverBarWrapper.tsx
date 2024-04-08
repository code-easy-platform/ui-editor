import { memo, useMemo } from "react";
import { useObserverValue } from "react-observing";

import { useSelectBar } from '../select-bar';
import { useHoverBar } from './UseHoverBar';
import { HoverBar } from "./HoverBar";


export const HoverBarWrapper: React.FC = memo(() => {
  const {
    hoveredId: hoveredIdObservable,
    hoverBarGetPosition: hoverBarGetPositionObserver,
    hoverBarDocumentVerticalScroll: documentVerticalScrollObserver,
    hoverBarDocumentHorizontalScroll: documentHorizontalScrollObserver,
  } = useHoverBar();
  const { selectedId: selectedIdObservable } = useSelectBar();


  const documentHorizontalScroll = useObserverValue(documentHorizontalScrollObserver);
  const documentVerticalScroll = useObserverValue(documentVerticalScrollObserver);
  const getPosition = useObserverValue(hoverBarGetPositionObserver);
  const selectedId = useObserverValue(selectedIdObservable);
  const hoveredId = useObserverValue(hoveredIdObservable);


  const { width, height, top, left } = useMemo(() => {
    if (!getPosition) return {
      top: 0,
      left: 0,
      width: 0,
      height: 0,
    };

    return {
      width: getPosition().width,
      height: getPosition().height,
      top: getPosition().top - documentVerticalScroll,
      left: getPosition().left - documentHorizontalScroll,
    }
  }, [documentHorizontalScroll, documentVerticalScroll, getPosition]);


  if (!hoveredId || hoveredId === selectedId) return null;

  return (
    <HoverBar
      zIndex={1}
      top={top - 1}
      width={width}
      left={left - 1}
      height={height}
      color="#ed8b5f"
    />
  );
});