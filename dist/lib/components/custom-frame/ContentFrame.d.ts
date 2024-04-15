/// <reference types="react" />
interface IContentFrameProps {
    children: React.ReactNode;
    onRef: (document: Document) => void;
    onScroll: (y: number, x: number) => void;
    onKeyDown: (event: KeyboardEvent) => void;
}
export declare const ContentFrame: React.FC<IContentFrameProps>;
export {};
