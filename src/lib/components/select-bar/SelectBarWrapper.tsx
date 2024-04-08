import { memo, useMemo } from "react";
import { useObserverValue } from "react-observing";

import { useSelectBar } from './UseSelectBar';
import { SelectBar } from "./SelectBar";


export const SelectBarWrapper: React.FC = memo(() => {
  const {
    selectedId: selectedIdObservable,
    selectBarGetPosition: selectBarGetPositionObserver,
    selectBarDocumentVerticalScroll: documentVerticalScrollObserver,
    selectBarDocumentHorizontalScroll: documentHorizontalScrollObserver,
  } = useSelectBar();


  const documentHorizontalScroll = useObserverValue(documentHorizontalScrollObserver);
  const documentVerticalScroll = useObserverValue(documentVerticalScrollObserver);
  const getPosition = useObserverValue(selectBarGetPositionObserver);
  const selectedId = useObserverValue(selectedIdObservable);


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


  if (!selectedId) return null;

  return (
    <SelectBar
      zIndex={1}
      top={top - 1}
      width={width}
      height={height}
      left={left - 1}
      color="blue"
    />
  );
});
