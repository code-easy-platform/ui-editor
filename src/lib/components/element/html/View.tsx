import { useMemo } from 'react';
import { useObserverValue } from 'react-observing';

import { useUIElementInlineStyle } from './UseUIElementInlineStyle';
import { useElementAttributes } from './UseElementAttributes';
import { TElement } from '../../../types';
import { DynamicTag } from './DynamicTag';
import { Element } from '../';


interface IEditProps {
  element: TElement<'html'>;
  parents: TElement[];
}
export const View = ({ element, parents }: IEditProps) => {
  const [elementProps, elementSpecialProps] = useElementAttributes(element.attributes);
  const styles = useUIElementInlineStyle(element.style);
  const children = useObserverValue(element.children);
  const tag = useObserverValue(element.tag);


  const elementChildren = useMemo(() => {
    if ((!children || children.length === 0) && Object.keys(elementSpecialProps).includes('text')) {
      return elementSpecialProps.text;
    }

    if (!children || children.length === 0) return null;

    return children.map(child => (
      <Element
        element={child}
        key={child.id.value}
        parents={[...parents, element]}
      />
    ));
  }, [children, parents, element, elementSpecialProps.text]);


  return (
    <DynamicTag
      tag={tag}
      children={elementChildren}
      {...(elementProps !== undefined ? elementProps : {})}
      style={{
        ...styles,

        resize: 'none',
        outline: 'none',
        cursor: 'default',
        userSelect: 'none',
        pointerEvents: 'none',
      }}
    />
  );
};
