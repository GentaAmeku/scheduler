import styled from 'styled-components';
import { media } from '../../../styles/mediaQuery';
import theme from '../../../../theme';

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 32px;
  min-height: calc(100vh - ${theme.size.header + theme.size.footer}px);
  ${media.sp`
    max-width: 100%;
    padding: 0 16px;
  `}
`;
