import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';
import { useClasses } from './styles';
import { VideoInfo } from '../../shared/interfaces';
import { useLocation } from 'react-router-dom';
import videoService from '../../services/video-service';

const Search: React.FC = () => {
  const classes = useClasses();
  const location = useLocation();
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const query = location.search;

  useEffect(() => {
    const searchVideos = async () => {
      setLoading(true);
      const res = await videoService.search(query);
      setVideos(res.data);
      setLoading(false);
    };
    searchVideos();
  }, [query]);
  return (
    <>
      {loading && <div className={classes.div}>Loading...</div>}
      {!loading && videos.length == 0 && (
        <div className={classes.div}>No content available</div>
      )}
      {!loading && videos.length > 0 && (
        <div className={classes.container}>
          {videos.map((video: VideoInfo) => (
            <Card key={video._id} type='lg' video={video} />
          ))}
        </div>
      )}
    </>
  );
};

export default Search;
