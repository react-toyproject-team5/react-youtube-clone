import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { videoInfo } from '../../api/FakeYoutubeApi';
import { getViewCount } from '../../api/youtube';
import { timeFormat } from '../../util/date';
import styles from './VideoStatistics.module.scss';

export default function VideoStatistics({ id, publishedAt }) {
  const { isLoading, data: videos } = useQuery(['videos', id], () => videoInfo(id), { enabled: !!id });

  // console.log('videos:', videos);
  // const { viewCount } = videos;
  // console.log('viewCount:', videos.viewCount);

  return (
    <div className={styles.statistics}>
      {/* <p className={styles.viewCount}>{videos.viewCount} views</p> */}
      <span>·</span>
      <p className={styles.time}>{timeFormat(publishedAt)}</p>
    </div>
  );
}
