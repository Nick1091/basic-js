import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 export default function createDreamTeam(array) {
  if(!Array.isArray(array)) {
    return false;
  }
  let result = [];
  array.map((element) => {
    if (typeof element === "string") {
      let trimmedEl = element.trim().toUpperCase();
      result.push(trimmedEl[0]);
    }
  });
  return result.sort().join('');
}