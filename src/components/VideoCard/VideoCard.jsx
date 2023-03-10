import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChannelInfo from '../ChannelInfo/ChannelInfo';
import VideoStatistics from '../VideoStatistics/VideoStatistics';
import styles from './VideoCard.module.scss';
import VideoThumbnail from '../VideoThumbnail/VideoThumbnail';
import PlayVideo from '../PlayVideo/PlayVideo';
import HoverButton from '../HoverButton/HoverButton';
import { RxDotsVertical } from 'react-icons/rx';

export default function VideoCard({ video, type, id }) {
  const { title, thumbnails, channelTitle, publishedAt, description, channelId } = video.snippet;
  const [videoHover, setVideoHover] = useState(false);
  // const [playVideo, setPlayVideo] = useState(false);
  const [listId, setListId] = useState('');

  const navigate = useNavigate();

  const isList = type === 'list';

  // let timer;

  const handleMouseHover = async () => {
    setVideoHover(true);
    // timer = await setTimeout(() => {
    //   setPlayVideo(true);
    // }, 10);
  };

  const handleMouseOut = async () => {
    setVideoHover(false);
    // clearTimeout(timer);
    // setPlayVideo(false);
  };

  const goToDetailPage = (event) => {
    navigate(`/watch/${video.id.videoId}`, { state: { video: video } });
  };

  const handleClick = (event) => {
    event.stopPropagation();
    setListId(id === listId ? '' : id);
  };

  return (
    <li
      key={id}
      className={styles.video}
      onClick={goToDetailPage}
      onMouseOver={handleMouseHover}
      onMouseOut={handleMouseOut}
    >
      <div className={isList ? styles.small_thumbnail : styles.thumbnail}>
        <VideoThumbnail id={id} url={thumbnails.medium.url} title={title} videoHover={videoHover} isList={isList} />
        {videoHover && <PlayVideo id={id} videoHover={videoHover} isList={isList} />}
      </div>
      <div className={styles.video_info}>
        <div className={styles.video_info_setting}>
          <p className={styles.title}>{title}</p>
          {videoHover && (
            <button className={styles.hoverBtn} data-name="button" data-id={id} onClick={handleClick}>
              <RxDotsVertical className={styles.icon} data-name="icon" data-id={id} />
            </button>
          )}
          {listId ? <HoverButton setListId={setListId} listId={listId} /> : null}
        </div>
        <VideoStatistics id={id} publishedAt={publishedAt} isList={isList} />
        <ChannelInfo channelId={channelId} title={channelTitle} isList={isList} />
        {isList ? null : <p className={styles.description}>{description}</p>}
      </div>
    </li>
  );
}
