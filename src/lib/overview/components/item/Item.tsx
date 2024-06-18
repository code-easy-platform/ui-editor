


interface IItemProps {
  label: string;
  paddingLeft: number;
}
export const Item = ({ label, paddingLeft }: IItemProps) => {
  return (
    <div className='pl-2 cursor-pointer rounded-sm outline-[#ed8c5f89] outline-1 hover:outline' style={{ paddingLeft }}>
      {label}
    </div>
  );
};
