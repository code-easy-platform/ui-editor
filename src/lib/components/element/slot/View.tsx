import { TElement } from '../../../types';


interface IEditProps {
  element: TElement;
  parents: TElement[];
}
export const View = ({ element, parents }: IEditProps) => {

  return (
    <>
      View slot
    </>
  );
};
