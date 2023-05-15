import Swiper from '../../vendor/swiper';
const reviewsSwiper = document.querySelector('.reviews__swiper');
const reviewsButtonPrev = document.querySelector('.reviews__button--prev');
const reviewsButtonNext = document.querySelector('.reviews__button--next');

const getCarousel = () => {
  if (reviewsSwiper) {
    // eslint-disable-next-line
    const swiper = new Swiper(reviewsSwiper, {
      direction: 'horizontal',
      loop: false,
      slidesPerView: 1,
      speed: 1000,
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        1200: {
          slidesPerView: 1,
        },
      },

      navigation: {
        nextEl: reviewsButtonNext,
        prevEl: reviewsButtonPrev,
      },
    });
  }
};

export {getCarousel};
