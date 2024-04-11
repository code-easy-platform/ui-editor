import { IObservable } from 'react-observing';


type THtml<D = any> = {
  id: IObservable<string>;
  tag: IObservable<string>;
  name: IObservable<string>;
  type: IObservable<'html'>;
  /** If this init undefined, this will not receive children, drop inside will throw a error */
  children: IObservable<TElement[] | undefined>;
  style: IObservable<{ name: IObservable<string>, value: IObservable<string | number | boolean> }[] | undefined>;
  attributes: IObservable<{ name: IObservable<string>, value: IObservable<string | number | boolean> }[] | undefined>;
  customData?: D;
};

type TSlot<D = any> = {
  id: IObservable<string>;
  name: IObservable<string>;
  type: IObservable<'slot'>;
  /** If this init undefined, the slot will be only a placeholder in the screen */
  children: IObservable<TElement[] | undefined>;
  customData?: D;
};

type TComponent<D = any> = {
  id: IObservable<string>;
  name: IObservable<string>;
  type: IObservable<'component'>;
  referenceId: IObservable<string>;
  customData?: D;
};


export type TElement<T extends 'html' | 'component' | 'slot' = 'html' | 'component' | 'slot', D = any> = T extends 'html'
  ? THtml<D>
  : T extends 'slot'
  ? TSlot<D>
  : TComponent<D>
