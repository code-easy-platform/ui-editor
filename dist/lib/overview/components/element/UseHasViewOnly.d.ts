import { TElement, TParentElement } from '../../types';

/**
 *
 * @param element Current element
 * @param parents Current element parents
 * @returns If it has or not view only
 */
export declare const useHasViewOnly: (element: TElement, parents: TParentElement[]) => boolean;
