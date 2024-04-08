import { useHasViewOnly } from '../UseHasViewOnly';
import { TElement } from '../../../types';
import { Edit } from './Edit';
import { View } from './View';


interface ISlotProps {
  element: TElement;
  parents: TElement[];
}
export const Slot = ({ element, parents }: ISlotProps) => {
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
