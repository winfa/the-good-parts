import { add, identifyf, addf, liftf, sub, mul } from './exercise-1.js';

function twice(binary) {
  return function(num) {
    return binary(num, num);
  };
}

const doubl = twice(add);
const square = twice(mul);

function reverse(binary) {
  return function(num1, num2) {
    return binary(num2, num1);
  };
}

function composeu(unary1, unary2) {
  return function(num) {
    return unary2(unary1(num));
  };
}

function composeb(binary1, binary2) {
  return function(num1, num2, num3) {
    return binary2(binary1(num1, num2), num3);
  };
}

function limit(binary, count) {
  return function(num1, num2) {
    if (count <= 0) {
      return;
    }
    count = count - 1;
    return binary(num1, num2);
  };
}

export { twice, reverse, composeu, composeb, doubl, square, limit };
