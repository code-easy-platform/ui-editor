interface IItemProps {
    label: string;
    hover: boolean;
    select: boolean;
    dragging: boolean;
    dragOver: boolean;
    paddingLeft: number;
    insertBarAt: 'start' | 'center' | 'end' | null;
}
export declare const Item: ({ label, hover, select, paddingLeft, insertBarAt, dragging, dragOver }: IItemProps) => import("react/jsx-runtime").JSX.Element;
export {};
