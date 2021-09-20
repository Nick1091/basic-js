import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!'
  } else if ((typeof(date) !== 'object') || (Object.keys(date).length !== 0) || (Object.prototype.toString.call(date) !== '[object Date]') ) {
    throw Error("Invalid date!");
  } else if (date)  {
    let dateWeth = date.getMonth()
    if (dateWeth < 2) {
    return 'winter';
    } else if (dateWeth < 5) {
      return 'spring';    
    } else if (dateWeth < 8) {
      return 'summer';
    } else if (dateWeth < 11) {
      return 'autumn'; 
    } else return 'winter';
  }
}
