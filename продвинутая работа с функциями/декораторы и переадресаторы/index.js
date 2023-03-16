function work(a, b) {
  alert(a + b); // произвольная функция или метод
}

function spy(f) {
  let res = [];
  return function f2(...args) {
    res = [...res, args];
    f2.calls = res;
    return f(...args);
  };
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  alert('call:' + args.join()); // "call:1,2", "call:4,5"
}
//2
function f(x) {
  alert(x);
}

function delay(f, time) {
  return function(...args) {
    return setTimeout(() => f(...args), time)
  }
}

// создаём обёртки
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // показывает "test" после 1000 мс
f1500("test"); // показывает "test" после 1500 мс

//3
function debounce(f, ms) {
  let flag = false;

  return function () {
    if (flag) return;

    f.apply(this, arguments);

    flag = true;

    setTimeout(() => (flag = false), ms);
  };
}