import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let array = str.split('');
  let count = 0;
  let arr = [];
  for(let i = 0; i < array.length; i++){
    if ( i === 0) {
      count = 1;
      continue;
    };
    if (array[i] === array[i - 1]) {
      count++;
    };
    if(array[i] !== array[i-1]) {
      if(count !== 1){
        arr.push(count, array[i-1]);
      }
      else {
        arr.push(array[i-1])
      }
      count = 1;
    };
    if( i === array.length-1){
      if(array[i] === array[i-1]) {
        arr.push(count, array[i]);
      }
      else arr.push(array[i]);
    };
  }
  return arr.join('');
}