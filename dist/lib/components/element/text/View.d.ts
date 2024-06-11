import { TElement, TParentElement } from '../../../types';

interface IEditProps {
    element: TElement<'text'>;
    parents: TParentElement[];
}
export declare const View: ({ element }: IEditProps) => string;
export {};
