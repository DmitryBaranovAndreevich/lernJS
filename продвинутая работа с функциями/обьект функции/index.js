//1
function makeCounter() {
  function counter() {
    return counter.count++;
  }

  counter.set = function (value) {
    this.count = value;
  };

  counter.desrease = function () {
    return --this.count;
  };

  counter.count = 0;

  return counter;
}
//2
function sum(a) {
  let priv = a;

  function helper(b) {
    priv += b;
    return helper;
  }

  helper.toString = function () {
    return priv;
  };

  return helper;
}