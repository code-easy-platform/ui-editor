import { TElement } from '../../../types';

interface IViewProps {
    element: TElement<'slot'>;
    parents: TElement[];
}
export declare const View: ({ element, parents }: IViewProps) => import("react/jsx-runtime").JSX.Element;
export {};
