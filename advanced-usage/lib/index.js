import title from './title';
import isPlainObject from 'lodash/isPlainObject';

const a = 'a';
console.log('title', title);
console.log('a', a);
console.log('plainObject', isPlainObject(a));
export { a };