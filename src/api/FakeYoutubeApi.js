import axios from 'axios';

export async function search(keyword) {
  return axios.get(`/data/search.json`).then((res) => res.data.items);
}
