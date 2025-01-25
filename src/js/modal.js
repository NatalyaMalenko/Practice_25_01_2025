import { fetchDataId } from './api';

const eventsList = document.querySelector('.events-list');
const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');

eventsList.addEventListener('click', onClickList);

function onClickList(event) {
  const id = event.target.id;
  backdrop.classList.remove('is-hidden');
  getEvent(id);
}

async function getEvent(id) {
  const data = await fetchDataId(id);
  console.log(data);
  renderEvent(data._embedded.events);
}

function renderEvent(data) {
  const markup = `<p>${data[0].name}</p>`;
  modal.innerHTML = markup;
}
