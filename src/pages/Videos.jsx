import React, { useState, useEffect } from 'react';
import axios from 'axios';

import VideoCard from '../components/mainPage/VideoCard';
// import koLocale from '../../node_modules/timeago.js/lib/lang/ko.js';

export default function Videos() {
  const [videoData, setVideoData] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [listOpen, setListOpen] = useState('');

  const getVideo = async () => {
    try {
      setError('');
      setVideoData([]);
      setLoading(true);

      const video = await axios.get('http://localhost:4000/file');

      console.log(video.data.items);
      setVideoData(video.data.items);
    } catch (error) {
      setError(error);
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getVideo();
  }, []);

  if (loading) {
    return <div>로딩 중...</div>;
  }
  if (error) {
    return <div>에러가 발생했습니다.</div>;
  }
  if (videoData === []) {
    return <div></div>;
  }

  // console.log(listOpen);

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {videoData.map((videoCard) => (
          <VideoCard listOpen={listOpen} setListOpen={setListOpen} videoCard={videoCard} key={videoCard.id} />
        ))}
      </div>
    </div>
  );
}
