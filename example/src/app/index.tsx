import { useCallback, useMemo } from 'react';
import { observe, set } from 'react-observing';
import { v4 } from 'uuid';

// TODO: Transferir para o index.ts do src
import { TComponent, TDropFunctionProps, TElement, TStyle } from 'ui-editor/src/lib/types';
import { UIEditor } from 'ui-editor/src';

import './../styles.css';


export const App = () => {
  const hoveredId = useMemo(() => observe<string | undefined>(undefined), []);
  const selectedId = useMemo(() => observe<string | undefined>(undefined), []);

  const values = useMemo(() => {
    return {
      styles: observe<TStyle[]>([
        { id: observe(v4()), content: observe('button { padding:8px; padding-left:16px;padding-right:16px; border:none; background-color:green; border-radius:4px; color:white; }') },
        { id: observe(v4()), content: observe('button:disabled { opacity: 0.5 }') }
      ]),
      components: observe<TComponent[]>([
        {
          id: observe('custom-input'),
          content: observe<TElement[]>([
            {
              id: observe(v4()),
              type: observe('html'),
              tag: observe('input'),
              name: observe('input'),
              customData: { teste: 1 },
              children: observe(undefined),
              attributes: observe([
                { name: observe('placeholder'), value: observe('Type a email here...') },
              ]),
              style: observe([
                { name: observe('padding'), value: observe(8) },
                { name: observe('padding-left'), value: observe(16) },
                { name: observe('padding-right'), value: observe(16) },
                { name: observe('border'), value: observe('thin solid gray') },
                { name: observe('border-radius'), value: observe(50) },
              ]),
            },
          ]),
        },
        {
          id: observe('custom-button'),
          content: observe<TElement[]>([
            {
              id: observe(v4()),
              type: observe('html'),
              tag: observe('button'),
              name: observe('button'),
              customData: { teste: 1 },
              style: observe(undefined),
              attributes: observe([
                { name: observe('hidden'), value: observe(false) },
              ]),
              children: observe([
                {
                  tag: observe('a'),
                  id: observe(v4()),
                  type: observe('html'),
                  name: observe('a'),
                  customData: { teste: 2 },
                  style: observe(undefined),
                  children: observe(undefined),
                  attributes: observe([
                    { name: observe('text'), value: observe('Send') },
                  ]),
                },
              ]),
            },
          ]),
        },
        {
          id: observe('custom-send-email'),
          content: observe<TElement[]>([
            {
              id: observe(v4()),
              tag: observe('div'),
              type: observe('html'),
              name: observe('div'),
              customData: { teste: 1 },
              attributes: observe([
                { name: observe('hidden'), value: observe(false) },
              ]),
              style: observe([
                { name: observe('padding'), value: observe(8) },
                { name: observe('display'), value: observe('flex') },
                { name: observe('gap'), value: observe(8) },
                { name: observe('align-itens'), value: observe('center') },
              ]),
              children: observe([
                {
                  id: observe(v4()),
                  type: observe('component'),
                  name: observe('CustomInput'),
                  referenceId: observe('custom-input'),
                },
                {
                  id: observe(v4()),
                  type: observe('component'),
                  name: observe('CustomButton'),
                  referenceId: observe('custom-button'),
                },
                {
                  id: observe(v4()),
                  type: observe('component'),
                  name: observe('CustomSendEmail'),
                  referenceId: observe('custom-send-email'),
                },
              ]),
            },
          ]),
        }
      ]),
      value: observe<TElement[]>([
        {
          id: observe(v4()),
          type: observe('html'),
          tag: observe('button'),
          customData: { teste: 1 },
          style: observe(undefined),
          name: observe('button'),
          attributes: observe([
            { name: observe('hidden'), value: observe(false) },
          ]),
          children: observe([
            {
              tag: observe('a'),
              id: observe(v4()),
              name: observe('a'),
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
          id: observe(v4()),
          type: observe('html'),
          tag: observe('button'),
          customData: { teste: 3 },
          name: observe('button'),
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
          id: observe(v4()),
          tag: observe('div'),
          type: observe('html'),
          children: observe([]),
          customData: { teste: 4 },
          attributes: observe([]),
          name: observe('div'),
          style: observe([]),
        },
        {
          id: observe(v4()),
          tag: observe('div'),
          type: observe('html'),
          customData: { teste: 4 },
          attributes: observe([]),
          name: observe('div'),
          style: observe([]),
          children: observe([
            {
              id: observe(v4()),
              style: observe([]),
              name: observe('input'),
              tag: observe('input'),
              type: observe('html'),
              attributes: observe([]),
              customData: { teste: 4 },
              children: observe(undefined),
            },
          ]),
        },
        {
          id: observe(v4()),
          type: observe('component'),
          name: observe('CustomInput'),
          referenceId: observe('custom-input'),
        },
        {
          id: observe(v4()),
          type: observe('component'),
          name: observe('CustomButton'),
          referenceId: observe('custom-button'),
        },
        {
          id: observe(v4()),
          type: observe('component'),
          name: observe('CustomSendEmail'),
          referenceId: observe('custom-send-email'),
        },
      ]),
    };
  }, []);


  const handleDrop = useCallback(({ element, from, to }: TDropFunctionProps) => {
    console.log(element, from, to);

    if (from.element) {
      set(from.element === 'root' ? values.value : from.element.children, oldContent => {
        if (!oldContent) return oldContent;
        return [...oldContent.filter(contentItem => contentItem.id.value !== element.id.value)];
      });
    }

    // É preciso calcular o position antes porque pode haver conflitos com o remover

    if (to.element === 'root') {
      const position = (from.element === to.element) && (from.position < to.position) ? to.position - 1 : to.position;

      set(values.value, oldContent => {
        oldContent.splice(position, 0, element);
        return [...oldContent];
      });
    } else {
      const position = (from.element !== 'root' && from.element?.id.value === to.element.id.value) && (from.position < to.position) ? to.position - 1 : to.position;

      set(to.element.children, oldContent => {
        if (!oldContent) return oldContent;

        oldContent.splice(position, 0, element);

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
            components={values.components}
            onKeyDown={(...rest) => console.log('end', ...rest)}

            hoveredId={hoveredId}
            selectedId={selectedId}
            onHover={id => set(hoveredId, id)}
            onSelect={id => set(selectedId, id)}

            onDrop={handleDrop}
            onDragEnd={(...rest) => console.log('end', ...rest)}
            onDragStart={(...rest) => console.log('start', ...rest)}

            onRemove={(...rest) => console.log('remove', ...rest)}
            onDuplicate={(...rest) => console.log('duplicate', ...rest)}
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
