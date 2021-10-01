import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight( arr ) {
  let array = [];
  let ar = [];
  for (let i=0; i < arr.length; i++){
    if(arr[i] !==-1){
      array.push(arr[i]);
    }
  }
  let k = 0;
  array.sort((a, b) => a - b);
  for (let j=0; j < arr.length; j++){
    if(arr[j]===-1){
      ar.push(arr[j])
    }
    if(arr[j]!==-1){
      ar.push(array[k])
      k++
    }
  }
  return ar;  
}
