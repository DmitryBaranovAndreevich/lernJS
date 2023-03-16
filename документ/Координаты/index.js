//1
const priv = elem.getBoundingClientRect();

const a = [priv.left, privtop];
const b = [priv.right, priv.bottom];
const c = [priv.left + field.clientLeft, priv.top + field.clientTop];
let d = [
  priv.right - parseInt(getComputedStyle(field).borderRightWidth),
  priv.bottom - parseInt(getComputedStyle(field).borderBottomWidth),
];

//2
   function positionAt(anchor, position, elem) {
     let anchorPos = anchor.getBoundingClientRect();

     switch (position) {
       case 'top':
         elem.style.left = anchorPos.left + 'px';
         elem.style.top = anchorPos.top - elem.offsetHeight + 'px';
         break;

       case 'right':
         elem.style.left = anchorPos.left + anchor.offsetWidth + 'px';
         elem.style.top = anchorPos.top + 'px';
         bPos
       case 'bottom':
         elem.style.left = anchorPos.left + 'px';
         elem.style.top = anchorPos.top + anchor.offsetHeight + 'px';
         break;
     }
   }
   //3
     function show(anchor, position, html) {
       let note = document.createElement('div');
       note.className = 'note';
       note.innerHTML = html;
       document.body.append(note);

       positionAt(anchor, position, note);
     }

     //4
      function position(anchor, position, elem) {

      let anchorPos = getCoords(anchor);

      switch (position) {
        case "top-out":
          elem.style.left = anchorPos.left + "px";
          elem.style.top = anchorPos.top - elem.offsetHeight + "px";
          break;

        case "right-out":
          elem.style.left = anchorPos.left + anchor.offsetWidth + "px";
          elem.style.top = anchorPos.top + "px";
          break;

        case "bottom-out":
          elem.style.left = anchorPos.left + "px";
          elem.style.top = anchorPos.top + anchor.offsetHeight + "px";
          break;

        case "top-in":
          elem.style.left = anchorPos.left + "px";
          elem.style.top = anchorPos.top + "px";
          break;

        case "right-in":
          elem.style.width = '150px';
          elem.style.left = anchorPos.left + anchor.offsetWidth - elem.offsetWidth + "px";
          elem.style.top = anchorPos.top + "px";
          break;

        case "bottom-in":
          elem.style.left = anchorPos.left + "px";
          elem.style.top = anchorPos.top + anchor.offsetHeight - elem.offsetHeight + "px";
          break;
      }
    }