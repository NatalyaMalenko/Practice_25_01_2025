import { fetchData } from './api';
import { page, reset } from './pagination';
import { query } from './searchForm';

const eventsList = document.querySelector('.events-list');

function markup(arrData) {
  const renderMarkup = arrData
    .map(
      ({ name, id }) => `<li class="" id="${id}">
    <p id="${id}">${name}</p>
   </li>`
    )
    .join('');
  eventsList.innerHTML = renderMarkup;
}
export async function renderEvents(page, query) {
  const data = await fetchData(page, query);
  console.log(data);
  if (page === 1) {
    reset(data.page.totalElements);
  }

  markup(data._embedded.events);
}
renderEvents(page, query);
