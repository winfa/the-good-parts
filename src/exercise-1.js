function identify(num) {
  return num;
}

function add(num1, num2) {
  return num1 + num2;
}

function sub(num1, num2) {
  return num1 - num2;
}

function mul(num1, num2) {
  return num1 * num1;
}

function identifyf(num) {
  return function() {
    return num;
  };
}

function addf(num1) {
  return function(num2) {
    return num1 + num2;
  };
}

function liftf(binary) {
  return function(num1) {
    return function(num2) {
      return binary(num1, num2);
    };
  };
}

export { identify, add, sub, mul, identifyf, addf, liftf };
