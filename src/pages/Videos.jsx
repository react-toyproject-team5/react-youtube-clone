import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useInView } from 'react-intersection-observer';
import VideoCard from '../components/mainPage/VideoCard';

export default function Videos() {
  const [videoData, setVideoData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [listOpen, setListOpen] = useState('');
  const [page, setPage] = useState('');
  const [ref, inView] = useInView();
  const [data, setData] = useState({});

  const getVideo = useCallback(async () => {
    setVideoData([]);
    setLoading(true);
    await axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=25&key=AIzaSyDGkRdsPIgDMjduzvBSidnZbn6Th3_0QtE${page}`,
        // `http://localhost:4000/file`,
      )
      .then((response) => {
        setVideoData((prev) => [...prev, ...response.data.items]);
      });
    const video = await axios.get(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=25&key=AIzaSyDGkRdsPIgDMjduzvBSidnZbn6Th3_0QtE${page}`,
      // `http://localhost:4000/file`,
    );
    setData(video.data);
    setLoading(false);
  }, [page]);

  useEffect(() => {
    getVideo();
  }, [getVideo]);

  useEffect(() => {
    if (inView && !loading) {
      setPage(`&pageToken=${data.nextPageToken}`);
    }
  }, [inView, loading]);

  if (loading) {
    return <div>로딩 중...</div>;
  }

  if (videoData === []) {
    return <div></div>;
  }

  console.log(videoData);

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {videoData.map((videoCard, index) => (
          <React.Fragment key={videoCard.id}>
            {videoData.length - 5 === index ? (
              <div ref={ref}>
                <VideoCard listOpen={listOpen} setListOpen={setListOpen} videoCard={videoCard} />
              </div>
            ) : (
              <div>
                <VideoCard listOpen={listOpen} setListOpen={setListOpen} videoCard={videoCard} />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
