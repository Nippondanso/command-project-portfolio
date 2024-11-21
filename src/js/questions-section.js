import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
console.log(Accordion);

const list = document.querySelector('#questions-list');
const listItems = document.querySelectorAll('.question-item');

document.addEventListener('DOMContentLoaded', () => {
  const accordion = new Accordion('#questions-list', {
    duration: 250,
    showMultiple: false,
  });
  accordion.open(0);
});
