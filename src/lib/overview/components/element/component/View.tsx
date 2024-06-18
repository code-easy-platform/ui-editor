import { useSelectorValue } from 'react-observing';

import { useUiOverviewContext } from '../../../UiOverviewContext';
import { TElement, TParentElement } from '../../../types';
import { Element } from '..';


interface IEditProps {
  paddingLeft: number;
  parents: TParentElement[];
  element: TElement<'component'>;
}
export const View = ({ element, parents, paddingLeft }: IEditProps) => {
  const { components } = useUiOverviewContext();


  const content = useSelectorValue(({ get }) => {
    const component = get(components).find(component => get(component.id) === get(element.referenceComponentId));
    if (!component) return [];

    return get(component.content);
  }, [components, element]);


  return content.map((contentItem) => (
    <Element
      element={contentItem}
      paddingLeft={paddingLeft}
      key={contentItem.id.value}
      parents={[...parents, element]}
    />
  ));
};
