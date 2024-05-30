import { TElement, TParentElement } from '../../../types';

interface IEditProps {
    parents: TParentElement[];
    element: TElement<'component'>;
}
export declare const View: ({ element, parents }: IEditProps) => import("react/jsx-runtime").JSX.Element;
export {};
