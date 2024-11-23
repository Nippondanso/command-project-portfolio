import axios from 'axios';
import Swiper from 'swiper';
import 'swiper/css/bundle';

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api/';

const forwardButton = document.querySelector('.btn-next');
const backButton = document.querySelector('.btn-prev');
const noDataMessage = document.querySelector('.error-message');

 window.addEventListener('resize', updateButtonState);

 document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') {
    moveNext();
  } else if (e.key === 'ArrowLeft') { 
    movePrev();
  }
});

 function moveNext() {
  carousel.slideNext();
  updateButtonState();
}

function movePrev() {
  carousel.slidePrev();
  updateButtonState();
}

 function updateButtonState() {
  if (carousel.isBeginning) {
    backButton.classList.add('button-disabled');
  } else {
    backButton.classList.remove('button-disabled');
  }

  if (carousel.isEnd) {
    forwardButton.classList.add('button-disabled');
  } else {
    forwardButton.classList.remove('button-disabled');
  }
}

forwardButton.addEventListener('click', moveNext);
backButton.addEventListener('click', movePrev);

 const carousel = new Swiper('.swiper', {
  slidesPerView: 1,
   spaceBetween: 16,
  speed:800,
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 1 },
    1280: { slidesPerView: 2 },
  },
});

 const feedbackWrapper = document.querySelector('.carousel-wrapper');

 async function fetchFeedback() {
  try {
    const response = await axios('/reviews');
    return response.data;
  } catch (error) {
    noDataMessage.classList.remove('hidden');
     return [];
  }
}

 async function renderFeedback() {
  const reviews = await fetchFeedback();

  if (reviews.length === 0) {
    noDataMessage.classList.remove('hidden');
    return;
  }

  const markup = reviews
    .map((
      {review,author,avatar_url}) => `
      <div class="swiper-slide feedback-item">
        <p class="feedback-text">${review}</p>
        <div class="feedback-info">
          <img src="${avatar_url}" alt="${author}" class="feedback-avatar" />
          <span class="feedback-author">${author}</span>
        </div>
      </div>
    `
    )
    .join('');

  feedbackWrapper.insertAdjacentHTML('beforeend', markup);
  carousel.update();
  updateButtonState();
}

 renderFeedback();
