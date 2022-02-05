let click = 0
const nav = document.querySelector('header nav')
function toggleBar() {
  if (click == 0) {
    nav.style.top = 3 + 'em'
    click = 1
  } else {
    nav.style.top = -200 + 'px'
    click = 0
  }
}
