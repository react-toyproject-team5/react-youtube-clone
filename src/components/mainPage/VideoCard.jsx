import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VideoPlayer from './VideoPlayer';
import VideoInfo from './VideoInfo';
import VideoMenu from './VideoMenu';

const VideoCard = ({ videoCard, listOpen, setListOpen }) => {
  const [cardHover, setCardHover] = useState(false);
  const [profileData, setProfileData] = useState('');

  const getProfile = async (data) => {
    try {
      let profile = await axios.get(`http://localhost:5000/file?id=${data}`);
      setProfileData(profile.data.items[0].snippet.thumbnails.default.url);
    } catch (error) {
      console.log(error);
    }
    return profileData;
  };
  useEffect(() => {
    getProfile(videoCard.id);
  }, []);

  return (
    <div style={{ position: 'relative', top: '300px', left: '300px' }}>
      <div onMouseOver={() => setCardHover(true)} onMouseOut={() => setCardHover(false)}>
        <VideoPlayer videoCard={videoCard} profileData={profileData} />
        {cardHover && <button onClick={() => setListOpen(videoCard.id)}>list</button>}
        {listOpen === videoCard.id && <VideoMenu />}
        <VideoInfo videoCard={videoCard} profileData={profileData} />
      </div>
    </div>
  );
};

export default VideoCard;
