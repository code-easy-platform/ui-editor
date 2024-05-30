import { useCallback, useMemo } from 'react';
import { DragAndDropProvider } from 'react-use-drag-and-drop';
import { observe, set } from 'react-observing';
import { v4 } from 'uuid';

import { UIEditor, TComponent, TDropFunctionProps, TElement, TStyle } from 'ui-editor/src';
import { Component } from './components/Component';
import { Html } from './components/Html';
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
        { // Custom input
          id: observe('simple-component'),
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
        { // Component with a slot
          id: observe('component-with-slot'),
          content: observe<TElement[]>([
            {
              id: observe(v4()),
              type: observe('html'),
              tag: observe('div'),
              name: observe('div'),
              style: observe([
                { name: observe('padding'), value: observe(16) },
              ]),
              attributes: observe([
                { name: observe('hidden'), value: observe(false) },
              ]),
              children: observe<TElement[]>([
                {
                  id: observe(v4()),
                  tag: observe('p'),
                  type: observe('html'),
                  children: observe([]),
                  customData: { teste: 4 },
                  attributes: observe([
                    { name: observe('text'), value: observe('Slot below:') },
                  ]),
                  name: observe('p'),
                  style: observe([]),
                },
                {
                  id: observe('slot-component-with-slot'),
                  type: observe('slot'),
                  name: observe('Slot1'),
                  componentId: observe('component-with-slot'),
                },
              ]),
            },
          ]),
        },
        { // Component with component with slot
          id: observe('component-with-component-with-slot'),
          content: observe<TElement[]>([
            {
              id: observe(v4()),
              type: observe('html'),
              tag: observe('div'),
              name: observe('div'),
              style: observe([
                { name: observe('padding'), value: observe(16) },
              ]),
              attributes: observe([
                { name: observe('hidden'), value: observe(false) },
              ]),
              children: observe<TElement[]>([
                {
                  id: observe(v4()),
                  tag: observe('p'),
                  type: observe('html'),
                  children: observe([]),
                  customData: { teste: 4 },
                  attributes: observe([
                    { name: observe('text'), value: observe('Component with slot below:') },
                  ]),
                  name: observe('p'),
                  style: observe([]),
                },
                {
                  id: observe(v4()),
                  slots: observe([]),
                  type: observe('component'),
                  name: observe('Component with slot'),
                  referenceComponentId: observe('component-with-slot'),
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
        /* {
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
          name: observe('CustomSendEmail'),
          referenceId: observe('custom-send-email'),
        } */
        /* {
          id: observe(v4()),
          type: observe('component'),
          name: observe('slot-level-1'),
          referenceComponentId: observe('slot-level-1'),
          slots: observe<TElement<'slot-content'>[]>([
            {
              id: observe(v4()),
              type: observe('slot-content'),
              referenceSlotId: observe('slot-level-1-slot'),
              children: observe([
                {
                  id: observe(v4()),
                  type: observe('component'),
                  name: observe('slot-level-2'),
                  referenceComponentId: observe('slot-level-2'),
                  slots: observe<TElement<'slot-content'>[]>([
                    {
                      id: observe(v4()),
                      type: observe('slot-content'),
                      referenceSlotId: observe('slot-level-2-slot'),
                      children: observe([
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
                      ]),
                    }
                  ]),
                },
              ]),
            }
          ]),
        }, */
      ]),
    };
  }, []);


  const handleGetDropElement = useCallback((element: string | TElement): TElement<"html" | "component" | "slot"> => {
    if (typeof element === 'object') return element;

    if (element === 'button') {
      return {
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
      };
    } else if (element === 'div') {
      return {
        id: observe(v4()),
        tag: observe('div'),
        type: observe('html'),
        children: observe([]),
        customData: { teste: 4 },
        attributes: observe([]),
        name: observe('div'),
        style: observe([]),
      };
    } else if (element === 'p') {
      return {
        id: observe(v4()),
        tag: observe('p'),
        type: observe('html'),
        customData: { teste: 4 },
        children: observe(undefined),
        attributes: observe([
          { name: observe('text'), value: observe('button') },
        ]),
        name: observe('p'),
        style: observe([]),
      };
    } else if (element === 'simple-component') {
      return {
        id: observe(v4()),
        slots: observe([]),
        type: observe('component'),
        name: observe('CustomInput'),
        referenceComponentId: observe('simple-component'),
      };
    } else if (element === 'component-with-slot') {
      return {
        id: observe(v4()),
        slots: observe([]),
        type: observe('component'),
        name: observe('component-with-slot'),
        referenceComponentId: observe('component-with-slot'),
      };
    } else if (element === 'component-with-component-with-slot') {
      return {
        id: observe(v4()),
        slots: observe([]),
        type: observe('component'),
        name: observe('component-with-component-with-slot'),
        referenceComponentId: observe('component-with-component-with-slot'),
      };
    }

    throw new Error("Error on create the new element");
  }, []);

  const handleDrop = useCallback(({ element, from, to }: TDropFunctionProps) => {
    //console.log(element, from, to);


    if (from.element && typeof element !== 'string') {
      set(from.element === 'root' ? values.value : from.element.children, oldContent => {
        if (!oldContent) return oldContent;
        return [...oldContent.filter(contentItem => contentItem.id.value !== element.id.value)];
      });
    }

    // É preciso calcular o position antes porque pode haver conflitos com o remover

    if (to.element === 'root') {
      const position = (from.element === to.element) && (from.position < to.position) ? to.position - 1 : to.position;

      set(values.value, oldContent => {
        oldContent.splice(position, 0, handleGetDropElement(element));
        return [...oldContent];
      });
    } else {
      const position = (from.element !== 'root' && from.element?.id.value === to.element.id.value) && (from.position < to.position)
        ? to.position - 1
        : to.position;

      set(to.element.children, oldContent => {
        if (!oldContent) return oldContent;

        oldContent.splice(position, 0, handleGetDropElement(element));

        return [...oldContent];
      });
    }
  }, [values.value, handleGetDropElement]);

  const handleRemove = useCallback((element: TElement) => {
    console.log('remove', element);
  }, []);

  const handleAddSlot = useCallback((element: TElement, referenceComponent: TElement<'component'>) => {
    set(referenceComponent.slots, old => {
      if (old?.some(slot => slot.referenceSlotId.value === element.id.value)) return old;

      return [
        ...(old || []),
        {
          id: observe(v4()),
          children: observe([]),
          referenceSlotId: observe(element.id.value),
          type: observe<'slot-content'>('slot-content'),
        },
      ];
    });
  }, []);


  return (
    <div className='w-screen h-screen bg-paper flex justify-center items-center gap-4'>
      <DragAndDropProvider>
        <div className='p-2 flex flex-col gap-2'>
          Draggable


          <div className='h-[90vh] w-[10vw] border rounded'>
            <section className='p-2 flex flex-col gap-2'>
              <legend>Native</legend>

              <Html tag='p' />
              <Html tag='div' />
              <Html tag='button' />
            </section>

            <section className='p-2 flex flex-col gap-2'>
              <legend>Components</legend>

              <Component id='simple-component' name="simple-component" />
              <Component id='component-with-slot' name="component-with-slot" />
              <Component id='component-with-component-with-slot' name="component-with-component-with-slot" />
            </section>
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
              onAddSlotContent={handleAddSlot}
              onDragEnd={(...rest) => console.log('end', ...rest)}
              onDragStart={(...rest) => console.log('start', ...rest)}

              onRemove={handleRemove}
              onDuplicate={(...rest) => console.log('duplicate', ...rest)}
            />
          </div>
        </div>

        <div className='p-2 flex flex-col gap-2'>
          Overview

          <div className='h-[90vh] w-[20vw] border rounded'>
          </div>
        </div>
      </DragAndDropProvider>
    </div>
  );
}
