const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let resultArray = [];
  let tempMas = [];
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
  if (options.addition != undefined) {
    for (let j = 0; j < options.additionRepeatTimes; j++) {
      tempMas.push(options.addition);
    }
    tempMas.join(options.additionSeparator)
  }

  for (let i = 0; i < options.repeatTimes; i++) {
    resultArray.push(str);
    if (options.addition != undefined) {
      if (i > 1 && i < options.repeatTimes - 1) {
        resultArray.push(tempMas);
      }
    }
  }
  return resultArray.join(options.separator)
};
