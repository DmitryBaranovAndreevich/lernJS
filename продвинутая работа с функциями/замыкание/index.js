//1
function makeCounter() {
  let count = 0;

  return function () {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

alert(counter()); // 0
alert(counter()); // 1

alert(counter2()); // 0
alert(counter2()); // 1
//2
function Counter() {
  let count = 0;

  this.up = function() {
    return ++count;
  };
  this.down = function() {
    return --count;
  };
}

let counter1 = new Counter();

alert( counter1.up() ); // 1
alert( counter1.up() ); // 2
alert( counter1.down() ); // 1
//3
let phrase = 'Hello';

if (true) {
  let user = 'John';

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi(); // HEllo, John
//4
function sum(a) {
  return function (b) {
    return a + b;
  };
}
//5
function inBetween(a, b) {
  return function (el) {
    if (el <= b && el >= a) return true;
    return false;
  };
}

function inArray(arr) {
  return function (el) {
    if (arr.includes(el)) return true;
    return false;
  };
}
//6
function byField(name) {
  return function (a, b) {
    a.name - b.name;
  };
}
//7
function makeArmy() {
  let shooters = [];

  for (let i = 0; i < 10; i++) {
    let shooter = function () {
      // функция shooter
      alert(i); // должна выводить порядковый номер
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();