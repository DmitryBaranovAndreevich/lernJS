//1
let obj = {};

function A() {
  return obj;
}
function B() {
  return obj;
}

alert(new A() == new B());
//2
function Calculator() {
  this.first;
  this.second;
}

Calculator.prototype.read = function() {
  this.first = +prompt("Введите первое значение:");
  this.first = +prompt('Введите второе значение:');
}

Calculator.prototype.sum = function () {
  return this.first + this.second
};

Calculator.prototype.mul = function () {
return this.first * this.second;
};
//3
function Accumulator(startingValue); {
  this.value = startingValue;;
  this.read = () => {
    this.value += +prompt("Введите число:")
  }
}