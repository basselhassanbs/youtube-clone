import React, { useEffect } from 'react';
import Card from '../../components/Card';
import { useClasses } from './styles';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { VideoInfo } from '../../shared/interfaces';
import Button from '../../components/Button';

interface Props {
  type: string;
}

const Home: React.FC<Props> = ({ type }: Props) => {
  const classes = useClasses();
  const { fetchVideos } = useActions();
  const {
    videos: { data, loading },
    auth: { authenticated },
  } = useTypedSelector((state: any) => state);
  useEffect(() => {
    fetchVideos(type);
  }, [type]);

  if (type === 'subscriptions' && !authenticated) {
    return (
      <div className={classes.div}>
        Sign in to see updates from your favorite YouTube channels
        <Button style={{ marginTop: '10px' }} />
      </div>
    );
  }
  return (
    <>
      {loading && <div className={classes.div}>Loading...</div>}
      {!loading && data.length == 0 && (
        <div className={classes.div}>No content available</div>
      )}
      {
        <div className={classes.container}>
          {data.map((video: VideoInfo) => (
            <Card key={video._id} type='lg' video={video} />
          ))}
        </div>
      }
    </>
  );
};

export default Home;
