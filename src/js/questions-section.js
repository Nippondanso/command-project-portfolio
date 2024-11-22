import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', () => {
  const accordion = new Accordion('#questions-list', {
    duration: 250,
    showMultiple: false,
  });
  accordion.open(0);
});
