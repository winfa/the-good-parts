function collect(gen, array) {
  return function() {
    const num = gen();
    if (num === undefined) {
      return;
    }
    array.push(num);
  };
}

function filter(gen, predicate) {
  return function() {
    let num = gen();
    if (num === undefined) {
      return undefined;
    }
    if (predicate(num)) {
      return num;
    }
    return filter(gen, predicate)();
  };
}

function concat(gen1, gen2) {
  return function() {
    let num = gen1();
    if (num !== undefined) {
      return num;
    }
    return gen2();
  };
}

export { collect, filter, concat };
