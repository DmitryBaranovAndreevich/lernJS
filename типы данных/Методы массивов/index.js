//1
function camelize(str) {
  return str
    .split('-')
    .map((el, index) => {
      let res;
      if (index === 0) res = el;
      else {
        res = el[0].toUpperCase() + el.slice(1);
      }
      return res;
    })
    .join('');
}
//2
function filterRange(arr, a, b) {
  return arr.filter((el) => el >= a && el <= b);
}
//3
function filterRangeInPlace(arr, a, b) {
  arr.forEach((el, index) => {
    if (el < a || el > b) {
      arr.splice(index, 1);
    }
  });
}
//4
let arr = [5, 2, 1, -10, 8];
arr.sort((a,b) => a - b)

//5
function copySorted(arr) {
  const res = [...arr];
  res.sort((a,b) => b - a)
  return res
}
//6
function Calculator() {
  this.methods = {
    '-': (a, b) => a - b,
    '+': (a, b) => a + b,
  };

  this.calculate = function (str) {
    let priv = str.split(' '),
      a = +priv[0],
      b = priv[1],
      c = +priv[2];

    if (!this.methods[b] || isNaN(a) || isNaN(c)) {
      return NaN;
    }

    return this.methods[b](a, c);
  };

  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}
//7
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(el => el.name)
//8
let vasya1 = { name: 'Вася', surname: 'Пупкин', id: 1 };
let petya1 = { name: 'Петя', surname: 'Иванов', id: 2 };
let masha1 = { name: 'Маша', surname: 'Петрова', id: 3 };

let users1 = [vasya1, petya1, masha1];

let usersMapped =users1.map(el => {
  return {
    fullname: el.name + el.surname,
    id: el.id
  }
})
//9
let vasya2 = { name: 'Вася', age: 25 };
let petya2 = { name: 'Петя', age: 30 };
let masha2 = { name: 'Маша', age: 28 };

let arr2 = [vasya2, petya2, masha2];

arr.sort((a,b) => a.age - b.age)

sortByAge(arr);
//10
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
//11
function getAverageAge(users) {
  return users.reduce((priv,el) => priv + el.age,0)/users.length
}
//12
function unique(arr) {
  return [...new Set(arr)]
}

//13
function groupById(users) {
  return users.reduce((priv, user) => {
    return { ...priv, [user.id]: user };
  }, {});
}
//14

