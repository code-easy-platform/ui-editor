import { TElement, TParentElement } from '../../types';

interface IElementProps {
    element: TElement;
    parents: TParentElement[];
}
export declare const Element: ({ element, parents }: IElementProps) => import("react/jsx-runtime").JSX.Element;
export {};
