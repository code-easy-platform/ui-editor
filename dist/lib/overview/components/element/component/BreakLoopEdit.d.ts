import { MouseEvent } from 'react';
import { TElement } from '../../../types';

interface IBreakLoopEditProps {
    paddingLeft: number;
    element: TElement<'component'>;
    onMouseLeave: (event: MouseEvent) => void;
    onSelect: (event: MouseEvent, element: TElement<'component'>) => void;
    onMouseOver: (event: MouseEvent, element: TElement<'component'>, htmlElement: HTMLElement | null) => void;
}
export declare const BreakLoopEdit: ({ element, paddingLeft, onMouseLeave, onMouseOver, onSelect }: IBreakLoopEditProps) => import("react/jsx-runtime").JSX.Element;
export {};
