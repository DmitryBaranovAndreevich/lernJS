//1
let date = new Date(2012, 1, 20, 3, 12);
alert(date);
//2
function getWeekDay(date) {
  const day = date.getDay();
  switch (day) {
    case 0:
      return 'ВС';

    case 1:
      return 'ПН';

    case 2:
      return 'ВТ';

    case 3:
      return 'СР';

    case 4:
      return 'ЧТ';

    case 5:
      return 'ПТ';

    case 6:
      return 'СБ';
  }
}

//3
function getLocalDay(date) {
  const day = date.getDay();
  return day === 0 ? 7 : day;
}
//4
function getDateAgo(date, days) {
  date.setDate(date.getDate() - days);
  return date.getDate();
}
//5
function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}
//6
function getSecondsToday() {
  let date = new Date();
  let today = new Date(date.getFullYear(), date.getMonth(), date.getDate());

  let diff = date - today;
  return Math.round(diff / 1000);
}
//7
function getSecondsToTomorrow() {
  let date = new Date();

  let tomorrow = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() + 1
  );

  let diff = tomorrow - date;
  return Math.round(diff / 1000);
}
//8
function formatDate(date) {
  let diff = new Date() - date;

  if (diff < 1000) {
    return 'прямо сейчас';
  }

  let sec = Math.floor(diff / 1000);

  if (sec < 60) {
    return sec + ' сек. назад';
  }

  let min = Math.floor(diff / 60000);
  if (min < 60) {
    return min + ' мин. назад';
  }

  let a = date;
  da= [
    '0' + a.getDate(),
    '0' + (a.getMonth() + 1),
    '' + a.getFullYear(),
    '0' + a.getHours(),
    '0' + a.getMinutes(),
  ].map((component) => component.slice(-2));
  return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}