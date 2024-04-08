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
          tag: observe('button'),
          style: observe(undefined),
          attributes: observe([
            { name: observe('hidden'), value: observe(false) },
          ]),
          children: observe([
            {
              tag: observe('a'),
              id: observe('546'),
              type: observe('html'),
              style: observe(undefined),
              children: observe(undefined),
              attributes: observe([
                { name: observe('text'), value: observe('button') },
              ]),
            },
          ]),
        },
        {
          id: observe('456'),
          type: observe('html'),
          tag: observe('button'),
          children: observe(undefined),
          attributes: observe([
            { name: observe('text'), value: observe('Clique me!') },
          ]),
          style: observe([
            { name: observe('border'), value: observe('none') },
            { name: observe('padding'), value: observe('8px') },
            { name: observe('paddingLeft'), value: observe('16px') },
            { name: observe('paddingRight'), value: observe('16px') },
            { name: observe('margin'), value: observe('8px') },
            { name: observe('borderRadius'), value: observe('4px') },
            { name: observe('backgroundColor'), value: observe('green') },
            { name: observe('color'), value: observe('white') },
            { name: observe('boxShadow'), value: observe('0 0 1px 0px black') },
          ]),
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
