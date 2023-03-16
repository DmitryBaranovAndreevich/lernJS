//1
function f() {
  alert(this); // null
}

let user = {
  g: f.bind(null),
};

user.g();
//2
function f() {
  alert(this.name);
}

f = f.bind({ name: 'Вася' }).bind({ name: 'Петя' });

f(); //повторный bind не сработает

function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user1 = {
  name: 'Вася',

  loginOk() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },

};

askPassword(user1.loginOk.bind(user1), user1.loginFail.bind(user1));

//3
function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user2 = {
  name: 'John',

  login(result) {
    alert( this.name + (result ? ' logged in' : ' failed to log in') );
  }
};

askPassword(user.login.bind(user, true), user.login.bind(user, false)); // ?