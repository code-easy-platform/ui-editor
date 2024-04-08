import { useHasViewOnly } from '../UseHasViewOnly';
import { TElement } from '../../../types';
import { Edit } from './Edit';
import { View } from './View';


interface IHtmlProps {
  element: TElement;
  parents: TElement[];
}
export const Html = ({ element, parents }: IHtmlProps) => {
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
