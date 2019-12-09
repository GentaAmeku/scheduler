import styled from 'styled-components';
import theme from '../../../../theme';
import { media } from '../../../styles/mediaQuery';

export const Grid = styled.div(
  ({ spacing = 0, col }) => `
    display: grid;
    gap: ${spacing * theme.spacing}px;
    grid-template-columns: ${col};
    ${media.sp`
      grid-template-columns: 1fr;
    `}
  `,
);
