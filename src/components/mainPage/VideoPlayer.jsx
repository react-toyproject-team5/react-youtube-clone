import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HoverVideo from './HoverVideo';
import styles from './VideoPlayer.module.scss';

const VideoPlayer = ({ videoCard, profileData }) => {
  const [videoHover, setVideoHover] = useState(false);
  const [playVideo, setPlayVideo] = useState(false);

  let link = (url) => {
    return `/watch/:${url}`;
  };

  const videoTime = (duration) => {
    let time = [duration.match(/[0-9]+H/) || '', duration.match(/[0-9]+M/) || '00', duration.match(/[0-9]+S/) || '00'];
    time = time.map((timeEl) => String(timeEl).replace(/[A-Z]/g, '').padStart(2, '0'));
    time = time.join(':').replace(/[A-Z]/g, '');
    time = time.split(':')[0] === '00' ? time.replace('00:', '') : time;
    return time;
  };
  let timer;

  const mouseOver = async () => {
    setVideoHover(true);
    timer = await setTimeout(() => {
      setPlayVideo(true);
    }, 3000);
  };

  const mouseOut = async () => {
    setVideoHover(false);
    clearTimeout(timer);
    setPlayVideo(false);
  };

  return (
    <div className={styles.videoplayer} onMouseOver={mouseOver} onMouseOut={mouseOut}>
      <Link to={link(videoCard.id)}>
        <img
          className={styles.videoimage}
          src={videoCard.snippet.thumbnails.medium.url}
          alt={videoCard.snippet.title}
        />
        <div className={styles.videotime}>{videoTime(videoCard.contentDetails.duration)}</div>
        {videoHover && <div className={styles.videohover}>계속 마우스오버하여 재생하기</div>}
      </Link>
      {playVideo && videoHover && (
        <HoverVideo
          profileData={profileData}
          videoCard={videoCard}
          videoHover={videoHover}
          setPlayVideo={setPlayVideo}
          setVideoHover={setVideoHover}
        />
      )}
    </div>
  );
};

export default VideoPlayer;
