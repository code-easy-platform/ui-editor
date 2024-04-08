import { TElement } from '../../../types';


interface IEditProps {
  element: TElement<'slot'>;
  parents: TElement[];
}
export const View = ({ element, parents }: IEditProps) => {

  return (
    <>
      View slot
    </>
  );
};
