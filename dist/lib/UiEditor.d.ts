import { IObservable } from 'react-observing';
import { IUiEditorContextProps } from './UiEditorContext';

interface IUIEditorProps<D> extends Pick<IUiEditorContextProps<D>, 'components' | 'styles' | 'value' | 'onDragStart' | 'onDragEnd' | 'onDrop' | 'onKeyDown' | 'onDuplicate' | 'onRemove' | 'onAddSlotContent' | 'onExpressionToValue' | 'onValueToExpression'> {
    onHover: (id: string | undefined) => void;
    onSelect: (id: string | undefined) => void;
    hoveredId: IObservable<string | undefined>;
    selectedId: IObservable<string | undefined>;
}
export declare function UIEditor<D = any>({ onSelect, onHover, selectedId, hoveredId, ...props }: IUIEditorProps<D>): import("react/jsx-runtime").JSX.Element;
export {};
