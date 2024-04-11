import { createElement, useMemo } from 'react';
import { IObservable, selector, useObserverValue } from 'react-observing';
import Frame from 'react-frame-component';

import { TStyle } from '../../types';


interface ICustomFrameProps {
  onClick(): void;
  resetBody: boolean;
  draggingHover: boolean;
  children: React.ReactNode;
  styles: IObservable<TStyle[]>;
}
export const CustomFrame = ({ children, styles, draggingHover, resetBody, onClick }: ICustomFrameProps) => {
  const allStyles = useObserverValue(
    useMemo(() => selector(({ get }) => {
      return get(styles).map(style => ({
        id: get(style.id),
        content: get(style.content)
      }));
    }), [styles])
  );


  const iframeHead = useMemo(() => {
    return (
      <>
        {allStyles.map(style => createElement('style', { key: style.id }, style.content))}
        <style>
          {[
            `* { outline: none; }`,
            resetBody ? 'body { margin:0!important; }' : '',
            `html${draggingHover ? '' : ':hover'} body .frame-content * {`,
            `  outline: thin solid #80808050;`,
            `}`,
            `[data-hover="true"] *, [data-select="true"] * {`,
            `  outline: none!important;`,
            `}`,
          ].join('\n')}
        </style>
      </>
    );
  }, [allStyles, resetBody]);


  return (
    <Frame
      tabIndex={-1}
      head={iframeHead}
      onClick={onClick}
      mountTarget="body"
      onContextMenu={(e: any) => e.preventDefault()}
      className="w-full h-full bg-white border-none outline-none"
      initialContent={`<html tabindex="0"><head></head><body style="min-height: 500px"></body></html>`}
    >
      {children}
    </Frame>
  );
};
