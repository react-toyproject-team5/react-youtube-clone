import React from 'react';
import { useQuery } from '@tanstack/react-query';
import VideoCard from '../components/VideoCard';
import { useParams } from 'react-router-dom';
import { search } from '../api/FakeYoutubeApi';

export default function VideoSearch() {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(
    ['videos', keyword],
    () => search(keyword),
    { enabled: !keyword }, // keyword가 존재할 경우 이 쿼리가 실행
  );

  return (
    <div>
      Video Search {keyword ? `${keyword}` : <div>검색결과가 없습니다.</div>}
      {isLoading && <p>Loading...</p>}
      {error && <p>Error</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id.videoId} video={video} />
          ))}
        </ul>
      )}
    </div>
  );
}
