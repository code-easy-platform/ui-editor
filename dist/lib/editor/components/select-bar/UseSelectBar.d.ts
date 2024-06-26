import { TGetPosition } from './SelectBarContext';
import { TElement, TParentElement } from '../../types';

export declare const useSelectBar: () => {
    select: (id: string | undefined) => void;
    selectedId: import('react-observing').IObservable<string | undefined>;
    selectedElement: import('react-observing').IObservable<TElement | undefined>;
    selectedElementParents: import('react-observing').IObservable<TParentElement[] | undefined>;
    updateSelectBar: (element: TElement | undefined, parents?: TParentElement[], getPosition?: TGetPosition) => void;
    updateSelectBarScroll: (y: number, x: number) => void;
    updateSelectBarPlaygroundSize: (height: number, width: number) => void;
    selectBarGetPosition: import('react-observing').IObservable<TGetPosition | undefined>;
    selectBarPlaygroundSize: import('react-observing').IObservable<{
        width: number;
        height: number;
    } | undefined>;
    selectBarDocumentVerticalScroll: import('react-observing').IObservable<number>;
    selectBarDocumentHorizontalScroll: import('react-observing').IObservable<number>;
};
