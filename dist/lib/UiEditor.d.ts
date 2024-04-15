import { IUiEditorContextProps } from './UiEditorContext';
import { IObservable } from 'react-observing';

interface IUIEditorProps extends Pick<IUiEditorContextProps, 'components' | 'styles' | 'value' | 'onDragStart' | 'onDragEnd' | 'onDrop' | 'onKeyDown' | 'onDuplicate' | 'onRemove' | 'onAddSlotContent'> {
    onHover: (id: string | undefined) => void;
    onSelect: (id: string | undefined) => void;
    hoveredId: IObservable<string | undefined>;
    selectedId: IObservable<string | undefined>;
}
export declare const UIEditor: ({ onSelect, onHover, selectedId, hoveredId, ...props }: IUIEditorProps) => import("react/jsx-runtime").JSX.Element;
export {};
