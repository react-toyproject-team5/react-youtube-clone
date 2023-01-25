import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChannelInfo from '../ChannelInfo/ChannelInfo';
import VideoStatistics from '../VideoStatistics/VideoStatistics';
import styles from './VideoCard.module.scss';
import VideoThumbnail from '../VideoThumbnail/VideoThumbnail';
import PlayVideo from '../PlayVideo/PlayVideo';
import HoverButton from '../HoverButton/HoverButton';
import { RxDotsVertical } from 'react-icons/rx';

export default function VideoCard({ video }) {
  const { title, thumbnails, channelTitle, publishedAt, description, channelId } = video.snippet;
  const [videoHover, setVideoHover] = useState(false);
  const [playVideo, setPlayVideo] = useState(false);
  const [listOpen, setListOpen] = useState('');

  const { videoId } = video.id;
  const navigate = useNavigate();

  let timer;

  const handleMouseHover = async () => {
    setVideoHover(true);
    timer = await setTimeout(() => {
      setPlayVideo(true);
    }, 100);
  };

  const handleMouseOut = async () => {
    setVideoHover(false);
    clearTimeout(timer);
    setPlayVideo(false);
  };

  const goToDetailPage = (event) => {
    // 클릭 시, 해당 동영상으로 이동 및 video 정보 state로 전달
    // state로 video 정보를 전달할 경우,
    // 클릭했을때만 정보가 전달 되고 수기로 주소를 직접 작성할 땐 데이터가 전달이 되지 않으니 주의할 것!
    if (event.target.nodeName !== 'svg') navigate(`/watch/${video.id.videoId}`, { state: { video: video } });
  };

  return (
    <li className={styles.video} onClick={goToDetailPage} onMouseOver={handleMouseHover} onMouseOut={handleMouseOut}>
      <VideoThumbnail id={videoId} url={thumbnails.medium.url} title={title} videoHover={videoHover} />
      {videoHover && <PlayVideo id={videoId} videoHover={videoHover} />}
      <div className={styles.video_info}>
        <div className={styles.video_info_setting}>
          <p className={styles.title}>{title}</p>
          {videoHover && (
            <button className={styles.hoverBtn} onClick={() => setListOpen(listOpen === videoId ? '' : videoId)}>
              <RxDotsVertical className={styles.icon} />
            </button>
          )}
          {listOpen && <HoverButton />}
        </div>
        <VideoStatistics id={videoId} publishedAt={publishedAt} />
        <ChannelInfo channelId={channelId} title={channelTitle} />
        <p className={styles.description}>{description}</p>
      </div>
    </li>
  );
}
