import React from 'react';
import { Grid as GridStyles } from './styles';

export const Grid = ({ children, ...rest }) => (
  <GridStyles {...rest}>{children}</GridStyles>
);

export const GridItem = ({ children }) => <div>{children}</div>;

export default Grid;
