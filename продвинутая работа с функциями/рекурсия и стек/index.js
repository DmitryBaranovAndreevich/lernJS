//1
function sumTo(n) {
  let result = 0;
  let i = 0;
  while (i <= n) {
    result += i;
    i++;
  }
  return result;
}

function sumTo(n) {
  if (n === 0) return n;
  else {
    return n + sumTo(n - 1);
  }
}

function sumTo(n) {
  return (n * (n + 1)) / 2;
}

//2
function factorial(n) {
  if (n === 1) return n;
  else {
    return n * factorial(n - 1);
  }
}
//3
function fib(n) {
  if (n === 1 || n === 2) return 1;
  else {
    return fib(n - 1) + fib(n - 2);
  }
}
//4
function printList(list) {
  if (!list.next) return [list.value];
  else return [list.value, ...printList(list.next)];
}

function printList(list) {
  const result = [];
  const priv = [];
  priv.push(list);
  while (priv.length) {
    const el = priv.shift();
    result.push(el.value);
    if (el.next) priv.push(el.next);
  }
  return result;
}
//5
function printList(list) {
  if (!list.next) return [list.value];
  else return [...printList(list.next), list.value];
}

function printList(list) {
  const result = [];
  const priv = [];
  priv.push(list);
  while (priv.length) {
    const el = priv.shift();
    result.push(el.value);
    if (el.next) priv.push(el.next);
  }
  return result.reverse();
}