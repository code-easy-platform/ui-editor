import { IObservable } from 'react-observing';


/**
 * Used to render a native element
 * - Allow or not content
 */
type THtml<D = any> = {
  /** This instance id */
  id: IObservable<string>;
  tag: IObservable<string>;
  /** This instance name */
  name: IObservable<string>;
  type: IObservable<'html'>;
  /** If this init undefined, this will not receive children, drop inside will throw a error */
  children: IObservable<TElement[] | undefined>;
  style: IObservable<{ name: IObservable<string>, value: IObservable<string | number | boolean> }[] | undefined>;
  attributes: IObservable<{ name: IObservable<string>, value: IObservable<string | number | boolean | undefined | null> }[] | undefined>;
  /** Extra data can be passed here, things like a full instance or extra information */
  customData?: D;
};

/**
 * Used to render a slot element
 * - Do not allow content
 */
type TSlot<D = any> = {
  /** This instance id */
  id: IObservable<string>;
  /** This instance name */
  name: IObservable<string>;
  componentId: IObservable<string>;
  /** If the type is slot, the slot will be only a placeholder in the screen */
  type: IObservable<'slot'>;
  /** Extra data can be passed here, things like a full instance or extra information */
  customData?: D;
};

/**
 * Used to store the slot content
 * - Allow content
 */
type TSlotContent<D = any> = {
  /** This instance id */
  id: IObservable<string>;
  /** If the type is slot-content, the slot will accept and render elements in the screen */
  type: IObservable<'slot-content'>;
  children: IObservable<TElement[]>;
  referenceSlotId: IObservable<string>;
  /** Extra data can be passed here, things like a full instance or extra information */
  customData?: D;
};

/**
 * Used to group native elements, slot and other components
 * - Allow content
 */
type TComponent<D = any> = {
  /** This instance id */
  id: IObservable<string>;
  /** This instance name */
  name: IObservable<string>;
  type: IObservable<'component'>;
  /** Reference to id of a component */
  referenceComponentId: IObservable<string>;
  /** 
   * Here must have the content of this instance for the reference component slot
   */
  slots: IObservable<TSlotContent[] | undefined>;
  /** Extra data can be passed here, things like a full instance or extra information */
  customData?: D;
};


export type TElement<T extends 'html' | 'component' | 'slot' | 'slot-content' = 'html' | 'component' | 'slot', D = any> = T extends 'html'
  ? THtml<D>
  : T extends 'slot'
  ? TSlot<D>
  : T extends 'slot-content'
  ? TSlotContent<D>
  : TComponent<D>
