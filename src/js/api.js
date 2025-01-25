import axios from 'axios';

const baseUrl = 'https://app.ticketmaster.com/discovery/v2/';
const API_KEY = 'uHSLi07StIOlriMPxJGxUbSYsHDs6AFx';

export async function fetchData(page, query) {
  const response = await axios.get(
    `${baseUrl}events.json?apikey=${API_KEY}&page=${page}&keyword=${query}`
  );
  console.log(response);
  return response.data;
}
// fetchData(1);

export async function fetchDataId(id) {
  const response = await axios.get(
    `${baseUrl}events.json?apikey=${API_KEY}&id=${id}`
  );
  console.log(response.data);
  return response.data;
}
fetchDataId('Z7r9jZ1A7C3jA');
