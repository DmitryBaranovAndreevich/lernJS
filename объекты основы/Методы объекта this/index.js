//1
function makeUser() {
  return {
    name: 'John',
    ref: this,
  };
}

let user = makeUser();

alert(user.ref.name); // error
//2
let calculator = {
  read: function () {
    this.first = prompt('Введите первое значение:');
    this.second = prompt('Введите первое значение:');
  },

  sum: function () {
    return this.first + this.second;
  },

  mul: function () {
    return this.first * this.second;
  },
};
//3
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    alert(this.step);
    return this;
  },
};
