import { TGetPosition } from './HoverBarContext';
import { TElement } from '../../types';

export declare const useHoverBar: () => {
    hover: (id: string | undefined) => void;
    hoveredId: import('react-observing').IObservable<string | undefined>;
    hoveredElement: import('react-observing').IObservable<TElement | undefined>;
    updateHoverBar: (element: TElement, getPosition: TGetPosition) => void;
    updateHoverBarScroll: (y: number, x: number) => void;
    updateHoverBarPlaygroundSize: (height: number, width: number) => void;
    hoverBarGetPosition: import('react-observing').IObservable<TGetPosition | undefined>;
    hoverBarPlaygroundSize: import('react-observing').IObservable<{
        width: number;
        height: number;
    } | undefined>;
    hoverBarDocumentVerticalScroll: import('react-observing').IObservable<number>;
    hoverBarDocumentHorizontalScroll: import('react-observing').IObservable<number>;
};
