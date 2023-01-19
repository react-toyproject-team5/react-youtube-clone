import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'timeago.js';
import VideoMenu from './VideoMenu';

const HoverVideo = ({ profileData, videoCard, videoHover }) => {
  const [listOpen, setListOpen] = useState(false);

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
      <div>
        <div>
          <iframe
            id="ytplayer"
            type="text/html"
            width="640"
            height="360"
            src={`https://www.youtube.com/embed/${videoCard.id}?autoplay=${
              videoHover ? 1 : 0
            }&mute=1&modestbranding=1&controls=0`}
            //   src={videoId}
            frameBorder="0"
          ></iframe>
        </div>
        <div>
          <Link to={link(videoCard.id)}>
            <img src={profileData} alt={videoCard.snippet.channelTitle} />
            <div>{videoCard.snippet.title}</div>
          </Link>
          <button onClick={() => setListOpen(true)}>list</button>
          {listOpen && <VideoMenu />}
          <Link to={link(videoCard.id)}>
            <div>{videoCard.snippet.channelTitle}</div>
            <div>{view(videoCard.statistics.viewCount)}</div>
            <div>{date(videoCard.snippet.publishedAt)}</div>
            <button>나중에 볼 동영상</button>
            <button>현재 재생목록에 추가</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HoverVideo;
