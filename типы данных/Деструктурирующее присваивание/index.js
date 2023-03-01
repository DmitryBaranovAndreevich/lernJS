//1
let user = {
  name: 'John',
  years: 30,
};

const { name, years: age, isAdmin = false} = user;
//2
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function topSalary(salaries) {
  const max = Math.max(...[...Object.values(salaries)]);
  return [...Object.keys(salaries)].find((el) => salaries[el] === max);
}
//3
