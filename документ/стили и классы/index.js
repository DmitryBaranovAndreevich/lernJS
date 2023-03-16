//1
function showNotification({ top = 0, right = 0, className, html }) {
  const notice = document.createElement('div');
  notice.className = 'notice';
  if (className) {
    notice.classList.add(className);
  }

  notice.style.top = top + 'px';
  notice.style.right = right + 'px';

  notice.innerHTML = html;
  document.body.append(notice);

  setTimeout(() => notice.remove(), 1500);
}

//2
