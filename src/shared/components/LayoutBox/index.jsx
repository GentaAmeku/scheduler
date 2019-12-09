import React from 'react';
import identity from 'lodash/identity';
import { Box } from './styles';
import { propsToStyle } from '../../utils';
import theme from '../../../theme';

const SPACE = theme.spacing;

const FLEX_LEFT = `
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const FLEX_CENTER = `
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FLEX_RIGHT = `
  display: flex;
  justify-content: flex-end;
`;

const toSpace = (...args) => {
  if (!args.some(identity)) return;
  const [x, y, t, r, b, l] = args;
  return x || y
    ? `${SPACE * y}px ${SPACE * x}px ${SPACE * y}px ${SPACE * x}px`
    : `${SPACE * t}px ${SPACE * r}px ${SPACE * b}px ${SPACE * l}px`;
};

export const LayoutBox = ({
  children,
  left,
  center,
  right,
  mt = 0,
  mr = 0,
  ml = 0,
  mb = 0,
  mx = 0,
  my = 0,
  pt = 0,
  pr = 0,
  pl = 0,
  pb = 0,
  px = 0,
  py = 0,
  ...rest
}) => {
  const margin = toSpace(mx, my, mt, mr, mb, ml);
  const padding = toSpace(px, py, pt, pr, pb, pl);
  const other = propsToStyle(rest);
  const styles = `
    ${left ? FLEX_LEFT : ''};
    ${center ? FLEX_CENTER : ''};
    ${right ? FLEX_RIGHT : ''};
    ${margin ? `margin: ${margin}` : ''};
    ${padding ? `padding: ${padding}` : ''};
    ${other};
  `;
  return <Box styles={styles}>{children}</Box>;
};

export default LayoutBox;
