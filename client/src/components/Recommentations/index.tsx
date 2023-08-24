import React, { useEffect } from 'react';
import { useClasses } from './styles';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Card from '../Card';

interface Props {
  tags: string[] | undefined;
}

const Recommendations = ({ tags }: Props) => {
  const classes = useClasses();
  const { fetchRecommendations } = useActions();
  const { recommandations } = useTypedSelector((state) => state.videos);

  useEffect(() => {
    if (tags) fetchRecommendations(tags);
  }, []);

  return (
    <div className={classes.container}>
      {recommandations.map((video) => (
        <Card key={video._id} type='sm' video={video} />
      ))}
    </div>
  );
};

export default Recommendations;
