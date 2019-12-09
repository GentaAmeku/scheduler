import { createGlobalStyle } from 'styled-components';
import theme from '../../theme';

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${theme.palette.background.primary};
  }
`;
