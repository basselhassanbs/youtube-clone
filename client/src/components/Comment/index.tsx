import React from 'react';
import { useClasses } from './styles';
import { CommentInfo } from '../../shared/interfaces';
import moment from 'moment';
import Avatar from '../Avatar';

interface Props {
  comment: CommentInfo;
}

const Comment = ({ comment }: Props) => {
  const classes = useClasses();
  return (
    <div className={classes.container}>
      <Avatar name={comment.user?.name} imgUrl={comment.user?.img} />
      {/* <img className={classes.img} src={comment.user?.img} /> */}
      <div className={classes.details}>
        <span className={classes.name}>
          {comment.user?.name}{' '}
          <span className={classes.date}>
            {moment(comment.createdAt).fromNow()}
          </span>
        </span>
        <span className={classes.text}>{comment.description}</span>
      </div>
    </div>
  );
};

export default Comment;
