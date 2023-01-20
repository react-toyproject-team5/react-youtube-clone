import React from 'react';
import Styles from './VideoInfo.module.scss';
const VideoInfo = (videoId) => {
  return (
    <div className={Styles.videoPlayerInfo}>
      <div className={Styles.tags}></div>
      <h1 className="VideoTitle"></h1>
    </div>
  );
};

export default VideoInfo;
