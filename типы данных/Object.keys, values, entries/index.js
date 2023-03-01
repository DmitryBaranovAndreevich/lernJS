//1
const salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};
function sumSalaries(obj) {
  let res = 0;
  for (let key in obj) {
    res += obj[key];
  }
  return res;
}

console.log(sumSalaries(salaries))
//2
function count(obj) {
  return Object.keys(obj).length
}

