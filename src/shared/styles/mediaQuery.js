import { css } from 'styled-components';

export const media = {
  sp: (...args) => css`
    @media (max-width: 481px) {
      ${css(...args)};
    }
  `,
};
