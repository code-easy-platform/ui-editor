import { TElement, TParentElement } from '../../../types';
import { useSlotContent } from './UseSlotContent';
import { Element } from '..';


interface IViewProps {
  element: TElement<'slot'>;
  parents: TParentElement[];
}
export const View = ({ element, parents }: IViewProps) => {
  const [content = [], currentContentSlot] = useSlotContent(element, parents);


  if (!currentContentSlot) return null;

  return content.map((contentItem) => (
    <Element
      element={contentItem}
      key={contentItem.id.value}
      parents={[...parents, currentContentSlot]}
    />
  ));
};
