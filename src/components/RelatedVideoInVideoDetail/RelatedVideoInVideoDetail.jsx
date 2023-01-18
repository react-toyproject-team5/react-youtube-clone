import React from 'react';
import RelatedVideo from './relatedVideo.json';
import VideoInfo from './videoInfo.json';
import styles from './RelatedVideoInVideoDetail.module.scss';
import { format, register } from 'timeago.js';
import koLocale from 'timeago.js/lib/lang/ko';

register('ko', koLocale);
const RelatedVideoInVideoDetail = () => {
  return (
    <div className={styles.relatedVideoContainer}>
      <ul className={styles.relatedList}>
        {RelatedVideo.items.map((item, i) => {
          return (
            <li key={item.etag} className={styles.videoCard}>
              <a href={item.id.videoId}>
                <div className={styles.videoPreviewContainer}>
                  <img src={item.snippet.thumbnails.default.url} />
                  <div className={styles.videoDuration}>{VideoInfo?.items[i]?.contentDetails?.duration}</div>
                </div>
                <div className={styles.videoInfoContainer}>
                  <h3>{item.snippet.title}</h3>
                  <p className={styles.channelName}>{item.snippet.channelTitle}</p>
                  <p className={styles.videoViewPoint}>{VideoInfo?.items[i]?.statistics?.viewCount} views</p>
                  <p>{format(VideoInfo?.items[i]?.snippet?.publishedAt, 'ko')}</p>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RelatedVideoInVideoDetail;
