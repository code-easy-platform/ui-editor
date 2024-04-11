import { useSlotContent } from './UseSlotContent';
import { TElement } from '../../../types';
import { Element } from '..';


interface IEditProps {
  element: TElement<'slot'>;
  parents: TElement[];
}
export const View = ({ element, parents }: IEditProps) => {
  const [content] = useSlotContent(element, parents);


  return (
    <div style={{ outline: 'none' }}>
      {content.map((contentItem) => (
        <Element
          element={contentItem}
          key={contentItem.id.value}
          parents={[...parents, element]}
        />
      ))}
    </div>
  );
};
