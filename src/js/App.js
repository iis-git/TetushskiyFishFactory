const hamburger = document.querySelector('.js-main-nav-button');
const mobile_menu = document.querySelector('.main-nav__list');
const menu_item = document.querySelectorAll('.main-nav__item');
const mainBody = document.querySelector('body');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
    mainBody.classList.toggle('blocked');
});

menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
        mainBody.classList.toggle('blocked');
    });
});