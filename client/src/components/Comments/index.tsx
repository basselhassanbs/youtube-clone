import React from 'react';
import { useClasses } from './styles';
import Comment from '../Comment';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { CommentInfo } from '../../shared/interfaces';
import Avatar from '../Avatar';

interface Props {
  data: CommentInfo[] | null;
}

const Comments = ({ data }: Props) => {
  const classes = useClasses();
  const { currentUser: user } = useTypedSelector((state) => state.users);

  return (
    <div>
      <div className={classes.newComment}>
        <Avatar imgUrl={user.img} name={user.name} />
        {/* <img className={classes.channelImg} src={user.img} /> */}
        <input className={classes.input} placeholder='Add a comment...' />
      </div>
      {data?.map((comment) => (
        <Comment key={comment._id} comment={comment} />
      ))}
    </div>
  );
};

export default Comments;
