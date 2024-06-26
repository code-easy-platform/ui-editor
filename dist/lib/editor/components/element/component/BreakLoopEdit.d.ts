import { MouseEvent } from 'react';
import { TElement } from '../../../types';

interface IBreakLoopEditProps {
    element: TElement<'component'>;
    onMouseLeave: (event: MouseEvent) => void;
    onSelect: (event: MouseEvent, element: TElement<'component'>) => void;
    onMouseOver: (event: MouseEvent, element: TElement<'component'>, htmlElement: HTMLElement | null) => void;
    onHoverBar: (element: TElement<'component'>, htmlElement: HTMLElement | null) => void;
    onSelectBar: (element: TElement<'component'>, htmlElement: HTMLElement | null) => void;
}
export declare const BreakLoopEdit: ({ element, onHoverBar, onSelectBar, onMouseLeave, onMouseOver, onSelect }: IBreakLoopEditProps) => import("react/jsx-runtime").JSX.Element;
export {};
