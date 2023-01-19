import React from 'react';
import { Link } from 'react-router-dom';
import { format, register } from 'timeago.js';
import koLocale from 'timeago.js/lib/lang/ko';
import styles from './VideoInfo.module.scss';
import { BsDot } from 'react-icons/bs';

const VideoInfo = ({ videoCard, profileData }) => {
  let link = (url) => {
    return `/watch/:${url}`;
  };

  const view = (viewCount) => {
    if (viewCount < 1000) {
      return viewCount + '회';
    }
    if (viewCount >= 1000 && viewCount < 10000) {
      return (viewCount / 10000).toFixed(1) + '천회';
    }
    if (viewCount >= 10000 && viewCount < 100000) {
      return (viewCount / 10000).toFixed(1) + '만회';
    }
    if (viewCount >= 100000) {
      return (viewCount / 10000).toFixed() + '만회';
    }
  };

  register('ko', koLocale);

  return (
    <Link to={link(videoCard.id)}>
      <div className={styles.videoinfo}>
        <div>
          <img className={styles.channelimage} src={profileData} alt={videoCard.snippet.channelTitle} />
        </div>
        <div className={styles.info}>
          <div className={styles.infotitle}>{videoCard.snippet.title}</div>
          <div className={styles.infochan_view}>{videoCard.snippet.channelTitle}</div>
          <div className={styles.infochan_view}>
            <span>{view(videoCard.statistics.viewCount)}</span>
            <BsDot />
            <span>{format(videoCard.snippet.publishedAt, 'ko')}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoInfo;
