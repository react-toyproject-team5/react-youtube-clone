import React from 'react';
import RelatedVideoInVideoDetail from '../../components/RelatedVideoInVideoDetail/RelatedVideoInVideoDetail';
import Comments from '../../components/Comments/Comments';
import Player from '../../components/Player/Player';
import { useLocation, useParams } from 'react-router-dom';
import VideoInfo from '../../components/VideoInfo/VideoInfo';
import styles from './VideoDetail.module.scss';

const VideoDetail = () => {
  const {
    state: { video },
  } = useLocation();
  const { title, channelId, channelTitle, description } = video.snippet;

  const { videoId } = useParams;

  return (
    <div className={styles.detailPage}>
      <div className="column1">
        <Player videoId={videoId} />
        <VideoInfo videoId={videoId} />
      </div>
      <div className="column2">
        <Comments videoId={videoId} />
        {/* <RelatedVideoInVideoDetail /> */}
      </div>
    </div>
  );
};
export default VideoDetail;
