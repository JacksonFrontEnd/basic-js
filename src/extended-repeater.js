const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let resultArray = [];
  let tempMas = [];
  let bufStr='';
  if(options.addition === null) {
    options.addition = 'null';
  }
  if (options.separator === undefined) {
    options.separator = '+';
  }
  if (options.repeatTimes === undefined) {
    options.repeatTimes = 1;
  }
  if (options.additionRepeatTimes === undefined) {
    options.
      additionRepeatTimes = 1;
  }
  bufStr=String(options.addition)
  if (options.addition != undefined) {
    for (let j = 0; j < options.additionRepeatTimes; j++) {
      tempMas.push(bufStr);
    }
    str+=tempMas.join(options.additionSeparator)
  }
  bufStr=String(str)
  for (let i = 0; i < options.repeatTimes; i++) {
    resultArray.push(str);
  }
  return resultArray.join(options.separator)
};
