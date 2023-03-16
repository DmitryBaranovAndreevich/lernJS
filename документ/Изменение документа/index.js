//1
// ответ : 1 и 3


//2
 function clear(elem) {
  elem.innerHTML = '';
 }

 //3
// в теге table не может быть текста

//4

const ul = document.createElement('ul');
document.body.append(ul)
let flag = true
while(flag) {
  const data = prompt("Введите что-то",'')

  if(!data) flag = false

  if(data) {
    const li = document.createElement('li');
    li.textContent = data
    ul.append(li)
  }
}