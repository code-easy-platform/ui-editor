import { TElement, TParentElement } from '../../../types';

interface IEditProps {
    paddingLeft: number;
    parents: TParentElement[];
    element: TElement<'component'>;
}
export declare const View: ({ element, parents, paddingLeft }: IEditProps) => import("react/jsx-runtime").JSX.Element[];
export {};
