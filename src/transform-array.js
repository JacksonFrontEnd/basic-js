const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
 if (!Array.isArray(arr)) {
    throw Error('');
  }

  let transformArray = arr.slice(0);

  for (let i = 0; i < transformArray.length; i++) {
    if (transformArray[i] === '--discard-prev') {
      if (i == 0) {
        transformArray[i]='del'
      }
      else {
        transformArray[i]='del'
        transformArray[i-1]='del'
      }
    }else
    if (transformArray[i] === '--discard-next' ) {
      if (i == transformArray.length - 1 ) {
        transformArray[i]='del'
      }
      else {
        transformArray[i]='del'
        transformArray[i+1]='del'
      }
    }else
    if (transformArray[i] === '--double-prev' ) {
      if (i == 0 ) {
        transformArray[i]='del'
      }
      else{
      transformArray[i] = transformArray[i-1];
      }
    }else
    if (transformArray[i] === '--double-next') {
      if (i == transformArray.length - 1) {
        transformArray[i]='del'
      }
      else{
        transformArray[i] = arr[i + 1];
      }
    }
    else{}
  }
  return transformArray.filter(value=>value!='del');
};
