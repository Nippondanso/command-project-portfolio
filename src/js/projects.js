const load = document.querySelector('.LoadImg');
const Nomore = document.querySelector('.projectBtnLoad');

const collectionImg = [
  {
    src: '/src/img/imgProjects/imgForProjects/10project2x.png',
    name: 'power pulse webservice',
  },
  {
    src: '/src/img/imgProjects/imgForProjects/11project2x.png',
    name: 'wallet webservice',
  },
  {
    src: '/src/img/imgProjects/imgForProjects/12project2x.png',
    name: 'English excellence webservice',
  },
  {
    src: '/src/img/imgProjects/imgForProjects/9project2x.png',
    name: 'green harvest online store',
  },
  {
    src: '/src/img/imgProjects/imgForProjects/8project2x.png',
    name: 'vyshyvanka vibes Landing Page',
  },
  {
    src: '/src/img/imgProjects/imgForProjects/7project2x.png',
    name: 'mimino website',
  },
  {
    src: '/src/img/imgProjects/imgForProjects/6project2x.png',
    name: 'chego jewelry website',
  },
  {
    src: '/src/img/imgProjects/imgForProjects/5project2x.png',
    name: 'fruitbox online store',
  },
  {
    src: '/src/img/imgProjects/imgForProjects/2project2x.png',
    name: 'energy flow webservice',
  },
  {
    src: '/src/img/imgProjects/imgForProjects/1project2x.png',
    name: 'starlight studio landing page',
  },
];
const ill = collectionImg.length;
let countI = 0;
const carcassImage = photo => {
  return `
  <div class="wrapLoadImg">
  <ul>
  <li><img class="imgWrap" src="${photo.src}" heigth="500" width="1000" alt=""></li>
  <li><a class="siteLoad" href="https://www.edu.goit.global/uk/homepage" target="_blank" rel="nofollow"><p class="loadText">${photo.name}</p></a></li>
  </ul>
</div>`;
};

const openBox = img => {
  let maxItems = 10;
  let itemsPerClick = 2;
  if (countI < maxItems) {
    load.innerHTML += collectionImg
      .slice(countI, countI + itemsPerClick)
      .map(imageId => carcassImage(imageId))
      .join('');
    countI += itemsPerClick;
    if (countI >= maxItems) Nomore.style.display = 'none';
  }
};
Nomore.addEventListener('click', openBox);
