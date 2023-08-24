import React, { useEffect } from 'react';
import Card from '../../components/Card';
import { useClasses } from './styles';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { VideoInfo } from '../../shared/interfaces';

interface Props {
  type: string;
}

const Home: React.FC<Props> = ({ type }: Props) => {
  const classes = useClasses();
  const { fetchVideos } = useActions();
  // const videos: any = [];
  const { videos } = useTypedSelector((state: any) => state.videos);
  useEffect(() => {
    fetchVideos(type);
  }, [type]);
  return (
    <>
      {videos.length == 0 ? (
        <div className={classes.div}>No content available</div>
      ) : (
        <div className={classes.container}>
          {videos.map((video: VideoInfo) => (
            <Card key={video._id} type='lg' video={video} />
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
