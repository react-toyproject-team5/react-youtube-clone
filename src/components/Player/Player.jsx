import { React } from 'react';

const Player = ({ videoId }) => {
  return (
    <div>
      <iframe
        title={`http://www.youtube.com/embed/${videoId}?enablejsapi=1&origin=http://example.com`}
        id="player"
        width="100%"
        height="100%"
        src={`http://www.youtube.com/embed/${videoId}?enablejsapi=1&origin=http://example.com`}
        itemType="text/html"
      ></iframe>
    </div>
  );
};
export default Player;
