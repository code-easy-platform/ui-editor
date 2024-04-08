import { memo, useMemo } from "react";
import { useObserver } from "react-observing";

import { useSelectBar } from './UseSelectBar';
import { SelectBar } from "./SelectBar";


export const SelectBarWrapper: React.FC = memo(() => {
  const {
    selectBarGetPosition: selectBarGetPositionObserver,
    selectBarDocumentVerticalScroll: documentVerticalScrollObserver,
    selectBarDocumentHorizontalScroll: documentHorizontalScrollObserver,
  } = useSelectBar();


  const [documentHorizontalScroll] = useObserver(documentHorizontalScrollObserver);
  const [documentVerticalScroll] = useObserver(documentVerticalScrollObserver);
  const [getPosition] = useObserver(selectBarGetPositionObserver);


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
    <SelectBar
      zIndex={1}
      top={top}
      left={left}
      width={width}
      height={height}
      color="#ed8b5f"
    />
  );
});
