//1
Function.prototype.defer = function (timer) {
  setTimeout(this, timer);
};
//2

Function.prototype.defer = function (timer) {
  return (...args) => {
    setTimeout(() => this(...args), timer);
  };
};