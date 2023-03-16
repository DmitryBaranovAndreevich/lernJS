//1
for(let li of document.querySelectorAll('li')) {
  console.log(li.textContent)
}

//2
<html>
  <body>
    <script>alert(document.body.lastChild.nodeType);</script>
  </body>
</html>;
// вывод: 1

//3

  let body = document.body;

  body.innerHTML = "<!--" + body.tagName + "-->";

  alert( body.firstChild.data ); // BODY

//4

//HTMLdocument
// HTMLDocument -> Document -> Node
//  наследуется от Node