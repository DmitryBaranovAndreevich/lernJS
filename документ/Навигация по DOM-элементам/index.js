//1
<html>
  <body>
    <div>Пользователи:</div>
    <ul>
      <li>Джон</li>
      <li>Пит</li>
    </ul>
  </body>
</html>;

const body = document.body;
const div = body.firstElementChild;
const ul = div.lastElementChild;
const li = ul.lastElementChild;

//2
//да
//нет

//3
 let table = document.body.firstElementChild;

 for (let i = 0; i < table.rows.length; i++) {
   let row = table.rows[i];
   row.cells[i].style.backgroundColor = 'red';
 }