//1
//Оба варанта одинаковые
//2
function checkAge(age) {
  return age > 18 ? true : confirm('Родители разрешили?')
}
//3
function min(a,b) {
  return a <= b ? a : b
}
//4
function pow(x,n) {
  if(n === 1) return x
  else return x*pow(x, n -1)
}