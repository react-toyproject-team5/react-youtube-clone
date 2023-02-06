import { useQuery } from '@tanstack/react-query';
import { contentDetails } from '../../api/FakeYoutubeApi';
import { videoTime } from '../../util/videoTime';
import styles from './VideoThumbnail.module.scss';

export default function VideoThumbnail({ id, url, title, isList }) {
  const { isLoading, data: contentInfo } = useQuery(['videos', id], () => contentDetails(id), {
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) return;

  const { duration } = contentInfo;

  return (
    <div className={isList ? styles.small_thumbnail : styles.thumbnail}>
      <img className={styles.img} src={url} alt={title} />
      {duration ? <p className={styles.duration}>{videoTime(duration)}</p> : null}
    </div>
  );
}
