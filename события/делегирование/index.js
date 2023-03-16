//1
document.querySelector('#container').addEventListener('click', (e) => {
  const elem = e.target;
  if(elem.classList.contains('remove-button')) {
    elem.closest('pane').remove()
  }
})
//2
 for (let li of tree.querySelectorAll('li')) {
   let span = document.createElement('span');
   li.prepend(span);
   span.append(span.nextSibling); // поместить текстовый узел внутрь элемента <span>
 }

 //  ловим клики на всём дереве
 tree.addEvrntLidtener('click',(e) => {
   if (e.target.tagName != 'SPAN') {
     return;
   }

   let container = e.closest('ul');
   container.hidden = !childrenContainer.hidden;
 })
 //3
   grid.addEventListener('click', (e) => {
     if (e.target.tagName != 'TH') return;

     const th = e.target;
     sort(th.cellIndex, th.dataset.type);
   })

   function sort(colNum, type) {
     let tbody = grid.querySelector('tbody');

     let rowsArray = Array.from(tbody.rows);
     let compare;

     switch (type) {
       case 'number':
         compare = function (rowA, rowB) {
           return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
         };
         break;
       case 'string':
         compare = function (rowA, rowB) {
           return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML
             ? 1
             : -1;
         };
         break;
     }
     rowsArray.sort(compare);

     tbody.append(...rowsArray);
   }
   //4
   