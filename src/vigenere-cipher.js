const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(mode = true) {
    this.mode = mode;
  }
  encrypt(str,key) {
    let j=0,result='';
    key = key.toUpperCase();
    str = str.toUpperCase();
    for(let i=0;i<str.length;i++){
    if(str.charCodeAt(i) > 90 || str.charCodeAt(i) < 65){
    result+=str[i];
    j--
    }
    else{
    if((str.charCodeAt(i) + key.charCodeAt(j) - 65) > 90){
      result+=String.fromCharCode((str.charCodeAt(i)-26) + (key.charCodeAt(j) - 65))
    }
    else{
      result+=String.fromCharCode(str.charCodeAt(i) + (key.charCodeAt(j) - 65))
    }
    }
    j++
    if(j===key.length){
      j=0
    }
    }
    return (this.mode) ? result: result.split('').reverse().join('');
  }    
  decrypt(str,key) {
    let j=0,result='';
    key = key.toUpperCase();
    str = str.toUpperCase();
    for(let i=0;i<str.length;i++){
    if(str.charCodeAt(i) > 90 || str.charCodeAt(i) < 65){
    result+=str[i];
    j--
    }
    else{
    if((str.charCodeAt(i) - (key.charCodeAt(j) - 65)) > 90){
      result+=String.fromCharCode((str.charCodeAt(i)-26) - (key.charCodeAt(j) - 65))
    }
    if((str.charCodeAt(i) - (key.charCodeAt(j) - 65)) <65){
      result+=String.fromCharCode((str.charCodeAt(i)+26) - (key.charCodeAt(j) - 65))
    }
    else{
      result+=String.fromCharCode(str.charCodeAt(i) - (key.charCodeAt(j) - 65))
    }
    }
    j++
    if(j===key.length){
      j=0
    }
    }
    return (this.mode) ? result: result.split('').reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;


/*function encrypt1(str,key) {
  let j=0,result='';
  key = key.toUpperCase();
	str = str.toUpperCase();
  for(let i=0;i<str.length;i++){
  if(str.charCodeAt(i) > 90 || str.charCodeAt(i) < 65){
  result+=str[i];
  j--
  }
  else{
  if((str.charCodeAt(i) + key.charCodeAt(j) - 65) > 90){
    result+=String.fromCharCode((str.charCodeAt(i)-26) + (key.charCodeAt(j) - 65))
  }
  else{
    result+=String.fromCharCode(str.charCodeAt(i) + (key.charCodeAt(j) - 65))
  }
  }
  j++
  if(j===key.length){
    j=0
  }
  }
  return result.toUpperCase();
}    

console.log(encrypt1('attack at dawn!', 'alphonse'))*/