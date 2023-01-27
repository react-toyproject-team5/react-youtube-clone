import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { videoInfo } from '../../api/FakeYoutubeApi';
import { getViewCount } from '../../api/youtube';
import { timeFormat } from '../../util/date';
import numberToKorean from '../../util/numberToKorean';
import styles from './VideoStatistics.module.scss';

export default function VideoStatistics({ id, publishedAt }) {
  const { isLoading, data: videos } = useQuery(['statistics', id], () => getViewCount(id), { enabled: !!id });
  if (isLoading) return;

  const { viewCount } = videos;
  console.log('viewCount:', viewCount);

  return (
    <div className={styles.statistics}>
      <p className={styles.viewCount}>{numberToKorean(viewCount)} views</p>
      <span>·</span>
      <p className={styles.time}>{timeFormat(publishedAt)}</p>
    </div>
  );
}
