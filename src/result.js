import { add, identifyf, addf, liftf, sub, mul } from './exercise-1.js';
import { curry, inc } from './exercise-2.js';
import {
  twice,
  reverse,
  composeu,
  doubl,
  square,
  limit
} from './exercise-3.js';
import { from, to, fromTo, element } from './exercise-4.js';
import { collect, filter, concat } from './exercise-5.js';
import { gensymff, fabonaccif } from './exercise-6.js';

function getResult() {
  let fab = fabonaccif(0, 1);
  let result = fab();
  result = fab();
  result = fab();
  result = fab();

  return result;
}

export { getResult };
