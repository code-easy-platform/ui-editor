import { TElement, TParentElement } from '../../../types';

interface IViewProps {
    paddingLeft: number;
    element: TElement<'slot'>;
    parents: TParentElement[];
}
export declare const View: ({ element, parents, paddingLeft }: IViewProps) => import("react/jsx-runtime").JSX.Element[] | null;
export {};
