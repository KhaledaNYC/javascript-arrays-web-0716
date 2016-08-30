var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];

var addElementToBeginningOfArray = function(array, element){
   var newArr = array;
   newArr.unshift(element);
   return newArr;
};

var destructivelyAddElementToBeginningOfArray = function(array, element) {
  array.unshift(element);
  return array;
};

var addElementToEndOfArray = function(array,element) {
  var newArr = array;
  newArr.push(element);
  return newArr;
};

var destructivelyAddElementToEndOfArray = function(array, element) {
  array.push(element);
  return array;
};

var accessElementInArray = function(array, index) {
  return array[index];
};

var removeElementFromBeginningOfArray = function(array) {
  array.shift();
  return array;
};

var removeElementFromEndOfArray = function(array) {
  array.pop();
  return array;
};
