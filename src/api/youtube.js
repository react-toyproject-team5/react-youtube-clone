import { instance } from './axios';

/** 검색 api */
export const searchByKeyword = async (keyword) => {
  const response = await instance.get('/search', {
    params: {
      part: 'snippet',
      maxResults: 25,
      q: keyword,
    },
  });
  return response.data.items;
};

/** 관련동영상 */
export const relatedVideos = async (id) => {
  const response = await instance.get('/search', {
    params: {
      part: 'snippet',
      maxResults: 25,
      type: 'video',
      relatedToVideoId: id,
    },
  });
  return response.data.items.map((item) => ({ ...item, id: item.id.videoId }));
};

/** 채널정보 api */
export const channelImage = async (id) => {
  const response = await instance.get('/channels', {
    params: {
      part: 'snippet',
      id,
    },
  });
  return response.data.items[0].snippet.thumbnails.default.url;
};

/** 조회수 api */
export const getViewCount = async (videoId) => {
  const response = await instance.get('/videos', {
    params: {
      part: 'statistics',
      id: videoId,
    },
  });
  return response.data.items[0].statistics;
};
