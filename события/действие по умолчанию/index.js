//1
//добвать event.preventDefault() в обработчик клика

//2
  thumbs.addEventListener('click', (e) =>  {
    let link = e.target.closest('a');

    if (!link) return;
    show(link.href, link.title);
    e.preventDefault();
  })

  function show(href, title) {
    largeImg.src = href;
    largeImg.alt = title;
  }