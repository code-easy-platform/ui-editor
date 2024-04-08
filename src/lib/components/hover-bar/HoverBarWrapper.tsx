import { memo, useMemo } from "react";
import { useObserver } from "react-observing";

import { useHoverBar } from './UseHoverBar';
import { HoverBar } from "./HoverBar";


export const HoverBarWrapper: React.FC = memo(() => {
  const {
    hoverBarGetPosition: hoverBarGetPositionObserver,
    hoverBarDocumentVerticalScroll: documentVerticalScrollObserver,
    hoverBarDocumentHorizontalScroll: documentHorizontalScrollObserver,
  } = useHoverBar();


  const [documentHorizontalScroll] = useObserver(documentHorizontalScrollObserver);
  const [documentVerticalScroll] = useObserver(documentVerticalScrollObserver);
  const [getPosition] = useObserver(hoverBarGetPositionObserver);


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


  if (!getPosition) return null;

  return (
    <HoverBar
      zIndex={1}
      top={top}
      left={left}
      width={width}
      height={height}
      color="#ed8b5f"
    />
  );
});
