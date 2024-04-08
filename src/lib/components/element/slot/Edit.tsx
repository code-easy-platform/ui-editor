import { TElement } from '../../../types';


interface IEditProps {
  element: TElement<'slot'>;
  parents: TElement[];
}
export const Edit = ({ element, parents }: IEditProps) => {

  return (
    <>
      Edit slot
    </>
  );
};
