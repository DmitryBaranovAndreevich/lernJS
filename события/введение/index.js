//1
document.querySelector('button').addEventListener('click', () => {
  document.querySelector('#text').remove()
})
//2
document.querySelector('button').addEventListener('click', () => {this.style.display = none})
//3
//1, 3

//4
//просто добавляем или убираем класс при клике на родительский компонент