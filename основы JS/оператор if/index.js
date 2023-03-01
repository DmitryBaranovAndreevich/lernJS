//1
if ('0') {
  alert('Привет'); // отработает
}

//2
let nameJS = prompt('Какое «официальное» название JavaScript?');
if (nameJS === 'ECMAScript') alert('Верно!');
else {
  alert('Не знаете? ECMAScript!');
}

//3
let num = promt('Введите число:');
if (num > 0) alert('1');
else if (num < 0) alert('-1');
else alert('0');

//4
let result = a + b < 4 ? 'Мало' : 'Много';

//5
let message =
  login == 'Сотрудник'
    ? 'Привет'
    : login == 'Директор'
    ? 'Здравствуйте'
    : login == ''
    ? 'Нет логина'
    : '';
