import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */

export default function deleteDigit(n) {
  let arr = String(n).split('');
  let min = Math.min(...arr);
  let ind = arr.indexOf(String(min));
  arr.splice(ind, 1);
  return Number(arr.join('')); 
}