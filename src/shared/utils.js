import kebabCase from 'lodash/kebabCase';
import moment from 'moment';

export const propsToStyle = styles =>
  Object.entries(styles)
    .filter(([_, v]) => v) // eslint-disable-line no-unused-vars
    .map(([k, v]) => `${kebabCase(k)}: ${v}`)
    .join(';');

export const pipe = (...fns) => arg => fns.reduce((x, f) => f(x), arg);

export const toJpDay = date => moment(date).format('MM月DD日(ddd)');
