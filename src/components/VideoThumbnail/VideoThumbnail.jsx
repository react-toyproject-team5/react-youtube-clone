import { useQuery } from '@tanstack/react-query';
import { contentDetails } from '../../api/FakeYoutubeApi';
import { videoTime } from '../../util/videoTime';
import styles from './VideoThumbnail.module.scss';

export default function VideoThumbnail({ id, url, title }) {
  const { isLoading, data: contentInfo } = useQuery(['videos', id], () => contentDetails(id), {
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) return;
  // console.log('123', contentInfo);

  // if (!contentInfo) return null;
  const { duration } = contentInfo;

  return (
    <div className={styles.thumbnail}>
      <img className={styles.img} src={url} alt={title} />
      {duration ? <p className={styles.duration}>{videoTime(duration)}</p> : null}
    </div>
  );
}
