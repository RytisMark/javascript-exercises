const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(a) {
  let sumOfArray = 0;
  a.map(item => sumOfArray += item);
  return sumOfArray;
};

const multiply = function(a) {
  let multOfArray = 1;
  a.map(item => multOfArray *= item);
  return multOfArray;
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(a) {
  if (a === 0 || a === 1) return 1;
	return a * factorial(a - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
