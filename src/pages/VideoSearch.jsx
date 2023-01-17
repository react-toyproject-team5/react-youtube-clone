import React from 'react';
import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';
import VideoCard from '../components/VideoCard';
import { useParams } from 'react-router-dom';

export default function VideoSearch() {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['videos', keyword], async () => {
    return fetch(`/videos/${keyword ? 'search' : 'hotTrend'}`)
      .then((res) => res.json())
      .then((data) => data.items);
  });

  return (
    <div>
      Video Search {keyword ? `${keyword}` : <div>검색결과가 없습니다.</div>}
      {isLoading && <p>Loading...</p>}
      {error && <p>Error</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </div>
  );
}
