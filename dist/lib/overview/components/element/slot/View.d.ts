import { TElement, TParentElement } from '../../../types';

interface IViewProps {
    element: TElement<'slot'>;
    parents: TParentElement[];
}
export declare const View: ({ element, parents }: IViewProps) => import("react/jsx-runtime").JSX.Element[] | null;
export {};
