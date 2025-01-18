const menu = document.querySelector('.mobile__menu');
const burger = document.querySelector('.header__burger');

burger.addEventListener('click', () => {
  menu.classList.toggle('active');
});

menu.addEventListener('click', () => {
    menu.classList.remove('active');
});