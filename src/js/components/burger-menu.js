

const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__nav');
const items = document.querySelectorAll('.nav__item');
const wrap = document?.querySelector('.burger-wrap');
const body = document?.querySelector('body');


burger.addEventListener('click', () => {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('header__nav--active');

  wrap?.classList.toggle('burger-wrap--close');


})
