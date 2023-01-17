import axios from 'axios';

export default class FakeYoutubeApi {
  async video() {
    return axios.get('/data/SerachVideo.json');
  }
}
