const videoBtn = document.querySelector('.video__button');
const iframe = document.querySelector('.video__iframe');

const onPlayClick = () => {
  if (videoBtn && iframe) {
    videoBtn.addEventListener('click', () => {
      videoBtn.style.display = 'none';
      iframe.style.display = 'block';
    });
  }
};

export {onPlayClick};
