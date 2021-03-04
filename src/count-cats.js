module.exports = function countCats(array) {
  return array.flat().filter(item => item === "^^").length;
};


 