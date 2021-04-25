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