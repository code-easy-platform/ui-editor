


interface IItemProps {
  label: string;
  hover: boolean;
  select: boolean;
  paddingLeft: number;
}
export const Item = ({ label, hover, select, paddingLeft }: IItemProps) => {
  return (
    <div
      data-hover={hover}
      data-select={select}
      style={{ paddingLeft }}
      className='pl-2 cursor-pointer rounded-sm outline-1 outline-transparent outline data-[hover=true]:outline-[#ed8c5f89] data-[select=true]:outline-[#3e8be4c1]'
    >
      {label}
    </div>
  );
};
