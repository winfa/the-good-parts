import { add, addf, liftf } from './exercise-1.js';

function curry(binary, num1) {
  return function(num2) {
    return binary(num1, num2);
  };
}

let inc = addf(1);
inc = curry(add, 1);
inc = liftf(add)(1);

export { curry, inc };
