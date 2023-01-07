import Swiper from 'swiper/swiper-bundle';

const swiper = new Swiper('.swiper', {
  loop: false,
  slidesPerView: 1,
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
  autoplay: {
    delay: 10000,
    pausedOnMouseEnter: true,
  },
});
