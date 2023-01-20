import React from 'react';
import RelatedVideoInVideoDetail from '../components/RelatedVideoInVideoDetail/RelatedVideoInVideoDetail';
import Comments from '../components/Comments/Comments';
import Player from '../components/Player/Player';
import { useLocation } from 'react-router-dom';
import VideoInfo from '../components/VideoInfo/VideoInfo';
import { videoDataInfo } from '../api/FakeYoutubeApi';
import styles from './VideoDetail.module.scss';

const VideoDetail = () => {
  const {
    state: { video },
  } = useLocation();

  // console.log('videossss:', video);
  const { tags, statistics } = videoDataInfo;
  const { title, channelTitle, description, channelId, publishedAt } = video.snippet;

  return (
    <div className={styles.detailContainer}>
      <div className="column1">
        <Player videoId={video.id.videoId} />
        <VideoInfo
          tags={tags}
          statistics={statistics}
          videoId={video.id.videoId}
          title={title}
          channelTitle={channelTitle}
          description={description}
          channelId={channelId}
          publishedAt={publishedAt}
        />
      </div>
      <div className="column2">
        {/* <Comments />
        <RelatedVideoInVideoDetail /> */}
      </div>
    </div>
  );
};
export default VideoDetail;
