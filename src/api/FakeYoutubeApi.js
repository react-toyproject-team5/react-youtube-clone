import axios from 'axios';

export async function search() {
  return axios.get(`/data/search.json`).then((res) => res.data.items);
}

export async function channels() {
  return axios.get(`/data/channel.json`).then((res) => res.data.items[0].snippet.thumbnails.default.url);
}

export async function videoInfo() {
  return axios.get(`/data/hyewonTest.json`).then((res) => res.data.items[0].statistics);
}
