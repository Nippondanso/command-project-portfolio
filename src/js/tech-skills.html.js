import { TECH_SKILLS } from '../constants.js';

const tech = [{
  name: 'HTML/CSS', link: 'https://www.edu.goit.global/uk/learn/24554709/17039071/17039078/training',
}, {
  name: 'JavaScript', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
}, {
  name: 'React', link: 'https://react.dev/',
}, {
  name: 'Node.js', link: 'https://nodejs.dev/',
}, {
  name: 'React Native', link: 'https://reactnative.dev/',
}, {
  name: 'Typescript', link: 'https://www.typescriptlang.org/',
}];
const wrap = document.querySelector(TECH_SKILLS.CSS_SELECTOR.WRAP_CLASS);
const techSkillsUpper = wrap.querySelector(TECH_SKILLS.CSS_SELECTOR.TECH_SKILLS_UPPER_ID);
const techSkillsLower = wrap.querySelector(TECH_SKILLS.CSS_SELECTOR.TECH_SKILLS_LOWER_ID);

const contentMarkup = (content, place = TECH_SKILLS.PLACE.UPPER) => content.map(tech => {
  return `<svg class=${place === TECH_SKILLS.PLACE.UPPER ? TECH_SKILLS.CSS_CLASS.UPPER_DOTS : TECH_SKILLS.CSS_CLASS.LOWER_DOTS} width="8" height="8">
            <use href=${TECH_SKILLS.SEPARATOR_SVG_LOC}></use>
          </svg>
          <a target="_blank" href=${tech.link}>
            <div class="item ${place === TECH_SKILLS.PLACE.UPPER ? TECH_SKILLS.CSS_CLASS.ITEM_UPPER : TECH_SKILLS.CSS_CLASS.ITEM_LOWER}">${tech.name}</div>
          </a>`;
});

const buildTechLine = (markup, reverse = false) => {
  let element1 = document.createElement('div');
  let element2 = document.createElement('div');
  element1.classList.add('items', 'marquee');
  reverse && element1.classList.add('reverse');
  element2.classList.add('items', 'marquee');
  reverse && element2.classList.add('reverse');
  element2.ariaHidden = 'true';
  element1.innerHTML = markup.join('');
  element2.innerHTML = markup.join('');
  techSkillsUpper.insertAdjacentElement('beforeend', element1);
  techSkillsUpper.insertAdjacentElement('beforeend', element2);
  return { element1, element2 };
};

const fillLine = (line, lineContent, position =TECH_SKILLS.POSITION.BEFORE_END) => {
  const { element1, element2 } = lineContent;
  line.insertAdjacentElement(position, element1);
  line.insertAdjacentElement(position, element2);
};

const upperLineContent = buildTechLine(contentMarkup(tech));
const lowerLineContent = buildTechLine(contentMarkup(tech, TECH_SKILLS.PLACE.LOWER), true);
fillLine(techSkillsUpper, upperLineContent);
fillLine(techSkillsLower, lowerLineContent);

