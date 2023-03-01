//1
const a = +prompt("First:")
const b = +prompt('Second:')
console.group(a + b);
//2
console.log((6.35*10).toFixed(1))
//3
function readNumber() {
  const a = prompt('First:');
  if (a && isFinite(a)) return a;
  return readNumber();
};
//4
// i никогда не будет равным 10
//5
function random(min, max) {
  return min + Math.random() * (max - min);
}
//6
function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}