const videoContainer = document.querySelector('.video');
const videoPicture = videoContainer.querySelector('picture');
const videoBtn = document.querySelector('.video__button');

const onPlayClick = () => {
  const video = document.createElement('iframe');

  video.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1');
  video.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
  video.setAttribute('allowfullscreen', '');
  video.classList.add('video__iframe');
  videoContainer.append(video);
};

if (videoContainer && videoPicture && videoBtn) {
  videoBtn.addEventListener('click', (event) => {
    event.preventDefault();
    videoPicture.style.display = 'none';
    videoBtn.style.display = 'none';
  });
}

export {onPlayClick};
