const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(str) {
  if(typeof str != "string" ||Array.isArray(str)){
      return false;
  }
  
  let num = parseFloat(str);
  if(isNaN(num)){
    return false;
  }
  if(num<=0||num>15){ 
      return false;
    }
    return Math.ceil((Math.log(MODERN_ACTIVITY/num))/(0.693/HALF_LIFE_PERIOD))
};

