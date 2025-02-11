import Accordion from 'accordion-js';

const accordionFaq = new Accordion('.accordion-container', {
  duration: 900,
  showMultiple: true,
  elementClass: 'list-item',
  triggerClass: 'btn-faq',
  panelClass: 'list-item-text',
  activeClass: 'opens',
});
