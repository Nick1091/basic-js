import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
let arr1 = s1.split('');
let arr2 = s2.split('');
let count = 0;
for (let i = 0; i < arr1.length; i++) {
    let item = arr1[i];
    let posit = arr2.indexOf(item);
    if (posit !== -1) {
        count ++;
        arr2.splice(posit, 1);
    }
  }
return count;
}