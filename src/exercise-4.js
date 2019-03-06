import { add, identifyf, addf, liftf, sub, mul } from './exercise-1.js';

function from(start) {
  return function() {
    var next = start;
    start = start + 1;
    return next;
  };
}

function to(generate, limitNumber) {
  return function() {
    let result = generate();
    if (result > limitNumber) {
      return undefined;
    }
    return result;
  };
}

function fromTo(start, end) {
  return to(from(start), end);
}

function element(array, gen) {
  if (gen === undefined) {
    return element(array, fromTo(0, array.length));
  }

  return function() {
    let index = gen();
    if (index !== undefined) {
      return array[index];
    }
    return undefined;
  };
}

export { from, to, fromTo, element };
