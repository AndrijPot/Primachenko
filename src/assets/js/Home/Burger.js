function setupHeader() {
    const pageName = document.title.toLowerCase().replace(/\s/g, '');
    const headerAElement = document.querySelector(`.burger_link_${pageName}`);
    headerAElement?.classList.add('burg');
    
  }
  document.addEventListener('DOMContentLoaded', setupHeader);

document.addEventListener('DOMContentLoaded', function () {
  const body = document.querySelector('body');
  const headerLogo = document.querySelector('.header__logo');

  const checkbox = document.querySelector('.checkbox');
  const menuItems = document.querySelector('.menu-items');

  const burgerItems = document.querySelectorAll('.burger-menu__item');

  const burgerFooter = document.querySelector('.burger__footer');

  checkbox.addEventListener('click', function () {
    this.classList.toggle('active');
    menuItems.classList.toggle('active');

    if (menuItems.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    if (checkbox.classList.contains('active')) {
        setTimeout(function () {
          headerLogo.style.zIndex = '4';
        }, 400);
      } else {
        setTimeout(function () {
          headerLogo.style.zIndex = '7';
        }, 400);
      }

    burgerItems.forEach((item) => {
      item.classList.toggle('active');
    });

   

    burgerFooter.classList.toggle('active');
   
  });
});

