import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Videos() {
  const [videoData, setVideoData] = useState([]);
  // const [profileData, setProfileData] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getVideo = async () => {
    try {
      setError('');
      setVideoData([]);
      setLoading(true);

      const video = await axios.get(
        'https://97ccbf2a-9246-4c71-8b46-24d701e9e698.mock.pstmn.io/?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=25&key=AIzaSyDGkRdsPIgDMjduzvBSidnZbn6Th3_0QtE',
      );
      setVideoData(video.data.items);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getVideo();
  }, []);

  // const getProfile = async (data) => {
  //   try {
  //     setProfileData('');
  //     const profile = await axios.get(
  //       `https://95e8d7e6-b187-4d57-88dd-9d8435068fc7.mock.pstmn.io/?part=snippet&key=AIzaSyDGkRdsPIgDMjduzvBSidnZbn6Th3_0QtE&id=${data}`,
  //     );
  //     setProfileData(profile.data);
  //     console.log(profileData.items[0].snippet);
  //   } catch (error) {
  //     setError(error);
  //   }
  // };

  if (loading) {
    return <div>로딩 중...</div>;
  }
  if (error) {
    return <div>에러가 발생했습니다.</div>;
  }
  if (videoData === []) {
    return <div></div>;
  }
  const videoTime = (duration) => {
    let time = [duration.match(/[0-9]+H/) || '', duration.match(/[0-9]+M/) || '00', duration.match(/[0-9]+S/) || '00'];
    time = time.map((timeEl) => String(timeEl).replace(/[A-Z]/g, '').padStart(2, '0'));
    time = time.join(':').replace(/[A-Z]/g, '');
    time = time.split(':')[0] === '00' ? time.replace('00:', '') : time;
    return time;
  };

  let link = (url) => {
    return `/watch/:${url}`;
  };

  return (
    <div>
      videos
      <div>
        {videoData.map((videoCard) => (
          <div key={videoCard.id}>
            <Link to={link(videoCard.id)}>
              <img src={videoCard.snippet.thumbnails.medium.url} alt={videoCard.snippet.title} />
              <div>{videoTime(videoCard.contentDetails.duration)}</div>
              <div>{videoCard.snippet.title}</div>
              <div>{videoCard.snippet.channelTitle}</div>
              {/* <div>{getProfile(videoCard.id)}</div> */}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
