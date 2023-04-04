const mainHeader = document.querySelector('.header');
const burgerButton = document.querySelector('.header__burger');

burgerButton.addEventListener('click', function () {
  if (mainHeader.classList.contains('header--opened')) {
    mainHeader.classList.remove('header--opened');
    mainHeader.classList.add('header--closed');
  } else {
    mainHeader.classList.add('header--opened');
    mainHeader.classList.remove('header--closed');
  }
});

if (window.innerWidth <= 767) {
  mainHeader.classList.remove('header--opened');
  mainHeader.classList.add('header--closed');
}
