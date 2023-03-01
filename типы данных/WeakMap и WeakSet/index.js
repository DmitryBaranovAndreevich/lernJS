//1
let messages = [
  { text: 'Hello', from: 'John' },
  { text: 'How goes?', from: 'John' },
  { text: 'See you soon', from: 'Alice' },
];

let read= new WeakSet();
read.add(messages[0]);
read.add(messages[1]);
read.add(messages[0]);
console.log('Read message 0: ' + read.has(messages[0])); // true
messages.shift();
//2

let read1 = new WeakMap();

readMap.set(messages[0], Date.now());