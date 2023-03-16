//1
let scrollBottom = elem.scrollHeight - elem.scrollTop - elem.clientHeight;
//2
document.body.innerHTML = `<div style="overflow-y:scroll;width:50px;height:50px"></div>`;
const div = document.querySelector('div');
let scroll = div.offsetWidth - div.clientWidth;
console.log(scroll);
document.body.innerHTML = '';

//3
ball.style.left =
  Math.round(field.clientWidth / 2 - ball.offsetWidth / 2) + 'px';
ball.style.top =
  Math.round(field.clientHeight / 2 - ball.offsetHeight / 2) + 'px';
//4
//getComputedStyle(elem).widt - возвращает фактическое css значение свойства width
//elem.clientWidth - возвращает имменно числовое значение