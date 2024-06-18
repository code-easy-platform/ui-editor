import { TElement, TParentElement } from '../../../types';

interface IEditProps {
    paddingLeft: number;
    element: TElement<'html'>;
    parents: TParentElement[];
}
export declare const View: ({ element, parents, paddingLeft }: IEditProps) => import("react/jsx-runtime").JSX.Element[] | null;
export {};
