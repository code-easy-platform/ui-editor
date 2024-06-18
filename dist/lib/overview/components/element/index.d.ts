import { TElement, TParentElement } from '../../types';

interface IElementProps {
    element: TElement;
    paddingLeft: number;
    parents: TParentElement[];
}
export declare const Element: ({ element, parents, paddingLeft }: IElementProps) => import("react/jsx-runtime").JSX.Element;
export {};
