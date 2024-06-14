

interface ITreeItemProps {
  label: string;
  children: React.ReactNode;
}
export const TreeItem = ({ label, children }: ITreeItemProps) => {
  return (
    <>
      <div>
        {label}
      </div>

      {children}
    </>
  );
}
