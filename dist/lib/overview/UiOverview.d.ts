import { IObservable } from 'react-observing';
import { IUiOverviewContextProps } from './UiOverviewContext';

interface IUiOverviewProps<D> extends Pick<IUiOverviewContextProps<D>, 'components' | 'styles' | 'value' | 'onDragStart' | 'onDragEnd' | 'onDrop' | 'onKeyDown' | 'onDuplicate' | 'onRemove' | 'onAddSlotContent' | 'onExpressionToValue' | 'onValueToExpression'> {
    onHover: (id: string | undefined) => void;
    onSelect: (id: string | undefined) => void;
    hoveredId: IObservable<string | undefined>;
    selectedId: IObservable<string | undefined>;
}
export declare function UiOverview<D = any>({ onSelect, onHover, selectedId, hoveredId, ...props }: IUiOverviewProps<D>): import("react/jsx-runtime").JSX.Element;
export {};
