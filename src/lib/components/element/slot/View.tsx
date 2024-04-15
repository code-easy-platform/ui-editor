import { useSlotContent } from './UseSlotContent';
import { TElement } from '../../../types';
import { Element } from '..';


interface IViewProps {
  element: TElement<'slot'>;
  parents: TElement[];
}
export const View = ({ element, parents }: IViewProps) => {
  const [content = []] = useSlotContent(element, parents);


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
