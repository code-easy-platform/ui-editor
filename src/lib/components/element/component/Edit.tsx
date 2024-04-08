import { TElement } from '../../../types';


interface IEditProps {
  element: TElement<'component'>;
  parents: TElement[];
}
export const Edit = ({ element, parents }: IEditProps) => {

  return (
    <>
      Edit component
    </>
  );
};
