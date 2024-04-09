import { useMemo } from 'react';
import { observe, set } from 'react-observing';

import { TElement, TStyle } from 'ui-editor/src/lib/types';
import { UIEditor } from 'ui-editor/src';

import './../styles.css';


export const App = () => {
  const hoveredId = useMemo(() => observe<string | undefined>(undefined), []);
  const selectedId = useMemo(() => observe<string | undefined>(undefined), []);

  const values = useMemo(() => {
    return {
      styles: observe<TStyle[]>([
        { id: observe('button'), content: observe('button { padding:8px; padding-left:16px;padding-right:16px; border:none; background-color:green; border-radius:4px; color:white; }') },
        { id: observe('button:disabled'), content: observe('button:disabled { opacity: 0.5 }') }
      ]),
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
            { name: observe('disabled'), value: observe(true) },
          ]),
          style: observe([
            { name: observe('backgroundColor'), value: observe('transparent') },
            { name: observe('color'), value: observe('black') },
            { name: observe('border'), value: observe('thin solid') },
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

            hoveredId={hoveredId}
            selectedId={selectedId}
            onHover={id => set(hoveredId, id)}
            onSelect={id => set(selectedId, id)}

            onDrop={(...rest) => console.log('drop', ...rest)}
            onDragEnd={(...rest) => console.log('end', ...rest)}
            onDragStart={(...rest) => console.log('start', ...rest)}
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
