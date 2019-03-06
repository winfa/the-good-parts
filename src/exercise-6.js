import { from, to, fromTo, element } from './exercise-4.js';

function gensymf(symbal) {
  let number = 1;
  return function() {
    number = number + 1;
    return symbal + number;
  };
}

function gensymff(unary, seed) {
  return function(symbal) {
    let number = seed;
    return function() {
      number = unary(number);
      return symbal + number;
    };
  };
}

function fabonaccif1(seed1, seed2) {
  let count = 0;
  let fabNum = seed1;
  return function() {
    if (count === 0) {
      count = count + 1;
      return seed1;
    }
    if (count === 1) {
      count = count + 1;
      return seed2;
    }

    count = count + 1;
    fabNum = seed1 + seed2;
    seed1 = seed2;
    seed2 = fabNum;
    return fabNum;
  };
}

function fabonaccif(seed1, seed2) {
  return function() {
    var next = seed1;
    seed1 = seed2;
    seed2 = seed1 + next;
    return next;
  };
}

export { gensymff, fabonaccif };
