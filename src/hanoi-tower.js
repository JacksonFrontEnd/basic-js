const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(numDisc, speed ) {
 let turns=Math.pow(2,numDisc)-1,seconds=Math.floor(turns/(speed/3600));
 return {turns : turns, seconds : seconds};
};
