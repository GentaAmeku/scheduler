import React from 'react';
import { makeComponent } from './styles';
import { propsToStyle } from '../../utils';

export const Typography = ({ component = 'p', children, color, ...rest }) => {
  const Component = makeComponent(component);
  const styles = propsToStyle(rest);
  return (
    <Component color={color} styles={styles}>
      {children}
    </Component>
  );
};

export default Typography;
