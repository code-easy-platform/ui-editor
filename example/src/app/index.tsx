import { useCallback, useMemo } from 'react';
import { observe, set } from 'react-observing';

// TODO: Transferir para o index.ts do src
import { TDropFunctionProps, TElement, TStyle } from 'ui-editor/src/lib/types';
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
          customData: { teste: 1 },
          style: observe(undefined),
          attributes: observe([
            { name: observe('hidden'), value: observe(false) },
          ]),
          children: observe([
            {
              tag: observe('a'),
              id: observe('546'),
              type: observe('html'),
              customData: { teste: 2 },
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
          customData: { teste: 3 },
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
        {
          id: observe('789'),
          tag: observe('div'),
          type: observe('html'),
          children: observe([]),
          customData: { teste: 4 },
          attributes: observe([]),
          style: observe([]),
        },
      ]),
    };
  }, []);


  const handleDrop = useCallback(({ element, from, to }: TDropFunctionProps) => {
    if (from) {
      set(from === 'root' ? values.value : from.element.children, oldContent => {
        if (!oldContent) return oldContent;
        return [...oldContent.filter(contentItem => contentItem.id.value !== element.id.value)];
      });
    }

    if (to.element === 'root') {
      set(values.value, oldContent => {
        oldContent.splice(to.position, 0, element);
        return [...oldContent];
      });
    } else {
      set(to.element.children, oldContent => {
        if (!oldContent) return oldContent;

        oldContent.splice(to.position, 0, element);

        return [...oldContent];
      });
    }
  }, [values.value]);


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

            onDrop={handleDrop}
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
