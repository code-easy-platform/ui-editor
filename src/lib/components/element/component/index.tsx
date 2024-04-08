import { useHasViewOnly } from '../UseHasViewOnly';
import { TElement } from '../../../types';
import { Edit } from './Edit';
import { View } from './View';


interface IComponentProps {
  element: TElement<'component'>;
  parents: TElement[];
}
export const Component = ({ element, parents }: IComponentProps) => {
  const hasViewOnly = useHasViewOnly(element, parents);


  if (hasViewOnly) return (
    <View
      element={element}
      parents={parents}
    />
  );

  return (
    <Edit
      element={element}
      parents={parents}
    />
  );
}
