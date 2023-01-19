import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'timeago.js';

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

  let date = (ago) => {
    const day = format(ago);
    if (day.includes('day')) {
      return day.replace(/\s[a-z]+\s(ago)/, '일 전');
    }
    if (day.includes('month')) {
      return day.replace(/\s[a-z]+\s(ago)/, '달 전');
    }
    if (day.includes('year')) {
      return day.replace(/\s[a-z]+\s(ago)/, '년 전');
    }
    return day;
  };

  return (
    <div>
      <Link to={link(videoCard.id)}>
        <div>{videoCard.snippet.title}</div>
        <div>{videoCard.snippet.channelTitle}</div>
        <img src={profileData} alt={videoCard.snippet.channelTitle} />
        <div>{view(videoCard.statistics.viewCount)}</div>
        <div>{date(videoCard.snippet.publishedAt)}</div>
      </Link>
    </div>
  );
};

export default VideoInfo;
