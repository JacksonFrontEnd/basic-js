const CustomError = require("../extensions/custom-error");

const chainMaker = {
  mas: [],
  getLength() {
    return this.mas.length
  },
  addLink(value) {
    let str = '( ' + String(value) + ' )'
    this.mas.push(str);
    return this
  },
  removeLink(position) {
    if (position < 1 ||!(Number.isInteger(position))||position>this.mas.length) {
      this.mas = []
      throw new Error('')
    }
    this.mas.splice(position-1, 1)
    return this
  },
  reverseChain() {
    this.mas = this.mas.reverse();
    return this
  },
  finishChain() {
    let arr = this.mas.join('~~');
    this.mas=[]
    return arr
  }
};

module.exports = chainMaker;
