//1
alert(null || 2 || undefined); //2
//2
alert(alert(1) || 2 || alert(3)); // 1,2
//3
alert(1 && null && 2); // null
//4
alert(alert(1) && alert(2));// 1, undefined
//5
alert(null || (2 && 3) || 4);// 3\
//6
if(age>= 14&&age <=90)
//7
if (-1 || 0) alert( 'first' );// ok
if (-1 && 0) alert( 'second' );// no
if (null || -1 && 1) alert( 'third' );//ok
//8
let userName = prompt('Кто там?', '');

if (userName === 'Админ') {
  let pass = prompt('Пароль?', '');

  if (pass === 'Я главный') {
    alert('Здравствуйте!');
  } else if (pass === '' || pass === null) {
    alert('Отменено');
  } else {
    alert('Неверный пароль');
  }
} else if (userName === '' || userName === null) {
  alert('Отменено');
} else {
  alert('Я вас не знаю');
}