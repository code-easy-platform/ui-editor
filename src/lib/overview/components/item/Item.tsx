import { InsertBar } from '../insert-bar';


interface IItemProps {
  label: string;
  hover: boolean;
  select: boolean;
  dragging: boolean;
  dragOver: boolean;
  paddingLeft: number;
  insertBarAt: 'start' | 'center' | 'end' | null;
}
export const Item = ({ label, hover, select, paddingLeft, insertBarAt, dragging, dragOver }: IItemProps) => {
  return (
    <div className='pointer-events-none'>
      {dragOver && insertBarAt === 'start' && <InsertBar />}
      <div
        data-hover={hover}
        data-select={select}
        style={{ paddingLeft }}
        data-dragging={dragging}
        data-drag-over={dragOver}
        className='cursor-pointer rounded-sm outline outline-1 outline-transparent pointer-events-none data-[hover=true]:outline-[#ed8c5f89] data-[select=true]:outline-[#3e8be4c1]'
      >
        {label}
      </div>
      {dragOver && insertBarAt === 'end' && <InsertBar />}
    </div>
  );
};
