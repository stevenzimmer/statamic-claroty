import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';

const swiper = new Swiper('.carousel-swiper', {
  modules: [Navigation],
  speed: 300,
  spaceBetween: 20,
  loop: true,
  grabCursor: false,
  perMove:1,
  autoPlay: {
    delay: 3000
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  navigation: {
    enabled: true,
    nextEl: '.btn-next',
    prevEl: '.btn-prev',
  },
  centerSlides: true,
  pagination:{
    el: ".swiper-pagination",
    dynamicBullets: false,
    clickable:true
  },
  slidesPerView: 1
});