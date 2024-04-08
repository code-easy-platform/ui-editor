import { TElement } from '../../../types';


interface IEditProps {
  element: TElement<'component'>;
  parents: TElement[];
}
export const View = ({ element, parents }: IEditProps) => {

  return (
    <>
      View component
    </>
  );
};
