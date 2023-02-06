import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { channels } from '../../api/FakeYoutubeApi';
import { channelImage } from '../../api/youtube';
import styles from './ChannelInfo.module.scss';

export default function ChannelInfo({ channelId, title,isList }) {
  const { data: channelUrl } = useQuery(['channel', channelId], () => channels(channelId), {
    staleTime: 1000 * 60 * 5,
  });

  return (
    <div className={isList? styles.small_channel : styles.channel}>
      {!isList && <img className={styles.img} src={channelUrl} alt={title} />}
      <p className={styles.title}>{title}</p>
    </div>
  );
}
