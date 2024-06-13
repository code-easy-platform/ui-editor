import { IObservable } from 'react-observing';
import { TElement } from './Element';

export type TComponent = {
    id: IObservable<string>;
    content: IObservable<TElement[]>;
};
