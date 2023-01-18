import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://www.googleapis.com/youtube/v3',
  params: { api_key: process.env.REACT_APP_YOUTUBE_API_KEY },
});

export default instance;
