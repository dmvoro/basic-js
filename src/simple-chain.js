const chainMaker = {
  chainArray: [],

  getLength() {
    return this.chainArray.length;
  },

  addLink(value) {
    typeof(value) === 'undefined' ? this.chainArray.push(`( )`) : this.chainArray.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    if (position > 0 && position <= this.chainArray.length) {
      this.chainArray.splice(position - 1, 1);
      return this;
    } else {
      this.chainArray = [];
      throw new Error();
    }
  },

  reverseChain() {
    this.chainArray.reverse();
    return this;
  },

  finishChain() {
    let result = this.chainArray.join('~~');
    this.chainArray = [];
    return result;
  }
};

module.exports = chainMaker;
