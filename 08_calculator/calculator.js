const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numArray) {
  let sum = 0;
	numArray.forEach((value) => {
    sum += value;
  })
  return sum;
};

const multiply = function(numArray) {
  let num = numArray[0] * numArray[1];
  numArray.forEach((value, index) => {
    if (index === 0 || index === 1) {

    }
    else {
      num *= value;
    }
  })

  return num;
};

const power = function(num1, num2) {
  return Math.pow(num1, num2);
};

const factorial = function(num1) {
  let result = 1;
  for (i = num1; i > 0; i--) {
    result *= i;
  }
  return result;
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
