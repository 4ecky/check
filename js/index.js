//! ==================burger
let menuIcon = document.querySelector('.header__navigation');
let burgerIcon = document.querySelector('.header__burger');
let menuBody = document.querySelector('.header__menu');

menuIcon.addEventListener('click', function () {
  menuIcon.classList.toggle('active');
  burgerIcon.classList.toggle('active');
  menuBody.classList.toggle('active');
  document.body.classList.toggle('lock');
})
// !===== при нажатии на ссылку, меню закрывается
let navLink = document.querySelectorAll('.header__menu-link');
navLink.forEach(n => n.addEventListener('click', closeMenuForLink));

function closeMenuForLink() {
  menuIcon.classList.remove('active');
  burgerIcon.classList.remove('active');
  menuBody.classList.remove('active');
  document.body.classList.remove('lock');
};
// !====================== прокрутка при клике

//! ================period__pop-up
let openPeriod = document.querySelector('.check-list__interaction-link');
let closePeriod = document.querySelector('.check-list__months-close');
let listPeriod = document.querySelector('.check-list__months-list');

openPeriod.addEventListener('click', function () {
  listPeriod.classList.add('visible');
  document.body.classList.add('lock');
});
closePeriod.addEventListener('click', function () {
  listPeriod.classList.remove('visible');
  document.body.classList.remove('lock');
});

//! =================tabs
let tabsButtons = document.querySelectorAll('.check-list__months-link');
let monthsItems = document.querySelectorAll('.months__month');

tabsButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    let currentButton = button;
    let monthId = currentButton.getAttribute('data-tab');
    let currentMonth = document.querySelector(monthId);
    //?=== проходимся по всем кнопкам в периоде
    tabsButtons.forEach(function (item) {
      item.classList.remove('active')
      listPeriod.classList.remove('visible');
      document.body.classList.remove('lock');
    });
    //?=== проходимся по всем месяцам
    monthsItems.forEach(function (month) {
      month.classList.remove('active')
    });
    currentButton.classList.add('active');
    currentMonth.classList.add('active');
  });
});
//!=================== swiper-pedagogical
const swiperPedagogical = new Swiper('.pedagogical-activity__swiper', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 15,
  navigation: {
    nextEl: '.pedagogical-activity__event-next',
    prevEl: '.pedagogical-activity__event-prev',
  },
});
//!================== swiper-pedagogical__gallery
const swiperPhoto = new Swiper('.pedagogical-activity__photo-swiper', {
  direction: 'vertical',
  loop: true,
  spaceBetween: 5,
  autoplay: {
    delay: 2000,
    stopOnLastSlide: true,
    disableOnInteraction: false,
  },
  speed: 1500,
});