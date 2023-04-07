const mainNav = document.querySelector('.header__nav');
const burgerButton = document.querySelector('.header__burger');

burgerButton.addEventListener('click', function () {
  if (mainNav.classList.contains('header__nav--opened')) {
    mainNav.classList.remove('header__nav--opened');
    mainNav.classList.add('header__nav--closed');
  } else {
    mainNav.classList.add('header__nav--opened');
    mainNav.classList.remove('header__nav--closed');
  }
});

if (window.innerWidth <= 767) {
  mainNav.classList.remove('header__nav--opened');
  mainNav.classList.add('header__nav--closed');
}