import { renderEvents } from './events';
import { page } from './pagination';

const eventsList = document.querySelector('.events-list');
const form = document.querySelector('.search-form');
export let query = '';

form.addEventListener('submit', onBtnSubmit);

function onBtnSubmit(event) {
  event.preventDefault();
  query = event.target.elements.formInput.value;
  eventsList.innerHTML = '';
  renderEvents(page, query);
}
