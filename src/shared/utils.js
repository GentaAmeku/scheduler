import kebabCase from 'lodash/kebabCase';

export const propsToStyle = styles =>
  Object.entries(styles)
    .filter(([_, v]) => v) // eslint-disable-line no-unused-vars
    .map(([k, v]) => `${kebabCase(k)}: ${v}`)
    .join(';');
