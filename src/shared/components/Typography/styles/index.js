import styled from 'styled-components';
import theme from '../../../../theme';

export const makeComponent = tagName =>
  styled[tagName](({ color, styles }) => {
    return `
    color: ${theme.palette.text[color] || theme.palette.text.primary};
    ${styles};
  `;
  });
