import { TElement } from '../../../types';

/**
 *
 * @param element Current element
 * @param parents Current element parents
 * @returns If it has or not a infinity loop through components
 */
export declare const useHasInfinityLoop: (element: TElement<'component'>, parents: TElement[]) => boolean;
