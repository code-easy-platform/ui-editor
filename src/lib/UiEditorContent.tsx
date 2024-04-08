import { useCallback, useState } from 'react';
import { IObservable, useObserverValue } from 'react-observing';

import { SelectBarWrapper, useSelectBar } from './components/select-bar';
import { ContentFrame } from './components/custom-frame/ContentFrame';
import { HoverBarWrapper, useHoverBar } from './components/hover-bar';
import { CustomFrame } from './components/custom-frame/CustomFrame';
import { TComponent, TElement, TStyle } from './types';
import { InsertBar } from './components/insert-bar';
import { Element } from './components/element';


interface IUIEditorContentProps {
  styles: IObservable<TStyle[]>;
  value: IObservable<TElement[]>;
  components: IObservable<TComponent[]>;

  onKeyDown: (event: KeyboardEvent) => void
}
export const UIEditorContent = (props: IUIEditorContentProps) => {
  const { updateSelectBarGetPosition, updateSelectBarScroll } = useSelectBar();
  const { updateHoverBarScroll } = useHoverBar();


  const [frameDocumentRef, setFrameDocumentRef] = useState<Document | null>(null);
  const content = useObserverValue(props.value);


  const handleClick = useCallback(() => updateSelectBarGetPosition(undefined), [updateSelectBarGetPosition]);

  const handleScroll = useCallback((y: number, x: number) => {
    updateSelectBarScroll(y, x);
    updateHoverBarScroll(y, x);
  }, [updateSelectBarScroll, updateHoverBarScroll]);


  return (
    <CustomFrame
      resetBody={true}
      onClick={handleClick}
      styles={props.styles}
      draggingHover={false}
    >
      <ContentFrame onRef={setFrameDocumentRef} onScroll={handleScroll} onKeyDown={props.onKeyDown}>
        <SelectBarWrapper />
        <HoverBarWrapper />
        <InsertBar />

        {content.map((element) => (
          <Element
            parents={[]}
            element={element}
            key={element.id.value}
          />
        ))}
      </ContentFrame>
    </CustomFrame>
  );
}
