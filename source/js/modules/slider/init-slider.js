import Swiper from '../../vendor/swiper';
const coachesSwiper = document.querySelector('.coaches__swiper');
const coachesButtonPrev = document.querySelector('.coaches__button--prev');
const coachesButtonNext = document.querySelector('.coaches__button--next');

const getSlider = () => {
  if (coachesSwiper) {
    // eslint-disable-next-line
    const swiper = new Swiper(coachesSwiper, {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 4,
      spaceBetween: 40,
      speed: 1000,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      },

      navigation: {
        nextEl: coachesButtonNext,
        prevEl: coachesButtonPrev,
      },
    });
  }
};

export {getSlider};
