import Accordion from 'accordion-js';

const accordionFaq = new Accordion('.accordion-container', {
  duration: 900,
  elementClass: 'list-item',
  triggerClass: 'btn-faq',
  panelClass: 'list-item-text',
  activeClass: 'opens',
});
