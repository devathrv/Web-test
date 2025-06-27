const hamburger = document.getElementById('hamburger');
const overlayMenu = document.getElementById('overlayMenu');

hamburger.addEventListener('click', () => {
  if (overlayMenu.style.left === '0%') {
    overlayMenu.style.left = '-100%';
    hamburger.innerHTML = '&#9776;';
  } else {
    overlayMenu.style.left = '0%';
    hamburger.innerHTML = '&times;';
  }
});
  
