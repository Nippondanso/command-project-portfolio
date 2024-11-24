import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';
import Swiper from 'swiper';
import 'swiper/css/bundle';

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api/';

const forwardButton = document.querySelector('.btn-next');
const backButton = document.querySelector('.btn-prev');
const noDataMessage = document.querySelector('.error-message');
const reviewsNavigation = document.querySelector('.reviews-navigation');
const feedbackWrapper = document.querySelector('.carousel-wrapper');

let timer;

window.addEventListener('resize', updateButtonState);

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') {
    moveNext();
  } else if (e.key === 'ArrowLeft') {
    movePrev();
  }
});

feedbackWrapper.addEventListener('touchmove', handlerMove);

feedbackWrapper.addEventListener('mousemove', handlerMove);

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
  speed: 800,
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 1 },
    1280: { slidesPerView: 2 },
  },
});

async function fetchFeedback() {
  try {
    const response = await axios('/reviews');
    return response.data;
  } catch (error) {
    noDataMessage.classList.remove('hidden');
    reviewsNavigation.classList.add('hidden');
    handlerObserver();
    return;
  }
}

async function renderFeedback() {
  const reviews = await fetchFeedback();

  if (reviews.length === 0) {
    noDataMessage.classList.remove('hidden');
    return;
  }
  feedbackWrapper.insertAdjacentHTML('beforeend', createReviewsMarkup(reviews));

  carousel.update();
  updateButtonState();
}

renderFeedback();

function createReviewsMarkup(arr) {
  return arr
    .map(
      ({ review, author, avatar_url }) => `
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
}

function handlerObserver() {
  const observer = new IntersectionObserver(showMessage, {
    threshold: 1,
  });
  observer.observe(noDataMessage);

  return observer;
}

function showMessage(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      iziToast.error({
        message: 'Reviews not found! Please try again later.',
        position: 'topRight',
      });
    }
  });
}

function handlerMove() {
  clearTimeout(timer);
  timer = setTimeout(updateButtonState, 200);
}
