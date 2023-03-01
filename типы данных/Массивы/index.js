//1
//->4

//2
const styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');
styles[Math.floor((styles.length - 1) / 2)] = 'Классика';
console.log(styles.shift());
styles.unshift('Рэп', 'Регги');
//3
//выведется массив arr

//4
function sumInput() {
  let numbers = [];

  while (true) {
    let a = prompt('Введите число', 0);
    if (a === '' || a === null || !isFinite(a)) break;

    numbers.push(+a);
  }

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

console.log(sumInput());
//5
function getMaxSubSum(arr) {
  let max = 0;
  let cur = 0;

  for (let item of arr) {
    cur += item;
    maxSum = Math.max(max, cur);
    if (cur < 0) cur = 0;
  }

  return max;
}