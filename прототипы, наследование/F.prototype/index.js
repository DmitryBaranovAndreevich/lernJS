//1
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype = {};

alert( rabbit.eats ); // true


let rabbit1 = new Rabbit();

Rabbit.prototype.eats = false;

alert( rabbit.eats ); // false


let rabbit2 = new Rabbit();

delete rabbit.eats;

alert( rabbit.eats ); // true


let rabbit3 = new Rabbit();

delete Rabbit.prototype.eats;

alert( rabbit.eats ); // undefined