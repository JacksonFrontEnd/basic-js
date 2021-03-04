const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(array) {
 if(!Array.isArray(array)){
  return false;
 }
 if(array.length==0){
  return 'FAIL';
 }
let str='';
array.forEach(element => {
  if(typeof element=="string"){
element=element.trim();
str+=element[0];
}});;
return str.toUpperCase().split('').sort().join('');
};
