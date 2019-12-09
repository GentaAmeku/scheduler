import styled from 'styled-components';
import theme from '../../../theme';

export const AppBar = styled.header`
  background: ${theme.palette.white};
  border-bottom: 1px solid ${theme.palette.border.primary};
  height: ${theme.size.header}px;
  width: 100%;
`;
