import React from 'react';
import RelatedVideoInVideoDetail from '../components/RelatedVideoInVideoDetail/RelatedVideoInVideoDetail';
import Comments from '../components/Comments/Comments';
import Player from '../components/Player/Player';
import { useLocation, useParams } from 'react-router-dom';

const VideoDetail = () => {
  const {
    state: { video },
  } = useLocation();
  console.log('videossss:', video);
  const { title, channelId, channelTitle, description } = video.snippet;

  const { videoId } = useParams;
  return (
    <div>
      <div className="column1">
        <Player videoId={videoId} />
      </div>
      <div className="column2">
        <Comments />
        <RelatedVideoInVideoDetail />
      </div>
    </div>
  );
};
export default VideoDetail;
