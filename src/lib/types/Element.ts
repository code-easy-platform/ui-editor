import { IObservable } from 'react-observing';


type THtml = {
  id: IObservable<string>;
  tag: IObservable<string>;
  type: IObservable<'html'>;
  children: IObservable<TElement[] | undefined>;
  style: IObservable<{ name: IObservable<string>, value: IObservable<string | number | boolean> }[] | undefined>;
  attributes: IObservable<{ name: IObservable<string>, value: IObservable<string | number | boolean> }[] | undefined>;
};

type TSlot = {
  id: IObservable<string>;
  type: IObservable<'slot'>;
  children: IObservable<TElement[] | undefined>;
};

type TComponent = {
  id: IObservable<string>;
  type: IObservable<'component'>;
  referenceId: IObservable<string>;
};


export type TElement<T extends 'html' | 'component' | 'slot' = 'html' | 'component' | 'slot'> = T extends 'html'
  ? THtml
  : T extends 'slot'
  ? TSlot
  : TComponent

