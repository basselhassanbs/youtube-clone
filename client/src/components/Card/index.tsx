import React from 'react';
import { useClasses } from './styles';
import { useNavigate } from 'react-router-dom';
import { VideoInfo } from '../../shared/interfaces';
import moment from 'moment';
import Avatar from '../Avatar';

interface CardProps {
  type: 'sm' | 'lg';
  video: VideoInfo;
}

const Card = ({ type, video }: CardProps) => {
  const classes = useClasses({ type });
  const navigate = useNavigate();
  return (
    <div
      className={classes.container}
      onClick={() => navigate(`/video/${video._id}`)}
    >
      <img className={classes.img} src={video.imgUrl} />
      <div className={classes.details}>
        {type === 'lg' && (
          <Avatar name={video.user.name} imgUrl={video.user.img} />
        )}
        <div className={classes.text}>
          <h1 className={classes.title}>{video.title}</h1>
          <h2 className={classes.channelName}>{video.user.name}</h2>
          <div className={classes.info}>
            {video.views} views . {moment(video.createdAt).fromNow()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
