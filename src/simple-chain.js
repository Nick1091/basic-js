import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  chainString: [],
  getLength() {
    return this.chainString.length;
  },
  addLink( value ) {
    if (value === "") {
    this.chainString.push("( )~~");
    } else this.chainString.push(`( ${value} )~~`);
    return this;
  },
  removeLink( position ) {
      if ( (isNaN (position) ) || (typeof this.chainString[position - 1] === "undefined") ||  (position !== Math.floor(position) ) ){
      this.chainString = [];
      throw new Error("You can't remove incorrect link!");
    } 
      this.chainString.splice(position - 1, 1);
      return this;
  },
  reverseChain() {
    this.chainString = this.chainString.reverse()
    return this;
  },
  finishChain() {
    let newChainString = this.chainString.join('').slice(0, -2);
    this.chainString = [];
    return newChainString;
  }
};
