const accItems = document.querySelectorAll('.nav__item');

accItems.forEach((item) => {
  item.addEventListener('click', () => {  
    if (item.classList.contains('show')) {
      item.classList.toggle('show')
    } else {
      accItems.forEach((item2 => {
        if (item2.classList.contains('show')) {
          item2.classList.remove('show')
        }
      }))

      item.classList.add('show')
    }

  })
})

const btn = document.querySelector('.nav__mobileBtn');
const hamIcon = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.close');
const menu = document.querySelector('.navContainer')

btn.addEventListener('click', () => {
  btn.classList.toggle('menuOpen')
  if (btn.classList.contains('menuOpen')) {
    hamIcon.classList.remove('show');
    closeIcon.classList.add('show');
    menu.classList.add('menuOpen');
  } else {
    hamIcon.classList.add('show');
    closeIcon.classList.remove('show');
    menu.classList.remove('menuOpen');
  }
})