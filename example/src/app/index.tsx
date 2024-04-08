import { useMemo } from 'react';
import { IObservable, observe } from 'react-observing';

import { TElement } from 'ui-editor/src/lib/types';
import { UIEditor } from 'ui-editor/src';

import './../styles.css';


export const App = () => {

  const values = useMemo(() => {
    return {
      styles: observe([]),
      components: observe([]),
      value: observe<TElement[]>([
        {
          id: observe('123'),
          type: observe('html'),
          children: observe([]),
          tag: observe('button'),
          attributes: observe(undefined),
        },
        {
          id: observe('456'),
          type: observe('html'),
          children: observe([]),
          tag: observe('button'),
          attributes: observe(undefined),
        },
      ]),
    };
  }, []);


  return (
    <div className='w-screen h-screen bg-paper flex justify-center items-center gap-4'>

      <div className='p-2 flex flex-col gap-2'>
        Draggable

        <div className='h-[90vh] w-[10vw] border rounded'>
        </div>
      </div>

      <div className='p-2 flex flex-col gap-2'>
        UI editor

        <div className='w-[60vw] h-[90vh] bg-background rounded overflow-clip'>
          <UIEditor
            value={values.value}
            styles={values.styles}
            onKeyDown={console.log}
            components={values.components}
          />
        </div>
      </div>

      <div className='p-2 flex flex-col gap-2'>
        Overview

        <div className='h-[90vh] w-[20vw] border rounded'>
        </div>
      </div>
    </div>
  );
}
