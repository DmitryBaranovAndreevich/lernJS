//1
console.log(1)
//2
let i = 0;
while (++i < 5) alert(i); //1,2,3,4

let j = 0;
while (j++ < 5) alert(j);//1,2,3,4,5
//3
for (let i = 0; i < 5; i++) alert( i ) // 0,1,2,3,4
for (let i = 0; i < 5; ++i) alert(i); // 0,1,2,3,4
//4
let = 0;
while(i < 3) {
  alert(`number ${i}!`);
  i++;
}
//5
let num;

do {
  num = prompt('Введите число больше 100?', 0);
} while (num <= 100 && num);
//6
let n = 10;

nextPrime: for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime;
  }
  alert(i);
}
