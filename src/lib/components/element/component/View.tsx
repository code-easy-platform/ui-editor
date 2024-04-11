import { useSelectorValue } from 'react-observing';

import { useUiEditorContext } from '../../../UiEditorContext';
import { TElement } from '../../../types';
import { Element } from '..';


interface IEditProps {
  parents: TElement[];
  element: TElement<'component'>;
}
export const View = ({ element, parents }: IEditProps) => {
  const { components } = useUiEditorContext();


  const content = useSelectorValue(({ get }) => {
    const component = get(components).find(component => get(component.id) === get(element.referenceId));
    if (!component) return [];

    return get(component.content);
  }, [components, element]);


  return (
    <div style={{ outline: 'none', pointerEvents: 'none' }}>
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
