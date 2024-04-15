import { TElement } from './Element';
import { IObservable } from 'react-observing';

export type TComponent = {
    id: IObservable<string>;
    content: IObservable<TElement[]>;
};
