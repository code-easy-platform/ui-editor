import { IObservable } from 'react-observing';

type THtml<D = any> = {
    id: IObservable<string>;
    tag: IObservable<string>;
    name: IObservable<string>;
    type: IObservable<'html'>;
    /** If this init undefined, this will not receive children, drop inside will throw a error */
    children: IObservable<TElement[] | undefined>;
    style: IObservable<{
        name: IObservable<string>;
        value: IObservable<string | number | boolean>;
    }[] | undefined>;
    attributes: IObservable<{
        name: IObservable<string>;
        value: IObservable<string | number | boolean>;
    }[] | undefined>;
    customData?: D;
};
type TSlot<D = any> = {
    id: IObservable<string>;
    name: IObservable<string>;
    componentId: IObservable<string>;
    /** If the type is slot, the slot will be only a placeholder in the screen */
    type: IObservable<'slot'>;
    customData?: D;
};
type TSlotContent<D = any> = {
    id: IObservable<string>;
    /** If the type is slot-content, the slot will accept and render elements in the screen */
    type: IObservable<'slot-content'>;
    children: IObservable<TElement[]>;
    referenceSlotId: IObservable<string>;
    customData?: D;
};
type TComponent<D = any> = {
    id: IObservable<string>;
    name: IObservable<string>;
    type: IObservable<'component'>;
    referenceComponentId: IObservable<string>;
    slots: IObservable<TSlotContent[] | undefined>;
    customData?: D;
};
export type TElement<T extends 'html' | 'component' | 'slot' | 'slot-content' = 'html' | 'component' | 'slot', D = any> = T extends 'html' ? THtml<D> : T extends 'slot' ? TSlot<D> : T extends 'slot-content' ? TSlotContent<D> : TComponent<D>;
export {};
