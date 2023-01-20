import React from 'react';
import RelatedVideoInVideoDetail from '../components/RelatedVideoInVideoDetail/RelatedVideoInVideoDetail';
import Comments from '../components/Comments/Comments';
import Player from '../components/Player/Player';
import { useParams } from 'react-router-dom';
import VideoInfo from '../components/VideoInfo/VideoInfo';

const VideoDetail = () => {
  const { videoId } = useParams;
  return (
    <div>
      <div className="column1">
        <Player videoId={videoId} />
        <VideoInfo videoId={videoId} />
      </div>
      <div className="column2">
        <Comments />
        <RelatedVideoInVideoDetail />
      </div>
    </div>
  );
};
export default VideoDetail;
