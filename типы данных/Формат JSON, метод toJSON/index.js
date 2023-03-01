//1
let user = {
  name: 'Василий Иванович',
  age: 35,
};

const priv = JSON.parse(JSON.stringify(user));
//2
const room = {
  number: 23,
};

const meetup = {
  title: 'Совещание',
  occupiedBy: [{ name: 'Иванов' }, { name: 'Петров' }],
  place: room,
};

console.log(
  JSON.stringify(meetup, function replacer(key, value) {
    return key && value == meetup ? undefined : value;
  })
);
